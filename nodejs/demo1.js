var student={
    name:'sree',
    age:25,
    hobbies:['dance','music'],
    greet:function(){
        console.log('good day')
    },
    address:{
        city:'bangalore',
        state:'kar'
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.hobbies);
/*for(const prop in student)
{
    var stud=student[prop];

    if(stud instanceof Array)
    {
        for(const i in stud)
        console.log('hobby:'+stud[i])
    
    }else if(typeof stud == 'object')
{
    for(const key in )
} 

}*/