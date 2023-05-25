const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


function isItFriday(today) {
    if( today === "Friday") {
    return 'Yes'
    } else {
        return 'Nope'
    }
}


Given('today is Sunday', function () {
    this.today = "Sunday";
  }); 

Given('today is Friday', function () {
    this.today = "Friday";
  });

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
  });

Then('I should be told {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });


  

Given('Today is it Friday', function () {
    this.day === "Friday";
});

function isItYesterday(today) {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if( today === "Friday") {
     let day =  week.slice(3,4).toString()
    return day
    } else {
        return "I dont"
    }  
  };

When('I ask what is the day yesterday', function () {
 this.actualAnswer = isItYesterday(this.today)
});

Then('I should be told Yesterday', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
  });


