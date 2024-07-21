# EasyML  
Building a webapp to allow users to train models and make predictions  
Users will input a training data set, let the model train, and then input data to make predictions on.

## Cloud architecture (AWS):
Frontend: Lightsail or EC2   
Storing user data: DynamoDB  
Free model training: Lambda  
Premium features: Sagemaker  

## Monetization ($x/mth):
- Increase training time
- Allow users to save models
- Allow users to visualise predictor/response relationships
- Show feature importances
