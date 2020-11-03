import { greeting,Product,greet } from"./tsdemo3";
console.log(greeting);
greet();

var prod=new Product('laptop',2000);
prod.getinfo();


import * as trail from "./tsdemo3"
console.log(trail.greeting);
trail.greet();
var prod= new trail.Product('laptop',27737);
prod.getinfo();