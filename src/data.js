import sourceData from "./schemeSource.json";

export const sourceQuestionnaire = sourceData.questions;

const legacyIds = {
 "scholarship-sc": "nsp-postmatric",
 pmay: "pmay-urban"
};

const sourceEligibilityText = {
 "pm-kisan": {
  en: "Original questionnaire rule: occupation is Farmer.",
  hi: "मूल प्रश्नावली का नियम: व्यवसाय किसान है।"
 },
 "ayushman-bharat": {
  en: "Original questionnaire rule: age 70 or older, OR priority/AAY/BPL ration-card status and annual family income below ₹1 lakh.",
  hi: "मूल प्रश्नावली का नियम: आयु 70 वर्ष या अधिक, या प्राथमिकता/AAY/BPL राशन कार्ड और वार्षिक पारिवारिक आय ₹1 लाख से कम।"
 },
 "scholarship-sc": {
  en: "Original questionnaire rule: Student, SC category, and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: छात्र, SC श्रेणी और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 "scholarship-st": {
  en: "Original questionnaire rule: Student, ST category, and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: छात्र, ST श्रेणी और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 "pm-yasasvi": {
  en: "Original questionnaire rule: Student, OBC category, and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: छात्र, OBC श्रेणी और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 "minority-scholarship": {
  en: "Original questionnaire rule: Student, belongs to a notified minority community, and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: छात्र, अधिसूचित अल्पसंख्यक समुदाय से और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 "central-sector": {
  en: "Original questionnaire rule: Student and annual family income up to ₹4.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: छात्र और वार्षिक पारिवारिक आय ₹4.5 लाख तक।"
 },
 sukanya: {
  en: "Original questionnaire rule: has a daughter under 10 years old.",
  hi: "मूल प्रश्नावली का नियम: 10 वर्ष से कम आयु की बेटी है।"
 },
 ujjwala: {
  en: "Original questionnaire rule: Female, age 18 or older, and priority/AAY/BPL ration-card status.",
  hi: "मूल प्रश्नावली का नियम: महिला, आयु 18 वर्ष या अधिक और प्राथमिकता/AAY/BPL राशन कार्ड।"
 },
 nfsa: {
  en: "Original questionnaire rule: has a priority, AAY or BPL ration card.",
  hi: "मूल प्रश्नावली का नियम: प्राथमिकता, AAY या BPL राशन कार्ड है।"
 },
 nsap: {
  en: "Original questionnaire rule: age 60 or older AND (annual family income below ₹1 lakh OR priority/AAY/BPL ration-card status).",
  hi: "मूल प्रश्नावली का नियम: आयु 60 वर्ष या अधिक और (वार्षिक पारिवारिक आय ₹1 लाख से कम या प्राथमिकता/AAY/BPL राशन कार्ड)।"
 },
 pmay: {
  en: "Original questionnaire rule: does not own a pucca house and annual family income up to ₹4.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: पक्का घर नहीं है और वार्षिक पारिवारिक आय ₹4.5 लाख तक।"
 },
 mudra: {
  en: "Original questionnaire rule: self-employed/small business or unemployed and looking for work.",
  hi: "मूल प्रश्नावली का नियम: स्वरोज़गार/छोटा व्यवसाय या काम की तलाश में बेरोज़गार।"
 },
 "shram-yogi": {
  en: "Original questionnaire rule: age 18–40, daily-wage or unorganised worker, and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: आयु 18–40 वर्ष, दिहाड़ी या असंगठित कामगार और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 apy: {
  en: "Original questionnaire rule: age 18–40 and not salaried.",
  hi: "मूल प्रश्नावली का नियम: आयु 18–40 वर्ष और वेतनभोगी नहीं।"
 },
 "pmsby-pmjjby": {
  en: "Original questionnaire rule: age 18–70 and annual family income up to ₹2.5 lakh.",
  hi: "मूल प्रश्नावली का नियम: आयु 18–70 वर्ष और वार्षिक पारिवारिक आय ₹2.5 लाख तक।"
 },
 pmkvy: {
  en: "Original questionnaire rule: age 15–45 and daily-wage/unorganised worker or unemployed and looking for work.",
  hi: "मूल प्रश्नावली का नियम: आयु 15–45 वर्ष और दिहाड़ी/असंगठित कामगार या काम की तलाश में बेरोज़गार।"
 },
 udid: {
  en: "Original questionnaire rule: applicant or a family member has a disability of 40% or more.",
  hi: "मूल प्रश्नावली का नियम: आवेदक या परिवार के किसी सदस्य को 40% या अधिक दिव्यांगता है।"
 }
};

