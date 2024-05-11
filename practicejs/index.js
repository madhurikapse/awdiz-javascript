

/*for(var i=0;i<=10;i++){
    if(i===0){
        console.log(i +  "even")
    }
    else if(i%2===0){
        console.log( i+ "even number")
    }
    else{
    }
}*/


//Q 2 WHILE LOOP THAT CALCULATE FACTORIOAL 

/*var a=5
var i=1
var factorial=1
while(i<=a){
    factorial=factorial*i
    i++
}
console.log(factorial)*/

//Q3 CREATE JS FUNCTION AND RETURN ARRAY OF NUMBER AND RERTURN SUM OF ALL NUMBER USING FOR
/*var array=[1,2,3,4,5]
let sum=0
 function createarray(array){
    console.log(array)
    for(var i=0;i<=array.length;i++){
        sum +=i;
    }
            return sum;
    }
 let output=createarray(array)
 console.log(output)/*
 
 

 

 //q4 fabonicis
 

//Q5 Create a JavaScript function that takes an array of strings as input and returns a new array with only
// the strings that have a length greater than 5 characters.

   
   //var array4=["madhuri","priyanka","anita","pa"]

   //for (var i = 0; i < array4.length; i++) {
     //if (array4[i].length > 5) {
       //console.log(array4[i]);
     //}
  // }


//Q6 Write a JavaScript function that takes a number as input and returns true if it is a prime number, 
//otherwise false.

/*function checkPrime(num){
    let a = true;
    if(num<=1){
        b = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            a= false;
            break;
        }
    }
    if(a){
        console.log(num, " is a prime number.");
    }
    else{
        console.log(num, " is not a prime number.");
    }
}
checkPrime(4);
checkPrime(5);*/


//Question 7:
//Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
/*let sum=0
for(var i=1;i<=1000;i++){
    if(i%3===0 && i%5===0){
        sum +=i
    }
}
console.log(sum)*/


//Question 8:
//Write a JavaScript function that takes a string as input and returns the reverse of the string using a for loop.
/*let string1 = "Madhuri";
let reversestring = "";
for (let i = string1.length - 1; i >= 0; i--) {
    reversestring += string1[i];
}
console.log(reversestring);*/


