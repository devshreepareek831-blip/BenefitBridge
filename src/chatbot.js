import { getSchemeDocumentText, getSchemeStepText, getSchemeText, getRequirementText, schemes } from "./data.js";

export const chatbotCopy = {
 en: {
  welcome: "Hello! I can help you explore 18 scheme records from the original source. Ask about a scheme, its documents, application steps, or your saved schemes.",
  mode: "Local scheme-information assistant · not live AI",
  disclaimer: "Answers use the local source dataset. Verify current information on official portals.",
  suggested: "Try asking",
  questions: [
   "Which schemes are available for students?",
   "What documents are needed for PM-KISAN?",
   "How can I apply for a government scheme?",
   "How do I check my saved schemes?"
  ],
  loading: "Checking the local scheme records…",
  emptyInput: "Type a question or choose one of the suggestions.",
  error: "I couldn't look up that information. Please try again.",
  summary: "Summary",
  eligibility: "Who may be eligible",
  documents: "Documents listed",
  official: "Official website",
  listedNote: "The details below come from the original source record. Confirm current requirements on the official website.",
  studentAnswer: "These education-category records are included in the source dataset. Their specific rules vary; check each official portal for current details.",
  noStudentAnswer: "There are no education-category schemes in the source records. Check official government portals for other opportunities.",
  applicationAnswer: "Open the scheme's official website, review its current instructions, and follow the application process provided there. BenefitBridge does not submit applications.",
  savedAnswer: "Use “Saved schemes” in the site navigation to view bookmarks stored in this browser.",
  savedCount: "{count} schemes saved in this browser.",
  openSaved: "Open saved schemes",
  unknownAnswer: "I couldn't find that information in the 18 source scheme records. Please verify it on the relevant official portal. Here are the official links included in the dataset:",
  steps: "Application steps listed in the source",
  requirementUnspecified: "The source does not state whether this is mandatory; verify officially.",
  sourceRuleNote: "This is the original questionnaire rule, not an official eligibility decision.",
  verify: "Verify current eligibility, documents and application steps with the official scheme authority."
 },
 hi: {
  welcome: "नमस्ते! मैं मूल स्रोत के 18 योजना रिकॉर्ड देखने में मदद कर सकता हूँ। किसी योजना, दस्तावेज़, आवेदन चरण या सहेजी गई योजनाओं के बारे में पूछें।",
  mode: "स्थानीय योजना-जानकारी सहायक · लाइव AI नहीं",
  disclaimer: "उत्तर स्थानीय स्रोत डेटासेट पर आधारित हैं। वर्तमान जानकारी आधिकारिक पोर्टल पर सत्यापित करें।",
  suggested: "ये प्रश्न पूछें",
  questions: [
   "छात्रों के लिए कौन-सी योजनाएँ उपलब्ध हैं?",
   "PM-KISAN के लिए कौन-से दस्तावेज़ चाहिए?",
   "मैं सरकारी योजना के लिए आवेदन कैसे करूँ?",
   "अपनी सहेजी गई योजनाएँ कैसे देखें?"
  ],
  loading: "स्थानीय योजना रिकॉर्ड देखे जा रहे हैं…",
  emptyInput: "प्रश्न लिखें या सुझाए गए प्रश्नों में से चुनें।",
  error: "जानकारी खोजी नहीं जा सकी। कृपया फिर से प्रयास करें।",
  summary: "सारांश",
  eligibility: "कौन पात्र हो सकते हैं",
  documents: "सूचीबद्ध दस्तावेज़",
  official: "आधिकारिक वेबसाइट",
  listedNote: "नीचे दी गई जानकारी मूल स्रोत रिकॉर्ड से है। वर्तमान आवश्यकताएँ आधिकारिक वेबसाइट पर जाँचें।",
  studentAnswer: "स्रोत डेटासेट में शिक्षा श्रेणी के ये रिकॉर्ड शामिल हैं। उनकी शर्तें अलग-अलग हैं; वर्तमान जानकारी आधिकारिक पोर्टल पर जाँचें।",
  noStudentAnswer: "स्रोत रिकॉर्ड में शिक्षा श्रेणी की योजना नहीं है। अन्य अवसरों के लिए आधिकारिक सरकारी पोर्टल देखें।",
  applicationAnswer: "योजना की आधिकारिक वेबसाइट खोलें, वहाँ दिए गए वर्तमान निर्देश पढ़ें और उसी प्रक्रिया का पालन करें। BenefitBridge आवेदन जमा नहीं करता।",
  savedAnswer: "इस ब्राउज़र में सहेजे गए बुकमार्क देखने के लिए साइट नेविगेशन में “सहेजी गई योजनाएँ” खोलें।",
  savedCount: "इस ब्राउज़र में {count} योजनाएँ सहेजी गई हैं।",
  openSaved: "सहेजी गई योजनाएँ खोलें",
  unknownAnswer: "यह जानकारी मूल स्रोत के 18 योजना रिकॉर्ड में नहीं मिली। कृपया संबंधित आधिकारिक पोर्टल पर सत्यापित करें। डेटासेट में दिए गए आधिकारिक लिंक:",
  steps: "स्रोत में दिए गए आवेदन चरण",
  requirementUnspecified: "स्रोत में इसे अनिवार्य बताया गया है या नहीं, यह निर्दिष्ट नहीं है; आधिकारिक रूप से जाँचें।",
  sourceRuleNote: "यह मूल प्रश्नावली का नियम है, आधिकारिक पात्रता निर्णय नहीं।",
  verify: "वर्तमान पात्रता, दस्तावेज़ और आवेदन प्रक्रिया की पुष्टि आधिकारिक योजना प्राधिकरण से करें।"
 }
};