const schemeTranslationsHi = {
 "pm-kisan": {
  name: "पीएम-किसान",
  category: "कृषि",
  summary: "हर साल ₹6,000 की राशि 3 किस्तों में सीधे बैंक खाते में।",
  steps: ["pmkisan.gov.in पर जाकर “Farmers Corner” खोलें", "New Farmer Registration चुनें और आधार दर्ज करें", "पटवारी या CSC से भूमि रिकॉर्ड सत्यापित करवाएँ", "eKYC पूरा करें"]
 },
 "ayushman-bharat": {
  name: "आयुष्मान भारत (PM-JAY)",
  category: "स्वास्थ्य",
  summary: "हर परिवार को सालाना ₹5 लाख तक का निःशुल्क अस्पताल उपचार। 70 वर्ष या अधिक आयु के सभी लोग शामिल हैं।",
  steps: ["mera.pmjay.gov.in पर पात्रता जाँचें", "CSC या अस्पताल के Ayushman Mitra से मिलें", "कार्ड पाने के लिए eKYC पूरा करें"]
 },
 "scholarship-sc": {
  name: "मैट्रिकोत्तर छात्रवृत्ति (SC)",
  category: "शिक्षा",
  summary: "कक्षा 11 से डिग्री स्तर तक ट्यूशन और रखरखाव सहायता।",
  steps: ["scholarships.gov.in पर पंजीकरण करें", "SC post-matric योजना चुनें", "दस्तावेज़ अपलोड करके आवेदन जमा करें", "आपका संस्थान फ़ॉर्म सत्यापित करेगा"]
 },
 "scholarship-st": {
  name: "मैट्रिकोत्तर छात्रवृत्ति (ST)",
  category: "शिक्षा",
  summary: "कोर्स शुल्क के साथ मासिक रखरखाव भत्ता।",
  steps: ["scholarships.gov.in पर पंजीकरण करें", "ST post-matric योजना में आवेदन करें", "दस्तावेज़ अपलोड करके आवेदन जमा करें", "संस्थान सत्यापन करेगा"]
 },
 "pm-yasasvi": {
  name: "PM YASASVI (OBC)",
  category: "शिक्षा",
  summary: "स्कूल से उच्च शिक्षा तक OBC विद्यार्थियों के लिए छात्रवृत्ति।",
  steps: ["scholarships.gov.in पर पंजीकरण करें", "PM YASASVI चुनें", "दस्तावेज़ अपलोड करके आवेदन जमा करें"]
 },
 "minority-scholarship": {
  name: "अल्पसंख्यक छात्रवृत्तियाँ",
  category: "शिक्षा",
  summary: "अल्पसंख्यक विद्यार्थियों के लिए छात्रवृत्ति और शुल्क सहायता।",
  steps: ["scholarships.gov.in पर पंजीकरण करें", "अल्पसंख्यक योजना में आवेदन करें", "दस्तावेज़ अपलोड करके आवेदन जमा करें"]
 },
 "central-sector": {
  name: "केंद्रीय क्षेत्र छात्रवृत्ति",
  category: "शिक्षा",
  summary: "उच्च बोर्ड अंकों वाले विद्यार्थियों के लिए कॉलेज में सालाना ₹12,000।",
  steps: ["scholarships.gov.in पर पंजीकरण करें", "Central Sector Scheme में आवेदन करें", "आवेदन जमा करें; संस्थान सत्यापन करेगा"]
 },
 sukanya: {
  name: "सुकन्या समृद्धि योजना",
  category: "महिला एवं बाल कल्याण",
  summary: "बेटी की शिक्षा और विवाह के लिए कर लाभ वाला उच्च-ब्याज बचत खाता।",
  steps: ["किसी डाकघर या अधिकृत बैंक में जाएँ", "खाता फ़ॉर्म भरें", "सालाना ₹250 से ₹1.5 लाख तक जमा करें"]
 },
 ujjwala: {
  name: "पीएम उज्ज्वला योजना",
  category: "महिला एवं बाल कल्याण",
  summary: "कम आय वाले परिवारों की महिलाओं के लिए निःशुल्क LPG कनेक्शन।",
  steps: ["अपने LPG वितरक से मिलें", "KYC फ़ॉर्म भरें", "दस्तावेज़ जमा करें"]
 },
 nfsa: {
  name: "निःशुल्क राशन (NFSA)",
  category: "खाद्य",
  summary: "राशन दुकान के माध्यम से हर महीने निःशुल्क या सब्सिडी वाला अनाज।",
  steps: ["राज्य खाद्य विभाग के पोर्टल या स्थानीय राशन कार्यालय में आवेदन करें", "उचित मूल्य की दुकान से अनाज लें"]
 },
 nsap: {
  name: "वृद्धावस्था पेंशन (NSAP)",
  category: "पेंशन एवं बीमा",
  summary: "गरीब परिवारों के वरिष्ठ नागरिकों के लिए मासिक पेंशन।",
  steps: ["ग्राम पंचायत या नगरपालिका कार्यालय में आवेदन करें", "या राज्य के सामाजिक कल्याण पोर्टल का उपयोग करें"]
 },
 pmay: {
  name: "पीएम आवास योजना",
  category: "आवास",
  summary: "घर बनाने या खरीदने में सहायता, जिसमें गृह-ऋण ब्याज सब्सिडी शामिल है।",
  steps: ["शहरी के लिए pmaymis.gov.in पर आवेदन करें या ग्रामीण के लिए ग्राम पंचायत से संपर्क करें", "दस्तावेज़ जमा करें", "स्थानीय सर्वेक्षण की प्रतीक्षा करें"]
 },
 mudra: {
  name: "पीएम मुद्रा ऋण",
  category: "व्यवसाय एवं कौशल",
  summary: "छोटा व्यवसाय शुरू करने या बढ़ाने के लिए ₹20 लाख तक के बिना जमानत ऋण।",
  steps: ["किसी बैंक या माइक्रोफाइनेंस शाखा में जाएँ, या udyamimitra.in पर आवेदन करें", "ऋण राशि के अनुसार Shishu, Kishor या Tarun चुनें"]
 },
 "shram-yogi": {
  name: "पीएम श्रम योगी मानधन",
  category: "पेंशन एवं बीमा",
  summary: "असंगठित कामगारों के लिए 60 वर्ष के बाद सुनिश्चित ₹3,000 मासिक पेंशन।",
  steps: ["आधार और बैंक विवरण के साथ CSC जाएँ", "पंजीकरण करें और auto-debit शुरू करें", "eshram.gov.in पर e-Shram कार्ड भी बनवाएँ"]
 },
 apy: {
  name: "अटल पेंशन योजना",
  category: "पेंशन एवं बीमा",
  summary: "60 वर्ष के बाद हर महीने ₹1,000 से ₹5,000 तक की सुनिश्चित पेंशन।",
  steps: ["नामांकन के लिए अपने बैंक से संपर्क करें", "पेंशन राशि चुनें और auto-debit शुरू करें"]
 },
 "pmsby-pmjjby": {
  name: "पीएम सुरक्षा एवं जीवन ज्योति बीमा",
  category: "पेंशन एवं बीमा",
  summary: "लगभग ₹20 सालाना में ₹2 लाख दुर्घटना कवर और लगभग ₹436 सालाना में ₹2 लाख जीवन कवर।",
  steps: ["नामांकन के लिए अपने बैंक से पूछें या net banking का उपयोग करें", "हर साल खाते में पर्याप्त राशि रखें"]
 },
 pmkvy: {
  name: "PMKVY कौशल प्रशिक्षण",
  category: "व्यवसाय एवं कौशल",
  summary: "प्रमाणपत्र और रोज़गार सहायता के साथ निःशुल्क कौशल पाठ्यक्रम।",
  steps: ["skillindiadigital.gov.in पर प्रशिक्षण केंद्र खोजें", "अपने लिए उपयुक्त पाठ्यक्रम में नामांकन करें"]
 },
 udid: {
  name: "दिव्यांगजन लाभ (UDID)",
  category: "दिव्यांगता",
  summary: "पेंशन, छात्रवृत्ति, यात्रा रियायत और नौकरी आरक्षण तक पहुँच देने वाला राष्ट्रीय कार्ड।",
  steps: ["swavlambancard.gov.in पर आवेदन करें", "अधिसूचित अस्पताल में आकलन करवाएँ", "अपना UDID कार्ड प्राप्त करें"]
 }
};

