// function declaration
function addNumber(num1,num2){
    const sum=num1+num2;
    return sum;
}
function addNumber(num1,num2){
    return num1+num2;;
}
const add=function addNumber(num1,num2){
    return num1+num2;;
}
const add1=function (num1,num2){
    return num1+num2;;
}
const add2=(num1,num2)=>num1+num2;
const sum=addNumber(15,17);
const sum1=addNumber(15,17)
const sum2=add(15,17);
const sum3=add1(15,17)
const sum4=add2(15,15);
console.log(sum,sum1,sum2,sum3,sum4)