const aliases = {
 "pm-kisan": ["pm-kisan", "pm kisan", "pmkisan", "पीएम-किसान", "पीएम किसान", "किसान सम्मान निधि"],
 "ayushman-bharat": ["pm-jay", "pmjay", "ayushman", "आयुष्मान भारत"],
 "nsp-postmatric": ["nsp", "post-matric", "post matric", "sc scholarship", "sc post-matric", "पोस्ट मैट्रिक", "एससी छात्रवृत्ति", "एनएसपी"],
 "scholarship-st": ["tribe scholarship", "st scholarship", "st post-matric", "एसटी छात्रवृत्ति"],
 "pm-yasasvi": ["yasasvi", "यशस्वी"],
 "minority-scholarship": ["minority scholarship", "अल्पसंख्यक छात्रवृत्ति"],
 "central-sector": ["central sector scholarship", "केंद्रीय क्षेत्र छात्रवृत्ति"],
 sukanya: ["sukanya samriddhi", "सुकन्या समृद्धि"],
 ujjwala: ["ujjwala", "उज्ज्वला", "उज्ज्वला योजना"],
 nfsa: ["nfsa", "free ration", "निःशुल्क राशन"],
 nsap: ["nsap", "old-age pension", "old age pension", "वृद्धावस्था पेंशन"],
 "pmay-urban": ["pmay", "pmay urban", "awas yojana", "आवास योजना", "पीएमएवाई"],
 mudra: ["mudra", "मुद्रा योजना", "मुद्रा"],
 "shram-yogi": ["shram yogi", "maandhan", "मानधन"],
 apy: ["atal pension", "atal pension yojana", "अटल पेंशन"],
 "pmsby-pmjjby": ["pmsby", "pmjjby", "suraksha bima", "jeevan jyoti", "सुरक्षा बीमा", "जीवन ज्योति"],
 pmkvy: ["pmkvy", "skill training", "कौशल प्रशिक्षण"],
 udid: ["udid", "disability benefits", "दिव्यांगजन लाभ"]
};

