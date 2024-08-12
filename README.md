# EasyML  
Building a webapp to allow users to train models and make predictions  
Users will input a training data set, let the model train, and then input data to make predictions on.  

## Getting started:
Create local branch  
Follow the readme instructions in the frontend folder to setup frontend  
Follow the instructions on (https://docs.djangoproject.com/en/5.1/intro/install/) to install Django, run using python manage.py runserver while in backend folder

## Cloud architecture (AWS):
Frontend: Lightsail or EC2 (Lightsail looks to be cheaper/ EC2 more for enterprise level)  
Storing user data: DynamoDB  
Free model training: Lambda  
Premium features: Sagemaker    
CloudWatch (trigger lambda/ sagemaker training)?  
  
## Frontend:
Svelte

## Backend:  
Django
  
## Monetization ($x/mth):
- Increase training time
- Allow users to save models
- Allow users to visualise predictor/response relationships
- Show feature importances

