
# Automation demo using cypress

  

[![CircleCI](https://circleci.com/gh/villaltacr/automation_demo/tree/master.svg?style=svg)](https://circleci.com/gh/villaltacr/automation_demo/tree/master)

  

Hi! This is a project in order to show how to automate a react/redux app using cypress

  
  

## Resources

  

We are going to use this demo site [https://react-redux.realworld.io/](https://react-redux.realworld.io/) to play around with cypress and automate all the login actions as well as create a new post.

  ## Tests added
  You can find the spec files inside the integration folder,
  the test implementations  are inside the support folder 
  
  + login scenarios 
	  + login as a register user
	  + return an error when you attemp to create a user with an existing email
	  + return an error when you attemp to login with a user that does not exist
	  + create an account

+ New Post Scenarios
	+ Create a new post


  

## Instructions

  

+ In order to execute this project locally ,you must install node js LTS version [https://nodejs.org/](https://nodejs.org/)

+ Clone this repo on you computer then go to the project folder and execute the following command in order to install all the dependecies required to run the project:

 

 

       npm install --save --dev
    

+ To open the cypress dashboard to run the tests via UI execute: 
+ `npx cypress open`
+ To run the project on headless mode execute : `npx cypress run or npm test` 
+ After that you can find the videos of each execution inside the videos folder.

Also the project has been integrated with circle-ci you can see the status by visiting this link :
[https://circleci.com/gh/villaltacr/automation_demo/tree/master](https://circleci.com/gh/villaltacr/automation_demo/tree/master)
