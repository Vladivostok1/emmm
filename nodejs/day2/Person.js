function Person(){
    this.eat = function(){
        console.log("I am eating");
    }
    this.say = function(){
        console.log("I am saying");
    }
}
module.exports = Person;