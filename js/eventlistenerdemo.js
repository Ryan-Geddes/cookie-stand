'use strict';

var allAlpacas = [];

function Alpaca(name, src){
    this.name = name;
    this.src = src;
    this.clicked = 0;
    allAlpacas.push(this);
}

//randomixer function
function randomizer(max){
    return Math.floor(Math.random() * max)
}


//create a function that will pick two numbers and randomly generate
var imageOneEl = document.getElementById('alpaca-image-1');
var imageTwoEl = document.getElementById('alpaca-image-2');
var divEl = document.getElementById('alpaca-container')

function imageGenerator(){
    var pic1 = randomizer(allAlpacas.length);
    var pic2 = randomizer(allAlpacas.length);
    
    imageOneEl.src = allAlpacas[pic1].src;
    imageOneEl.title = allAlpacas[pic1].name;

    imageTwoEl.src = allAlpacas[pic2].src;
    imageTwoEl.title = allAlpacas[pic2].name;
}



new Alpaca('chinook', './images/chinook.jpg');
new Alpaca('family', './images/family.jpg');
new Alpaca('fish', './images/fish.jpg');

function handleClick(event) {
    //increment our clicked property  'clicks' and generate two new images
    var clickedAlpaca = event.target.title;
    for (var i = 0; i < allAlpacas.length; i++){
        if (clickedAlpaca === allAlpacas[i].name){
            allAlpacas[i].clicked++;
        }
    }

    imageGenerator();
}


divEl.addEventListener('click', handleClick);


imageOneEl.src = allAlpacas[0].src;
imageOneEl.title = allAlpacas[0].name;


imageTwoEl.src = allAlpacas[1].src;
imageTwoEl.title = allAlpacas[1].name;

imageGenerator();