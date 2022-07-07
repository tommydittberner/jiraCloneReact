# Jira Clone

A small 2-week project I did when I moved from a team using Angular to one using React in Mai of 2021
in order to familiarize me with the framework and try out a bunch of things React has to offer.

It was not intended as a perfectly working solution, so there are still a few bugs and it sadly has very
few tests (I've since become more proficient using Jest)

### What it can do
- drag and drop between the status-columns will update the issue status
- create popup accessible from the sidenav
- details page for each issue with edit functionality
- confirmation popup on delete
- search for an issue by ID or by name (incl. autocompletion)
- dark mode toggle via custom react-hook

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### How to run

After starting the corresponding [SpringBoot-Application](https://github.com/t0d1/jiraCloneSpringBoot) type `npm start`. Open [http://localhost:3000](http://localhost:3000) 
to view it in the browser.
