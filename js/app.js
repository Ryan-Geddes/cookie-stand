'use strict';
//NOTES FOR RANDOM CALC FUNCTION:
//The maximum is inclusive and the minimum is inclusive. used from:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var locationArr = [];

function Location(max,min,avg,hours,name,elementId){
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.hours = hours;
    this.locTot = 0;
    this.name = name;
    this.elementId = document.getElementById(elementId)
    this.cookieArr = [];
    this.locArr = [];
    locationArr.push(this);
}

new Location (65,23,6.3,14,'Seattle','seatab');
new Location (24,3,1.2,14,'Tokyo','toktab');
new Location (38,11,3.7,14,'Dubai','dubtab');
new Location (38,20,2.3,14,'Paris','partab');
new Location (16,2,4.6,14,'Lima','limtab');

Location.prototype.randomCalc = function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
Location.prototype.cookieCalc = function(){
    for (var i = 0; i < this.hours; i++){
        var random = Math.round(this.randomCalc(this.min, this.max)*this.avg);
        this.cookieArr.push(random);
    }
    return this.cookieArr;
}
Location.prototype.totCalc = function(){
    for (var i = 0; i < this.cookieArr.length; i++){
        this.locTot = this.locTot + this.cookieArr[i];
    }
    return this.locTot;
}
Location.prototype.locArrCalc = function(){
    this.totCalc();
    for (var i = 0; i < this.hours; i++){
        if (i < 6){
            this.locArr.push(this.cookieArr[i])
        }
        if (i === 6){
            this.locArr.push(this.cookieArr[i])
        }
        if (i > 6){
            this.locArr.push(this.cookieArr[i])
        }
    }
    this.locArr.push(this.locTot)
    return this.locArr;
}
Location.prototype.writeList = function(array, elementId){
    var array = this.locArr;
    var elementId = this.elementId;
    var name = this.name;
    var tdEl = document.createElement('td');
    tdEl.textContent = name;
    elementId.appendChild(tdEl);
    for (var i = 0; i < array.length; i++){
        // step 2create element
        var tdEl = document.createElement('td');
        // step 3 give it content
        tdEl.textContent = array[i];
        // step 4 append the child to the parent
        elementId.appendChild(tdEl);
}
}


for (var i = 0; i < locationArr.length; i++){
    locationArr[i].randomCalc();
    locationArr[i].cookieCalc();
    locationArr[i].locArrCalc();
    locationArr[i].totCalc();
    locationArr[i].writeList(this.locArr, this.uEl);
    console.log(locationArr[i]);
}

var hourTotArr = [];
function hourTotCalc(){
    var j = 0;
    var counter = locationArr[j].locArr.length
    for (var j = 0; j < counter; j++){
        var hourTotal = 0;
        for (var i = 0; i < locationArr.length; i++){
            hourTotal = hourTotal + locationArr[i].locArr[j];
        }
        hourTotArr.push(hourTotal);
    }
} 
hourTotCalc();
console.log(hourTotArr);

// var totEl = document.getElementById('tottab')
// for( var i = 0; i < hourTotArr.length; i++){
//     var tdEl = document.createElement('td');
//     tdEl.textContent = hourTotArr[i];
//     totEl.appendChild(tdEl);
// }

var tableHeadArr = [];
function headerCalc(){
    for (var i = 0; i < 14; i++){
        if (i < 6){
            tableHeadArr.push(`${i+6}am:`)
        }
        if (i === 6){
            tableHeadArr.push('12pm')
        }
        if (i > 6){
            tableHeadArr.push(`${i-6}pm`)
        }
    }
tableHeadArr.push('Daily Location Total')
}
headerCalc();
console.log(tableHeadArr);

function headerWrite (array, elementId){
    var totEl = document.getElementById(elementId)
    var name = 'Hours';
    var tdEl = document.createElement('th');
    tdEl.textContent = name;
    totEl.appendChild(tdEl);
    for (var i = 0; i < array.length; i++){

        var tdEl = document.createElement('th');

        tdEl.textContent = array[i];

        totEl.appendChild(tdEl);
    }
}

function hoursTotWrite (array, elementId){
    var totEl = document.getElementById(elementId)
    var name = 'Totals';
    var tdEl = document.createElement('td');
    tdEl.textContent = name;
    totEl.appendChild(tdEl);
    for (var i = 0; i < array.length; i++){

        var tdEl = document.createElement('td');

        tdEl.textContent = array[i];

        totEl.appendChild(tdEl);
    }
}

