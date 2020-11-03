function addd() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i in nums)
        sum += nums[i];
    console.log(sum);
}
addd(10, 20);
addd(10, 20, 30);
addd(10, 20, 40);
var Greet = function (msg) {
    return msg;
};
console.log(Greet("have a"));
Greet = function (msg) {
    return 'welcome' + msg;
};
console.log(Greet('hello'));
var show = function () { return console.log('hi'); };
console.log(show());
var checkType = function (a, b) {
    console.log(a + b);
};
checkType(10, 20);
checkType(10, 'sree');
checkType('sri', 'nath');
