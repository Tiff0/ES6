import calculator from './calculator';

let a = 5;
let b = 6; 
let sum = calculator.sum(a,b);

let name = "Ivan";
const second_name = "Petrov";

for (var i = 0; i < 10; i++) 
{
    setTimeout(function (){
    console.log(i);
    }, 500);
} // if we use var, with that will init to 10 and after func will start => 10

for (let y = 0; y < 10; y++) 
{
    setTimeout(function (){
    console.log(y);
    }, 500);
} // if we use let, with that will init to 10 and after func will start => 1,2,3..

//second_name = "Ivanov";  never be done, error cause const

const animal = 
{
    name: "Vaska",
    age: 10
}

function doMethod (options)
{
    let {name, age} = options;

    console.log("Method name is doMethod and here is name = " + name + " and age is here is " + age);
};

// create the same method
function doMethod1 ({name, age})
{
    console.log("Method name is doMethod1 and here is name = " + name + " and age is here is " + age);
};


console.log("Now animal name is " + animal.name + " and age is " + animal.age);

animal.name = "Murka"; // const only to object
animal.age = 7;

const dataPrice = [12, 23, 54];

const [price, count, weight] = dataPrice;
const {name: animalName,age: animalAge} = animal;

console.log(animalName, animalAge);
console.log("Now animal name is " + animal.name + " and age is " + animal.age);
console.log("Name is " + name + " second name is" + second_name);
console.log("Sum result is " + sum);
doMethod(animal);
doMethod1(animal);
console.log("Price " + price);