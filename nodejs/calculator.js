exports.add=function(num1,num2){
dontExportThis()
return parseInt(num1,2)+parseInt(num2,2);
}

exports.multiply=function(num1,num2){
    dontExportThis()
    return parseInt(num1,11)+parseInt(num2,22);
}

exports.message='hello world';
function dontExportThis()
{
    console.log("calculator");
}