const categoryTranslationsHi = Object.fromEntries(
 Object.entries(schemeTranslationsHi).map(([slug, translation]) => [
  sourceData.schemes.find(scheme => scheme.slug === slug).category,
  translation.category
 ])
);

const documentTranslationsHi = {
 Aadhaar: "आधार",
 "Land ownership records": "भूमि स्वामित्व रिकॉर्ड",
 "Bank passbook linked to Aadhaar": "आधार से जुड़ी बैंक पासबुक",
 "Mobile number": "मोबाइल नंबर",
 "Ration card": "राशन कार्ड",
 "Caste certificate": "जाति प्रमाणपत्र",
 "Income certificate": "आय प्रमाणपत्र",
 "Marksheet and admission proof": "अंकपत्र और प्रवेश प्रमाण",
 "Aadhaar and bank account": "आधार और बैंक खाता",
 "Tribe certificate": "जनजाति प्रमाणपत्र",
 "OBC non-creamy layer certificate": "OBC नॉन-क्रीमी लेयर प्रमाणपत्र",
 "Community proof or self-declaration": "समुदाय प्रमाण या स्व-घोषणा",
 "Marksheet (50%+ usually needed)": "अंकपत्र (आमतौर पर 50% से अधिक आवश्यक)",
 "Class 12 marksheet (above 80th percentile)": "कक्षा 12 का अंकपत्र (80वें पर्सेंटाइल से ऊपर)",
 "College admission proof": "कॉलेज प्रवेश प्रमाण",
 "Daughter’s birth certificate": "बेटी का जन्म प्रमाणपत्र",
 "Parent’s ID and address proof": "माता-पिता का पहचान और पता प्रमाण",
 "Bank account": "बैंक खाता",
 "Passport photo": "पासपोर्ट आकार की फोटो",
 "Aadhaar of all members": "सभी सदस्यों के आधार",
 "Income proof": "आय प्रमाण",
 "Address proof": "पता प्रमाण",
 "Age proof": "आयु प्रमाण",
 "BPL or ration card": "BPL या राशन कार्ड",
 "Declaration of no pucca house": "पक्का घर न होने की घोषणा",
 "ID and address proof": "पहचान और पता प्रमाण",
 "Business plan or quote": "व्यवसाय योजना या कोटेशन",
 "Bank statements": "बैंक विवरण",
 "Passport photos": "पासपोर्ट आकार की तस्वीरें",
 "Savings or Jan Dhan account": "बचत या जन धन खाता",
 "Medical certificate": "चिकित्सा प्रमाणपत्र",
 Signature: "हस्ताक्षर",
 "Education proof": "शिक्षा प्रमाण"
};

