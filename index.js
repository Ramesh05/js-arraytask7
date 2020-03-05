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

console.log(arr1.includes(3))
//includes method 

console.log(arr1.indexOf(3))
//indexOf method
const arr1=[1,2,3,4,5]
function function2(arr1) {
  return arr1 >= 3;
}
console.log(function2)
