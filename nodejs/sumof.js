var sumof=(num1,num2,num3)=>{
    return(function()
    {
        return (num1+num2+num3);
    });
   }
   var total=sumof(10,20,30);
console.log(total());


var sumofnum=function(...args)
{
    var sum=0;
for(let i in args)
    sum+=args[i];

console.log(sum);
}
sumofnum(10,20);
sumofnum(10,20,30);
sumofnum(10,20,40);


fun=function(a,b,...args){
    console.log("a",a);
    console.log("b",b);

    console.log(args);

}

fun(1,2,"hello",900);
fun(1);
fun(1,2);