const requirementText = {
 en: "The original source lists this document but does not state whether it is mandatory. Verify the current requirement officially.",
 hi: "मूल स्रोत में यह दस्तावेज़ सूचीबद्ध है, लेकिन इसे अनिवार्य बताया गया है या नहीं, यह निर्दिष्ट नहीं है। वर्तमान आवश्यकता आधिकारिक रूप से जाँचें।"
};
const officialVerificationText = {
 en: "The original questionnaire is a simplified guide, not an official eligibility decision. Verify current criteria with the scheme authority.",
 hi: "मूल प्रश्नावली एक सरल मार्गदर्शिका है, आधिकारिक पात्रता निर्णय नहीं। वर्तमान शर्तें योजना प्राधिकरण से सत्यापित करें।"
};
const occupationIndexes = {
 Student: 0,
 Farmer: 1,
 "Daily-wage or unorganised worker": 2,
 "Business owner": 3,
 "Self-employed or small business": 3,
 "Unemployed, looking for work": 4,
 Homemaker: 5,
 Salaried: 6,
 Retired: 7
};
export const questionnaireProfileFields = {
 socialCategory: "cat",
 rationCardStatus: "rat",
 gender: "sex",
 disabilityStatus: "dis",
 daughterUnder10: "girl",
 puccaHouseOwnership: "house",
 minorityCommunity: "min"
};
const profileFieldByQuestion = Object.fromEntries(
 Object.entries(questionnaireProfileFields).map(([profileField, question]) => [question, profileField])
);
const answerIndexes = Object.fromEntries(sourceQuestionnaire.map(question => [
 question.k,
 Object.fromEntries((question.o || []).map((answer, index) => [answer, index]))
]));
const oldQuestionnaireQuestionsHi = {
 age: "आपकी आयु कितनी है?",
 sex: "आपका लिंग क्या है?",
 cat: "आपकी सामाजिक श्रेणी क्या है?",
 min: "क्या आप अधिसूचित अल्पसंख्यक समुदाय से हैं?",
 inc: "परिवार की कुल वार्षिक आय कितनी है?",
 occ: "इनमें से कौन-सा विकल्प आपके काम का सबसे अच्छा वर्णन करता है?",
 house: "क्या आपके परिवार के पास पक्का घर है?",
 dis: "क्या आपको या परिवार के किसी सदस्य को 40% या अधिक दिव्यांगता है?",
 girl: "क्या आपकी 10 वर्ष से कम आयु की बेटी है?",
 rat: "क्या आपके पास प्राथमिकता, AAY या BPL श्रेणी का राशन कार्ड है?"
};
const incomeBands = [1, 2.5, 4.5, 8, 99];
const sourceSchemeRecords = sourceData.schemes;

