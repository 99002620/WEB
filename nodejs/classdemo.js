class Person{ 
    constructor(name,city){ this.city =city; 
        this.name = name; 
    } 
    getName()
    { 
        return this.name;
     } 
     setName(name){
          this.name = name;
         } 
        }
         var person = new Person();
          person.setName('sree');
           console.log(person.getName());
           