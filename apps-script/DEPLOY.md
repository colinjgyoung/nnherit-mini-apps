# Deploying the data endpoint (one-time, ~10 minutes)

Done from your own Google account so all data lands in your Drive and only you hold access.

## 1. Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) → **Blank spreadsheet**
2. Name it `nnherit BTE603 app data` (top-left title box)

## 2. Add the script

1. In that spreadsheet: **Extensions → Apps Script**
2. Delete the placeholder code in the editor
3. Paste the full contents of [`Code.gs`](Code.gs) from this folder
4. Click the save icon. Name the project `nnherit data endpoint` when asked

## 3. Deploy as a web app

1. Top-right: **Deploy → New deployment**
2. Click the gear icon next to "Select type" → **Web app**
3. Settings:
   - Description: `v1`
   - Execute as: **Me**
   - Who has access: **Anyone**  ← required so student phones can post without logging in
4. Click **Deploy**
5. Authorise when prompted: choose your account → you'll see "Google hasn't verified this app" → click **Advanced** → **Go to nnherit data endpoint (unsafe)** → **Allow**
   (This warning is normal for personal scripts — it's your own code running in your own account.)
6. Copy the **Web app URL** (ends in `/exec`)

## 4. Test and hand over

1. Open the copied URL in a browser tab — it should say: `nnherit data endpoint is running…`
2. Paste the URL into the Claude Code session — it gets wired into each app's `CONFIG.ENDPOINT` and tested end to end

## Notes

- **Updating the script later:** paste the new code, then **Deploy → Manage deployments → ✏️ edit → Version: New version → Deploy**. The URL stays the same. (A plain save without a new version does NOT update the live endpoint.)
- **Withdrawals:** a student gives you their code (e.g. `R-XXXXX`) — find that row in the sheet by the `responseId` column and delete it.
- One tab is created automatically per app the first time it receives a submission.
- Only opt-in submissions are stored; the script drops anything else.
- "Anyone" access means anyone with the URL could POST to it. The data is anonymous and the URL is only embedded in the apps — acceptable for this use.
