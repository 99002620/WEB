"use strict";
exports.__esModule = true;
var tsdemo3_1 = require("./tsdemo3");
console.log(tsdemo3_1.greeting);
tsdemo3_1.greet();
var prod = new tsdemo3_1.Product('laptop', 2000);
prod.getinfo();
var trail = require("./tsdemo3");
console.log(trail.greeting);
trail.greet();
var prod = new trail.Product('laptop', 27737);
prod.getinfo();
