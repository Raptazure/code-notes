// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");

console.log("Hello, ReScript!");

function Printer(Item) {
  var print = function (t) {
    console.log(Curry._1(Item.toString, t));
    
  };
  var printList = function (list) {
    console.log($$String.concat(", ", List.map(Item.toString, list)));
    
  };
  return {
          print: print,
          printList: printList
        };
}

function greeting(person) {
  if (typeof person === "number") {
    if (person !== 0) {
      return "Hello Director.";
    } else {
      return "Hey Professor!";
    }
  }
  var anyOtherName = person._0;
  if (anyOtherName === "Richard") {
    return "Still here Ricky?";
  } else {
    return "Hey, " + (anyOtherName + ".");
  }
}

exports.Printer = Printer;
exports.greeting = greeting;
/*  Not a pure module */
