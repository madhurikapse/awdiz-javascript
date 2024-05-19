//est - 2
/*Question 1:
Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

Input: [1, 2, 3, 4, 5]




Question 2:
Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

Input: "madam"

Question 3:
Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

Input: [1, 2, 3, 4], [3, 4, 5, 6]

Question 4:
Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

Input: {name: "Alice", age: 25}, "name"

Question 5:
Write a JavaScript function that takes a number as input and returns an array of its digits.

Input: 12345

Question 6:
Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

Input: "hello"

Question 7:
Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

Question 8:
Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

Input: "This is a sample sentence."

Question 9:
Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

Input: [10, 2, 14, 5, 7]

Question 10:
Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

Input: new Date(2024, 4, 15)*/



//Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).
//Input: "madam"
/*function abc(string){
    const len=string.length
    for(var i=0;i<len%2;i++){
        if(string[i]==string[len-1-i]){
            return "string is palindrom"
        }
}
const string=prompt("enter string")
const value=abc(string);
console.log("value")
}
*/


// 1Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

//Input: [1, 2, 3, 4, 5]

let array=[1,2,3,4,5]
let result=array.map(x=>x**2)
console.log(result)


//Question 2:
//Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).
//Input: "madam"
function palin(words){
    var str=""
    for(var i=words.length-1;i>=0;i--){
        str+=words[i];
    }
    if(words===str){
        console.log("its plaindrom")
    }
    else{
        console.log("not palindrom")
    }
}
palin("madam")




//Question 3:
//Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).
//input: [1, 2, 3, 4], [3, 4, 5, 6]
 let Array1=[1,2,3,4]
let  Array2=[3,4,5,6]
 let  Array3=[]
function combined(Array1,Array){
    for(var i=0;i<Array.length;i++){
        for(var j=0;j<Array.length;j++){
            if(Array1[i]===Array2[i]){
                Array3.push(Array1[i])
            }
            }
         return Array3
            }
           
        }
        const Array4=combined(Array1,Array2)
        console.log(Array4)
        
         
    






//Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.
//Input: {name: "Alice", age: 25}, "name"


const myobject={}
const demo={
    name:"john",
    age:25
}
console.log(demo.name)
console.log(demo.age)




//Question 5:
//Write a JavaScript function that takes a number as input and returns an array of its digits.
//Input: 12345


let myArray=string(number).split("").map((num)=>{
    return number(num)
})
console.log(myArray)


//Question 6:
//Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
//Input: "hello"












//Question 7:
//Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.
//Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name" 




//question 8:
//Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.
//Input: "This is a sample sentence."
function plus(sen){
    var count
for(var i=0;i<sen.length;i++){
    count++
}
count++
console.log(count)
}
plus("this is a simple sentense")









//Question 9:
//Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.
//Input: [10, 2, 14, 5, 7]

array=[10,2,14,5,7]
function smallest(array){
    array.sort((a,b)=>a-b)
    return array[1]
}




//Question 10:
//Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".
//Input: new Date(2024, 4, 15)*/
