import React,{useEffect,useMemo,useRef,useState} from "react";
import {ArrowRight,ArrowUpRight,Bookmark,Check,ChevronDown,FileCheck,Globe2,HeartHandshake,Menu,MessageCircle,Search,ShieldCheck,Sparkles,User,X,ClipboardList,ExternalLink,CheckCircle2,Info} from "lucide-react";
import {schemes,schemeCategories,questionnaireProfileFields,eligibilityFieldLabels,getEligibilityAnswerOptions,getEligibilityQuestionLabel,isEligibilityAnswerProvided,validateEligibilityAnswers,getCategoryText,getSchemeDocumentText,getSchemeStepText,getSchemeText,getRequirementText,getEligibilityResults,validateEligibilityProfile} from "./data";
import {answerLocalQuestion,chatbotCopy,getChatDocumentText,getChatSchemeText,getChatStepText} from "./chatbot";

const copy={
 en:{navHome:"Home",navSchemes:"Find schemes",navAbout:"About",eyebrow:"A simpler way to find support",hero:"Which government benefits are you missing?",sub:"Discover schemes, scholarships and welfare benefits that may fit your circumstances — with clear guidance at every step.",start:"Find my benefits",explore:"Explore schemes",trusted:"Clear information. Better access. More confidence.",how:"How BenefitBridge works",step1:"Tell us about yourself",step1d:"Share a few details such as your state, age, education and occupation.",step2:"Explore relevant schemes",step2d:"Review possible matches and understand why each scheme may be relevant.",step3:"Get application-ready",step3d:"See scheme-specific documents and official application guidance.",featured:"Explore schemes",featuredSub:"A starter collection of scheme information. Always confirm current rules with the official source.",all:"View all schemes",finder:"Scheme finder",finderSub:"Answer a few questions to explore potentially relevant schemes.",age:"Age",income:"Annual family income (₹)",state:"State / Union Territory",occupation:"Occupation",education:"Education",match:"Find matching schemes",results:"Potential matches",resultsSub:"These are indicative matches, not a government eligibility decision.",documents:"Documents checklist",documentsSub:"Track documents for this scheme. Requirements can vary by applicant and current guidelines.",mandatory:"Mandatory",conditional:"Conditional / varies",done:"prepared",reset:"Reset checklist",official:"Official website",sourceNote:"Confirm the latest eligibility and documents with the official scheme authority before applying.",assistant:"BenefitBridge assistant",assistantSub:"Ask about scheme information and application steps.",placeholder:"Ask a question…",send:"Send",saved:"Saved schemes",save:"Save scheme",savedDone:"Saved",aboutTitle:"About BenefitBridge",about:"BenefitBridge aims to make public-benefit information easier to discover and understand. It is an independent student project, not a government website and does not decide eligibility or approve applications.",contact:"Contact",email:"Project contact",profile:"Your details",noResults:"No likely matches from this starter dataset. Try reviewing your details or explore all schemes.",name:"Full name",email:"Email address",category:"Category",level:"Coverage",readMore:"View details",close:"Close",chatIntro:"Hello! I can help explain the scheme information shown on this website. What would you like to know?",notVerified:"Not verified",demoText:"This version uses a small demonstration dataset and local browser storage. It does not submit applications or verify eligibility.",menu:"Menu"},
 hi:{navHome:"होम",navSchemes:"योजनाएँ खोजें",navAbout:"हमारे बारे में",eyebrow:"सहायता पाने का आसान तरीका",hero:"आप कौन-से सरकारी लाभ छोड़ रहे हैं?",sub:"ऐसी योजनाएँ, छात्रवृत्तियाँ और कल्याणकारी लाभ खोजें जो आपकी परिस्थितियों के अनुकूल हो सकते हैं।",start:"मेरे लिए योजनाएँ खोजें",explore:"योजनाएँ देखें",trusted:"स्पष्ट जानकारी। बेहतर पहुँच। अधिक भरोसा।",how:"BenefitBridge कैसे काम करता है",step1:"अपने बारे में बताएँ",step1d:"राज्य, आयु, शिक्षा और व्यवसाय जैसी कुछ जानकारी दें।",step2:"उपयुक्त योजनाएँ देखें",step2d:"संभावित योजनाएँ देखें और समझें कि वे आपके लिए क्यों उपयोगी हो सकती हैं।",step3:"आवेदन की तैयारी करें",step3d:"योजना के अनुसार दस्तावेज़ और आधिकारिक आवेदन जानकारी देखें।",featured:"योजनाएँ देखें",featuredSub:"यह शुरुआती उदाहरण संग्रह है। वर्तमान नियम आधिकारिक स्रोत से जाँचें।",all:"सभी योजनाएँ देखें",finder:"योजना खोजक",finderSub:"संभावित योजनाएँ देखने के लिए कुछ प्रश्नों के उत्तर दें।",age:"आयु",income:"वार्षिक पारिवारिक आय (₹)",state:"राज्य / केंद्र शासित प्रदेश",occupation:"व्यवसाय",education:"शिक्षा",match:"मिलती-जुलती योजनाएँ खोजें",results:"संभावित योजनाएँ",resultsSub:"ये केवल संकेतात्मक परिणाम हैं, सरकारी पात्रता निर्णय नहीं।",documents:"दस्तावेज़ चेकलिस्ट",documentsSub:"इस योजना के दस्तावेज़ों की तैयारी ट्रैक करें। आवश्यकताएँ बदल सकती हैं।",mandatory:"अनिवार्य",conditional:"शर्तों के अनुसार",done:"तैयार",reset:"चेकलिस्ट रीसेट करें",official:"आधिकारिक वेबसाइट",sourceNote:"आवेदन से पहले नवीनतम पात्रता और दस्तावेज़ आधिकारिक प्राधिकरण से जाँचें।",assistant:"BenefitBridge सहायक",assistantSub:"योजना और आवेदन प्रक्रिया के बारे में पूछें।",placeholder:"अपना प्रश्न लिखें…",send:"भेजें",saved:"सहेजी गई योजनाएँ",save:"योजना सहेजें",savedDone:"सहेजा गया",aboutTitle:"BenefitBridge के बारे में",about:"BenefitBridge सरकारी लाभों की जानकारी खोजना और समझना आसान बनाने का प्रयास है। यह एक स्वतंत्र छात्र परियोजना है, सरकारी वेबसाइट नहीं है और पात्रता या आवेदन स्वीकृत नहीं करती।",contact:"संपर्क",email:"परियोजना संपर्क",profile:"आपकी जानकारी",noResults:"इस शुरुआती डेटासेट में संभावित योजना नहीं मिली। जानकारी जाँचें या सभी योजनाएँ देखें।",name:"पूरा नाम",email:"ईमेल पता",category:"श्रेणी",level:"कवरेज",readMore:"विवरण देखें",close:"बंद करें",chatIntro:"नमस्ते! मैं इस वेबसाइट पर दी गई योजना जानकारी समझाने में मदद कर सकता हूँ। आप क्या जानना चाहेंगे?",notVerified:"सत्यापित नहीं",demoText:"यह संस्करण छोटे उदाहरण डेटासेट और ब्राउज़र स्टोरेज का उपयोग करता है। यह आवेदन जमा नहीं करता और पात्रता सत्यापित नहीं करता।",menu:"मेन्यू"}
};
const browserStorageCopy={
 en:{localProfile:"LOCAL BROWSER PROFILE",storageNote:"Your information is saved only in this browser."},
 hi:{localProfile:"स्थानीय ब्राउज़र प्रोफ़ाइल",storageNote:"आपकी जानकारी केवल इसी ब्राउज़र में सहेजी जाती है।"}
};
const finderCopy={
 en:{potentiallyRelevant:"Potentially relevant",moreInformationRequired:"More information required",notEnoughInformation:"Not enough information",why:"Why this appeared",considered:"Profile details considered",verification:"Still needs official verification",ageInvalid:"Enter a valid age greater than zero.",incomeInvalid:"Annual family income cannot be negative.",required:"Complete this required field.",selectState:"Select a state or Union Territory",selectOccupation:"Select occupation",selectEducation:"Select education",ageLabel:"Age",incomeLabel:"Annual family income",stateLabel:"State / Union Territory",occupationLabel:"Occupation",educationLabel:"Education",notProvided:"Not provided",disclaimer:"Educational prototype only. These results are not an official eligibility decision or a guarantee of benefits. Verify all requirements with the scheme authority.",reasons:{"pm-kisan":"Your occupation is Farmer, which is relevant to the scheme description for landholding farmer families.","nsp-postmatric":"Your profile identifies you as a student in undergraduate or postgraduate education, which is a relevant signal for post-matric scholarship information.","pmay-urban":"Your location was considered, but this profile does not include the household, property or urban-location details needed to assess a housing scheme.","mudra":"Your occupation is Business owner, which is relevant to the scheme description for micro-enterprise activities.","ujjwala":"Your age was considered, but this profile does not collect gender or qualifying-household details, and the precise conditions must be verified."},verificationByField:{age:"Age criteria are not specified in this starter record and must be confirmed with the official scheme authority.",income:"Income limits or rules are not fully specified here and must be confirmed officially.",state:"Location-specific rules are not confirmed in this starter record.",occupation:"The occupation field does not capture all scheme-specific work, household or business conditions.",education:"Education requirements depend on the exact scheme or component and must be verified.", "household/property":"Household composition, property ownership and component-specific conditions are not captured.", "gender/household":"Gender and qualifying-household conditions are not captured by the profile."}},
 hi:{potentiallyRelevant:"संभावित रूप से प्रासंगिक",moreInformationRequired:"अधिक जानकारी आवश्यक",notEnoughInformation:"पर्याप्त जानकारी नहीं",why:"यह परिणाम क्यों दिखा",considered:"देखी गई प्रोफ़ाइल जानकारी",verification:"आधिकारिक रूप से सत्यापित करना बाकी",ageInvalid:"शून्य से अधिक सही आयु दर्ज करें।",incomeInvalid:"वार्षिक पारिवारिक आय ऋणात्मक नहीं हो सकती।",required:"यह आवश्यक जानकारी भरें।",selectState:"राज्य या केंद्र शासित प्रदेश चुनें",selectOccupation:"व्यवसाय चुनें",selectEducation:"शिक्षा चुनें",ageLabel:"आयु",incomeLabel:"वार्षिक पारिवारिक आय",stateLabel:"राज्य / केंद्र शासित प्रदेश",occupationLabel:"व्यवसाय",educationLabel:"शिक्षा",notProvided:"जानकारी नहीं दी गई।",disclaimer:"केवल शैक्षिक प्रोटोटाइप। ये परिणाम आधिकारिक पात्रता निर्णय या लाभ की गारंटी नहीं हैं। सभी शर्तें योजना प्राधिकरण से सत्यापित करें।",reasons:{"pm-kisan":"आपका व्यवसाय किसान है, जो भूमिधारक किसान परिवारों से जुड़ी योजना जानकारी के लिए प्रासंगिक संकेत है।","nsp-postmatric":"आपकी प्रोफ़ाइल में स्नातक या स्नातकोत्तर छात्र के रूप में जानकारी है, जो मैट्रिकोत्तर छात्रवृत्ति के लिए प्रासंगिक संकेत है।","pmay-urban":"आपके स्थान पर विचार किया गया, लेकिन आवास योजना का आकलन करने के लिए परिवार, संपत्ति या शहरी-स्थान का विवरण उपलब्ध नहीं है।","mudra":"आपका व्यवसाय व्यवसाय-मालिक है, जो सूक्ष्म उद्यम गतिविधियों के लिए प्रासंगिक संकेत है।","ujjwala":"आपकी आयु पर विचार किया गया, लेकिन प्रोफ़ाइल में लिंग या पात्र परिवार की जानकारी नहीं है; सटीक शर्तें सत्यापित करनी होंगी।"},verificationByField:{age:"इस रिकॉर्ड में आयु संबंधी शर्तें स्पष्ट नहीं हैं; आधिकारिक प्राधिकरण से पुष्टि करें।",income:"आय सीमा या नियम यहाँ पूरी तरह निर्दिष्ट नहीं हैं; आधिकारिक रूप से पुष्टि करें।",state:"इस रिकॉर्ड में स्थान-विशिष्ट नियमों की पुष्टि नहीं है।",occupation:"व्यवसाय का विवरण योजना की सभी कार्य, परिवार या उद्यम संबंधी शर्तें नहीं बताता।",education:"शिक्षा संबंधी शर्तें योजना या घटक पर निर्भर करती हैं; सत्यापित करें।","household/property":"परिवार की संरचना, संपत्ति का स्वामित्व और घटक-विशिष्ट शर्तें उपलब्ध नहीं हैं।","gender/household":"प्रोफ़ाइल में लिंग और पात्र परिवार संबंधी शर्तों की जानकारी नहीं है।"}}
};
const eligibilityAnswerCopy={
 en:{section:"Additional eligibility details",progress:"{answered} of {total} answered",hint:"Answer what you can. Leave unknown answers as Not provided; they are never treated as No.",saveError:"Your answers could not be saved in this browser.",answerInvalid:"Choose one of the listed answers or leave it Not provided."},
 hi:{section:"अतिरिक्त पात्रता जानकारी",progress:"{total} में से {answered} के उत्तर दिए",hint:"जितनी जानकारी हो, दें। अज्ञात उत्तर को जानकारी नहीं दी गई रहने दें; इसे कभी 'नहीं' नहीं माना जाएगा।",saveError:"आपके उत्तर इस ब्राउज़र में सहेजे नहीं जा सके।",answerInvalid:"सूची में से उत्तर चुनें या जानकारी नहीं दी गई रहने दें।"}
};
const schemeBrowseCopy={
 en:{searchPlaceholder:"Search by scheme, summary or category",searchLabel:"Search schemes",categoryLabel:"Category",allCategories:"All categories",clear:"Clear filters",count:"{count} schemes found",emptyTitle:"No schemes match your filters",emptyText:"Try a different search term or category, or clear the filters to see all schemes.",categories:Object.fromEntries(schemeCategories.map(category=>[category,category]))},
 hi:{searchPlaceholder:"योजना, सारांश या श्रेणी से खोजें",searchLabel:"योजनाएँ खोजें",categoryLabel:"श्रेणी",allCategories:"सभी श्रेणियाँ",clear:"फ़िल्टर हटाएँ",count:"{count} योजनाएँ मिलीं",emptyTitle:"आपके फ़िल्टर से कोई योजना नहीं मिली",emptyText:"दूसरा खोज शब्द या श्रेणी आज़माएँ, या सभी योजनाएँ देखने के लिए फ़िल्टर हटाएँ।",categories:Object.fromEntries(schemeCategories.map(category=>[category,getCategoryText(category,"hi")]))}
};
const schemeDetailsCopy={
 en:{eligibility:"Original questionnaire rule",steps:"How to apply",unverified:"Listed in source · verify requirement"},
 hi:{eligibility:"मूल प्रश्नावली का नियम",steps:"आवेदन कैसे करें",unverified:"स्रोत में सूचीबद्ध · आवश्यकता सत्यापित करें"}
};
const schemeDataCopy={
 en:{description:"Explore all 18 scheme records from the original source. Confirm current details with each official authority."},
 hi:{description:"मूल स्रोत के सभी 18 योजना रिकॉर्ड देखें। वर्तमान जानकारी संबंधित आधिकारिक प्राधिकरण से सत्यापित करें।"}
};
const eligibilityResultCopy={
 en:{whyMatches:"Why this scheme matches",whyReview:"Why more information is needed",profileSummary:"Profile summary",needsVerification:"Needs verification",details:"View eligibility details",additional:"and {count} more",noSignal:"The profile does not show a specific match; review the details below to see what needs checking.",studentReview:"Student status is noted, but the selected scholarship and course requirements need checking.",reviewReasons:{"pmay-urban":"Your location was considered, but household, property and urban-location details are still needed.","ujjwala":"Your age was considered, but gender and qualifying-household details are not collected."},verificationFields:{age:"Age",income:"Income",state:"State",occupation:"Occupation",education:"Education","household/property":"Household / property","gender/household":"Gender / household"}},
 hi:{whyMatches:"यह योजना क्यों मेल खाती है",whyReview:"अधिक जानकारी क्यों आवश्यक है",profileSummary:"प्रोफ़ाइल सारांश",needsVerification:"सत्यापन आवश्यक",details:"पात्रता विवरण देखें",additional:"और {count} जानकारी",noSignal:"प्रोफ़ाइल से कोई विशिष्ट मेल नहीं दिखता; क्या जाँचना है, यह जानने के लिए नीचे का विवरण देखें।",studentReview:"छात्र की जानकारी दर्ज है, लेकिन चुनी गई छात्रवृत्ति और पाठ्यक्रम की शर्तें जाँचनी होंगी।",reviewReasons:{"pmay-urban":"आपके स्थान पर विचार किया गया, लेकिन परिवार, संपत्ति और शहरी स्थान का विवरण अभी आवश्यक है।","ujjwala":"आपकी आयु पर विचार किया गया, लेकिन लिंग और पात्र परिवार का विवरण उपलब्ध नहीं है।"},verificationFields:{age:"आयु",income:"आय",state:"राज्य",occupation:"व्यवसाय",education:"शिक्षा","household/property":"परिवार / संपत्ति","gender/household":"लिंग / परिवार"}}
};
const eligibilityGroupCopy={
 en:{
  recommendations:"Schemes You May Be Eligible For",
  moreInfo:"More Information Required",
  other:"Other Schemes",
  noMatchesTitle:"No preliminary matches found",
  noMatchesText:"No recorded scheme rule is satisfied by the answers provided. Review any missing information below or browse all schemes. This is not an official eligibility decision.",
  noMoreInfo:"No additional profile answers are needed to evaluate the recorded rules.",
  otherNote:"These {count} schemes did not match the recorded rules using your current answers. This is not an official rejection or a permanent ineligibility decision.",
  updateAnswers:"Update questionnaire answers",
  browseSchemes:"Browse all schemes"
 },
 hi:{
  recommendations:"वे योजनाएँ जिनके लिए आप संभावित रूप से पात्र हो सकते हैं",
  moreInfo:"अधिक जानकारी आवश्यक",
  other:"अन्य योजनाएँ",
  noMatchesTitle:"अभी कोई प्रारंभिक मेल नहीं मिला",
  noMatchesText:"दिए गए उत्तरों से कोई दर्ज योजना नियम पूरा नहीं हुआ। नीचे दी गई जानकारी पूरी करें या सभी योजनाएँ देखें। यह आधिकारिक पात्रता निर्णय नहीं है।",
  noMoreInfo:"दर्ज नियमों का आकलन करने के लिए अतिरिक्त प्रोफ़ाइल जानकारी आवश्यक नहीं है।",
  otherNote:"आपके वर्तमान उत्तरों के आधार पर इन {count} योजनाओं के दर्ज नियमों से मेल नहीं मिला। यह आधिकारिक अस्वीकृति या स्थायी अपात्रता का निर्णय नहीं है।",
  updateAnswers:"प्रश्नावली के उत्तर अपडेट करें",
  browseSchemes:"सभी योजनाएँ देखें"
 }
};
const checklistCopy={
 en:{mandatory:"Mandatory",conditional:"Conditional",optional:"Optional",total:"Total documents",completed:"Completed",percentComplete:"{percent}% complete",resetConfirm:"Reset this scheme's document checklist?",allComplete:"All listed documents are marked prepared. Verify the current official requirements before applying.",noOptional:"No documents are explicitly marked optional in this sample.",requirementNotes:{"Mandatory":"Mandatory","Mandatory as applicable":"Mandatory when applicable","Usually required":"Usually required","May be required":"May be required","Scheme-dependent":"Depends on the scheme","Conditional":"Conditional","Lender-dependent":"Depends on the lender","If applicable":"If applicable","As specified":"As specified","If required":"If required"},officialReminder:"Conditional and variable requirements should be confirmed with the official scheme source.",print:"Print / Save as PDF"},
 hi:{mandatory:"अनिवार्य",conditional:"शर्तों के अनुसार",optional:"वैकल्पिक",total:"कुल दस्तावेज़",completed:"तैयार",percentComplete:"{percent}% पूरा",resetConfirm:"क्या इस योजना की दस्तावेज़ चेकलिस्ट रीसेट करें?",allComplete:"सूची के सभी दस्तावेज़ तैयार चिह्नित हैं। आवेदन से पहले वर्तमान आधिकारिक आवश्यकताएँ जाँचें।",noOptional:"इस उदाहरण में कोई दस्तावेज़ स्पष्ट रूप से वैकल्पिक नहीं बताया गया है।",requirementNotes:{"Mandatory":"अनिवार्य","Mandatory as applicable":"लागू होने पर अनिवार्य","Usually required":"आमतौर पर आवश्यक","May be required":"आवश्यक हो सकता है","Scheme-dependent":"योजना पर निर्भर","Conditional":"शर्तों के अनुसार","Lender-dependent":"ऋणदाता पर निर्भर","If applicable":"यदि लागू हो","As specified":"निर्दिष्ट अनुसार","If required":"यदि आवश्यक हो"},officialReminder:"शर्तों के अनुसार और परिवर्तनशील आवश्यकताओं की पुष्टि आधिकारिक योजना स्रोत से करें.",print:"प्रिंट करें / PDF के रूप में सहेजें"}
};
const profileCopy={
 en:{nav:"My Profile",title:"My Profile",description:"Review your saved details and update the information used by the Scheme Finder. This prototype stores profile data in this browser.",details:"Profile details",completion:"Profile completion",completionHint:"Complete profile fields to improve your scheme discovery.",savedCount:"Saved schemes",find:"Find schemes using my profile",edit:"Edit Profile",save:"Save profile",cancel:"Cancel",saved:"Profile saved in this browser.",saveError:"Could not save your profile. Check browser storage and try again.",invalidName:"Enter a valid name or leave it blank.",invalidEmail:"Enter a valid email address.",invalidAge:"Age must be a positive number.",invalidIncome:"Annual family income cannot be negative.",required:"Complete this field to find schemes.",notProvided:"Not provided",years:"years"},
 hi:{nav:"मेरी प्रोफ़ाइल",title:"मेरी प्रोफ़ाइल",description:"सहेजी गई जानकारी देखें और योजना खोजक में उपयोग होने वाले विवरण अपडेट करें। यह प्रोटोटाइप प्रोफ़ाइल को इसी ब्राउज़र में सहेजता है।",details:"प्रोफ़ाइल विवरण",completion:"प्रोफ़ाइल पूर्णता",completionHint:"योजना खोज को बेहतर बनाने के लिए प्रोफ़ाइल जानकारी भरें।",savedCount:"सहेजी गई योजनाएँ",find:"मेरी प्रोफ़ाइल से योजनाएँ खोजें",edit:"प्रोफ़ाइल संपादित करें",save:"प्रोफ़ाइल सहेजें",cancel:"रद्द करें",saved:"प्रोफ़ाइल इस ब्राउज़र में सहेजी गई।",saveError:"प्रोफ़ाइल सहेजी नहीं जा सकी। ब्राउज़र स्टोरेज जाँचकर फिर प्रयास करें।",invalidName:"सही नाम दर्ज करें या खाली छोड़ें।",invalidEmail:"सही ईमेल पता दर्ज करें।",invalidAge:"आयु शून्य से अधिक संख्या होनी चाहिए।",invalidIncome:"वार्षिक पारिवारिक आय ऋणात्मक नहीं हो सकती।",required:"योजनाएँ खोजने के लिए यह जानकारी भरें।",notProvided:"जानकारी नहीं दी गई"}
};
const additionalProfileCopy={
 en:{socialCategory:"Social category",rationCardStatus:"Ration card status",gender:"Gender",disabilityStatus:"Disability status",daughterUnder10:"Daughter under 10",puccaHouseOwnership:"Pucca house ownership",minorityCommunity:"Notified minority community",notProvided:"Not provided",answerInvalid:"Choose a listed answer or leave it Not provided.",rationCardHelp:"Yes means the household has a Priority, AAY or BPL category ration card.",completionHint:"Complete profile fields, including any optional eligibility details you know, to improve scheme discovery."},
 hi:{socialCategory:"सामाजिक श्रेणी",rationCardStatus:"राशन कार्ड की स्थिति",gender:"लिंग",disabilityStatus:"दिव्यांगता की स्थिति",daughterUnder10:"10 वर्ष से कम आयु की बेटी",puccaHouseOwnership:"पक्के घर का स्वामित्व",minorityCommunity:"अधिसूचित अल्पसंख्यक समुदाय",notProvided:"जानकारी नहीं दी गई",answerInvalid:"सूची में से उत्तर चुनें या जानकारी नहीं दी गई रहने दें।",rationCardHelp:"'हाँ' का अर्थ है कि परिवार के पास प्राथमिकता, AAY या BPL श्रेणी का राशन कार्ड है।",completionHint:"योजना खोज बेहतर करने के लिए प्रोफ़ाइल और ज्ञात वैकल्पिक पात्रता जानकारी भरें।"}
};
const emptyProfile={fullName:"",email:"",age:"",income:"",state:"",occupation:"",education:"",socialCategory:"",rationCardStatus:"",gender:"",disabilityStatus:"",daughterUnder10:"",puccaHouseOwnership:"",minorityCommunity:""};
const eligibilityAnswerRows=Object.entries(questionnaireProfileFields).map(([key,question])=>({key,question,options:getEligibilityAnswerOptions(key)}));
function readLocalObject(key){
 try{
  const parsed=JSON.parse(localStorage.getItem(key)||"null");
  return parsed&&typeof parsed==="object"&&!Array.isArray(parsed)?parsed:{};
 }catch(error){
  console.error(`Unable to read ${key} from local storage.`,error);
  return {};
 }
}
function loadLocalArray(key){
 try{
  const parsed=JSON.parse(localStorage.getItem(key)||"null");
  return Array.isArray(parsed)?parsed:[];
 }catch(error){
  console.error(`Unable to read ${key} from local storage.`,error);
  return [];
 }
}
function loadProfile(){
 const stored=readLocalObject("bb-profile");
 return {
  ...emptyProfile,
  ...stored,
  ...Object.fromEntries(Object.keys(questionnaireProfileFields).map(field=>[field,stored[field]==null?"":String(stored[field])])),
  fullName:String(stored.fullName||""),
  email:String(stored.email||""),
  age:stored.age==null?"":String(stored.age),
  income:stored.income==null?"":String(stored.income),
  state:String(stored.state||""),
  occupation:String(stored.occupation||""),
  education:String(stored.education||"")
 };
}
const legacyChecklistDocuments={
 "pm-kisan":["Aadhaar or other accepted identity proof","Landholding / land record details","Bank account details","Mobile number"],
 "nsp-postmatric":["Previous examination marksheet","Income certificate","Domicile certificate","Bank account details","Category certificate, if applicable","Institution verification details"],
 "pmay-urban":["Identity proof","Address / residence proof","Income proof","Family details","Land or property documents, if applicable"],
 mudra:["Identity proof","Address proof","Business details / plan","Bank statements","Quotation or business-related documents"],
 ujjwala:["Applicant identity / Aadhaar details","Ration card or family composition document","Address proof","Bank account details"]
};
function loadSavedSchemes(){
 return loadLocalArray("bb-saved").filter(id=>typeof id==="string");
}
function loadChecklistState(){
 const raw=localStorage.getItem("bb-checks");
 if(!raw)return {};
 const stored=readLocalObject("bb-checks");
 if(stored._schemaVersion===2)return stored;
 const migrated={...stored,_schemaVersion:2};
 for(const [schemeId,oldDocuments] of Object.entries(legacyChecklistDocuments)){
  const oldChecks=stored[schemeId];
  if(!oldChecks||typeof oldChecks!=="object")continue;
  const scheme=schemes.find(item=>item.id===schemeId);
  if(!scheme)continue;
  const nextChecks={};
  oldDocuments.forEach((name,oldIndex)=>{
   const currentIndex=scheme.documents.indexOf(name);
   if(currentIndex>=0&&oldChecks[oldIndex])nextChecks[currentIndex]=true;
  });
  migrated[schemeId]=nextChecks;
 }
 return migrated;
}
function validateProfileEdits(profile){
 const errors=validateEligibilityAnswers(profile);
 if(profile.fullName&&!profile.fullName.trim())errors.fullName="invalid";
 if(profile.email?.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email.trim()))errors.email="invalid";
 if(profile.age!==""&&(!Number.isFinite(Number(profile.age))||Number(profile.age)<=0))errors.age="invalid";
 if(profile.income!==""&&(!Number.isFinite(Number(profile.income))||Number(profile.income)<0))errors.income="invalid";
 return errors;
}
const states=["Rajasthan","Uttar Pradesh","Maharashtra","Delhi","Madhya Pradesh","Bihar","Gujarat","Other"];
const occupations=["Farmer","Student","Daily-wage or unorganised worker","Self-employed or small business","Unemployed, looking for work","Homemaker","Salaried","Retired","Business owner","Employee","Other"];
function translateProfileOption(value,language){
 if(language!=="hi")return value;
 return {Farmer:"किसान",Student:"छात्र","Daily-wage or unorganised worker":"दिहाड़ी या असंगठित कामगार","Self-employed or small business":"स्वरोज़गार या छोटा व्यवसाय","Unemployed, looking for work":"काम की तलाश में बेरोज़गार",Homemaker:"गृहिणी",Salaried:"वेतनभोगी",Retired:"सेवानिवृत्त","Business owner":"व्यवसाय-मालिक",Employee:"कर्मचारी",Other:"अन्य",School:"विद्यालय",Undergraduate:"स्नातक",Postgraduate:"स्नातकोत्तर",Female:"महिला",Male:"पुरुष",General:"सामान्य",Yes:"हाँ",No:"नहीं"}[value]||value;
}
function documentCategory(requirement){
 if(requirement==="Mandatory")return "mandatory";
 if(/optional/i.test(requirement))return "optional";
 if(requirement==="Source requirement unspecified")return "unverified";
 return "conditional";
}
function App(){
 const [lang,setLang]=useState(localStorage.getItem("bb-lang")||"en"),t=copy[lang],ft=finderCopy[lang],eac=eligibilityAnswerCopy[lang],sbt=schemeBrowseCopy[lang],ert=eligibilityResultCopy[lang],dct=checklistCopy[lang],chatText=chatbotCopy[lang]||chatbotCopy.en,pft={...profileCopy[lang],...additionalProfileCopy[lang],...browserStorageCopy[lang]};
 const [page,setPage]=useState("home"),[selected,setSelected]=useState(null),[profile,setProfile]=useState({...emptyProfile});
 const [matches,setMatches]=useState(false),[finderErrors,setFinderErrors]=useState({}),[finderNotice,setFinderNotice]=useState(""),[saved,setSaved]=useState([]);
 const [schemeSearch,setSchemeSearch]=useState(""),[schemeCategory,setSchemeCategory]=useState("All");
 const [profileDraft,setProfileDraft]=useState(profile),[editingProfile,setEditingProfile]=useState(false),[profileErrors,setProfileErrors]=useState({}),[profileNotice,setProfileNotice]=useState("");
 const [checks,setChecks]=useState({}),[query,setQuery]=useState(""),[messages,setMessages]=useState([]),[chatLoading,setChatLoading]=useState(false),[chatError,setChatError]=useState("");
 const [mobile,setMobile]=useState(false);
 const chatBodyRef=useRef(null);
 useEffect(()=>{
  const loadedProfile=loadProfile();
  setProfile(loadedProfile);
  setProfileDraft(loadedProfile);
  setSaved(loadSavedSchemes());
  setChecks(loadChecklistState());
 },[]);
 useEffect(()=>{if(chatBodyRef.current)chatBodyRef.current.scrollTop=chatBodyRef.current.scrollHeight},[messages,chatLoading,page]);
 const setLanguage=v=>{setLang(v);localStorage.setItem("bb-lang",v)};
 const openScheme=s=>{setSelected(s);setPage("detail");window.scrollTo(0,0)};
 const toggleSave=id=>{
  const next=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];
  setSaved(next);
  localStorage.setItem("bb-saved",JSON.stringify(next));
 };
 const displayedProfile=profile;
 const completionProfile=editingProfile?profileDraft:profile;
 const completionDisplay=completionProfile;
 const profileCompletionFields=[
  Boolean(completionDisplay.fullName.trim()),
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(completionDisplay.email.trim()),
  Number.isFinite(Number(completionProfile.age))&&Number(completionProfile.age)>0,
  completionProfile.state.trim().length>0,
  completionProfile.income!==""&&Number.isFinite(Number(completionProfile.income))&&Number(completionProfile.income)>=0,
  completionProfile.occupation.trim().length>0,
  completionProfile.education.trim().length>0,
  ...Object.keys(questionnaireProfileFields).map(field=>isEligibilityAnswerProvided(completionProfile,field))
 ];
 const profileCompletion=Math.round(profileCompletionFields.filter(Boolean).length/profileCompletionFields.length*100);
 const answeredEligibilityFields=Object.keys(questionnaireProfileFields).filter(field=>isEligibilityAnswerProvided(profile,field)).length;
 const eligibilityAnswerProgress=Math.round(answeredEligibilityFields/Object.keys(questionnaireProfileFields).length*100);
 const profileRows=[
  {key:"fullName",label:t.name,value:displayedProfile.fullName},
  {key:"email",label:t.email,value:displayedProfile.email},
  {key:"age",label:t.age,value:profile.age},
  {key:"state",label:t.state,value:profile.state},
  {key:"income",label:t.income,value:profile.income},
  {key:"occupation",label:t.occupation,value:profile.occupation},
  {key:"education",label:t.education,value:profile.education},
  ...Object.entries(questionnaireProfileFields).map(([key,question])=>({key,label:pft[key],value:profile[key],question}))
 ];
  const profileValue=(field,value)=>{
   if(value===""||value===null||value===undefined)return pft.notProvided;
   if(field==="income")return `₹${value}`;
   return Object.prototype.hasOwnProperty.call(questionnaireProfileFields,field)?translateProfileOption(value,lang):value;
  };
  const profileErrorText=field=>{
   if(field==="fullName")return pft.invalidName;
   if(field==="email")return pft.invalidEmail;
   if(field==="age")return profileDraft.age===""?pft.required:pft.invalidAge;
   if(field==="income")return profileDraft.income===""?pft.required:pft.invalidIncome;
   return Object.prototype.hasOwnProperty.call(questionnaireProfileFields,field)?pft.answerInvalid:pft.required;
  };
 const matching=useMemo(()=>matches?getEligibilityResults(profile,lang):[],[matches,profile,lang]);
 const matchingGroups=useMemo(()=>({
  potentiallyRelevant:matching.filter(result=>result.status==="potentiallyRelevant"),
  moreInformationRequired:matching.filter(result=>result.status==="moreInformationRequired"),
  other:matching.filter(result=>result.status==="notEnoughInformation")
 }),[matching]);
 const filteredSchemes=useMemo(()=>{
  const search=schemeSearch.trim().toLocaleLowerCase();
  return schemes.filter(scheme=>{
   const matchesCategory=schemeCategory==="All"||scheme.category===schemeCategory;
   const searchableText=`${scheme.name} ${scheme.summary} ${scheme.category} ${getSchemeText(scheme,"name","hi")} ${getSchemeText(scheme,"summary","hi")} ${getCategoryText(scheme.category,"hi")}`.toLocaleLowerCase();
   return matchesCategory&&(!search||searchableText.includes(search));
  });
 },[schemeSearch,schemeCategory]);
 const checklistItems=useMemo(()=>selected?selected.docs.map((doc,index)=>({doc,index,category:documentCategory(doc[1])})):[],[selected]);
 const documentGroups=useMemo(()=>({
  mandatory:checklistItems.filter(item=>item.category==="mandatory"),
  conditional:checklistItems.filter(item=>item.category==="conditional"),
  optional:checklistItems.filter(item=>item.category==="optional"),
  unverified:checklistItems.filter(item=>item.category==="unverified")
 }),[checklistItems]);
 const selectedChecks=selected?checks[selected.id]||{}:{};
 const completedDocumentCount=checklistItems.filter(item=>selectedChecks[item.index]).length;
 const totalDocumentCount=checklistItems.length;
 const documentProgress=totalDocumentCount?Math.round(completedDocumentCount/totalDocumentCount*100):0;
 const clearSchemeFilters=()=>{setSchemeSearch("");setSchemeCategory("All")};
 const handleFindMatches=()=>{
  const errors=validateEligibilityProfile(profile);
  setFinderErrors(errors);
  if(Object.keys(errors).length)return;
  setFinderNotice("");
  if(!persistProfile(profile))setFinderNotice(eac.saveError);
  setMatches(true);
  document.getElementById("matchresults")?.scrollIntoView({behavior:"smooth"});
 };
 const toggleDoc=(schemeId,i)=>{
  const next={...checks,[schemeId]:{...(checks[schemeId]||{}),[i]:!(checks[schemeId]||{})[i]},_schemaVersion:2};
  setChecks(next);
  localStorage.setItem("bb-checks",JSON.stringify(next));
 };
 const resetChecklist=schemeId=>{
  if(!window.confirm(dct.resetConfirm))return;
  const next={...checks,[schemeId]:{},_schemaVersion:2};
  setChecks(next);
  localStorage.setItem("bb-checks",JSON.stringify(next));
 };
 const beginProfileEdit=()=>{
  setProfileDraft({...profile,fullName:displayedProfile.fullName,email:displayedProfile.email});
  setProfileErrors({});
  setProfileNotice("");
  setEditingProfile(true);
 };
 const updateProfileDraft=(field,value)=>{
  setProfileDraft(current=>({...current,[field]:value}));
  setProfileErrors(current=>({...current,[field]:null}));
  setProfileNotice("");
 };
 const updateFinderProfile=(field,value)=>{
  setProfile(current=>({...current,[field]:value}));
  setFinderErrors(current=>({...current,[field]:null}));
  setFinderNotice("");
 };
 const persistProfile=values=>{
  const next={...values,fullName:values.fullName.trim(),email:values.email.trim()};
  try{
   localStorage.setItem("bb-profile",JSON.stringify(next));
  }catch(error){
   console.error("Unable to save profile to local storage.",error);
   setProfileNotice(pft.saveError);
   return false;
  }
  setProfile(next);
  setProfileDraft(next);
  return true;
 };
 const saveProfile=()=>{
  const errors=validateProfileEdits(profileDraft);
  setProfileErrors(errors);
  if(Object.keys(errors).length)return;
  if(persistProfile(profileDraft)){
   setEditingProfile(false);
   setProfileNotice(pft.saved);
  }
 };
 const findSchemesFromProfile=()=>{
  const values=editingProfile?profileDraft:{...profile,fullName:displayedProfile.fullName,email:displayedProfile.email};
  const errors={...validateProfileEdits(values),...validateEligibilityProfile(values)};
  setProfileErrors(errors);
  if(Object.keys(errors).length){
   setProfileDraft(values);
   setEditingProfile(true);
   return;
  }
  if(!persistProfile(values))return;
  setEditingProfile(false);
  setMatches(true);
  nav("finder");
 };
 const sendChat=(e,prompt=query)=>{
  e?.preventDefault();
  const question=prompt.trim();
  if(chatLoading)return;
  if(!question){setChatError(chatText.emptyInput);return;}
  const language=lang,savedSchemes=[...saved];
  setChatError("");
  setMessages(current=>[...current,{role:"user",text:question}]);
  setQuery("");
  setChatLoading(true);
  window.setTimeout(()=>{
   try{
    const response=answerLocalQuestion(question,language,savedSchemes);
    setMessages(current=>[...current,{role:"assistant",...response}]);
   }catch(error){
    console.error("Local chatbot response failed.",error);
    setChatError((chatbotCopy[language]||chatbotCopy.en).error);
   }finally{
    setChatLoading(false);
   }
  },180);
 };
 const nav=(p)=>{
  setPage(p);
  setMobile(false);
  window.scrollTo(0,0);
 };
 const schemeName=s=>getSchemeText(s,"name",lang);
 const renderEligibilityCard=result=>{
  const missingFields=result.missingFields;
  return <article className="panel eligibility-result-card" key={result.scheme.id}>
   <div className="eligibility-card-heading"><h3>{getSchemeText(result.scheme,"name",lang)}</h3><span className="tag">{ft[result.status]}</span></div>
   <div className="eligibility-card-scheme-meta"><span className="tag">{getCategoryText(result.scheme.category,lang)}</span><p>{getSchemeText(result.scheme,"summary",lang)}</p></div>
   <div className="eligibility-reason"><b>{result.status==="potentiallyRelevant"?ert.whyMatches:ert.whyReview}</b><p>{result.reason}</p></div>
   <div className="eligibility-profile"><b>{ert.profileSummary}</b><div>{result.consideredProfile.map(item=><span key={item.field}>{pft[item.field]||ft[`${item.field}Label`]||eligibilityFieldLabels[lang][item.field]}: {item.value?(item.field==="occupation"||item.field==="education"||Object.prototype.hasOwnProperty.call(questionnaireProfileFields,item.field)?translateProfileOption(item.value,lang):item.value):ft.notProvided}</span>)}</div></div>
   {missingFields.length>0&&<div className="eligibility-missing"><b>{ert.needsVerification}</b><p>{missingFields.map(field=>eligibilityFieldLabels[lang][field]||ert.verificationFields[field]||field).join(" · ")}</p></div>}
   <details className="eligibility-details"><summary>{ert.details}</summary><ul>{result.verificationNeeded.map((item,index)=><li key={`${item.field}-${index}`}>{item.detail}</li>)}</ul></details>
   <a className="eligibility-official" href={result.scheme.source} target="_blank" rel="noreferrer"><span>{t.official}</span><ExternalLink size={15}/></a>
  </article>;
 };
 return <div className="app">
  <header className={page==="profile"?"header profile-header":"header"}><div className="navwrap">
   <button className="brand" onClick={()=>nav("home")}><span className="brandmark"><HeartHandshake size={22}/></span><span>benefit<span className="branddark">bridge</span><small>PUBLIC BENEFITS, MADE CLEAR</small></span></button>
   <nav className={mobile?"nav open":"nav"}><button onClick={()=>nav("home")}>{t.navHome}</button><button onClick={()=>nav("schemes")}>{t.navSchemes}</button><button onClick={()=>nav("about")}>{t.navAbout}</button><button onClick={()=>nav("saved")}>{t.saved}</button><button onClick={()=>nav("profile")}>{pft.nav}</button></nav>
   <div className="navright"><button className="lang" onClick={()=>setLanguage(lang==="en"?"hi":"en")}><Globe2 size={16}/>{lang==="en"?"हिंदी":"English"}<ChevronDown size={13}/></button><button className="mobilemenu" onClick={()=>setMobile(!mobile)}><Menu/></button></div>
  </div></header>
  {page==="home"&&<><main>
   <section className="hero"><div className="hero-copy"><div className="eyebrow"><span/> {t.eyebrow}</div><h1>{t.hero}</h1><p>{t.sub}</p><div className="hero-actions"><button className="primary" onClick={()=>nav("finder")}>{t.start}<ArrowRight size={17}/></button><button className="secondary" onClick={()=>nav("schemes")}>{t.explore}</button></div><div className="trust"><ShieldCheck size={17}/>{t.trusted}</div></div><div className="hero-art"><div className="artblob"></div><div className="art-card mainart"><div className="art-icon"><HeartHandshake size={26}/></div><span className="art-kicker">YOUR BENEFITS, DISCOVERED</span><strong>Support that<br/>starts with you.</strong><div className="art-lines"><i/><i/><i/></div><div className="art-foot"><span>Personalised discovery</span><CheckCircle2 size={17}/></div></div><div className="floating f1"><span>✳</span><div><b>Made for everyone</b><small>Simple. Clear. Accessible.</small></div></div><div className="floating f2"><div className="miniicon"><FileCheck size={18}/></div><div><b>Know what you need</b><small>Scheme-wise checklist</small></div></div></div></section>
   <section className="how section"><div className="sectionhead"><div className="eyebrow">A CLEARER PATH TO SUPPORT</div><h2>{t.how}</h2></div><div className="steps"><article><span className="stepno">01</span><div className="stepicon sage"><User size={22}/></div><h3>{t.step1}</h3><p>{t.step1d}</p></article><article><span className="stepno">02</span><div className="stepicon blue"><Search size={22}/></div><h3>{t.step2}</h3><p>{t.step2d}</p></article><article><span className="stepno">03</span><div className="stepicon sand"><ClipboardList size={22}/></div><h3>{t.step3}</h3><p>{t.step3d}</p></article></div></section>
   <section className="section scheme-section"><div className="sectionhead rowhead"><div><div className="eyebrow">START EXPLORING</div><h2>{t.featured}</h2><p>{schemeDataCopy[lang].description}</p></div><button className="textlink" onClick={()=>nav("schemes")}>{t.all}<ArrowUpRight size={16}/></button></div><div className="cards">{schemes.slice(0,3).map(s=><SchemeCard key={s.id} s={s} t={t} lang={lang} open={openScheme} saved={saved} toggleSave={toggleSave}/>)}</div></section>
   <section className="cta"><div><span className="eyebrow">YOUR NEXT STEP</span><h2>Find information that<br/>moves you forward.</h2><p>Start with a few details. Explore what may be available.</p></div><button className="primary" onClick={()=>nav("finder")}>{t.start}<ArrowRight size={17}/></button></section>
  </main><Footer t={t} nav={nav}/></>}
  {page==="schemes"&&<main className="pagewrap"><PageHead eyebrow="DISCOVER SUPPORT" title={t.featured} desc={schemeDataCopy[lang].description}/><div className="scheme-browser-controls">
   <label className="scheme-search"><span className="visually-hidden">{sbt.searchLabel}</span><Search size={17}/><input type="search" value={schemeSearch} onChange={e=>setSchemeSearch(e.target.value)} placeholder={sbt.searchPlaceholder}/></label>
   <label className="scheme-category"><span>{sbt.categoryLabel}</span><select value={schemeCategory} onChange={e=>setSchemeCategory(e.target.value)}><option value="All">{sbt.allCategories}</option>{schemeCategories.map(category=><option key={category} value={category}>{sbt.categories[category]}</option>)}</select></label>
   <button className="secondary scheme-clear" onClick={clearSchemeFilters} disabled={!schemeSearch&&schemeCategory==="All"}><X size={15}/>{sbt.clear}</button>
  </div><p className="scheme-count" aria-live="polite">{sbt.count.replace("{count}",filteredSchemes.length)}</p>
   {filteredSchemes.length?<div className="cards">{filteredSchemes.map(s=><SchemeCard key={s.id} s={s} t={t} lang={lang} open={openScheme} saved={saved} toggleSave={toggleSave}/>)}</div>:<div className="empty scheme-empty"><h3>{sbt.emptyTitle}</h3><p>{sbt.emptyText}</p></div>}
  </main>}
  {page==="finder"&&<main className="pagewrap narrow"><PageHead eyebrow="PERSONALISED DISCOVERY" title={t.finder} desc={t.finderSub}/><div id="eligibility-form" className="panel"><div className="formgrid">
   <label>{t.age}<input type="number" min="0.01" step="any" required value={profile.age} onChange={e=>updateFinderProfile("age",e.target.value)} placeholder="e.g. 24"/>{finderErrors.age&&<small role="alert">{ft.ageInvalid}</small>}</label>
   <label>{t.income}<input type="number" min="0" step="any" required value={profile.income} onChange={e=>updateFinderProfile("income",e.target.value)} placeholder="e.g. 250000"/>{finderErrors.income&&<small role="alert">{ft.incomeInvalid}</small>}</label>
   <label>{t.state}<select required value={profile.state} onChange={e=>updateFinderProfile("state",e.target.value)}><option value="">{ft.selectState}</option>{states.map(x=><option key={x} value={x}>{x}</option>)}</select>{finderErrors.state&&<small role="alert">{ft.required}</small>}</label>
   <label>{t.occupation}<select required value={profile.occupation} onChange={e=>updateFinderProfile("occupation",e.target.value)}><option value="">{ft.selectOccupation}</option>{occupations.map(option=><option key={option} value={option}>{translateProfileOption(option,lang)}</option>)}</select>{finderErrors.occupation&&<small role="alert">{ft.required}</small>}</label>
   <label className="full">{t.education}<select required value={profile.education} onChange={e=>updateFinderProfile("education",e.target.value)}><option value="">{ft.selectEducation}</option><option>School</option><option>Undergraduate</option><option>Postgraduate</option><option>Other</option></select>{finderErrors.education&&<small role="alert">{ft.required}</small>}</label>
   <section className="eligibility-answer-section full" aria-label={eac.section}>
    <div className="eligibility-answer-progress"><div><b>{eac.section}</b><span>{eac.progress.replace("{answered}",answeredEligibilityFields).replace("{total}",eligibilityAnswerRows.length)}</span></div><div className="progress" role="progressbar" aria-valuenow={eligibilityAnswerProgress} aria-valuemin="0" aria-valuemax="100" aria-label={`${eac.section}: ${eligibilityAnswerProgress}%`}><i style={{width:`${eligibilityAnswerProgress}%`}}/></div><p>{eac.hint}</p></div>
    <div className="eligibility-answer-grid">{eligibilityAnswerRows.map(({key,question,options})=><label key={key}>{getEligibilityQuestionLabel(question,lang)}<select value={profile[key]||""} onChange={e=>updateFinderProfile(key,e.target.value)}><option value="">{pft.notProvided}</option>{options.map(option=><option key={option} value={option}>{translateProfileOption(option,lang)}</option>)}</select>{key==="rationCardStatus"&&<small className="eligibility-answer-help">{pft.rationCardHelp}</small>}{finderErrors[key]&&<small role="alert">{eac.answerInvalid}</small>}</label>)}</div>
   </section>
  </div><button className="primary wide" onClick={handleFindMatches}>{t.match}<ArrowRight size={17}/></button>{finderNotice&&<p className="profile-notice" role="alert">{finderNotice}</p>}<p className="fineprint"><Info size={14}/> {ft.disclaimer}</p></div>
   {matches&&<div id="matchresults" className="results"><h2>{t.results}</h2><p>{ft.disclaimer}</p><div className="eligibility-result-groups">
    <section className="eligibility-result-group">
     <div className="eligibility-group-heading"><h3>{eligibilityGroupCopy[lang].recommendations}</h3><span className="eligibility-group-count">{matchingGroups.potentiallyRelevant.length}</span></div>
     {matchingGroups.potentiallyRelevant.length?<div className="cards eligibility-results-grid">{matchingGroups.potentiallyRelevant.map(renderEligibilityCard)}</div>:<div className="eligibility-group-empty"><b>{eligibilityGroupCopy[lang].noMatchesTitle}</b><p>{eligibilityGroupCopy[lang].noMatchesText}</p></div>}
    </section>
    <section className="eligibility-result-group">
     <div className="eligibility-group-heading"><h3>{eligibilityGroupCopy[lang].moreInfo}</h3><span className="eligibility-group-count">{matchingGroups.moreInformationRequired.length}</span></div>
     {matchingGroups.moreInformationRequired.length?<><p className="eligibility-group-help">{ert.whyReview}</p><div className="cards eligibility-results-grid">{matchingGroups.moreInformationRequired.map(renderEligibilityCard)}</div><button type="button" className="secondary eligibility-update-button" onClick={()=>document.getElementById("eligibility-form")?.scrollIntoView({behavior:"smooth"})}>{eligibilityGroupCopy[lang].updateAnswers}</button></>:<div className="eligibility-group-empty"><p>{eligibilityGroupCopy[lang].noMoreInfo}</p></div>}
    </section>
    <section className="eligibility-result-group eligibility-other-group">
     <div className="eligibility-group-heading"><h3>{eligibilityGroupCopy[lang].other}</h3><span className="eligibility-group-count">{matchingGroups.other.length}</span></div>
     <p className="eligibility-group-help">{eligibilityGroupCopy[lang].otherNote.replace("{count}",matchingGroups.other.length)}</p>
     <button type="button" className="secondary eligibility-update-button" onClick={()=>nav("schemes")}>{eligibilityGroupCopy[lang].browseSchemes}<ArrowRight size={16}/></button>
    </section>
   </div></div>}
  </main>}
  {page==="profile"&&<main className="pagewrap profile-page"><PageHead eyebrow={pft.localProfile} title={pft.title} desc={pft.description}/><div className="profile-overview">
   <section className="panel profile-progress-card"><div className="profile-progress-heading"><div><span className="profile-label">{pft.completion}</span><strong>{profileCompletion}%</strong></div><User size={21}/></div><div className="progress" role="progressbar" aria-valuenow={profileCompletion} aria-valuemin="0" aria-valuemax="100" aria-label={`${pft.completion}: ${profileCompletion}%`}><i style={{width:`${profileCompletion}%`}}/></div><p>{pft.completionHint}</p></section>
   <section className="panel profile-saved-card"><Bookmark size={20}/><span className="profile-label">{pft.savedCount}</span><strong>{saved.length}</strong></section>
  </div><section className="panel profile-panel"><div className="profile-panel-heading"><div><h2>{pft.details}</h2><p>{pft.storageNote}</p></div>{!editingProfile&&<button type="button" className="secondary" onClick={beginProfileEdit}><User size={15}/>{pft.edit}</button>}</div>
   <div className="profile-fields">{profileRows.map(({key,label,value,question})=><label className="profile-field" key={key}>{label}{editingProfile?question?<><select value={profileDraft[key]||""} onChange={e=>updateProfileDraft(key,e.target.value)}><option value="">{pft.notProvided}</option>{getEligibilityAnswerOptions(key).map(option=><option key={option} value={option}>{translateProfileOption(option,lang)}</option>)}</select><small className="profile-field-hint">{getEligibilityQuestionLabel(question,lang)}</small>{key==="rationCardStatus"&&<small className="profile-field-hint">{pft.rationCardHelp}</small>}</>:key==="state"?<select value={profileDraft.state} onChange={e=>updateProfileDraft(key,e.target.value)}><option value="">{ft.selectState}</option>{states.map(state=><option key={state} value={state}>{state}</option>)}</select>:key==="occupation"?<select value={profileDraft.occupation} onChange={e=>updateProfileDraft(key,e.target.value)}><option value="">{ft.selectOccupation}</option>{occupations.map(option=><option key={option} value={option}>{translateProfileOption(option,lang)}</option>)}</select>:key==="education"?<select value={profileDraft.education} onChange={e=>updateProfileDraft(key,e.target.value)}><option value="">{ft.selectEducation}</option>{["School","Undergraduate","Postgraduate","Other"].map(option=><option key={option} value={option}>{translateProfileOption(option,lang)}</option>)}</select>:<input type={key==="age"||key==="income"?"number":key==="email"?"email":"text"} min={key==="age"?"0.01":key==="income"?"0":undefined} step={key==="age"||key==="income"?"any":undefined} value={profileDraft[key]} onChange={e=>updateProfileDraft(key,e.target.value)}/>:<span className="profile-field-value">{profileValue(key,value)}</span>}{editingProfile&&profileErrors[key]&&<small role="alert">{profileErrorText(key)}</small>}</label>)}</div>
   {profileNotice&&<p className="profile-notice" role="status">{profileNotice}</p>}
   <p className="profile-demo-note"><Info size={15}/>{pft.storageNote}</p>
   <div className="profile-actions">{editingProfile&&<><button type="button" className="primary" onClick={saveProfile}>{pft.save}</button><button type="button" className="secondary" onClick={()=>{setProfileDraft({...profile,fullName:displayedProfile.fullName,email:displayedProfile.email});setProfileErrors({});setProfileNotice("");setEditingProfile(false)}}>{pft.cancel}</button></>}<button type="button" className="secondary profile-find-button" onClick={findSchemesFromProfile}><Search size={16}/>{pft.find}<ArrowRight size={16}/></button></div>
  </section></main>}
  {page==="detail"&&selected&&<main className="pagewrap detailwrap print-checklist-page"><button className="back" onClick={()=>nav("schemes")}>← {t.navSchemes}</button><div className="detailhero"><div><span className="tag">{getCategoryText(selected.category,lang)}</span><h1>{getSchemeText(selected,"name",lang)}</h1><p>{getSchemeText(selected,"summary",lang)}</p><div className="detailmeta"><span>{selected.level}</span><span>India</span></div><a className="print-source" href={selected.source}>{t.official}: {selected.source}</a></div><button className="savebutton" onClick={()=>toggleSave(selected.id)}><Bookmark size={16} fill={saved.includes(selected.id)?"currentColor":"none"}/>{saved.includes(selected.id)?t.savedDone:t.save}</button></div><div className="detailgrid"><section className="panel checklist-panel"><h2>{t.documents}</h2><p>{t.documentsSub}</p><div className="checklist">{[{key:"mandatory",title:dct.mandatory,items:documentGroups.mandatory},{key:"conditional",title:dct.conditional,items:documentGroups.conditional},{key:"optional",title:dct.optional,items:documentGroups.optional},{key:"unverified",title:schemeDetailsCopy[lang].unverified,items:documentGroups.unverified}].filter(group=>group.items.length||group.key==="optional").map(group=><section className="doc-group" key={group.key}><h3>{group.title}</h3>{group.items.length?<div>{group.items.map(({doc,index})=>{const isComplete=!!selectedChecks[index];return <label className={`docrow${isComplete?" docrow-complete":""}`} key={`${selected.id}-${index}`}><input type="checkbox" checked={isComplete} onChange={()=>toggleDoc(selected.id,index)}/><span className="customcheck"><Check size={13}/></span><span className="docname"><b>{getSchemeDocumentText(selected,index,lang)}</b><small>{getRequirementText(lang)}</small></span></label>})}</div>:<p className="no-optional">{dct.noOptional}</p>}</section>)}</div><div className="checklist-stats"><span>{dct.total}: <b>{totalDocumentCount}</b></span><span>{dct.completed}: <b>{completedDocumentCount}</b></span><strong>{dct.percentComplete.replace("{percent}",documentProgress)}</strong></div><div className="progress" role="progressbar" aria-valuenow={documentProgress} aria-valuemin="0" aria-valuemax="100" aria-label={dct.percentComplete.replace("{percent}",documentProgress)}><i style={{width:`${documentProgress}%`}}/></div>{completedDocumentCount===totalDocumentCount&&totalDocumentCount>0&&<p className="checklist-complete" role="status"><CheckCircle2 size={16}/>{dct.allComplete}</p>}<p className="checklist-reminder">{dct.officialReminder}</p><div className="checklist-actions"><button className="secondary" onClick={()=>resetChecklist(selected.id)}>{t.reset}</button><button className="secondary print" onClick={()=>window.print()}>{dct.print}</button></div></section><aside className="panel sidepanel"><h3>{schemeDetailsCopy[lang].eligibility}</h3><p>{getSchemeText(selected,"eligibilityText",lang)}</p><div className="verified"><Info size={16}/><span>{getSchemeText(selected,"verificationNote",lang)}</span></div><p className="smallnote">{t.sourceNote}</p><h3 className="application-steps-title">{schemeDetailsCopy[lang].steps}</h3><ol className="application-steps">{selected.steps.map((step,index)=><li key={`${selected.id}-step-${index}`}>{getChatStepText(selected,index,lang)}</li>)}</ol><a className="primary official" href={selected.source} target="_blank" rel="noreferrer">{t.official}<ExternalLink size={16}/></a></aside></div></main>}
  {page==="saved"&&<main className="pagewrap"><PageHead eyebrow="YOUR SHORTLIST" title={t.saved} desc="Schemes you have bookmarked in this browser."/>{schemes.filter(s=>saved.includes(s.id)).length?<div className="cards">{schemes.filter(s=>saved.includes(s.id)).map(s=><SchemeCard key={s.id} s={s} t={t} lang={lang} open={openScheme} saved={saved} toggleSave={toggleSave}/>)}</div>:<div className="empty">No saved schemes yet. Explore schemes and bookmark ones you want to revisit.</div>}</main>}
  {page==="about"&&<main className="pagewrap narrow"><PageHead eyebrow="OUR PURPOSE" title={t.aboutTitle} desc={t.about}/><div className="panel"><h2>Designed around clarity</h2><p>We bring scheme summaries, potential eligibility information and document preparation into one easy-to-understand experience.</p><p><b>{t.contact}:</b> benefitbridge.project@example.com (replace with your team contact)</p><p className="fineprint">{t.demoText}</p></div></main>}
  <button className="chatfab" onClick={()=>nav("chat")}><MessageCircle size={20}/><span>{t.assistant}</span></button>
  {page==="chat"&&<section className="chatpanel" aria-label={t.assistant}><div className="chathead"><div><b>{t.assistant}</b><small>{chatText.mode}</small></div><button type="button" aria-label={t.close} onClick={()=>nav("home")}><X/></button></div>
   <div className="chatbody" ref={chatBodyRef} role="log" aria-live="polite">
    <div className="botmsg">{chatText.welcome}</div>
    {!messages.length&&<div className="chat-suggestions"><b>{chatText.suggested}</b>{chatText.questions.map(question=><button type="button" key={question} disabled={chatLoading} onClick={()=>sendChat(null,question)}>{question}</button>)}</div>}
    {messages.map((message,index)=>message.role==="user"?<div className="usermsg" key={`user-${index}`}>{message.text}</div>:<div className="chat-reply" key={`assistant-${index}`}>
     <div className="botmsg">{message.text}</div>
     {message.schemes?.map(scheme=><article className="chat-scheme-card" key={scheme.id}>
      <h3>{getChatSchemeText(scheme,lang,"name")}</h3>
      <p><b>{chatText.summary}:</b> {getChatSchemeText(scheme,lang,"summary")}</p>
      <p><b>{chatText.eligibility}:</b> {getChatSchemeText(scheme,lang,"who")}</p>
      <b className="chat-section-label">{chatText.documents}:</b>
      <ul>{scheme.docs.map((document,index)=>{const translated=getChatDocumentText(document,lang);return <li key={`${scheme.id}-${index}`}>{translated.name}<small>{translated.requirement}</small></li>})}</ul>
      <b className="chat-section-label">{chatText.steps}:</b>
      <ol>{scheme.steps.map((step,index)=><li key={`${scheme.id}-step-${index}`}>{getChatStepText(scheme,index,lang)}</li>)}</ol>
      <a href={scheme.source} target="_blank" rel="noreferrer">{chatText.official}<ExternalLink size={13}/></a>
      <small className="chat-scheme-note">{chatText.verify}</small>
     </article>)}
     {message.links&&<div className="chat-official-links">{message.links.map(link=><a href={link.source} target="_blank" rel="noreferrer" key={link.name}>{link.name}<ExternalLink size={12}/></a>)}</div>}
     {message.action==="saved"&&<><small className="chat-saved-count">{chatText.savedCount.replace("{count}",message.savedCount)}</small><button type="button" className="chat-open-saved" onClick={()=>nav("saved")}>{chatText.openSaved}<ArrowRight size={14}/></button></>}
    </div>)}
    {chatLoading&&<div className="botmsg chat-loading" role="status"><span className="chat-spinner"/>{chatText.loading}</div>}
   </div>
   <form className="chatinput" onSubmit={sendChat} noValidate><input value={query} onChange={e=>{setQuery(e.target.value);if(chatError)setChatError("")}} placeholder={t.placeholder} aria-label={t.placeholder} disabled={chatLoading}/><button className="primary" type="submit" disabled={chatLoading}><ArrowRight size={17}/></button></form>
   {chatError&&<p className="chat-error" role="alert">{chatError}</p>}
   <div className="chatdisclaimer">{chatText.disclaimer}</div>
  </section>}
 </div>
}
function SchemeCard({s,t,lang,open,saved,toggleSave}){return <article className="schemecard"><div className="cardtop"><span className="tag">{getCategoryText(s.category,lang)}</span><button className="iconbutton" aria-label="Save scheme" onClick={()=>toggleSave(s.id)}><Bookmark size={17} fill={saved.includes(s.id)?"currentColor":"none"}/></button></div><h3>{getSchemeText(s,"name",lang)}</h3><p>{getSchemeText(s,"summary",lang)}</p><div className="cardmeta"><span>{s.level}</span><span>India</span></div><button className="cardlink" onClick={()=>open(s)}>{t.readMore}<ArrowUpRight size={16}/></button></article>}
function PageHead({eyebrow,title,desc}){return <div className="pagehead"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{desc}</p></div>}
function Footer({t,nav}){return <footer><div className="footerinner"><div className="brand"><span className="brandmark"><HeartHandshake size={21}/></span><span>benefit<span className="branddark">bridge</span><small>PUBLIC BENEFITS, MADE CLEAR</small></span></div><p>Independent student project · Not affiliated with any government department.</p><div><button onClick={()=>nav("about")}>{t.aboutTitle}</button><button onClick={()=>nav("schemes")}>{t.navSchemes}</button></div><small>© 2026 BenefitBridge</small></div></footer>}
export default App;