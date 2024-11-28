// 1. Data types in JS

let num = 10;
let str = "Hello";
let bool = false;
let arr = [10,'abcd',20.5];
let obj = {
    userName:'Josh',
    userAge: 22,
    isActive :true,
}
let varUndefined;
let varNull = null;
let bigInt = 2342556728990228255n;
let myFunction = function(){
    console.log('I am Function');
    return 20;
};

console.log(num+':'+  typeof num);
console.log(str+':'+ typeof str);
console.log(bool+':'+ typeof bool);
console.log(arr+':'+ typeof arr);
console.log(obj+':'+ typeof obj);
console.log(varUndefined +':'+ typeof varUndefined);
console.log(varNull+':'+ typeof varNull);
console.log(bigInt+':'+ typeof bigInt);
console.log(myFunction()+':'+ typeof myFunction);

// 2. show an alert message on the loading of the website.

alert("Website is Loading");

// 3. ["1", "2", "3", "4", "5", "6", "7"]

const arr1 = ["1", "2", "3", "4", "5", "6", "7"];

    // a. Remove number "6" from the array and console the length of the array.

const arr2 = [...arr1];

arr2.splice(arr2.indexOf("6"),1);

console.log("Length of an Array after Removed '6': "+arr2.length);

    // b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.

let numArr = arr1.map((item) => {
    let numberItem = Number(item);
    console.log(numberItem + ' Data Type :'+ typeof numberItem);
    return numberItem;
})

    // c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.
    
const arr3 = arr1.filter((item, index)=> index < arr1.length - 3);

console.log(arr3);

arr3.unshift("one","two");

console.log(arr3);

    // d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

 let concatenationstr = arr1.reduce((total,currentItem)=> total + currentItem);

console.log('concatenation string of an array Items: '+ concatenationstr);

let sum = numArr.reduce((total,currentItem)=> total + currentItem);

console.log('sum of an array items: '+sum);

    // e. Filter out item "3" from the array and console the array (use array method)

const arr4 = arr1.filter((item)=> item !== '3');

console.log(arr4);

    // f.Iterate the array and console the item, when item is either "3", "6" or "7"

arr1.forEach((item)=> {
    if(item === '3' || item === '6' || item === '7'){
        console.log(item);
    }
});

    // g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)

const arr5 = [1, 2, "3", 4, 5, 6,"7"];

for(let i = 0;i< arr5.length;i++){
    if(arr1[i] === arr5[i]){
        console.log(arr5[i]);
    }
}

    // h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.

const arr6 = [0,2,3,7,5,6,8];

arr6.forEach((item,index)=>{
    let result = item * index;
    if(result > 40){
        console.log(result);
    }
})

    // i. Create two arrays with five items each and merge the array into a single array and then console it.

const arr7 = [32,41,58,61,71];

const arr8 = [20,24,53,59,21];

const arr9 = arr7.concat(arr8);

console.log(arr9);