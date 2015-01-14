/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var array = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var tyler = new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");
array.push(tyler);

var cahlan = new User("Cahlan", "Cahlan@devmounta.in", "iLoveHashtags");
array.push(cahlan);

var lenny = new User("Lenny", "lenny@theLenster@gmail.com", "iLoveLentilSoup");
array.push(lenny);

// OR ------ ANOTHER WAY TP WRITE IT BELOW WITHOUT USING VARIABLES

// users.push{
// 	new User("Tyler", "tylermcginnis33@gmail.com", "iLoveJS");
// 	new User("Cahlan", "Cahlan@devmounta.in", "iLoveHashtags");
// 	new User("Lenny", "lenny@theLenster@gmail.com", "iLoveLentilSoup");
// }


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log(array[0]);


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

console.log(array[2]);


//Now create another instance of User using your own information and then add that to your users array.

var jeff = new User("Jeff", "jefftelford@gmail.com", "iLoveThis");
array.push(jeff);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < Array.length; i++){
  console.log(array[i].name);
}


