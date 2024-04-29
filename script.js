
            //variables
            var click=()=>{alert("clicked")};
            var a=12;
            var b="abi";
            var ispermanent=true;
            var c;
            var salary=null;
            var marks=[1,null,3,3,5];//non-primitive
            var marks1=new Array(9,8,7,6,5);
            console.log(a,b,c,salary);
            console.log(marks);
            //looping-forof and forin
            for (const mark of marks) 
            {
            console.log(mark);
            }
            for (const key in marks1) {
             
                    console.log(key);
                    console.log(marks1[key]);
                
            }
            //js objects--{} objects has properties and behaviour
            var employee={id:1,emp_name:"kaviii",emp_address:"erode",isStudent:true};
            console.log(employee.emp_name);
            console.log(employee);
            for (const value of Object.keys(employee)) {
                console.log(value);
            }
            for (const value of Object.values(employee)) {
                console.log(value);
            }
            console.log("---------");
            for (const key in employee) {
               
                    console.log(key);
                    
                
            }
            //my new object
            myself={name:"abi",isStudent:true,cgpa:9.4,char:"good-hearted"}
            console.log(myself);
            for (const value of Object.values(myself) )
            {
                console.log(value);
            }
            //normal function
            function add(a,b)
            {
                return a+b;
            }
            var t=add(1,1);
            console.log(t);
            //function expression with name
            var x=function add(a,b)
            {
                return a+b;
            }
            console.log(x(2,3));
            //anonymous function
            var y=function (a,b)
            {
                return a+b;
            }
            console.log(y(3,3));
            console.log("-------")
            //lambda
            var l= (a,b)=> a+b;
            console.log(l(3,3));
            var para =()=>{alert("clicked")};
            
       