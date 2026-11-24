import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.post("/api/chat",async(req,res)=>{
  const {message,language="en",schemeContext=""}=req.body||{};
  if(!message||typeof message!=="string"||message.length>2000)return res.status(400).json({error:"Enter a question under 2000 characters."});
  if(!process.env.GEMINI_API_KEY)return res.status(503).json({error:"AI is not configured yet. Add GEMINI_API_KEY to the server environment."});
  try{
    const prompt=`You are BenefitBridge assistant. Explain only the supplied government scheme context. Do not invent eligibility, document requirements, deadlines, benefits or official URLs. If information is missing, say it must be verified on the official portal. This is informational, not an eligibility decision. Reply in ${language==="hi"?"Hindi":"English"}.\\nScheme context: ${schemeContext}\\nUser question: ${message}`;
    const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});
    const data=await r.json();
    if(!r.ok) return res.status(502).json({error:"AI provider request failed. Please try again."});
    res.json({reply:data.candidates?.[0]?.content?.parts?.map(p=>p.text).join("\\n")||"I couldn't generate a response."});
  }catch(e){res.status(500).json({error:"The assistant is temporarily unavailable."});}
});
app.listen(3001,()=>console.log("BenefitBridge API running on http://localhost:3001"));