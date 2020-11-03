
 var http = require('http');
  var server = http.createServer(function(req,res)
  { 
      res.writeHead(200,{'content-type':'text/plain'});
      res.write("have a great day"); 
  console.log('printing in brower'); 
  res.end(); 
  console.log('This will be printed'); 
}).listen('3000')

console.log('This will be printed first'); 
console.log('server running in port 3000');