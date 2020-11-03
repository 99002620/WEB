arr =[1,2,3,4];
var [a,b,c,d]=arr;
console.log(a);
var a,b=arr;
console.log('s',a);

var [a,,c,d]=arr;
console.log(c);



const{username,city}={username:"raju",city:"banaglore"}
console.log(username,city);


 //object destructuring with diff variable name 
 const{username:myname,city:mycity}={username:'Raju',city:'Bangalore'} 
 console.log(myname,mycity); 
 var student={ name:'Raju',city:'Chennai',hobby:['Sports','Music'] } 
 var details = (s)=>{ 
     console.log(s.hobby) 
    } 
    details(student); 
    var ndetails = ({name,city,hobby})=>{ console.log(hobby) 
    } 
    ndetails(student); 
    var firstName = 'Kumaran' 
    let greeting= `Hi ${firstName}`; 
    console.log(greeting);