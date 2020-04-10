'use strict';

console.log('123')

//document.body.textContent = 'Hello';

// // anchor data to the parent element
var pEl = document.getElementById('movies');

// // create new element
// var liEl = document.createElement('li');

// // give new element some content
// liEl.textContent = 'This is my list of items.';

// // append the child element to the parent element
// pEl.appendChild(liEl);

var colors = ['red', 'black', 'yellow', 'blue', 'purple'];

for(var i = 0; i < colors.length; i++){
    // create element
    var liEl = document.createElement('li');
    // give it content
    liEl.textContent = `${colors[i]} is the Way`;
    // append the child to the parent
    pEl.appendChild(liEl);
}




















//daily cookie calculator:
// calculate random cookies 14 times 
// store to array

//output function:
// take results from cookcalc and display in correct format

//random number calculator function
// returns a number between min and max
function randomCalc(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    //The maximum is inclusive and the minimum is inclusive. used from:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  console.log(randomCalc(23,65));

//cookie calculator
// calculate random cookies 14 times 
// store to array

function cookieCalc(){
    cookieArr = [];
    for (i = 0; i < 14; i++){
        var random = Math.round(randomCalc(23,65)*seattleObj.avgCookie);
        cookieArr.push(random);
    }
    console.log(cookieArr);
}
cookieCalc();


timeArr: function (){
    var timeArr = [];
    for (i = 0; i < 14; i++){
        // if i < six, 
        // push i + 6 am: + cookieArr[i] to timeArr
        // if i = 6 
        // push i + 6 pm + cookieArr[i] to timeArr
        // if i > 6 
        // push i -6 + cookieArr[i] to timeArr
    }

}


var seattleObj = {
    maxCust: 65,
    minCust: 23,
    avgCookie: 6.3,
    hoursOpen: 14,
    locTot: 0,
    name: 'Seattle',
    seaCookieArr: [],
    seaArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (i = 0; i < 14; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.seaCookieArr.push(random);
        }
        return this.seaCookieArr;
    },
        seaTotCalc: function(){
        for (i = 0; i < this.seaCookieArr.length; i++){
            this.locTot = this.locTot + this.seaCookieArr[i];
        }
        return this.locTot;
    },
    seaArrCalc: function (){
        for (i = 0; i < 14; i++){
            if (i < 6){
            this.seaArr.push(`${i+6}am: ${this.seaCookieArr[i]} cookies`)
            }
            if (i === 6){
                this.seaArr.push(`12pm: ${this.seaCookieArr[i]} cookies`)
            }
            if (i > 6){
                this.seaArr.push(`${i-6}pm: ${this.seaCookieArr[i]} cookies`)
            }
        }
        this.seaArr.push(`Total: ${this.locTot} cookies`)
        return this.seaArr;
    }
}