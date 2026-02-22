console.log("Hello")
console.log("My first progrom in Javascript")

console.log("Hello")
console.log("My first progrom in Javascript")

age=22
console.log("second")

age="hello"
console.log(age);

if(true){
    var age =16
}
console.log(age);

function getname()
{
    var name="Anurag"
}
console.log(name)

if(true){
    var name="vishnu"
}
console.log(name)


//let
//props: 1)no rdeclaration
let name1;
// 2) re assign
// let coll="iter"
// console.log(coll)
// coll="iter,bbsr"
// // console.log(coll)
// coll-45
// console.log(coll)




//scoping   1)global scope
//2)block scope


// const
//1) have to initialise
//2) no reassign
//3)follows bloc


// const age1-22
//console.log(age1)


// {
//     const age2= 57

// }
// console.log(age2)


// if(true){
//     const coll2="iter"
// }
// console.log(coll2)

// function name(){
//     var y=0;
//     console.log(x)
//     console.log(y)
// }

// LET-- Is is Global and use Block scope, it can be re intialised but connot be re declared
//  let x =10
// {
//    var x= 11;
// //  }

// ** CONST**//
// It cannot be redeclared and reinitialze.
// it uses both global and blocked scope
// const x=10;
// x=11;  it is not possible 
{
   let x=10
  console.log(x)
  {
    console.log(x)
    let x=11
  }
  console.log(x)
}