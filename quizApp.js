//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var User = function(name, email, password, totalScore){
	this.name = name;
	this.email = email;
	this.password = password;
	this.totalScore = totalScore
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title, answersArray, rightAnswer, easy, medium, hard){
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.easy = easy;
	this.medium = medium;
	this.hard = hard;
}


//Create a users Array which is going to hold all of our users.

var Users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var Jeff = new Users("Jeff", "jefftelford@gmail.com", "hello");
var Mike = new Users("Mike", "mg@yah.com", "world");
var Trent = new Users("Trent", "tre@gma.com", "mouse");


//Create a questions Array which is going to hold all of our questions

var Questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var inheritance = new Question("T/F: Inheritance is achieved in Javascript through Prototypes?", "T", "hard");
var javascript = new Question("T/F: Javascript is just a scripting version of Java", "T", "easy");
var check = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks types and value", "F", "medium");
var

//Now push all of your instances of Question into the questions Array

 Questions.push(inheritance);
 Questions.push(javascript);
 Questions.push(check);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

