# BenefitBridge – Which Government Benefits Am I Missing?

**An India-wide Government Scheme Discovery and Eligibility Assistance Platform**

## 1. Project Overview

BenefitBridge is a web-based platform designed to help Indian citizens discover government welfare schemes and understand which schemes they may be eligible for.

Many people are unaware of the government benefits available to them. BenefitBridge aims to make scheme discovery easier by allowing users to enter their personal and socioeconomic details and explore relevant government schemes through a simple interface.

The platform provides scheme information, eligibility guidance, document checklists and application instructions.

## 2. Project Objectives

- Make government welfare scheme information easier to discover.
- Help users identify schemes relevant to their profile.
- Simplify the process of understanding eligibility requirements.
- Provide information about required documents and application steps.
- Make the platform accessible through a modern, responsive interface.
- Support both English and Hindi users.

## 3. Features Implemented

### Scheme Discovery
- Curated database containing 18 government scheme records.
- Browse schemes across different categories.
- Search and filter schemes.
- View scheme descriptions, eligibility information, documents and application steps.

### Eligibility Assistance
- Collect user profile information such as age, income, occupation, state and social category.
- Consider additional information such as ration card status, disability status, gender and housing details.
- Display schemes in separate groups:
  - Schemes You May Be Eligible For
  - More Information Required
  - Other Schemes

### User Profile Dashboard
- Create and update a personal profile.
- View profile completion progress.
- Reuse profile information for scheme recommendations.

### Saved Schemes
- Save schemes for future reference.
- Access saved schemes through the application.

### Document Checklist
- View documents associated with schemes.
- Track document checklist progress.

### Bilingual Interface
- English and Hindi language support.

### Chatbot Assistant
- Existing in-app chatbot functionality for scheme-related assistance.
- Gemini AI integration is not currently configured. The chatbot must not be represented as a tested Gemini-powered AI assistant.

### Responsive Design
- Responsive layout for desktop, tablet and mobile devices.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | Frontend user interface |
| Vite | Development server and build tool |
| JavaScript | Application functionality |
| HTML5 | Web page structure |
| CSS3 | Styling and responsive layout |
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| JSON | Scheme data storage |
| LocalStorage | Browser-based profile, saved schemes and checklist storage |
| Git | Version control |
| GitHub | Source code repository |
| Vercel | Website deployment |

## 5. AI Tools Used

- **ChatGPT:** Project planning, feature brainstorming, prompt preparation, debugging guidance and documentation assistance.
- **GitHub Copilot:** Assistance with React development, code modifications, debugging and testing guidance.
- **Google AI Studio:** Explored for possible Gemini API integration; Gemini integration is not currently configured.

## 6. Project Screenshots

Website screenshots will be added in the `docs/screenshots/` directory.

| Screenshot | File |
|---|---|
| Homepage | `docs/screenshots/homepage.png` |
| Find Schemes | `docs/screenshots/find-schemes.png` |
| Eligibility Results | `docs/screenshots/eligibility-results.png` |
| User Profile | `docs/screenshots/profile.png` |
| Saved Schemes | `docs/screenshots/saved-schemes.png` |
| Document Checklist | `docs/screenshots/document-checklist.png` |
| Chatbot | `docs/screenshots/chatbot.png` |
| Mobile View | `docs/screenshots/mobile-view.png` |

## 7. Installation and Running Instructions

### Prerequisites
- Node.js installed
- npm installed
- Git installed

### Step 1: Clone the repository

```bash
git clone https://github.com/devshreepareek831-blip/BenefitBridge.git
```

### Step 2: Open the project directory

```bash
cd BenefitBridge
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

`http://localhost:5173/`

### Step 5: Create a production build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## 8. Data Storage and Limitations

- Scheme information is maintained in a curated project database.
- User profiles, saved schemes and checklist progress are stored in browser LocalStorage.
- User data is not synchronized between different browsers or devices.
- Eligibility results are preliminary guidance, not an official eligibility decision.
- Scheme rules and application requirements may change. Users should verify information through official government portals.
- Gemini AI integration and real-time government database verification are not currently implemented.

## 9. Repository Structure

```text
BenefitBridge/
├── server/
├── src/
│   ├── App.jsx
│   ├── chatbot.js
│   ├── data.js
│   ├── main.jsx
│   ├── schemeSource.json
│   └── style.css
├── docs/
│   ├── screenshots/
│   └── PROMPTS.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 10. Project Information

**Project Name:** BenefitBridge

**Project Category:** Prompt Engineering / Web Application

**Target Users:** Indian citizens looking for government welfare schemes.

**Geographical Coverage:** India

**Language Support:** English and Hindi

**Project Repository:**  
https://github.com/devshreepareek831-blip/BenefitBridge

---

*Disclaimer: BenefitBridge is an educational project. It is not an official government website and does not guarantee eligibility or approval for any government scheme.*