export const eligibilityFieldLabels = {
 en: {age:"Age",inc:"Annual family income",occ:"Occupation",sex:"Gender",cat:"Social category",min:"Notified minority community",house:"Pucca-house ownership",dis:"Disability status",girl:"Daughter under 10",rat:"Priority/AAY/BPL ration-card status",official:"Official scheme verification"},
 hi: {age:"आयु",inc:"वार्षिक पारिवारिक आय",occ:"व्यवसाय",sex:"लिंग",cat:"सामाजिक श्रेणी",min:"अधिसूचित अल्पसंख्यक समुदाय",house:"पक्के घर का स्वामित्व",dis:"दिव्यांगता की स्थिति",girl:"10 वर्ष से कम आयु की बेटी",rat:"प्राथमिकता/AAY/BPL राशन कार्ड की स्थिति",official:"आधिकारिक योजना सत्यापन"}
};

export const schemeCategories = [...new Set(sourceSchemeRecords.map(scheme => scheme.category))];

export const schemes = sourceSchemeRecords.map(sourceScheme => {
 const translations = schemeTranslationsHi[sourceScheme.slug];
 const eligibilityText = sourceEligibilityText[sourceScheme.slug];
 const docs = sourceScheme.documents.map(document => [document, "Source requirement unspecified"]);
 return {
  ...sourceScheme,
  id: legacyIds[sourceScheme.slug] || sourceScheme.slug,
  level: "Central",
  source: sourceScheme.url,
  who: eligibilityText.en,
  eligibilityText: eligibilityText.en,
  verificationNote: officialVerificationText.en,
  docs,
  eligibility: {
   signalGroups: [],
   reviewGroups: [],
   unknownConditions: [],
   sourceRule: sourceScheme.rule
  },
  translations: {
   hi: {
    ...translations,
    who: eligibilityText.hi,
    eligibilityText: eligibilityText.hi,
    verificationNote: officialVerificationText.hi
   }
  }
 };
});

export function getSchemeText(scheme, field, language = "en") {
 if (language === "hi") return scheme.translations?.hi?.[field] || scheme[field];
 return scheme[field];
}

export function getCategoryText(category, language = "en") {
 if (language !== "hi") return category;
 return categoryTranslationsHi[category] || category;
}

export function getSchemeDocumentText(scheme, index, language = "en") {
 const name = scheme.documents[index];
 return language === "hi" ? documentTranslationsHi[name] || name : name;
}

export function getRequirementText(language = "en") {
 return requirementText[language] || requirementText.en;
}

export function getSchemeStepText(scheme, index, language = "en") {
 if (language === "hi") return scheme.translations?.hi?.steps?.[index] || scheme.steps[index];
 return scheme.steps[index];
}

