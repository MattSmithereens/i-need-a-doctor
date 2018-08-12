# Doctor Finder

#### Epicodus JavaScript week 2 independent project

#### By Matt Smith

## Description

This site will allow a user to search for a doctor in Portland via a number of criteria using the BetterDoctor API.

## User Stories

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)


## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* Create a file in the root directory called `.env` with your API key written in this format: **exports.apiKey** = **_API KEY HERE_**
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:8080` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma
* Abel Trotter's wonderful JS Setup tool

## Links

* GitHub Repo: https://github.com/MattSmithereens/i-need-a-doctor

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Matt Smith**
