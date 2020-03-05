//arrays methods
const arr=[{name:'ramesh',age:23},{name:'suresh',age:23},{name:'dinesh',age:23}]
const arr1=[1,2,3,4,25] 
arr.forEach(function1)
function function1(item,index){
      console.log(item);
}
//forEach
let b = arr1.map(Math.sqrt)
console.log(b);
//arraymap method

let c=arr.filter(function (val)
{
return val.name == 'suresh';
})
console.log(JSON.stringify(c))
//filter method 