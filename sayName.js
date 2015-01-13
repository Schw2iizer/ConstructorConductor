//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

 var Jeff = new Person("Jeff", 34);
 var Cam = new Person("Cam", 33);
 var Mike = new Person("Mike", 37);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.


Person.prototype.sayName = function(){
	alert(this.name);
}

Mike.sayName()

