![coloursLogo](src/img/color-app-icon.png)

## Overview

Colours is an application where a user can create projects and in detail save information of each color that was used.

### Framework

The app is developed in React and Typescript. For styling of app has Bootstrap has been applied. 

## Project Status

![](https://img.shields.io/badge/work%20in%20progress-grey?style=for-the-badge&logo=Statuspal&labelColor=blue)

## Project Screen Shots

###  Startpage
![startpage](src/img/colors-start-page.png)

###  Page when logged in
![mainpage](src/img/colors-mainpage.png)

## How to use?

### Access hosted application

This application is hosted on Heroku and you can access it on the following URL: https://colorkeeper.herokuapp.com/

### Install locally

Clone the git repository

```javascript
git clone https://github.com/rebeckaalsterlind/save_colours.git
```

Go to the folder

```javascript
cd save_colours
```

Use the package manager [npm](https://www.npmjs.com/) to install the modules used in our colour app.

```javascript
npm i
```

After the modules are downloaded and installed you can star the application locally.

```javascript
npm start
```

After the server started, navigate to the URL:

```javascript
http://localhost:3000
```
## Bootstrap Docs
https://getbootstrap.com/docs/5.1/getting-started/introduction/

## API Reference

We use the following API: [ncsapi](https://github.com/MatsHaby/ncsapi) to convert the NCS-color value that the user enters to hex format.

## Backend

More information about the backend can you find here: [color-backend](https://github.com/MatsHaby/color-backend)
