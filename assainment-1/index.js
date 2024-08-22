
// 1.covart Celsius to Fahrenheit.

function celsiusToFahrenheit(Celsius){
    return ((Celsius *9.0 / 5.0 ) + 32.0)
}


let get = celsiusToFahrenheit(0) // output = 32;
let get2 = celsiusToFahrenheit(25) // output 77
console.log(get)





// 2.check even numbar


function isEven(num){
    if( num % 2 === 0){
        return true;
    }else{
        return false
    }
}

let getEven1  = isEven(4)// output: true
let getEven2  = isEven(7) // output: flase
console.log(getEven1);
console.log(getEven2);





// 3. get sum two numbars

function sum(a,b){
    return a+b
}

console.log(sum(4,3)) // output:7
console.log(sum(10,20)) // output: 30



// 4. array find samallest numbar


function findSmalestNum(arr){
    return  Math.min.apply(Math,arr)
}

console.log(findSmalestNum([3,5,1,9])) // output : 1;
console.log(findSmalestNum([-1,-5,0,10])) // output:-5


// 5.count the number of vowels in a string


function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let sum = 0;
     for(let i = 0 ; i < str.length; i++){
        // console.log(vowels[i])
        if(vowels.includes([str[i]])){
            sum++
        }
    
        }
        return sum


}

console.log( countVowels('hello world'))// output: 3
console.log(countVowels('Javascript')) // output: 3




// 6 findout first element in arry

function getFirstElement(arr){
   return arr[0];
  
}

console.log( getFirstElement([1,2,3])) // output:1;
console.log( getFirstElement(["a","b","c"])) // output:"a" 


// 7.check an array is empty
 

function isArrayEmpty(arr){
    if( arr.length === 0){
        return true;
    }else{
        return false;
    }
}

console.log( isArrayEmpty([])); // output: true;
console.log(isArrayEmpty([1,2,3])); // output: false





// 8.factorial numbar calculate;


function factorial(num) {
  let ans = 1;

  if (num === 0 || num ===1) return 1;
  for (let i = 1; i <= num; i++) {
    ans*=i
  }
  return ans;
}

console.log(factorial(5));// output : 120;
console.log( factorial(7))// output : 5040;



// 9 . revarse string

function reverseString(str){
    return str.split('').reverse().join('');

}

console.log( reverseString('hello')); // output: "olleh";
console.log(reverseString('world')); // output : "dlrow";



// 10 . make a string to lowercase


function toLowerCase(str){
     return str.toLowerCase();
}

console.log(toLowerCase('HELLO WORLD'))//  output: 'hello world';
console.log(toLowerCase('JavaScript')) // output: 'javascript'





//11. findout string length

function stringLength(str){
    return str.length
}

console.log( stringLength('hello')) // output : 5;
console.log( stringLength('world')) // output : 5;


 // 12 . marge two array


 function mergeArrays( arr1,arr2){
    return arr1.concat(arr2)
 }

 console.log(mergeArrays([1,2,3],[4,5,6])); // output: [1,2,3,4,5,6]
 console.log(mergeArrays(["a","b"],["c","d"])) // output:["a","b","c","d"]




 //13.find lastt element of array


 function getLastElement(arr){
    return arr.pop();
}

 console.log(getLastElement([1,2,3])); // output: o;
 console.log(getLastElement(["a","b","c"])) // output : "c"


 // 14. findout first character in a string

 function getFristCharacter(str){
    return str.split("").shift() ;
  
 }


 console.log( getFristCharacter('hello')); // output : "h";
 console.log( getFristCharacter("world")) // output : :"w";


 // 15 . findout sum all elements of array

 function sumArray( arr){
    let sum = 0;
    for( let get of arr){
        sum += get
    }
    return sum
 }

 console.log(sumArray([1,2,3,4])) // output : 10;
 console.log(sumArray([-1,-2,-3,-4])) // output:-10;
 console.log(sumArray([1.5,2.5,3.5])) // output:7.5;