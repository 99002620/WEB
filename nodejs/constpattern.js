var student = function(name,city){
    this.name=name;
    this.city=city;
    this.getDetails=function(){
        console.log(this.name,this.city);
    }

}

student=new student('raju','bangalore');
console.log(student.name,student.city);
student.getDetails();

student.prototype.age=20;
student.prototype.greet=function(message)
{
    console.log(message,this.name);
}

console.log(student.age);
student.greet('welcome');

student1 =new student("ram",'ooty');
student1.age=30;
student1.greet('greet day');
console.log(student1.name,student1.city,student1.age);