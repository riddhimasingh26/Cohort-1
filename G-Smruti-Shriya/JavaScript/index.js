console.log("Hello World")

//Delaring Variables 
//var
var name = "G SMruti Shriya"
name = "Smruti"
console.log(name)
// Doesnt respect any scope
{
    var age = 18 // block scope
}
console.log(age)

//functional scope

function Varname(){
    var age = 48
    console.log(age)
}
Varname()


//let
let nme = "G Smruti Shriya"
console.log(nme)

//const kinda works like private in java
const nm = "Smruti"
nm = "heyy"
console.log(nm)
 // This throws a error message cause we try to re assign it

 //We continued on these principals for a while
 