hoursTotWrite(hourTotArr, 'tottab');
headerWrite(tableHeadArr, 'tabhead');

//HOUR TOTAL ARRAY DEVELOPMENT NOTES
//loop through locArr and sum each array at index i
//push that sum value into a new array
//write that array to a new table line

// i is the index of the location, 0-5
// j is the index of the location's array
// ij   ij   ij   ij   ij   ij
// 01 + 11 + 21 + 31 + 41 + 51 = new array[0]
// 02 + 12 + 22 + 32 + 42 + 52 = new array [1]
// 03 + 13 + 23 + 33 + 43 + 53 = new array [2]



//Writing to CSS:

// step 1 anchor data to the parent element

// var seaEl = document.getElementById('sealist');
// var tokEl = document.getElementById('toklist');
// var dubEl = document.getElementById('dublist');
// var parEl = document.getElementById('parlist');
// var limEl = document.getElementById('limlist');
// var elArr = [seaEl, tokEl, dubEl, parEl, limEl];


// for loop to invoke each location's prototypes

//there is a better way to do this but manually setting up an element array will work for now.
//forloop through each location to call the CSS writelist function.

//var elArr = [seaEl, tokEl, dubEl, parEl, limEl];

// for (var i = 0; i < locationArr.length; i++){
//     writeList(locationArr[i], elArr[i]);
// }


// writeList(locationArr, tokEl);
// writeList(dubObj.locArr, dubEl);
// writeList(parObj.locArr, parEl);
// writeList(limObj.locArr, limEl);





// var seaObj = {
//     maxCust: 65,
//     minCust: 23,
//     avgCookie: 6.3,
//     hoursOpen: 14,
//     locTot: 0,
//     name: 'Seattle',
//     cookieArr: [],
//     locArr:[],
//     randomCalc:function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//       },
//     cookieCalc:function(){    
//         for (var i = 0; i < this.hoursOpen; i++){
//             var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
//             this.cookieArr.push(random);
//         }
//         return this.cookieArr;
//     },
//     totCalc: function(){
//         for (var i = 0; i < this.cookieArr.length; i++){
//             this.locTot = this.locTot + this.cookieArr[i];
//         }
//         return this.locTot;
//     },
//     locArrCalc: function (){
//         this.totCalc();
//         for (var i = 0; i < this.hoursOpen; i++){
//             if (i < 6){
//             this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
//             }
//             if (i === 6){
//                 this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
//             }
//             if (i > 6){
//                 this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
//             }
//         }
//         this.locArr.push(`Total: ${this.locTot} cookies`)
//         return this.locArr;
//     },
// }

// seaObj.cookieArr;
// seaObj.cookieCalc();
// seaObj.cookieArr;
// seaObj.locArr;
// seaObj.locArrCalc();
// console.log(seaObj.locArr);

    
// var tokObj = {
//     maxCust: 24,
//     minCust: 3,
//     avgCookie: 1.2,
//     hoursOpen: 14,
//     locTot: 0,
//     name: 'Tokyo',
//     cookieArr: [],
//     locArr:[],
//     randomCalc:function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//       },
//     cookieCalc:function(){    
//         for (var i = 0; i < this.hoursOpen; i++){
//             var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
//             this.cookieArr.push(random);
//         }
//         return this.cookieArr;
//     },
//     totCalc: function(){
//         for (var i = 0; i < this.cookieArr.length; i++){
//             this.locTot = this.locTot + this.cookieArr[i];
//         }
//         return this.locTot;
//     },
//     locArrCalc: function (){
//         this.totCalc();
//         for (var i = 0; i < this.hoursOpen; i++){
//             if (i < 6){
//             this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
//             }
//             if (i === 6){
//                 this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
//             }
//             if (i > 6){
//                 this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
//             }
//         }
//         this.locArr.push(`Total: ${this.locTot} cookies`)
//         return this.locArr;
//     },
// }

// tokObj.cookieArr;
// tokObj.cookieCalc();
// tokObj.cookieArr;
// tokObj.locArr;
// tokObj.locArrCalc();
// console.log(tokObj.locArr);

