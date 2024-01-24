class NewString {
    constructor(value){
        this.value = value
    }

    myNewMethod( ){
        return this.value.toUpperCase()
    }
}

const myNewString = new NewString('pott')
console.log(myNewString.myNewMethod())


// sol 2
String.prototype.myNewMethod = function() {
    return this.toUpperCase();
};