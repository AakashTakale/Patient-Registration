# Getting Started with Patient Registration Website

### Website Live
[https://aakashtakale.github.io/patient-registration/](https://aakashtakale.github.io/patient-registration/)

## Alternative method (To Run Locally)

### Step 1. Copy/Download the project
    git clone https://github.com/AakashTakale/patient-registration.git

### Step 2. Run the application
    npm start

## Follow below steps only if website doesn't work as expected.

### Step 2. You will need to change the URL for backend
    From Patient.js 
      - Comment line 21: const url = 'https://my-json-server.typicode.com/AakashTakale/patient-registration/patients'
      - Un-comment line 20: const url = 'http://localhost:5000/patients'
        
    From Doctor.js
      - Comment line 19: const url = 'https://my-json-server.typicode.com/AakashTakale/patient-registration/patients'
      - Un-Comment line 18: const url = 'http://localhost:5000/patients'
        
    Save the changes.

### Step 3. I have used JSON-Server as backend. Start the Server
    npm server

### Step 4. Run the application
    npm start

### Screenshots

#### Home Page
![home-page](https://user-images.githubusercontent.com/10836591/156942620-ae948caa-d6ab-4f27-8607-a479f169e908.JPG)

#### Patient Registration Form
![patient-registration-form](https://user-images.githubusercontent.com/10836591/156942629-5859344f-01a4-4c3c-a1dd-d40418d1912d.JPG)

#### Form Validations
![form-validations](https://user-images.githubusercontent.com/10836591/156942641-92e6252b-c953-446a-9f1b-3e1efc888417.JPG)

#### Appointment Confirmation
![appointment-confirmation](https://user-images.githubusercontent.com/10836591/156942636-6aa20cd8-007c-4ab5-8c7f-a969ed5ac117.JPG)

#### Doctor (Admin) Page
![doctor-homepage](https://user-images.githubusercontent.com/10836591/156942648-1aa36632-7ad0-488f-8a09-c117819cd004.JPG)

### Key Features

1. Two separte components for Doctor (Admin) and Patient.
2. Patient form has custom validations enabled on form submission.
3. Doctor (Admin) can view the patients scheduled appointments in an ascending order.