const profileFieldTopics = [
 {
  terms:["social category","social caste","caste category","sc category","st category","obc category","i am sc","i am st","i am obc","सामाजिक श्रेणी","जाति","मैं sc","मैं st","मैं obc"],
  ids:["nsp-postmatric","scholarship-st","pm-yasasvi"],
  en:"Social category is separate from minority-community status. The source questionnaire uses SC for Post-Matric Scholarship (SC), ST for Post-Matric Scholarship (ST), and OBC for PM YASASVI. This is only a rule-based indication; verify current criteria officially.",
  hi:"सामाजिक श्रेणी, अल्पसंख्यक समुदाय की स्थिति से अलग है। मूल प्रश्नावली में SC मैट्रिकोत्तर छात्रवृत्ति (SC), ST मैट्रिकोत्तर छात्रवृत्ति (ST), और OBC PM YASASVI के लिए उपयोग होता है। यह केवल नियम-आधारित संकेत है; वर्तमान मानदंड आधिकारिक रूप से जाँचें।"
 },
 {
  terms:["ration card status","ration card","aay","bpl","राशन कार्ड","एएवाई","बीपीएल"],
  ids:["ayushman-bharat","ujjwala","nfsa","nsap"],
  en:"For this questionnaire, Yes means the household has a Priority, AAY, or BPL ration card. The source rules use this answer for Ayushman Bharat, Ujjwala, Free Ration, and as one NSAP pathway. Not provided is unknown, not No; other scheme conditions still apply.",
  hi:"इस प्रश्नावली में 'हाँ' का अर्थ है कि परिवार के पास प्राथमिकता, AAY या BPL राशन कार्ड है। मूल नियम इस उत्तर का उपयोग आयुष्मान भारत, उज्ज्वला, निःशुल्क राशन और NSAP के एक विकल्प में करते हैं। 'जानकारी नहीं दी गई' अज्ञात है, 'नहीं' नहीं; अन्य योजना शर्तें भी लागू होती हैं।"
 },
 {
  terms:["gender","female","male","महिला","पुरुष","लिंग"],
  ids:["ujjwala"],
  en:"The source questionnaire uses Female for Ujjwala, alongside age 18 or older and a Priority/AAY/BPL ration card. Gender alone does not establish a match; verify current scheme requirements.",
  hi:"मूल प्रश्नावली में उज्ज्वला के लिए महिला होना, 18 वर्ष या अधिक आयु और प्राथमिकता/AAY/BPL राशन कार्ड के साथ उपयोग होता है। केवल लिंग से मेल तय नहीं होता; वर्तमान शर्तें सत्यापित करें।"
 },
 {
  terms:["disability status","disability","40%","दिव्यांगता","दिव्यांग"],
  ids:["udid"],
  en:"The original UDID rule asks whether you or a family member has a disability of 40% or more. A Yes answer indicates a possible match only; official verification is required.",
  hi:"मूल UDID नियम पूछता है कि क्या आपको या परिवार के किसी सदस्य को 40% या अधिक दिव्यांगता है। 'हाँ' केवल संभावित मेल दिखाता है; आधिकारिक सत्यापन आवश्यक है।"
 },
 {
  terms:["daughter","daughter under 10","daughter below 10","daughter younger than 10","बेटी","10 वर्ष से कम आयु की बेटी"],
  ids:["sukanya"],
  en:"Sukanya Samriddhi Yojana uses the original Yes/No question about having a daughter under 10. The prototype does not ask for her exact age; confirm current rules officially.",
  hi:"सुकन्या समृद्धि योजना में 10 वर्ष से कम आयु की बेटी होने का मूल हाँ/नहीं प्रश्न उपयोग होता है। प्रोटोटाइप उसकी सटीक आयु नहीं पूछता; वर्तमान नियम आधिकारिक रूप से जाँचें।"
 },
 {
  terms:["pucca house","permanent house","house ownership","पक्का घर","स्थायी घर","घर का स्वामित्व"],
  ids:["pmay-urban"],
  en:"The original PM Awas questionnaire asks whether the family owns a pucca house. Its rule requires No and annual family income within the source band; check the current PMAY component and official criteria.",
  hi:"मूल PM आवास प्रश्नावली पूछती है कि क्या परिवार के पास पक्का घर है। उसके नियम में 'नहीं' और स्रोत की आय सीमा शामिल है; वर्तमान PMAY घटक और आधिकारिक मानदंड जाँचें।"
 },
 {
  terms:["minority community","notified minority","minority status","अल्पसंख्यक समुदाय","अधिसूचित अल्पसंख्यक"],
  ids:["minority-scholarship"],
  en:"Minority Scholarships use a separate notified-minority-community answer. Social category (General/OBC/SC/ST) does not determine minority status; the source rule also requires Student status and an income band.",
  hi:"अल्पसंख्यक छात्रवृत्तियों में अधिसूचित अल्पसंख्यक समुदाय का अलग उत्तर उपयोग होता है। सामाजिक श्रेणी (General/OBC/SC/ST) से अल्पसंख्यक स्थिति तय नहीं होती; मूल नियम में छात्र स्थिति और आय सीमा भी शामिल है।"
 },
 {
  terms:["not provided","unanswered","leave blank","जानकारी नहीं दी गई","उत्तर नहीं दिया","अनुत्तरित","खाली उत्तर"],
  ids:[],
  en:"An unanswered profile field stays unknown and is never treated as No. If a scheme rule needs it, the result says More information required. Update answers in My Profile or the Scheme Finder.",
  hi:"अनुत्तरित प्रोफ़ाइल फ़ील्ड अज्ञात रहता है और उसे कभी 'नहीं' नहीं माना जाता। यदि योजना नियम को इसकी आवश्यकता हो, तो परिणाम 'अधिक जानकारी आवश्यक' दिखाता है। उत्तर मेरी प्रोफ़ाइल या योजना खोजक में अपडेट करें।"
 }
];

