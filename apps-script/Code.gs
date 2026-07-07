/**
 * nnherit BTE603 data endpoint — Google Apps Script web app.
 *
 * Receives the JSON POST each app sends on submit and appends one row
 * per submission to this spreadsheet, one tab per activity ID.
 * Only opt-in submissions are stored (the apps already enforce this;
 * this script enforces it again server-side).
 *
 * Deploy: see DEPLOY.md in this folder.
 */

// One row per submission. Common shell fields first, app-specific card
// slots, then the full raw payload as JSON so nothing is ever lost —
// future apps with different fields stay readable via the rawJson column.
var HEADERS = [
  'receivedAt', 'ts', 'session', 'responseId', 'consent', 'consentVersion',
  'card1', 'card2', 'card3', 'oneliner', 'confidence',
  'fb', 'country', 'biz', 'bizage', 'playscore',
  'revisions', 'secondsOnTask', 'rawJson'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // serialise concurrent submissions from a full seminar room
  try {
    var p = JSON.parse(e.postData.contents);

    // consent log: store opt-in submissions only
    if (!p || p.consent !== 'optin' || !p.activity) {
      return respond({ ok: false, reason: 'not stored (no opt-in consent or missing activity)' });
    }

    var ss = SpreadsheetApp.getActive();
    var tabName = String(p.activity).slice(0, 90);
    var sh = ss.getSheetByName(tabName);
    if (!sh) {
      sh = ss.insertSheet(tabName);
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
    }

    var d = p.demographics || {};
    var cards = p.cardsRanked || [];
    sh.appendRow([
      new Date(), p.ts || '', p.session || '', p.responseId || '',
      p.consent || '', p.consentVersion || '',
      cards[0] || '', cards[1] || '', cards[2] || '',
      p.oneliner || '', val(p.confidence),
      d.fb || '', d.country || '', d.biz || '', d.bizage || '', val(d.playscore),
      val(p.revisions), val(p.secondsOnTask),
      JSON.stringify(p)
    ]);

    return respond({ ok: true });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Opening the web-app URL in a browser shows a status line — quick health check.
function doGet() {
  return ContentService
    .createTextOutput('nnherit data endpoint is running. Submissions arrive via POST from the apps.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function val(v) { return (v === null || v === undefined) ? '' : v; }

function respond(obj) {
  // The apps POST with mode:'no-cors' and cannot read this response;
  // it exists for manual testing (e.g. curl) and debugging.
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
