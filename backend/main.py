from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


faqs = [
    {"id": 1, "question": "What is an apple?", "answer": "A sweet red fruit."},
    {"id": 2, "question": "What is a banana?", "answer": "A long yellow fruit."}
]

class FAQ(BaseModel):
    id: Optional[int] = None  
    question: str
    answer: str

class FAQUpdate(BaseModel):
    question: Optional[str] = None  
    answer: Optional[str] = None


@app.get("/faqs", response_model=List[FAQ])
def get_faqs():
    return faqs


@app.get("/faqs/{faq_id}", response_model=FAQ)
def get_faq(faq_id: int):
    faq = next((faq for faq in faqs if faq["id"] == faq_id), None)
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return faq


@app.post("/faqs", response_model=FAQ)
def create_faq(faq: FAQ):
    new_faq = {"id": len(faqs) + 1, "question": faq.question, "answer": faq.answer}
    faqs.append(new_faq)
    return new_faq


@app.put("/faqs/{faq_id}", response_model=FAQ)
async def update_faq(faq_id: int, faq_update: FAQUpdate):
    faq = next((faq for faq in faqs if faq["id"] == faq_id), None)
    if faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found")
    
    if faq_update.question:
        faq["question"] = faq_update.question
    if faq_update.answer:
        faq["answer"] = faq_update.answer
    return faq


@app.delete("/faqs/{faq_id}")
def delete_faq(faq_id: int):
    global faqs
    faqs = [faq for faq in faqs if faq["id"] != faq_id]
    return {"message": "FAQ deleted successfully"}