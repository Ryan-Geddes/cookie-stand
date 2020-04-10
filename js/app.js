'use strict';
//NOTES FOR RANDOM CALC FUNCTION:
    //The maximum is inclusive and the minimum is inclusive. used from:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


var seaObj = {
    maxCust: 65,
    minCust: 23,
    avgCookie: 6.3,
    hoursOpen: 14,
    locTot: 0,
    name: 'Seattle',
    cookieArr: [],
    locArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (var i = 0; i < this.hoursOpen; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.cookieArr.push(random);
        }
        return this.cookieArr;
    },
    totCalc: function(){
        for (var i = 0; i < this.cookieArr.length; i++){
            this.locTot = this.locTot + this.cookieArr[i];
        }
        return this.locTot;
    },
    locArrCalc: function (){
        this.totCalc();
        for (var i = 0; i < this.hoursOpen; i++){
            if (i < 6){
            this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
            }
            if (i === 6){
                this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
            }
            if (i > 6){
                this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
            }
        }
        this.locArr.push(`Total: ${this.locTot} cookies`)
        return this.locArr;
    },
}

seaObj.cookieArr;
seaObj.cookieCalc();
seaObj.cookieArr;
seaObj.locArr;
seaObj.locArrCalc();
console.log(seaObj.locArr);

    
var tokObj = {
    maxCust: 24,
    minCust: 3,
    avgCookie: 1.2,
    hoursOpen: 14,
    locTot: 0,
    name: 'Tokyo',
    cookieArr: [],
    locArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (var i = 0; i < this.hoursOpen; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.cookieArr.push(random);
        }
        return this.cookieArr;
    },
    totCalc: function(){
        for (var i = 0; i < this.cookieArr.length; i++){
            this.locTot = this.locTot + this.cookieArr[i];
        }
        return this.locTot;
    },
    locArrCalc: function (){
        this.totCalc();
        for (var i = 0; i < this.hoursOpen; i++){
            if (i < 6){
            this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
            }
            if (i === 6){
                this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
            }
            if (i > 6){
                this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
            }
        }
        this.locArr.push(`Total: ${this.locTot} cookies`)
        return this.locArr;
    },
}

tokObj.cookieArr;
tokObj.cookieCalc();
tokObj.cookieArr;
tokObj.locArr;
tokObj.locArrCalc();
console.log(tokObj.locArr);

var dubObj = {
    maxCust: 38,
    minCust: 11,
    avgCookie: 3.7,
    hoursOpen: 14,
    locTot: 0,
    name: 'Dubai',
    cookieArr: [],
    locArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (var i = 0; i < this.hoursOpen; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.cookieArr.push(random);
        }
        return this.cookieArr;
    },
    totCalc: function(){
        for (var i = 0; i < this.cookieArr.length; i++){
            this.locTot = this.locTot + this.cookieArr[i];
        }
        return this.locTot;
    },
    locArrCalc: function (){
        this.totCalc();
        for (var i = 0; i < this.hoursOpen; i++){
            if (i < 6){
            this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
            }
            if (i === 6){
                this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
            }
            if (i > 6){
                this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
            }
        }
        this.locArr.push(`Total: ${this.locTot} cookies`)
        return this.locArr;
    },
}

dubObj.cookieArr;
dubObj.cookieCalc();
dubObj.cookieArr;
dubObj.locArr;
dubObj.locArrCalc();
console.log(dubObj.locArr);


var parObj = {
    maxCust: 38,
    minCust: 20,
    avgCookie: 2.3,
    hoursOpen: 14,
    locTot: 0,
    name: 'Paris',
    cookieArr: [],
    locArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (var i = 0; i < this.hoursOpen; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.cookieArr.push(random);
        }
        return this.cookieArr;
    },
    totCalc: function(){
        for (var i = 0; i < this.cookieArr.length; i++){
            this.locTot = this.locTot + this.cookieArr[i];
        }
        return this.locTot;
    },
    locArrCalc: function (){
        this.totCalc();
        for (var i = 0; i < this.hoursOpen; i++){
            if (i < 6){
            this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
            }
            if (i === 6){
                this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
            }
            if (i > 6){
                this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
            }
        }
        this.locArr.push(`Total: ${this.locTot} cookies`)
        return this.locArr;
    },
}

parObj.cookieArr;
parObj.cookieCalc();
parObj.cookieArr;
parObj.locArr;
parObj.locArrCalc();
console.log(parObj.locArr);


var limObj = {
    maxCust: 16,
    minCust: 2,
    avgCookie: 4.6,
    hoursOpen: 14,
    locTot: 0,
    name: 'Tokyo',
    cookieArr: [],
    locArr:[],
    randomCalc:function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      },
    cookieCalc:function(){    
        for (var i = 0; i < this.hoursOpen; i++){
            var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
            this.cookieArr.push(random);
        }
        return this.cookieArr;
    },
    totCalc: function(){
        for (var i = 0; i < this.cookieArr.length; i++){
            this.locTot = this.locTot + this.cookieArr[i];
        }
        return this.locTot;
    },
    locArrCalc: function (){
        this.totCalc();
        for (var i = 0; i < this.hoursOpen; i++){
            if (i < 6){
            this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
            }
            if (i === 6){
                this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
            }
            if (i > 6){
                this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
            }
        }
        this.locArr.push(`Total: ${this.locTot} cookies`)
        return this.locArr;
    },
}

limObj.cookieArr;
limObj.cookieCalc();
limObj.cookieArr;
limObj.locArr;
limObj.locArrCalc();
console.log(limObj.locArr);

// // anchor data to the parent element
var seaEl = document.getElementById('sealist');
var tokEl = document.getElementById('toklist');
var dubEl = document.getElementById('dublist');
var parEl = document.getElementById('parlist');
var limEl = document.getElementById('limlist');

function writeList(objArray, uEl){

    for (var i = 0; i < objArray.length; i++){
        // create element
        var liEl = document.createElement('li');
        // give it content
        liEl.textContent = ` ${objArray[i]}`;
        // append the child to the parent
        uEl.appendChild(liEl);
    }
}

writeList(seaObj.locArr, seaEl);
writeList(tokObj.locArr, tokEl);
writeList(dubObj.locArr, dubEl);
writeList(parObj.locArr, parEl);
writeList(limObj.locArr, limEl);