function incomeRuleValue(annualIncome) {
 const income = Number(annualIncome);
 if (!Number.isFinite(income) || income < 0) return null;
 if (income < 100000) return incomeBands[0];
 if (income < 250000) return incomeBands[1];
 if (income === 250000) return null;
 if (income < 450000) return incomeBands[2];
 if (income === 450000) return null;
 if (income < 800000) return incomeBands[3];
 if (income === 800000) return null;
 return incomeBands[4];
}

function getRuleValue(field, profile) {
 if (field === "age") {
  const age = Number(profile.age);
  return profile.age !== "" && Number.isFinite(age) && age > 0 ? { value: age } : { missing: [field] };
 }
 if (field === "inc") {
  const value = incomeRuleValue(profile.income);
  return value === null ? { missing: [field] } : { value };
 }
 if (field === "occ") {
  const value = occupationIndexes[profile.occupation];
  return value === undefined ? { missing: [field] } : { value };
 }
 if (Object.prototype.hasOwnProperty.call(profileFieldByQuestion, field)) {
  const answer = profile[profileFieldByQuestion[field]];
  const value = answerIndexes[field]?.[answer];
  return Number.isInteger(value) ? { value } : { missing: [field] };
 }
 return { missing: [field] };
}

function evaluateRule(rule, profile) {
 const missing = [];
 const matched = [];
 const used = [];
 let knownFalse = false;
 for (const [field, expected] of Object.entries(rule)) {
  if (field === "anyOf" || field === "not") continue;
  const actual = getRuleValue(field, profile);
  if (actual.missing) {
   missing.push(...actual.missing);
   continue;
  }
  used.push(field);
  let matches;
  if (Array.isArray(expected)) matches = expected.includes(actual.value);
  else matches = (expected.min === undefined || actual.value >= expected.min)
   && (expected.max === undefined || actual.value <= expected.max);
  if (matches) matched.push(field);
  else knownFalse = true;
 }
 if (rule.anyOf) {
  const alternatives = rule.anyOf.map(condition => evaluateRule(condition, profile));
  const matchedAlternative = alternatives.find(result => result.value === true);
  if (matchedAlternative) {
   matched.push(...matchedAlternative.matched);
   used.push(...matchedAlternative.used);
  } else {
   missing.push(...alternatives.flatMap(result => result.value === null ? result.missing : []));
   used.push(...alternatives.flatMap(result => result.used));
   if (!missing.length) knownFalse = true;
  }
 }
 if (rule.not) {
  const result = evaluateRule(rule.not, profile);
  used.push(...result.used);
  if (result.value === null) missing.push(...result.missing);
  else if (result.value === true) knownFalse = true;
  else matched.push(...result.used);
 }
 if (knownFalse) return { value: false, missing: [], matched: [], used: [...new Set(used)] };
 if (missing.length) return { value: null, missing: [...new Set(missing)], matched: [], used: [...new Set(used)] };
 return { value: true, missing: [], matched: [...new Set(matched)], used: [...new Set(used)] };
}

function getQuestionLabel(field, language) {
 const question = sourceQuestionnaire.find(item => item.k === field);
 if (!question) return field;
 if (language === "hi") return oldQuestionnaireQuestionsHi[field] || question.t;
 return question.t;
}

export function getEligibilityQuestionLabel(field, language = "en") {
 return getQuestionLabel(field, language);
}

export function getEligibilityAnswerOptions(profileField) {
 const questionField = questionnaireProfileFields[profileField];
 return sourceQuestionnaire.find(item => item.k === questionField)?.o || [];
}

export function isEligibilityAnswerProvided(profile, profileField) {
 return getEligibilityAnswerOptions(profileField).includes(profile?.[profileField]);
}

export function validateEligibilityAnswers(profile) {
 return Object.fromEntries(
  Object.keys(questionnaireProfileFields)
   .filter(profileField => {
    const answer = profile[profileField];
    return answer !== "" && answer !== null && answer !== undefined && !isEligibilityAnswerProvided(profile, profileField);
   })
   .map(profileField => [profileField, "invalid"])
 );
}

function profileFieldForRule(field) {
 return profileFieldByQuestion[field] || ({age:"age",inc:"income",occ:"occupation"}[field] || field);
}

function collectRuleFields(rule) {
 return Object.entries(rule).flatMap(([field, value]) => {
  if (field === "anyOf") return value.flatMap(collectRuleFields);
  if (field === "not") return collectRuleFields(value);
  return [field];
 });
}

