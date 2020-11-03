
var out=function(){
    var a=20;
    var inf=function(){
        console.log("inside"+a);
    }();
    console.log("oustide"+a);
}();


var cal=(num1,num2,num3)=>{
 return(function()
 {
     return (num1+num2+num3);
 });
}

var sum=cal(10,20,30);
console.log(sum());


var fun=(a=5,b=10)=>console.log(a+b);
fun();
fun(500);
fun(30,20);

function totalcost(item){
   return  function calc(costperunit){
        if(item>100)
        {
            item*costperunit*.10
        }
        if(item<100)
        {
            return item*costperunit;
        }
    };
}
 var total=totalcost(200);
 console.log(total(20));