const schemeTranslationsHi = {
 "pm-kisan": {
  summary: "पात्र भूमिधारक किसान परिवारों के लिए आय सहायता।",
  who: "पात्र भूमिधारक किसान परिवार, वर्तमान योजना नियमों और बहिष्करणों के अधीन।"
 },
 "nsp-postmatric": {
  summary: "मैट्रिक के बाद पढ़ रहे पात्र छात्रों के लिए छात्रवृत्ति के अवसर। सटीक मानदंड योजना और समुदाय के अनुसार बदलते हैं।",
  who: "चुनी गई छात्रवृत्ति की शिक्षा, आय, निवास और श्रेणी संबंधी शर्तें पूरी करने वाले छात्र।"
 },
 "pmay-urban": {
  summary: "लागू शहरी आवास कार्यक्रम घटकों के अंतर्गत आवास सहायता।",
  who: "पात्रता वर्तमान घटक, परिवार, स्थान और संपत्ति की शर्तों पर निर्भर करती है।"
 },
 mudra: {
  summary: "पात्र सूक्ष्म उद्यम गतिविधियों के लिए भाग लेने वाले ऋणदाताओं के माध्यम से ऋण।",
  who: "गैर-कॉर्पोरेट, गैर-कृषि सूक्ष्म और लघु उद्यम के आवेदक; ऋणदाता का आकलन लागू होगा।"
 },
 ujjwala: {
  summary: "पात्र परिवारों की योग्य वयस्क महिलाओं के लिए LPG कनेक्शन सहायता।",
  who: "वर्तमान योजना मानदंड और बहिष्करणों को पूरा करने वाले पात्र परिवारों की वयस्क महिलाएँ।"
 }
};

const documentTranslationsHi = {
 Aadhaar: "आधार",
 "Land ownership records": "भूमि स्वामित्व रिकॉर्ड",
 "Bank passbook linked to Aadhaar": "आधार से जुड़ी बैंक पासबुक",
 "Aadhaar or other accepted identity proof": "आधार या अन्य मान्य पहचान प्रमाण",
 "Landholding / land record details": "भूमि स्वामित्व / भूमि रिकॉर्ड विवरण",
 "Bank account details": "बैंक खाते का विवरण",
 "Mobile number": "मोबाइल नंबर",
 "Previous examination marksheet": "पिछली परीक्षा की अंकतालिका",
 "Income certificate": "आय प्रमाण पत्र",
 "Domicile certificate": "निवास प्रमाण पत्र",
 "Institution verification details": "संस्थान सत्यापन विवरण",
 "Category certificate, if applicable": "श्रेणी प्रमाण पत्र, यदि लागू हो",
 "Identity proof": "पहचान प्रमाण",
 "Address / residence proof": "पता / निवास प्रमाण",
 "Income proof": "आय प्रमाण",
 "Family details": "परिवार का विवरण",
 "Land or property documents, if applicable": "भूमि या संपत्ति दस्तावेज़, यदि लागू हो",
 "Address proof": "पता प्रमाण",
 "Business details / plan": "व्यवसाय का विवरण / योजना",
 "Bank statements": "बैंक स्टेटमेंट",
 "Quotation or business-related documents": "कोटेशन या व्यवसाय संबंधी दस्तावेज़",
 "Applicant identity / Aadhaar details": "आवेदक की पहचान / आधार विवरण",
 "Ration card or family composition document": "राशन कार्ड या परिवार संरचना दस्तावेज़",
 "Caste certificate": "जाति प्रमाणपत्र",
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
 "Aadhaar of all members": "सभी सदस्यों के आधार",
 "Age proof": "आयु प्रमाण",
 "BPL or ration card": "BPL या राशन कार्ड",
 "Declaration of no pucca house": "पक्का घर न होने की घोषणा",
 "ID and address proof": "पहचान और पता प्रमाण",
 "Business plan or quote": "व्यवसाय योजना या कोटेशन",
 "Passport photos": "पासपोर्ट आकार की तस्वीरें",
 "Savings or Jan Dhan account": "बचत या जन धन खाता",
 "Medical certificate": "चिकित्सा प्रमाणपत्र",
 Signature: "हस्ताक्षर",
 "Education proof": "शिक्षा प्रमाण"
};

