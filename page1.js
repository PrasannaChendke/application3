function isEven(number)
{
    if(number%2==0){
       console.log(`${number} is even`) 
    }
    else{
        console.log(`${number} is not even`)
    }
}

isEven(10)
isEven(11)

/*--------------------------------------------------------------------------------*/ 

function isOdd(number)
{
    if(number%2!=0){
       console.log(`${number} is odd`) 
    }
    else{
        console.log(`${number} is not odd`)
    }
}

isOdd(9)
isOdd(10)

function add(p1,p2){
  console.log(`${p1} + ${p2} = ${p1+p2}`)  
}

add(10,20)

function subtract(p1, p2){
    console.log(`${p1}-${p2} = ${p1-p2}`)
}
subtract(20,10)

function divide(p1, p2){
    console.log(`${p1}/${p2} = ${p1/p2}`)
}
divide(20,10)
function multiply(p1, p2){
    console.log(`${p1}*${p2} = ${p1*p2}`)
}
multiply(20,10)

function square(p1){
    console.log(`square of ${p1} is ` + Math.pow(p1,2))
}
square(4)
function cube(p1){
    console.log(`Cube of ${p1} is `+ Math.pow(p1,3))
}
cube(4)

function func(){
    console.log("Welcome to git hub")
}
