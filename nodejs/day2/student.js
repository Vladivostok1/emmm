var Person = require("./Person");
var util = require("util");
function Student(){
    Person.call(this);
    this.study = function(){
        console.log("I AM STUDYING");
    }
}
util.inherits(Student,Person);
module.exports = Student;