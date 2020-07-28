console.log("testing !!")
//==============================================
//
//      VARIABLES
//==============================================
//OLD JAVASCRIPT

var list =["apple","orange","banana"];
list = ["apple","orange"];
var list = ["pen","pencil"]
// we can redeclare and reassign  variables here
// var variables are of global scope
console.log(list)
    function sayName() {
        console.log(list);
        var name = "archana"
        console.log(name);
    }
sayName();
//console.log(name);   //this will o/p error name not defined 
//var variable inside a fun has scope inside that function only

//ES6
// const and let keywords
const things =["book","pen","pencil"];
//things = ["books"]; // TypeError: Assignment to constant variable.
// Redeclare or Reassignment not possible for const keyword
let items = ["book","pen","pencil","bag"];
items = ["book","pen"];
console.log(items)
//let items = ["book","pen"]; //SyntaxError: Identifier 'items' has already been declared
//Redeclaration not possible for let variables

/**** TIP: start with const variables rewrite to let whenever you need reassignment of variables */

//***** BLOCK SCOPING
const numbers =[1,2,3,4];
for(let i=0;i<numbers.length;i++){
    console.log(i);
}
//console.log(i); //ReferenceError: i is not defined
//**** ES6 has block level scoping
//===============================================

//===============================================
//
//          STRING CONCATENATION
//
//Old JS
var name = "Raj"
console.log("Hi this is "+ name);


//ES6 
const msg ="pass info";
const user ="guest";
console.log(`"hey" this is a ${msg} for ${user}`)
//===============================================
//
//          OBJECT LITREAL
//
//Old JS

// function getBook(title,author){
//    return{
//        title: title,
//        author:author

//     };
// }

// var book = getBook("test","raj");
// console.log(book);
//ES6

function getBook(title,author){
    return{
        title,
        author
 
     };
 }
 const book = getBook("test","raj");
console.log(book);
//===============================================
//
//          OBJECT DECONSTRUCTION
//
//Old JS
var userDetails = {
    name:"raj",
    age:30
}

var userName = userDetails.name;
console.log(userName);

//====================ES6 ===================================//

const details = {
    userName:"raj",
    userAge:30,
    userItems:["milk","pen"]
}

const {username,userItems} = details;
console.log(userItems);
//===============================================
//
//          FUNCTIONS AND ARROW FUNCTIONS
//
//Old JS
function sayName(){
    console.log("my name is angel");
}
var sayAge = function(){
    console.log("My age is , well i dont want to tell you!")

}
sayName();
sayAge();



//====================ES6 ===================================//
const sayLocation = () => {
    console.log("my location is unknown")
}

const sayPrice = (product,price) => {
    console.log(`price of ${product} is ${price}`);
}

sayPrice("apple","£10");

const sayJob = job => 
    console.log(`my job is ${job}`)

sayJob("admin");

//OLD JS
// var student ={
//     name:"test",
//     age:25,
//     sayYourAge:function(){
//         console.log("Age is "+this.age) // here this means student
//         var that = this;
//         var fullName = function(){
//             console.log("This is "+that.name)//here student context is lost
//         }
//         fullName();
//     }
// }

//student.sayYourAge();
//ES6
const student ={
    name:"test",
    age:25,
    sayYourAge:function(){
        console.log(`Age is ${this.age}`) // here this means student
        const fullName = () =>{
            console.log(`This is ${this.name}`)//arrow function is smart enough to detect the context.Hence we can use this keyword here
        }
        fullName();
    }
}

student.sayYourAge();

//===============================================
//
//          DEFAULT PARAMETERS
//
//Old JS
function add(x,y){
    a = x || 0;
    b = y || 0;
    console.log(a+b);
}

add(10,20);
add();

//ES6

var multiply = (a = 1,b = 1)=>{
    console.log(a*b);
}
multiply(10,20);

//===============================================
//
//          ARRAY FUNCTIONS(FOREACH, MAP,filter)
//
//ES6
const shoppingList = ['pen', 'pencil','book'];

//forEach
shoppingList.forEach((item,index) => console.log(`item at ${index} is ${item}`));

//map  - it will modify and return new array
const newList = shoppingList.map(item => `${item} nice`)
console.log(newList);

//filter
const filteredList = shoppingList.filter(item => item != 'pen')
console.log(filteredList);

//===============================================
//
//          CONSTRUCTOR FUNCTIONS AND CLASSES
//
//OLD JS
function Person (name, age){
    this.name = name; // here this is window object
    this.age  = age;
}
 Person.prototype.sayPerson = function(){
     console.log(this.name);
 }

var raj = new Person('raj',25);
raj.sayPerson();

function Raj (job,salary,name, age){
    Person.call(this,name,age); //this means this context
    this.job    = job;
    this.salary = salary;
}
Raj.prototype = Object.create(Person.prototype);
const newPerson = new Raj('dev','$10000','rajan',25);
newPerson.sayPerson();

//ES6
class ShoppingList{
    constructor(items,nr){
        this.items = items;
        this.nr    = nr;
    }
    sayList(){
        console.log(this.items);
    }
}

const myList = new ShoppingList(['milk','powder','pen'],3);

class Product extends ShoppingList{
    
    constructor(amount,cost,items,nr){
        super(items,nr);
        this.amount = amount;
        this.cost   = cost;
    }
}

const newProduct = new Product(100,20,['can','water'],2);
newProduct.sayList();

//===============================================
//
//          PROMISE
//
//ES6

const prom = new Promise((resolve,reject)=>{
    //Async code
    setTimeout(() => {
        //resolve(200);
        reject("error!")
    },2000);
})
prom.then( result =>
    {
        console.log(result);
    }

)
.catch(err => console.log(err));