const requirementTranslationsHi = {
 Mandatory: "अनिवार्य",
 "Mandatory as applicable": "लागू होने पर अनिवार्य",
 "May be required": "आवश्यक हो सकता है",
 "Usually required": "आमतौर पर आवश्यक",
 "Scheme-dependent": "योजना पर निर्भर",
 Conditional: "शर्तों के अनुसार",
 "Lender-dependent": "ऋणदाता पर निर्भर",
 "If applicable": "यदि लागू हो",
 "As specified": "निर्दिष्ट अनुसार",
 "If required": "यदि आवश्यक हो",
 "Source requirement unspecified": "स्रोत में आवश्यकता निर्दिष्ट नहीं है"
};

function findScheme(question, records) {
 const normalized = question.toLocaleLowerCase();
 const matches = records.flatMap(scheme =>
  [scheme.name, scheme.slug, scheme.id, scheme.translations?.hi?.name, ...(aliases[scheme.id] || [])]
   .filter(Boolean)
   .map(term => ({ scheme, term: term.toLocaleLowerCase() }))
 );
 return matches
  .filter(match => normalized.includes(match.term))
  .sort((left, right) => right.term.length - left.term.length)[0]?.scheme;
}

export function answerLocalQuestion(question, language = "en", savedIds = [], records = schemes) {
 const ui = chatbotCopy[language] || chatbotCopy.en;
 const normalized = question.toLocaleLowerCase();
 const scheme = findScheme(question, records);
 const profileTopic = profileFieldTopics.find(topic => topic.terms.some(term => normalized.includes(term)));

 if (profileTopic) {
  const relatedSchemes = scheme
   ? [scheme]
   : records.filter(record => profileTopic.ids.includes(record.id));
  return { text: profileTopic[language] || profileTopic.en, schemes: relatedSchemes };
 }

 if (scheme) {
  return { text: ui.listedNote, schemes: [scheme] };
 }

 if (["student", "students", "scholarship", "छात्र", "विद्यार्थी", "छात्रवृत्ति"].some(term => normalized.includes(term))) {
  const studentSchemes = records.filter(record => record.category === "Education");
  return {
   text: studentSchemes.length ? ui.studentAnswer : ui.noStudentAnswer,
   schemes: studentSchemes
  };
 }

 if (["saved", "bookmark", "bookmarks", "सहेजी", "बुकमार्क", "सेव"].some(term => normalized.includes(term))) {
  return { text: ui.savedAnswer, action: "saved", savedCount: savedIds.length };
 }

 if (["apply", "application", "आवेदन", "अप्लाई"].some(term => normalized.includes(term))) {
  return { text: ui.applicationAnswer };
 }

 return { text: ui.unknownAnswer, links: records.map(record => ({ name: getSchemeText(record, "name", language), source: record.source })) };
}

export function getChatSchemeText(scheme, language, field) {
 return getSchemeText(scheme, field, language) || schemeTranslationsHi[scheme.id]?.[field] || scheme[field];
}

export function getChatDocumentText(document, language) {
 const [name, requirement] = document;
 if (requirement === "Source requirement unspecified") {
  return { name: language === "hi" ? documentTranslationsHi[name] || name : name, requirement: getRequirementText(language) };
 }
 if (language !== "hi") return { name, requirement };
 return {
  name: documentTranslationsHi[name] || name,
  requirement: requirement === "Source requirement unspecified"
   ? getRequirementText("hi")
   : requirementTranslationsHi[requirement] || requirement
 };
}

export function getChatStepText(scheme, index, language) {
 return getSchemeStepText(scheme, index, language);
}
