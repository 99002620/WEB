function add(...nums:number[]){
    var sum=0;
    for(let i in nums)
    sum+=nums[i];
    console.log(sum);
}
add(10,20);
add(10,20,30);
add(10,20,40);


var Greet= function(msg:string){
    return msg;

}

console.log(Greet("have a"));


Greet= (msg:string)=>{
    return 'welcome'+msg;

}
console.log(Greet('hello'));


var show =()=>console.log('hi');
console.log(show());

var checkType=(a,b)=>{
    console.log(a+b);
}
checkType(10,20);
checkType(10,'sree');
checkType('sri','nath');