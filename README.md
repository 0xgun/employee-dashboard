# Empoyee DashBoard

## Description

This is a simple employee dashboard that allows you to view the employee data in a table , filter, and sort the employee's data according to their attributes i.e Name,Age,Salary.

## Techstack used
  
* React
* Node
* Rest API
* Bootstrap
* CSS


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Api](#api)
* [Screenshots](#screenshots)
* [License](#license)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

This is a React Application  that allows you to view the employee data in a table , filter, and sort the employee according to their attributes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Screenshots 

* Home Page

![Home Page](https://github.com/0xgun/employee-dashboard/blob/master/public/assets/UI.jpg)
* Dashboard
![Dashboard](https://github.com/0xgun/employee-dashboard/blob/master/public/assets/dashboard.jpeg)
* Filter




## Api
* Create a REST API using json-server
* Create a new file called employee.json in the root of your project
* Copy the following JSON into the employee.json file
* Run the following command to start the API server
* Start Server
    ```
    npx json-server --watch employee.json --port 30001
    ```
* The API server will run on port 30001
* You can test the API by going to the following URL in your browser
    ```
    http://localhost:30001/employees
    ```
* You should see the following JSON returned
    ```
    [
        {
      "id": 7,
      "last_name": "Marshall",
      "gender": "female",
      "phone": "701-932-8553",
      "job_title": "Mobile Developer",
      "salary": 7500.0,
      "email": "briannamarshall6448@slingacademy.com",
      "first_name": "Brianna",
      "age": 27,
      "years_of_experience": 3,
      "department": "Product"
    }
    ]
    ```
    * You can also test the API using Postman
    
    ![Api Response](https://github.com/0xgun/employee-dashboard/blob/master/public/assets/postman.png)
   
    











## License

This project is licensed under the MIT license.