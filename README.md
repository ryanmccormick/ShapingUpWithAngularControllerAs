# Code School: Shaping Up With Angular.js Example App Using ControllerAs Syntax
---
As someone who absolutely loves codeschool, I wanted to bring one of the Angular examples they have up to date using the ControllerAs syntax. 

For this example, I am porting over the code from: 
<https://github.com/codeschool/ShapingUpWithAngular.js>

And refactoring everything to use the controllerAs syntax as it is the current best practice for building scalable single page applications with Angular 1x.

For more information about the controllerAs syntax format:
<https://github.com/johnpapa/angular-styleguide/tree/master/a1>

## Changes
- Update Angular version from 1.2.15 to 1.6.4 to support newer features such as AngularJS `$q`
- Set app data in an Angular constant and return from a service. This approach allows a user to easily swap out for $http to pull data from a live API.
- Split files into separate modules by subject domain.
- Change image file paths in constants file to allow images to be pulled from the assets/images directory.
- Add http server to package.json and allow user to run local server with `npm start` instead of installing globally.


## How to Run the Example
1. Clone this repo
2. Install node_modules `npm install`
3. Run the example `npm start`
4. Browse to port `8080` or if that port is already in use, check your command line for the correct port.

## Original Readme File Text
---

# Shaping Up With Angular.js Example App

[Code School](http://codeschool.com/) course on [Angular.js](https://angularjs.org/).

## Setup

This application is just a collection of static files. Feel free to clone this
repository and open the [index.html](https://github.com/codeschool/ShapingUpWithAngular.js/blob/master/app/index.html) file in your browser.

Image assets for the course can be found in the [img](https://github.com/codeschool/ShapingUpWithAngular.js/tree/master/app/img) folder.

Some features require a server to be running. If you have node and npm
installed, you can run `npm install http-server -g`. Then run the `http-server`
command inside the `app` folder and you should be able to see the application
running at `http://127.0.0.1:8080/`.

It is also available here to [edit in your browser on plunkr](http://plnkr.co/edit/LXETQi?p=preview).

