var printval = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome' + val);
    }
    if (typeof (val) == 'number') {
        console.log('score' + val);
    }
};
printval('sree');
printval(19);
var printvalues = function (val) {
    if (Array.isArray(val)) {
        console.log('Array' + val);
        console.log(val);
        console.log.apply(console, val);
    }
    else if (typeof (val) == 'object') {
        console.log(val);
    }
};
printvalues(['sri', 'nath']);
printvalues({ name: 'sree' });
