Status: draft

# App Planning and Setup — nnherit x BTE603

7 interactive micro-apps for the BTE603 "New Ventures in Technology" course, shareable with students. Anonymous-by-default data capture with a small optional demographics set. Status: App 1 built (untested); build continuing in Claude Code.

Updated 2026-07-07: new 12-week outline adopted (old outline superseded); open questions answered; Pattern Reflection dropped (classroom exercise instead); Stakeholder Tension Map kept.

---

## 1. Overall build approach

- **One app = one self-contained HTML file** (HTML + CSS + JS in a single file). No install, no login, no build tools.
- **Shareable by link or QR code** — students open on their phone in the seminar. Mobile-first, large tap targets, WCAG 2.2 basics (tap-to-place alternative to drag, visible labels, 4.5:1 contrast).
- **Hosting: GitHub Pages first for testing, then move to nnherit.com (WordPress) once everything works.** Confirmed. Note: any printed QR codes/links must be regenerated after the move — do the WordPress move before the first live seminar if possible.
- **Data storage: results POST to a Google Sheet via Apps Script** (free, data lands in nnherit's Drive). Confirmed.
- **Branding: nnherit logo and colours** — yellow #F3D600 / black / white, Source Sans Pro (brand kit already coded as CSS variables in the Honeycomb prototype — reuse).
- **Shared app shell across all 7:**
  - Screen 1: Session code entry (facilitator sets a code per seminar, e.g. "WK5-A")
  - Screen 2: Micro-consent (opt in / continue without data capture / skip) — report wording used as-is. Confirmed.
  - Screens 3–5: The activity (3–5 short screens, one primary action per screen)
  - Final screen: Personal takeaway + **downloadable PDF of results with rule-based interpretation** (see below) + submit
- **Data capture:** session ID, activity ID, timestamp, consent status, choices/placements, revision count, time on task, confidence ratings. Plus optional demographics (App 1 only, max 4): family business involvement (yes/no), country, started own business (yes/no + age of business), playscore (user knows their own score). All optional, all coarse. Two-store separation kept (interaction data ≠ any future contact data).
- **Results PDF (all apps):** generated in-browser (jsPDF or print stylesheet — no backend). Contains the student's choices, placements, one-line takeaway, and a **rule-based interpretation**: template text driven by their selections, drawing on the decks' own back-of-card copy (e.g. archetype tension / growth direction). Claim-safe reflection language only — no psychometric verdicts, no "founder type" claims. AI-written interpretation is possible later via the Apps Script backend but is not in v1.
- **Peer-compare: verbal** ("turn to a partner") — the app prompts it, captures nothing. Confirmed.
- **Facilitator view:** in-app aggregate view + CSV export (v1). **Nice-to-have: progress heat map** — a step-by-student-count grid polling the Google Sheet so the facilitator sees where the room is.
- **Card data strategy:** each app has a card list as a JS array at the top of the file, loaded from the real deck content (sources in section 4). Structure allows swapping copy without touching app logic.
- **Build order:** shared shell → App 1 as template → Ed reviews → remaining apps in pairs. Confirmed.

## 2. The 7 apps

### App 1 — Founder Starting Point (Week 1) — REDESIGNED
- **Unit connection:** Week 1, Recognising a new technology venture opportunity.
- **Build:** card gallery — pick 3 cards representing how they naturally approach entrepreneurship (explorer/controller/builder/protector-type archetypes) + placement step + confidence slider ("my current idea is worth exploring": 1–5) + optional demographics screen (the 4 questions above) + baseline one-liner.
- **Participants do:** choose the cards that feel most like their natural founder approach, place/rank them, rate confidence, optionally answer 4 quick background questions, get their founder starting-point PDF.
- **Connects to unit:** anchors opportunity recognition in self-awareness — how you approach entrepreneurship shapes which opportunities you see.
- **nnherit learns:** founder self-perception patterns, playfulness/risk orientation, family-business background of cohort, confidence baseline — the richest dataset of the term.
- **Deck: Family Dynamics archetypes (confirmed 2026-07-07)** — they fit founder self-perception better than Entrepreneurial Dynamics competences.

### App 2 — Are Your Customers Just Like You? (Week 3)
- **Unit connection:** Week 3, Customer profiling and empathy mapping.
- **Deck: Family Dynamics 10 archetypes (decided 2026-07-07)** — same deck as App 1. Person-to-person comparison needs person-descriptor cards; using one deck across both apps makes projection measurable within a single session (card overlap), no cross-week linking. Copy from the Character Map only (IP rule). Plan B if Ed wants entrepreneurial language: 9-card Entrepreneurial Dynamics subset read as customer motivations (Ethical & Sustainable Thinking, Financial Literacy, Coping with Uncertainty, Working with Others, Learning through Experience, Taking the Initiative, Creativity, Vision, Motivation & Perseverance).
- **Build:** 4-box mini empathy map + archetype picker (2 of 10 for the customer) + archetype picker (2 of 10 for self) + "Not like me / Very like me" similarity slider + one rewrite field.
- **Participants do:** describe their customer, pick 2 archetypes matching the customer, pick 2 matching themselves, rate similarity, spot one projection, rewrite it as a testable assumption.
- **Connects to unit:** exposes whether their "customer" is really just a mirror of themselves — directly improves empathy-map quality.
- **nnherit learns:** projection rates (self/customer card overlap + slider), similarity distributions, which archetypes get assigned to "customers" vs "self".

### App 3 — Assumption Dissonance Check (Week 5)
- **Unit connection:** Week 5, Assumption testing.
- **Build:** assumption text box (capped) + card picker (up to 2 value/motivation drivers) + 3-state selector (Aligned / Misaligned / Unproven) + next-test menu (interview, landing page, competitor scan, survey, prototype, other).
- **Participants do:** write one customer/market/offer assumption, compare it with the values or motivations revealed by their card choices, label its evidence status, pick one concrete next test.
- **Connects to unit:** every student leaves with a labelled assumption and a planned test.
- **nnherit learns:** gaps between founder values and customer assumptions, common blind spots, readiness to test.

### App 4 — What Does This Venture Promise? (Week 7)
- **Unit connection:** Week 7, Landing page, message and value proposition.
- **Build:** before/after headline fields + card picker (the emotional or trust promise behind the venture) + sentence-starter template ("For people who need __, we help them __ without __") + trust-cue choice + optional peer vote.
- **Participants do:** write current one-line offer, pick the promise card, rewrite the line, verbal peer check ("Would I trust this more?"), submit final.
- **Connects to unit:** better promise = better landing page — the week's core skill.
- **nnherit learns:** language patterns, trust signals, which values students emphasise, before/after clarity shift.

### App 5 — Stakeholder Tension Map (Week 9, optional companion) — KEPT
- **Unit connection:** Week 9, Team, stakeholder and investor logic — same week as App 6; Ed chooses one per cohort or runs this in a second seminar group. Also reusable in nnherit's own workshops.
- **Deck: Entrepreneurial Dynamics metaphors (changed 2026-07-07 from Family Dynamics)** — each stakeholder gets a competence/metaphor card representing how they approach the decision (e.g. Investor as "Like packing a suitcase with strict weight limits"). Keeps the app agnostic and resists over-using the archetypes.
- **Build:** 4 actor tokens (Founder, Customer, Adviser, Investor — configurable) + 2-axis tension board (Stability/Change × Control/Growth) + one metaphor card per actor + tailored-message field. Hex-board component from the Honeycomb prototype reusable here.
- **Participants do:** pick a live venture decision, give each stakeholder the metaphor card that captures their stance on it, place them on the board, find the biggest tension, write one message for the hardest-to-persuade stakeholder, revise after verbal peer challenge.
- **Connects to unit:** stakeholder-specific communication practised on their own venture.
- **nnherit learns:** recurring stakeholder tensions, conflict categories, perspective-switching — commercially interesting for nnherit's multi-stakeholder card logic.

### App 6 — Where Are You a Risk? (Week 9)
- **Unit connection:** Week 9, Team, stakeholder and investor logic.
- **Deck: Entrepreneurial Dynamics (changed 2026-07-07 from Family Dynamics)** — strengths/overplayed/missing map naturally onto competences, competence gaps are recruitable/buildable, investor language is capability language, and the card metaphors ("Like running a marathon in a storm") power the overplayed-strength reveal. Also breaks Family Dynamics repetition: students now see FD twice (Wks 1, 3) and ED three times (Wks 5, 7, 9).
- **Build:** 3-zone board (Current strength / Overplayed strength / Missing counterweight) + card picker per zone + investor-risk slider (1–5) + mitigation choice.
- **Participants do:** pick one competence they have, one that could become a problem if overused, one missing competence the venture needs, rate investor concern, name one mitigation (evidence action, skill/role to recruit, process to add).
- **Connects to unit:** answers the investor's real question — how is the founder/team a risk, not just how the idea is attractive.
- **nnherit learns:** missing-role patterns (strongest product signal), overplayed-strength patterns, investor-risk self-calibration. Highest commercial value app.

### App 7 — Would You Fund This? (Week 11) — SIMPLIFIED + STRESS-TEST ROUND
- **Unit connection:** Week 11, Valuation and venture judgement.
- **Deck: Succession Dynamics, agnostic 12-card subset (decided 2026-07-07)** — used in a closing stress-test round. Cards are co-founder/team/leadership shocks with nothing family-assumed. In-app labels: "Harmony" shown as "Team harmony", "Family" shown as "Relationships" — app-only framing, deck untouched.
- **Build:** simple matrix — place venture strengths and risks on an Impact/Confidence grid + evidence-type tags (interview, click test, sales proxy, prototype reaction, secondary research, operational proof) + "what evidence would raise confidence" field + valuation-confidence slider + **stress-test round**: draw 1 scenario card, estimate its impact on your venture (per dimension), then reveal the card's official scores and compare.
- **Participants do:** place strengths/risks, tag evidence, name the confidence-raising evidence, rate confidence, then stress-test the venture against a drawn scenario and see how their impact estimate compares with the card's scoring.
- **Connects to unit:** turns valuation from a guess into an evidence exercise, and the stress test makes risk concrete — "would you still fund this if…".
- **nnherit learns:** how students judge value, evidence quality, risk perception, confidence calibration — plus **crowdsourced calibration of Succession Dynamics impact scores against a real audience**, sliceable later by the App 1 family-business demo answer. The strongest product-learning signal in the set.

### Dropped: Pattern Reflection (Week 12)
Done as a classroom exercise instead — no app, no cross-week data linkage needed. Ed compares Week 1 themes with final venture ideas in discussion.

## 3. 12-week outline and app map (current — supersedes all earlier versions)

| Week | BTE603 focus | nnherit app |
|---|---|---|
| 1 | Recognising a new technology venture opportunity | App 1 Founder Starting Point |
| 2 | Market context and opportunity scanning | — |
| 3 | Customer profiling and empathy mapping | App 2 Are Your Customers Just Like You? |
| 4 | Problem framing and jobs-to-be-done | — |
| 5 | Assumption testing | App 3 Assumption Dissonance Check |
| 6 | Business model and value proposition | — |
| 7 | Landing page, message and value proposition | App 4 What Does This Venture Promise? |
| 8 | Routes to market and digital visibility | — |
| 9 | Team, stakeholder and investor logic | App 6 Where Are You a Risk? (+ App 5 Stakeholder Tension Map as companion) |
| 10 | Operations, suppliers and implementation | — |
| 11 | Valuation and venture judgement | App 7 Would You Fund This? |
| 12 | Assessment integration and reflection | Classroom Pattern Reflection (no app) |

- Every-other-week rhythm preserved; empty weeks keep the module from feeling sponsor-led.

## 4. Card content sources (all decks now available)

| Deck | Used in | Source | Note |
|---|---|---|---|
| Entrepreneurial Dynamics (EU competence-based; brand docs say 45 cards, Drive sheet shows 15 competences — count to resolve before Apps 3–4 [uncertain]) | Apps 3, 4, 5, 6 | Drive: "EntreComp Final Cads 26-03-25" folder + "Similes & Situations for EntreComps.xlsx" | Pull card list at build time |
| Family Dynamics (10 archetypes) | Apps 1, 2 (confirmed: App 1 founder self-perception, App 2 customer/self comparison) | Character Map copy, already embedded in the Character Pyramid prototype (`05_INTERACTIVE_PROTOTYPES/Family_Dynamics_Pyramid/index.html`) | **IP rule: use only the Character Map copy. Never use the "Character Card Details ALL" sheet's back-of-card text** (Crystal Knows–derived — see `04_PRODUCTS_AND_PLAYFUL_OBJECTS/Family_Dynamics_Card_Copy_IP_Review.md`) |
| Succession Dynamics (60 hex cards, scored) | App 7 stress-test round (agnostic 12-card subset — see card table below) | `04_PRODUCTS_AND_PLAYFUL_OBJECTS/01_Succession_Dynamics_scenario_cards/Succession_Dynamics_Card_Checklist.csv` | Full data model ready |

Reusable code: Character Pyramid prototype (card picker, tap/drag placement, card flip, touch detection, copy-takeaway) and Honeycomb prototype (hex board, brand CSS variables, impact dials).

### Specific cards per app — for feedback before build

**Family Dynamics reference (10 archetypes, front phrase + archetype, Character Map copy):**
"The Right Way" — The Standard Setter · "Here to Help" — The Supporter · "I Will Be the Best" — The Driver · "I Am Me" — The Catalyst · "I Know Everything" — The Strategist · "Trust Me" — The Stabiliser · "Life Is for the Taking" — The Initiator · "My Way or the Highway" — The Controller · "Get Along" — The Integrator · "Peace" — The Steward

**Entrepreneurial Dynamics reference (15 competences in the Drive sheet):**
Spotting Opportunities · Creativity · Vision · Valuing Ideas · Ethical & Sustainable Thinking · Self-Awareness & Self-Efficacy · Motivation & Perseverance · Mobilizing Resources · Financial & Economic Literacy · Mobilizing Others · Taking the Initiative · Planning & Management · Coping with Uncertainty, Ambiguity & Risk · Working with Others · Learning through Experience

| App | Deck | Cards used | How used |
|---|---|---|---|
| 1 Founder Starting Point | Family Dynamics | **All 10 archetypes** | Student picks 3 that match their natural founder approach; back-of-card (Core Drive / Contribution / Tension / Growth) feeds the PDF interpretation |
| 2 Are Your Customers Just Like You? | Family Dynamics | **All 10 archetypes** | Pick 2 for the customer, 2 for self; overlap = projection score |
| 3 Assumption Dissonance Check | Entrepreneurial Dynamics | **9 cards:** Spotting Opportunities, Vision, Creativity, Valuing Ideas, Self-Awareness & Self-Efficacy, Motivation & Perseverance, Coping with Uncertainty, Learning through Experience, Ethical & Sustainable Thinking | Student picks up to 2 as "what's driving my assumption" (instinct sources). Excluded: the operational/resource cards (Mobilizing Resources, Financial Literacy, Planning & Management, Mobilizing Others, Working with Others, Taking the Initiative) — they describe execution, not belief-drivers |
| 4 What Does This Venture Promise? | Entrepreneurial Dynamics | **8 cards mapped to promise categories:** Vision (aspiration), Creativity (novelty), Ethical & Sustainable Thinking (responsibility/trust), Planning & Management (reliability), Financial & Economic Literacy (value/control), Working with Others (belonging/partnership), Mobilizing Others (inspiration/community), Motivation & Perseverance (commitment/continuity) | Student picks 1 card = the promise the customer should feel; card name + category seed the rewritten headline |
| 5 Stakeholder Tension Map | Entrepreneurial Dynamics | **All 15 competences (metaphor-led)** | One metaphor card assigned per actor (Founder, Customer, Adviser, Investor) capturing their stance on the decision, then placed on the tension board |
| 6 Where Are You a Risk? | Entrepreneurial Dynamics | **All 15 competences** | Pick 1 as current strength, 1 as overplayed strength (metaphor + situations frame the overuse risk), 1 as missing counterweight (competence gap = recruitable); xlsx situations feed the mitigation prompt and PDF |
| 7 Would You Fund This? | Succession Dynamics | **Agnostic 12-card stress-test subset:** Sudden Departure (FR-12), Key Departure (RR-10), Hidden Agendas (VS-08), Communication Breakdown (CT-02), Information Blackout (CT-04), Micromanagement Mania (FR-08), Lingering Presence (FR-07), Overlapping Duties (RR-11), Ambiguous Hierarchies (RR-02), Missing Skills (SP-10), Reckless Decisions (SP-11), External Pressures (VS-04) | Draw 1 in the stress-test round; student estimates impact, then card's official scores revealed. Excluded: all family-specific cards (Family Feud, Founder vs. Family, Generational Clash, Legacy Traumas, etc.). Labels relabelled in-app: Harmony→Team harmony, Family→Relationships. Visuals from CARTES_NNHERIT.pdf; data from the checklist CSV |

Notes: Family Dynamics copy comes only from the Character Map (IP rule). Entrepreneurial Dynamics card fronts (icon + metaphor) come from the "EntreComp Final Cads 26-03-25" Drive folder; the situations in the xlsx feed the PDF interpretations. If the deck's final count is 45 not 15 (see open item), the App 3/4 subsets stay the same at competence level — sub-cards would just deepen the interpretation text.

## 5. Decisions log (all former open questions resolved)

1. **Card content** — provided (see section 4).
2. **Data storage** — Google Sheet via Apps Script.
3. **Hosting** — GitHub Pages for testing, then nnherit.com (WordPress). Regenerate QR codes/links after the move.
4. **Peer-compare** — verbal, app prompts only.
5. **Branding** — nnherit logo/colours.
6. **Facilitator dashboard** — in-app aggregate + CSV export; progress heat map as nice-to-have.
7. **Consent wording** — report's micro-consent text as-is.
8. **Build order** — App 1 first as template, Ed reviews, then the rest.
9. **Demographics** — max 4, optional, App 1 only: family business involvement, country, started own business (+ age), playscore.
10. **Results PDF** — in-browser, rule-based interpretation, claim-safe language. AI interpretation deferred.
11. **Stakeholder Tension Map** — kept (Week 9 companion / nnherit workshop reuse).
12. **Pattern Reflection** — dropped as app; classroom exercise Week 12.

## 6. Remaining open items

1. **Playscore definition for the data model** — users know their own score, but the app needs the field format (number range? which scale?) to store it. [uncertain] (App 1 currently accepts 0–100.)
2. **Apps Script endpoint** — needs setting up in nnherit's Google account before first live use (10-minute job, needs account access).
3. **WordPress file access** — FTP or file-manager access needed at migration time. [uncertain]

## 7. Handover to Claude Code (2026-07-07)

Build moved to Claude Code so feedback goes straight into Colin's GitHub repo.

- **Built so far:** `apps/app1-founder-starting-point.html` — shared shell + App 1, single self-contained file. Hand-traced only, NOT browser-tested yet. Test on desktop + phone before anything else.
- **Shell pattern to reuse for Apps 2–7:** join (session code) → micro-consent (opt in / no capture / skip) → activity screens → takeaway + in-browser PDF (jsPDF from cdnjs) + submit. CONFIG block at top of the JS: `ENDPOINT` (Apps Script URL, empty = local-only), `FACILITATOR_CODE`, `ACTIVITY_ID`, `CONSENT_VERSION`. Facilitator view reads a localStorage log + CSV export.
- **First tasks in Claude Code:** copy `apps/` + this file into the repo → browser-test App 1 and fix what breaks → apply Colin's feedback → set up the Apps Script → Sheet endpoint → build Apps 2–7 per section 2 and the card table in section 4.
- **Rules that carry over:** lowercase nnherit; Family Dynamics copy only from the Character Map (never the Crystal Knows–derived sheet — see `04_PRODUCTS_AND_PLAYFUL_OBJECTS/Family_Dynamics_Card_Copy_IP_Review.md`); apps never assume family-business involvement (demographics question only); claim-safe interpretation language ("reflection, not a result"); voice per `00_CLAUDE_AND_CONTEXT/voice-and-style.md`.
- **Card data sources:** Family Dynamics copy is in App 1's CARDS array (verbatim Character Map); Entrepreneurial Dynamics = Drive "EntreComp Final Cads 26-03-25" + "Similes & Situations for EntreComps.xlsx" (15 vs 45 count still [uncertain]); Succession Dynamics subset = 12 card IDs in the section 4 table, data from `Succession_Dynamics_Card_Checklist.csv`, visuals from `CARTES_NNHERIT.pdf`.

## 8. Build sequence

1. Set up Apps Script → Google Sheet endpoint
2. Build shared shell + App 1 → publish to GitHub Pages → Ed reviews on his phone
3. Adjust template from feedback
4. Build Apps 2–7 in pairs (2+3, 4+5, 6+7), review each pair
5. Load final card content and interpretations
6. Test on phones, generate QR codes, hand over facilitator guide
7. Move to nnherit.com, regenerate QR codes
