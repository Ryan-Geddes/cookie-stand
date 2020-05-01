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
    this.elementId = elementId;//document.getElementById(elementId)
    this.cookieArr = [];
    this.locArr = [];
    // this.cookieCalc(); this will auto generate the instead of having to run the for loop
    locationArr.push(this);
}

new Location (65,23,6.3,14,'Seattle','seatab');
new Location (24,3,1.2,14,'Tokyo','toktab');
new Location (38,11,3.7,14,'Dubai','dubtab');
new Location (38,20,2.3,14,'Paris','partab');
new Location (16,2,4.6,14,'Lima','limtab');

Location.prototype.randomCalc = function(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max)
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
Location.prototype.writeList = function(){
    var row = document.getElementById(this.elementId);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    row.appendChild(tdEl);
    for (var i = 0; i < this.locArr.length; i++){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.locArr[i];
        row.appendChild(tdEl);
}
}
//function renderArrays
for (var i = 0; i < locationArr.length; i++){
    locationArr[i].randomCalc();
    locationArr[i].cookieCalc();
    locationArr[i].locArrCalc();
    locationArr[i].totCalc();
    locationArr[i].writeList();
    console.log(locationArr[i]);
}

var hourTotArr = [];
function hourTotCalc(){
    var j = 0;
    var counter = locationArr[j].locArr.length
    for (var j = 0; j < counter; j++){
        var hourTotal = 0;
        for (var i = 0; i < locationArr.length; i++){
            hourTotal += locationArr[i].locArr[j];
        }
        hourTotArr.push(hourTotal);
    }
} 

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

function headerWrite (array, elementId){
    headerCalc();
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
    hourTotCalc();
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






//HOURTOTAL ARRAY DEVELOPMENT NOTES
//loop through locArr and sum each array at index i
//push that sum value into a new array
//write that array to a new table line

// i is the index of the location, 0-5
// j is the index of the location's array
// ij   ij   ij   ij   ij   ij
// 01 + 11 + 21 + 31 + 41 + 51 = new hourlytotalarray[0]
// 02 + 12 + 22 + 32 + 42 + 52 = new hourlytotalarray[1]
// 03 + 13 + 23 + 33 + 43 + 53 = new hourlytotalarray[2]
// etc.


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



//New Location Form


var userForm = document.getElementById('userForm')
userForm.addEventListener('submit', handleSubmit); 
//no parenthesis after handleSubmit function bc it is invoked by the click.

function handleSubmit(event){
    event.preventDefault();

    var locName = event.target.locName.value;
    var max = parseInt(event.target.maxCust.value);
    var min = parseInt(event.target.minCust.value);
    var avg = parseInt(event.target.avgCookies.value);
    var hours = parseInt(event.target.hoursOpen.value);
    var elId = event.target.locName.value;
    var elId = elId.toLowerCase();

    //we want the forms to clear after hitting submit while still saving the data previously 
    //entered into our variables.
    event.target.locName.value = null;
    event.target.maxCust.value = null;
    event.target.minCust.value = null;
    event.target.avgCookies.value = null;
    event.target.hoursOpen.value = null;

    new Location (max,min,avg,hours,locName,elId);
    console.log(locationArr);
    newLocationTrRender(elId);
    calcNewLoc();
}

function newLocationTrRender(elementId){
    var table = document.getElementById('table');
    var newTrEl = document.createElement('tr');
    newTrEl.setAttribute("id", elementId);
    newTrEl.textContent = name;
    table.appendChild(newTrEl);

}

//this function calculates the hourly totals for the new location
function calcNewLoc(){
    var i = locationArr.length - 1;
    locationArr[i].randomCalc();
    locationArr[i].cookieCalc();
    locationArr[i].locArrCalc();
    locationArr[i].totCalc();
    locationArr[i].writeList();
}


//write this in a new render function


// function renderNewLoc(array, elementId){
//     var array = locationArr;
// // // anchor data to the parent element
// var pEl = document.getElementById('movies');

// // // create new element
//  var liEl = document.createElement('li');

// // // give new element some content
//  liEl.textContent = 'This is my list of items.';

// // // append the child element to the parent element
//  pEl.appendChild(liEl);

//  Location.prototype.writeList = function(array, elementId){
//     var array = this.locArr;
//     var elementId = this.elementId;
//     var name = this.name;
//     var tdEl = document.createElement('td');
//     tdEl.textContent = name;
//     elementId.appendChild(tdEl);
//     for (var i = 0; i < array.length; i++){
//         var tdEl = document.createElement('td');
//         tdEl.textContent = array[i];
//         elementId.appendChild(tdEl);
// }

// Location.prototype.writeList = function(){
//     var row = document.getElementById(this.elementId);
//     var tdEl = document.createElement('td');
//     tdEl.textContent = this.name;
//     row.appendChild(tdEl);
//     for (var i = 0; i < this.locArr.length; i++){
//         var tdEl = document.createElement('td');
//         tdEl.textContent = this.locArr[i];
//         row.appendChild(tdEl);
// }


// locationArr[5].writeList(this.locArr, this.uEl);

// THE NEW table row has been rendered
//I now want to:
//calculate the new locations hourly totals --> done with calcNewLoc
//push those totals into the new Location's locArr --> done with calcNewLoc
//calculate the Loctot --> done with calcNewLoc
//I SHOULD REFACTOR MY CODE TO RUN THOSE LOOPS IN THE OBJECT INSTEAD OF A SEPARATE FOR LOOP?
//then push the new location's index in locArr into tds which are appended into the newly created tr





//write this in a new render function
// locationArr[5].writeList(this.locArr, this.uEl);





// var hourTotArr = [];
// function hourTotCalc(){
//     var j = 0;
//     var counter = locationArr[j].locArr.length
//     for (var j = 0; j < counter; j++){
//         var hourTotal = 0;
//         for (var i = 0; i < locationArr.length; i++){
//             hourTotal += locationArr[i].locArr[j];
//         }
//         hourTotArr.push(hourTotal);
//     }
// } 

// function hoursTotWrite (array, elementId){
//     hourTotCalc();
//     var totEl = document.getElementById(elementId)
//     var name = 'Totals';
//     var tdEl = document.createElement('td');
//     tdEl.textContent = name;
//     totEl.appendChild(tdEl);
//     for (var i = 0; i < array.length; i++){

//         var tdEl = document.createElement('td');

//         tdEl.textContent = array[i];

//         totEl.appendChild(tdEl);
//     }
// }

// hoursTotWrite(hourTotArr, 'tottab');
// headerWrite(tableHeadArr, 'tabhead');

// var body = getelementsbytagname('body');


//HELPER CREATE ELEMENT FUNCTION FROM 4/21 DEMO 

function createElement(element, content, parent){
    var newElement = document.createElement(element);
    newElement.textContent = content;
    parent.appendChild(newElement);
    return newElement;
}

//if you declare the parent as a variable earlier in the code you 
//can just plug it in instead of getting by tag name
createElement('h1','hellow wolrd', document.getElementsByTagName('body')[0]);


// false turns off console logs, true turns them on
var debug = false

if (debug) {
    console.log(variable)
}
