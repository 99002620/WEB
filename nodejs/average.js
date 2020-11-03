


(function greet(name)
{
    console.log('hello'+name);
})('sree');

var total=function(n1,n2,n3){


return n1+n2+n3;

}(10,20,30);
console.log(total);


var avg = function(x,y){
    return function(){

    return (x+y);
    }
}

var result=avg(10,20);
console.log(result());