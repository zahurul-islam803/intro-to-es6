// get Big number in array
// const numbers = [14,20,10,30,50,25,61,81,90,24,31,2];
// apply method
// const num = Math.max.apply(null, nums);

//spread operator 
// const num = Math.max(...nums);
// console.log(num);



// console.log(obj);
// delete obj.name;
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.seal(obj));
// console.log(Object.freeze(obj));
// console.log((Object.entries(obj)));

// const {clean,...s} = obj;
// console.log(s);

// for(let item in obj){
//   console.log(item);
//   console.log(obj[item]);
// }


// practice task
//  task no 1

// const multiply = (a,b,c) => a*b*c;
//  console.log(multiply(5, 4, 3));

// task no 2

// const sentence = 'I am a web developer. '+ 
// 'I love to code. '+
// 'I love to eat biriyani.'
// console.log(sentence);

// task no 3

// const defaultParameter = (a, b=20) => a + b;
// console.log(defaultParameter(2));

// task no 4
// const arr2 = [];
// const friends = (arr)=>{
//   for (const item of arr) {
//    if(item.length % 2 === 0){
//       arr2.push(item);
//     }
//   }
//   return arr2
// }
// const arr = ['zahurul ', 'mahim ', 'mashiur', 'akram hossain ', 'mamun'];
// friends(arr);
// console.log(arr2);

// task no 5
// let sum = 0;
// const square = (arr)=>{
//   for (const item of arr) {
//    sumOfArray = item*item;
//    sum += sumOfArray; 
//   }
//   const result = sum / arr.length;
//   return result.toFixed(2);

// }

// const arr = [2,4,3,8,1,6,7];
// console.log(square(arr));


// task no 6
// const newArray = [];
// const combine = (arr1, arr2)=>{
//  newArray.push(...arr1,...arr2);
//  const maxNumber = Math.max(...newArray);
//  return maxNumber;
// }

// const arr1 = [4,5,1,7,8,3,6,9];
// const arr2 = [3,8,1,90,2,10,4,60];
// console.log(combine(arr1, arr2));

// const nayikas = ["mousumi", "popy", "shabnur", "purnima"];
// const w2 = [...nayikas];
// console.log(w2);

// const mobile = {
//   brand: "Samsung",
//   model: "S4",
// };

// delete mobile.model;
// console.log(mobile);

// const obj = { foo: 1 };
// obj.bar = 2;
// console.log(obj);

