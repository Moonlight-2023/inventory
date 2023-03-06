
let client = 'Anzen';
let score = 32;
// const statement = client + ' score is ' + score;
const statement = `${client} score is ${score}`

console.log(statement)

let name = 'Parvin';
let lName = 'Abbasi';
let fullName = name +' '+ lName;
console.log('name.lenght' , 'is' , fullName.length)

// Boolian
const isDone = false;
console.log(typeof isDone);



// Arithmetic Operators
let x = 7;
let z = Math.pow(x,2);
console.log('z' , z)

let a = 7
let b = (a ** 2)

console.log(b)

// *Good to know - Javascript reads Left to right  *
// let x = 16 + 4 + "Volvo";  ===20Volvo
// let x = "Volvo" + 16 + 4;  ===Volvo164

//function : Hour to Minute

function hToMin(h){

    let minute = h * 60;
    

    return minute
}

console.log('h to minute is', hToMin(3))

//Light function

function light(h){

    let lightNoti;
    if(h<=12){
        lightNoti = 'Turn off the light';
    }
    else if(h>12){
        lightNoti = 'Turn on the light';
    }
    return lightNoti
}
console.log(light(5))


//function for Tax Calculation

function taxCal(salary){
   
if (salary<50000){
    let salary = salary * 0.03;

}
else if (salary>50000){
 salary = ((salary - 50000) * 0.02 )+ 1500
}
return salary
}
console.log(taxCal(60000))


//Insurance Calncellation fee

function canFee(eday,premium){
    let caf = ((356-eday)/365) * (premium/12) * 0.10
    return caf
}
console.log(canFee(248 , 4200))


// writing the same with Arrow key (Insurance Calncellation fee):
const canFee = (eday, premium) => {
    let caf = ((356-eday)/365) * (premium/12) * 0.10
    return caf
}
console.log(canFee(248 , 4200))


//Another Income Tax Calculation

let income; 
function taxCal(salary){
    
    if (salary<6000){
        
        income = 0 + salary;
    }

    else if(salary>6001 && salary<35000){
     income = 4350 + (salary - 6000) * 0.30;
    }

    else if(salary>80001 && salary < 180000){
    income = 17850 + (salary - 80000) * 0.38;
    }
    return income
}
console.log(taxCal(85000))

//Function for pass or fail

function pass(mark){
    if(mark>20){
        let result = "Passed!"
    }
    else{
        result = "Failed!"
    }

    return result
}

console.log('exam' , pass(10.5))

// // Function Quaderatic (whole in one)
function quaderant (a , b , c){
    const root = (b * b) - (4 * a * c);
    const quad = (-b + Math.sqrt(root)) / (2 * a);

    return quad
}

console.log(quaderant(1 , 4 , -5))

//Unit testing
function quadratic(a, b, c){

    let quad;  
    const root = (b * b) - (4 * a * c);
   
   if( isNaN(a) || isNaN(b) || isNaN(c))  {
       console.log('x')
   
   quad = "is not a number"

   } else {

   quad = (-b + Math.sqrt(root)) / (2 * a)
    console.log('xx', quad)
   }   
    
   return quad
}
console.log(quadratic(1 , 4 , -5))

// About Constant Array - You can change the elements of a constant array:

const product = ['Book', 99, true]
product[2] = 'Pen'

console.log('new' , product)
console.log(product.length)
console.log(product[0])
product.push('product 1')
console.log('1', product)
product.unshift('product2')
product.pop()

//Object

const employee1 = {

    id : 101,
    fName : 'Stephanie',
    lName : 'Mcdonald',
    age : 36,
    city : 'Oshawa',
    province : 'Ontario',
    address : function() {
        return this.city + " " + this.province;
    },
}

console.log('employee name is ', employee1.fName)
const employee2 = {
    id : 102,
    fName : 'Susan',
    lName : 'Jill',
    age : 39,
    city : 'Markham',
    province : 'Ontario',
}

let E = employee1.address.call(employee2)
console.log(E)


//Another example

const studentA = 
{
id : 001,
fName :'Laila',
lName :'Kakish',
age : 18,
fullName : function(){
    return this.fName + " " + this.lName
}

}
console.log('studentA' , studentA.fullName())
 const studentB = {
    id : 002,
    fName :'Roa',
    lName :'Menezes',
    age : 14,
     }
    
const fN = studentA.fullName.call(studentB)
     console.log(fN)


 //Another example

const productA = {
    id : 2243,
    type : 'Book',
    color: 'red',
    weight : 0.68,
    location : 'shelfQ',
    proInfo : function(){
        return this.type + " " + this.color
    }
}
const productB = {
    id : 2244,
    type : 'noteBook',
    color: 'pink',
    weight : 0.2,
    location : 'shelfP',
}

let Y = productA.proInfo.call(productB)
console.log(Y)

