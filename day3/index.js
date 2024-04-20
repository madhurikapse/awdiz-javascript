//var let const        declare           reassign
            //var      //possible       possible
            //let      //not possible    possible
           //const   //not possible   not possible
           var a=20
           {
               console.log(a)
           }
            var b=30
            {
               var c=40
            }
           console.log(c)
             //var is global scope variable thats why identify console
             let d=60
             {
             {
               d=100
               console.log(d)
             }
           }
           //hoisting means top of scope search var key and place top of code  hoisting only work var keywords not let and const
           a=80
           {
               console.log(a)
           }
           var a;
           //block scope means the varible inside a {} bracket and the outside brackets forget anything 
           const name="madhuri"
           {
           {
               console.log(name)
           }
           }
           console.log(name)
           
             