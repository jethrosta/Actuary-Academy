import boto3

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from botocore.client import Config
from dotenv import dotenv_values

config = dotenv_values('.env')

KEY_ID = config['KEY_ID']
KEY_NAME = config['KEY_NAME']
APPLICATION_KEY = config['APPLICATION_KEY']

S3_URL = config['S3_URL']
VIDEO_BUCKET = config['VIDEO_BUCKET']

s3 = boto3.client(
  's3',
  aws_access_key_id=KEY_ID,
  aws_secret_access_key=APPLICATION_KEY,
  endpoint_url=S3_URL,
  config=Config(signature_version='s3v4')
)

app = FastAPI()

origins = [
  "http://localhost:5173",
  "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
  filename = file.filename
  print(filename)
  with open(f'./{filename}', 'wb+') as f:
    f.write(await file.read())
    
  with open(f'./{filename}', 'rb') as f:
    s3.upload_fileobj(f, Bucket=VIDEO_BUCKET, Key=filename)
  
  import os
  os.remove(f'./{filename}')
            
# if __name__ == '__main__':
  
#   with open('./media/tes1.webm', 'rb') as data: 
#     s3.upload_fileobj(Fileobj=data, Bucket=VIDEO_BUCKET, Key='terbang.webm')