function matchedValue(field, profile, language) {
 const value = profile[profileFieldForRule(field)];
 if (field === "inc") return `₹${value}`;
 if (language === "hi") {
  return ({
   Female:"महिला",Male:"पुरुष",Other:"अन्य",General:"सामान्य",OBC:"OBC",SC:"SC",ST:"ST",Yes:"हाँ",No:"नहीं",
   Student:"छात्र",Farmer:"किसान","Daily-wage or unorganised worker":"दिहाड़ी या असंगठित कामगार",
   "Self-employed or small business":"स्वरोज़गार या छोटा व्यवसाय","Unemployed, looking for work":"काम की तलाश में बेरोज़गार",
   Homemaker:"गृहिणी",Salaried:"वेतनभोगी",Retired:"सेवानिवृत्त","Business owner":"व्यवसाय-मालिक",Employee:"कर्मचारी"
  })[value] || value;
 }
 return value;
}

function getMissingDetail(field, language) {
 return language === "hi"
  ? `इस प्रश्न का उत्तर नहीं दिया गया है: ${getQuestionLabel(field, language)}`
  : `No answer was provided for: ${getQuestionLabel(field, language)}`;
}

export function validateEligibilityProfile(profile) {
 const errors = validateEligibilityAnswers(profile);
 const age = Number(profile.age);
 const income = Number(profile.income);
 if (profile.age === "" || !Number.isFinite(age) || age <= 0) errors.age = "invalid";
 if (profile.income === "" || !Number.isFinite(income) || income < 0) errors.income = "invalid";
 for (const field of ["state", "occupation", "education"]) {
  if (!String(profile[field] || "").trim()) errors[field] = "required";
 }
 return errors;
}

export function getEligibilityResults(profile, language = "en") {
 return schemes.map(scheme => {
  const outcome = evaluateRule(scheme.rule, profile);
  const consideredFields = [...new Set(collectRuleFields(scheme.rule))];
  const status = outcome.value === true
   ? "potentiallyRelevant"
   : outcome.value === null
    ? "moreInformationRequired"
    : "notEnoughInformation";
  const missing = outcome.missing.map(field => ({
   field,
   detail: getMissingDetail(field, language)
  }));
  const reason = status === "potentiallyRelevant"
   ? language === "hi"
    ? `आपकी प्रोफ़ाइल मूल नियम की इन शर्तों से मेल खाती है: ${outcome.matched.map(field => `${eligibilityFieldLabels.hi[field]}: ${matchedValue(field, profile, language)}`).join(", ")}। यह केवल संभावित मेल है; आधिकारिक पात्रता सत्यापित करें।`
    : `Your profile matches the original rule for: ${outcome.matched.map(field => `${eligibilityFieldLabels.en[field]}: ${matchedValue(field, profile, language)}`).join(", ")}. This is a potential match, not an official eligibility decision.`
   : status === "moreInformationRequired"
    ? language === "hi"
     ? `मूल नियम के लिए इन प्रश्नों के उत्तर नहीं दिए गए हैं: ${outcome.missing.map(field => getQuestionLabel(field, language)).join("、")}। आधिकारिक पोर्टल पर जाँचें।`
     : `No answers were provided for details required by the original rule: ${outcome.missing.map(field => getQuestionLabel(field, language)).join(", ")}. Verify on the official portal.`
    : language === "hi"
     ? "उपलब्ध प्रोफ़ाइल मूल प्रश्नावली के नियम से मेल नहीं खाती। यह आधिकारिक निर्णय नहीं है; वर्तमान नियम आधिकारिक पोर्टल पर जाँचें।"
     : "The available profile does not match the recorded questionnaire rule. This is not an official decision; review current rules on the official portal.";
  return {
   scheme,
   status,
   reason,
   missingFields: missing.map(item => item.field),
   consideredProfile: consideredFields.map(field => {
    const profileField = profileFieldForRule(field);
    return { field: profileField, value: profile[profileField] };
   }),
   verificationNeeded: [
    ...missing,
    { field: "official", detail: getSchemeText(scheme, "verificationNote", language) }
   ]
  };
 });
}

export function getOccupationIndex(occupation) {
 return occupationIndexes[occupation];
}
