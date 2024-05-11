//linear search
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 4; // Compare  number.length / 2 -> 3

function find(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(i);
    }
  }
}
find(numbers, target);


var num=4
while(num<22){
   console.log(num)
   num+=3
}

var num1=10
while(num1>0){
    console.log(num1)
    num1--
}

var decending=20
while(decending>0){
    console.log(decending)
    decending--
}