// var dubObj = {
//     maxCust: 38,
//     minCust: 11,
//     avgCookie: 3.7,
//     hoursOpen: 14,
//     locTot: 0,
//     name: 'Dubai',
//     cookieArr: [],
//     locArr:[],
//     randomCalc:function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//       },
//     cookieCalc:function(){    
//         for (var i = 0; i < this.hoursOpen; i++){
//             var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
//             this.cookieArr.push(random);
//         }
//         return this.cookieArr;
//     },
//     totCalc: function(){
//         for (var i = 0; i < this.cookieArr.length; i++){
//             this.locTot = this.locTot + this.cookieArr[i];
//         }
//         return this.locTot;
//     },
//     locArrCalc: function (){
//         this.totCalc();
//         for (var i = 0; i < this.hoursOpen; i++){
//             if (i < 6){
//             this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
//             }
//             if (i === 6){
//                 this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
//             }
//             if (i > 6){
//                 this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
//             }
//         }
//         this.locArr.push(`Total: ${this.locTot} cookies`)
//         return this.locArr;
//     },
// }

// dubObj.cookieArr;
// dubObj.cookieCalc();
// dubObj.cookieArr;
// dubObj.locArr;
// dubObj.locArrCalc();
// console.log(dubObj.locArr);


// var parObj = {
//     maxCust: 38,
//     minCust: 20,
//     avgCookie: 2.3,
//     hoursOpen: 14,
//     locTot: 0,
//     name: 'Paris',
//     cookieArr: [],
//     locArr:[],
//     randomCalc:function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//       },
//     cookieCalc:function(){    
//         for (var i = 0; i < this.hoursOpen; i++){
//             var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
//             this.cookieArr.push(random);
//         }
//         return this.cookieArr;
//     },
//     totCalc: function(){
//         for (var i = 0; i < this.cookieArr.length; i++){
//             this.locTot = this.locTot + this.cookieArr[i];
//         }
//         return this.locTot;
//     },
//     locArrCalc: function (){
//         this.totCalc();
//         for (var i = 0; i < this.hoursOpen; i++){
//             if (i < 6){
//             this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
//             }
//             if (i === 6){
//                 this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
//             }
//             if (i > 6){
//                 this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
//             }
//         }
//         this.locArr.push(`Total: ${this.locTot} cookies`)
//         return this.locArr;
//     },
// }

// parObj.cookieArr;
// parObj.cookieCalc();
// parObj.cookieArr;
// parObj.locArr;
// parObj.locArrCalc();
// console.log(parObj.locArr);


// var limObj = {
//     maxCust: 16,
//     minCust: 2,
//     avgCookie: 4.6,
//     hoursOpen: 14,
//     locTot: 0,
//     name: 'Tokyo',
//     cookieArr: [],
//     locArr:[],
//     randomCalc:function(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min; 
//       },
//     cookieCalc:function(){    
//         for (var i = 0; i < this.hoursOpen; i++){
//             var random = Math.round(this.randomCalc(this.minCust,this.maxCust)*this.avgCookie);
//             this.cookieArr.push(random);
//         }
//         return this.cookieArr;
//     },
//     totCalc: function(){
//         for (var i = 0; i < this.cookieArr.length; i++){
//             this.locTot = this.locTot + this.cookieArr[i];
//         }
//         return this.locTot;
//     },
//     locArrCalc: function (){
//         this.totCalc();
//         for (var i = 0; i < this.hoursOpen; i++){
//             if (i < 6){
//             this.locArr.push(`${i+6}am: ${this.cookieArr[i]} cookies`)
//             }
//             if (i === 6){
//                 this.locArr.push(`12pm: ${this.cookieArr[i]} cookies`)
//             }
//             if (i > 6){
//                 this.locArr.push(`${i-6}pm: ${this.cookieArr[i]} cookies`)
//             }
//         }
//         this.locArr.push(`Total: ${this.locTot} cookies`)
//         return this.locArr;
//     },
// }

// limObj.cookieArr;
// limObj.cookieCalc();
// limObj.cookieArr;
// limObj.locArr;
// limObj.locArrCalc();
// console.log(limObj.locArr);


// function writeList(objArray, uEl){
//     for (var i = 0; i < objArray.length; i++){
//         // create element
//         var liEl = document.createElement('li');
//         // give it content
//         liEl.textContent = ` ${objArray[i]}`;
//         // append the child to the parent
//         uEl.appendChild(liEl);
//     }
// }
