from flask import Flask, jsonify, request
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader
from PIL import Image
import pytesseract
import pandas as pd
import numpy as np
import re
import string
import spacy
from sklearn.feature_extraction.text import TfidfTransformer
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)


path_to_tesseract = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

nlp = spacy.load('en_core_web_md', disable=['parser', 'ner'])

def lemmatization(text,allowed_postags=['NOUN', 'ADJ']): 
    doc = nlp(text) 
    out = [token.lemma_ for token in doc if token.pos_ in allowed_postags]
    s = " ".join(out)
    return s

def predict(text):
    text = lemmatization(text)
    loaded_model = pickle.load(open('lda.sav', 'rb'))

    # result = loaded_model.predict(tfidf.transform("Coinbase closed my account for no reason and furthermore refused to give me a reason despite dozens of request"))
    # print(result)
    id_to_category = {0: 'address proof', 1: 'bank-statements', 2: 'business proof', 3: 'employment proof', 4: 'fund raising', 5: 'identity proof', 6: 'invoices', 7: 'personal finance statement', 8: 'power of attorney', 9: 'receipts', 10: 'salary slip', 11: 'tax return'}

    tfidf = pickle.load(open("vectorizer.pickle", "rb"))

    texts = [text]
    text_features = tfidf.transform(texts)
    predictions = loaded_model.predict(text_features)
    # print(len(text_features))
    # print(len(text_features[0]))
    print(loaded_model)
    result = []
    for text, predicted in zip(texts, predictions):
        result.append(format(id_to_category[predicted]))
        # print('"{}"'.format(text))
        # print("  - Predicted as: '{}'".format(id_to_category[predicted]))
        # print("")
    # print("result", result)
    return result

def imgToWord(img_name):
    path_to_image = img_name
    pytesseract.pytesseract.tesseract_cmd = path_to_tesseract
    img = Image.open(path_to_image)
    text = pytesseract.image_to_string(img)
    return text


def pdfToWord(pdf_name):
    print(pdf_name)
    reader = PdfReader(f'E:/Dissonance/dissonance-hackathon2/flask/{pdf_name}')
    page = reader.pages[0]
    text = page.extract_text()
    return text


# @app.route("/", methods=['GET', 'POST'])
# def uploadFile():
#     if request.method == 'POST':
#         f = request.files['file']
#         f.save(secure_filename(f.filename))
#         if f.filename.split('.')[-1] == 'pdf':
#             return pdfToWord(f.filename)
#         else:
#             return imgToWord(f.filename)
#     return "NOt working"

@app.route("/get_classification", methods=['GET'])
def getClassification():
    # print(request.files)
    f = request.files['file']
    f.save((f.filename))
    text = ''
    #image/pdf aayega then call apt function
    if f.filename.split('.')[-1] == 'pdf' or f.filename.split('.')[-1] == 'PDF':
        print(f.filename)
        text = pdfToWord(f.filename)
    else:
        text = imgToWord(f.filename)
    print("1")
    result = predict(text)
    print("2")
    print(result)
    return result
    

@app.route('/')
def hello():
    return "hello"

@app.route("/test/", methods=['GET'])
def get_img():
   language = request['data1']
   print(language)
   return "args"


if __name__ == "__main__":
    app.run(debug=True, port=5001)