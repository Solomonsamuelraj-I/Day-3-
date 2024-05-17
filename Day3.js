//a.to print odd num in array
//annonymous function

var arr=[12, 13, 14, 15, 16, 17, 18]
var res = function (arr) {
     ;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
    return arr;
}
res(arr)

//IIFE Function

var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array)

 // Arrow Function

 var array=[1,2,3,4,5,6,7,8,9]
 var arrow=(array)=>
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
 }
 return array
 }
 arrow(array)
 //b.b.	Convert all the strings to title caps in a string array

 //Anonymous function

 var title="guvi geek network";
let res=function (title) {
   title = title.toLowerCase().split(' ');
   for (var i = 0; i < title.length; i++) {
     title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1); 
   } 
   return title.join(' ');
}
console.log(res(title))

//IIFE function

var title="guvi geek network";
(function (title) {
   title = title.toLowerCase().split(' ');
   for (var i = 0; i < title.length; i++) {
     title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1); 
   } 
   return title.join(' ');
})
(title)

//arrow function

var title="guvi geek network";
let res= (title)=>{
    title = title.toLowerCase().split(' ');
   for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1); 
   } 
   return title.join(' ');
}
console.log(res(title));

//c:Sum of all numbers in an array

//Anonymous function

var arr=[1,2,3,4,5,6,7,8,9];
var sum=0;
var foo=function (arr)
{
   for(let i=0; i<arr.length; i++)
   {
     sum=sum+arr[i];
   }
   return sum;
}
console.log(foo(arr))

//IIFE function

var arr=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (arr)
{
   for(let i=0; i<arr.length; i++)
   {
     sum=sum+arr[i];
   }
   return sum;
})
(arr);

 //Arrow function

 var arr=[1,2,3,4,5,6,7,8,9];
var sum=0;
var foo= (arr)=>
{
   for(let i=0; i<arr.length; i++)
   {
     sum=sum+arr[i];
   }
   return sum;
}
console.log(foo(arr));

//d.Return all the prime numbers in an array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

//anonymous function

b = function(…a) {

for (let i = 0; i < a.length; i++) {

for (let j = 2; j <= a[i] — 1; j++) {

if (a[i] % j == 0) {

return false;

}

}

return a[i] > 1;

}

};

console.log(a.filter(b));

//IIFE Function

(prime = function(a) {

for (let j = 2; j <= a — 1; j++) {

if (a % j == 0) {

return false;

}

}

return a > 1

})();

console.log(a.filter(prime))

// arrow function
let prime = (num) => {

   for (let j = 2; j < num — 1; j++) {
   
   if (num % j === 0) {
   
   return false;
   
   }
   
   }
   
   return num > 1;
   
   }
   
   console.log(a.filter(prime));

   //e. Return all the palindromes in an array

   //annonymous function
   let arr = [hello, ‘mom’, ‘noon’, ‘level’, ‘civic’, ‘otto’];

   let palin = function(arr) {

      let c = [];
      
      for (let i = 0; i < arr.length; i++) {
      
      let strarr = arr[i]
      
      //Using reverse() method to reverse the string
      
      let revstr = strarr.split(‘’).reverse().join(‘’);
      
      //comparing the 2 strings and adding the string to array using push if condition satisfies
      
      if (strarr == revstr) {
      
      c.push(strarr);
      
      }
      
      }
      
      console.log(c);
      
      }
      
      palin(arr);
      
      //IIFE function
      
      (function(arr) {
      
      let c = [];
      
      for (let i = 0; i < arr.length; i++) {
      
      let strarr = arr[i]
      
      let revstr = strarr.split(‘’).reverse().join(‘’);
      
      if (strarr == revstr) {
      
      c.push(strarr);
      
      }
      
      }
      
      console.log(c);
      
      })(arr);
  

   //arrow function

   

let palin = (str) => {

revstr = str.split(‘’).reverse().join(‘’);

if (str == revstr) {

return str;

} else {

return false;

}

}

console.log(arr.filter(palin));


//f. Return median of two sorted arrays of the same size.

//anonymous function

let med = function(arr1, arr2) {

   let l = arr1.length;
   

   arr1.sort(function(a, b) { return a — b });
   
   arr2.sort(function(a, b) { return a — b });
   
   console.log(arr1, arr2);
   

   
   if (arr1.length % 2 === 0) {
   
   console.log((arr1[l / 2] + arr1[l / 2–1]) / 2)
   
   console.log((arr2[l / 2] + arr2[l / 2–1]) / 2)
   
   }
   

   
   else {
   
   console.log((arr1[(l — 1) / 2]))
   
   console.log((arr2[(l — 1) / 2]))
   
   }
   
   };
   
   med(arr1, arr2);
   
   //IIFE function
   
   (function(arr1, arr2) {
   
   let l = arr1.length;
   
  
   
   arr1.sort(function(a, b) { return a — b });
   
   arr2.sort(function(a, b) { return a — b });
   
   console.log(arr1, arr2);
   

   
   if (arr1.length % 2 === 0) {
   
   console.log((arr1[l / 2] + arr1[l / 2–1]) / 2)
   
   console.log((arr2[l / 2] + arr2[l / 2–1]) / 2)
   
   }
   
   
   else {
   
   console.log((arr1[(l — 1) / 2]))
   
   console.log((arr2[(l — 1) / 2]))
   
   }
   
   })(arr1, arr2);

   //g.Remove duplicates from an array

   let arr = [1, 2, 2, 2, 4, 6, 6, 6, 3, 3, 3, 341, 45, 66];

//anonymous function

let dup = function(arr) {

 

let newarr = […new Set(arr)];

console.log(newarr);

}

dup(arr);

//IIFE function

(function(arr) {

let newarr = […new Set(arr)];

console.log(newarr);

})(arr)

//h.Rotate an array by k times

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 3;

//anonymous function

let rot = function(arr) {

for (let i = 0; i < k; i++) {



arr.unshift(arr.pop());

}

console.log(arr);

}

rot(arr);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//IIFE function

(function(arr) {

for (let i = 0; i < k; i++) {


arr.unshift(arr.pop());

}

console.log(arr);

})(arr);

Outpu