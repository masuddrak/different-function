const add=(x,y)=>x+y;
const sum=add(10,12);
// 
const add1=x=>x*6;
const multiply=add1(2);

const add2=()=>5*8
const stringad=add2()

const add3=(x,y)=>{
    const sum=x+y;
    const multiply=x*y;
    const result=sum-multiply;
    return result;
}
const bigCaliculat=add3(5,7)
console.log(bigCaliculat)