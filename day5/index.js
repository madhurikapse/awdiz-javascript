var number=56;
if (number %2==0){
    console.log(`number ${number} is even`)
}
else{
    console.log(`number ${number} is odd`)
}

function CheckNumber(){
    const number=document.getElementById("number").value
    if(!number){
        alert("please enter a number")
    }
    else if(number% 2===0){
        alert(`number ${number} is even`)
    }
    else{
        alert(`number ${number} is odd`)
    }
}