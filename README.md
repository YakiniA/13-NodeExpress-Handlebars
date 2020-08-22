# Node Express Handlebars

### Overview

This assignment is used for creating a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). MVC design pattern is followed; Node and MySQL are used to query and route data in our app, and Handlebars to generate final HTML view.

### User Story 

AS A user, I want to be able to eat the burgers I like

I WANT to be able to submit a burger's name, that displays the burger on the left side of the page with `Devour it!` button

SO THAT I can get the burger `Devoured` by pressing the `Devour it!` button


### Prerequisite

To execute the burger application, the user must first install node.js.

Steps to Install NodeJS: [Node.js Installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#windows-node-version-managers)

After installing node.js

To install NPM module dependencies, run the command:

```
npm install
```

The application will be invoked with the following command:

```
npm start or node server.js
```

### NPM Module

* express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Used express server for this project and also sets up the Express app to handle data parsing.

* mysql - Used mySQL method for connecting to the database and perform queries.

* express-handlebars - Used handlebars for separating layout and content. Its a view Engine.

### Database

   * Created the database `burgers_db`.
   * Switch to or use the `burgers_db`.
   * Create a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.
