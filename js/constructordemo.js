// 'use strict';
// //Constructor DEMO
// //variable for a constructor ALWASY starts with a capital letter

// var newLocationArr = [];

// The order in which your construct expects data is how you need to send it in
function Location(name, dateReleased, episode, rottenTomatoScore = 0, yearRereleased = 0){
    this.name = name; //constructors use SEMI COLONS
    this.dateReleased = dateReleased;
    this.episode = episode;
    this.rottenTomatoScore = rottenTomatoScore;
    this.yearRereleased = yearRereleased;
    // this.vaderWasThere = function(){
    //     console.log (`Vader was present in $this.name}`);
    // }
    newLocationArr.push(this);
}

// // a prototype is a method( now a function) that is OUTSIDE the object
// // in a prototpye, you pass in the data by the way you call it. you are saying, with this obj, use this func
// //you don't have to pass any data as an argument, it pulls directly from the object
// Location.prototype.vaderWasThere = function(){
//     console.log (`Vader was present in ${this.name}`);
//     console.log (this.name, this.dateReleased, this.episode);
// }



// // var Portland = 
// new Location('Portland', 1988, 4);
// new Location('Detroit', 1990, 5);

// newLocationArr[0].vaderWasThere();

// //you can now access the object within the location array! the below will return the first indexed objects name:
// newLocationArr[0].name;

// // using the above with loops:
// for (var i = 0; i < newLocationArr.length; i++){
//     console.log(newLocationArr[i].name);
// }



// // create a constructor of cars
// //make model year color add 1 additional property of your choosing

// // create 3 cars

// //vroom

// var carArr = [];
// function Car(make, model, year, color, engine){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.engine = engine;
//     carArr.push(this);

// }

// new Car('Chevy', 'Camaro', 1988, 'Copper', 'V8')
// new Car('Subaru', 'Outback', 2008, 'Silver', 'Boxer 4')
// new Car('Jeep', 'Cherokee', 1996, 'Green', 'I6')

// console.log(carArr)

var movieArr = [];
var userFrom = document.getElementById('userForm')
userFrom.addEventListener('submit', handleSubmit); //no parenthesis after handleSubmit function bc it is invoked by the click.

function handleSubmit(event){
    event.preventDefault();

    var movieName = event.target.movieName.value;
    console.log(movieName);

    var movieYear = event.target.movieYear.value;
    console.log(movieYear);

    var movieEpisode = event.target.movieEpisode.value;
    console.log(movieEpisode);

    //we want the forms to clear after hitting submit while still saving the data previously 
    //entered into our variables.
    event.target.movieName.value = null;
    event.target.movieYear.value = null;
    event.target.movieEpisode.value = null;

    function StarWars(movieName, movieYear, movieEpisode){
        this.movieName = movieName; //constructors use SEMI COLONS
        this.movieYear = movieYear;
        this.movieEpisode = movieEpisode;
        movieArr.push(this);
    }
}

// it is ok to clear out the entire table and rerender function
//if you're looking for a challenge, look to append the new data to the end of the table