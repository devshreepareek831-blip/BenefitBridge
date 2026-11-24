# BenefitBridge

A responsive bilingual (English/Hindi) student-project prototype to explore Indian public-benefit schemes.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Optional AI API server
1. Copy `.env.example` to `.env` in the project root and add your Gemini API key.
2. Run `npm run server` in a second terminal.
3. The API endpoint is `POST http://localhost:3001/api/chat` with JSON `{ "message": "...", "language": "en", "schemeContext": "..." }`.

The current chat UI is intentionally a non-AI prototype placeholder. Connect it to this backend endpoint before claiming live AI functionality. Keep API keys server-side and never commit `.env`.

## Important prototype limitations
- No account is required. Profile information, saved schemes and checklist progress are stored in the current browser.
- Scheme records and document lists are illustrative starter data, not authoritative or exhaustive.
- Scheme matching is a simple demonstration filter, not an official eligibility decision.
- Verify scheme rules, documents, dates and links against current official government guidance before use.
- No applications are submitted by this website.

## Suggested next steps
- Replace demonstration scheme records with verified scheme data and source/verification metadata.
- Add automated tests and deploy frontend/backend with environment variables configured.
- Connect the chat interface to the Express API in `server/index.js`.
