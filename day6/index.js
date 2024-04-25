var age=20;
if (age>18){
    console.log(`your age ${age} allows driving`)
}
else{
    console.log(`your age ${age} not allows deriving`)
}

function checktext(){
    var age =document.getElementById("age").value
    if(!age){
        alert("please enter  your age ")
    }
     else if(age>18)
    {
        alert("your age perfect you allows driving lisenee")
    }
    else{
        alert("your age not allows to driving lisenee")
    }


}