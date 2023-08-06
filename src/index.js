import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// # import json
// # import boto3
// # s3 = boto3.client('s3')

// # def lambda_handler (event, context) :
// #     bucket = 'outputbucketofchartdata'
    
// #     transactionToUpload = {}
// #     transactionToUpload [ 'transactionId'] = '12345'
// #     transactionToUpload [ 'type' ] = 'PURCHASE'
// #     transactionToUpload['amount'] = 20
// #     transactionToUpload[ 'customerId'] = 'CID-11111'
    
// #     fileName = 'CID-11111' + '.json'
// #     uploadByteStream = bytes(json.dumps(transactionToUpload).encode( 'UTF-8'))
// #     s3.put_object (Bucket=bucket, Key=fileName, Body=uploadByteStream)
// #     print( 'Put Complete')