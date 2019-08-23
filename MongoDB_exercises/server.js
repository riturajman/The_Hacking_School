//using the inbuilt http method and requiring it
let http = require("http");
//assigning port the value of our desired port
let port = 2000;

//using the predefined createServer method which takes a callback 
//function by default with req and res as its two parameter
const server = http.createServer(function(request, response) {
//request.url is the url requested by the user with / as root
  let responseText = request.url;
  
  if (responseText == "/" || responseText == "/home") {
    response.write("Hello");
//we can have several response.send but they must be ended by a request.end to 
//close the pipeline between the server and client. Without it the page will load infinitely.
    response.end();
  } else if (responseText == "/about") {
    response.write("There is nothig to know about me");
    response.end();
  } else if (responseText == "/contact") {
    response.write("Please do not contact me");
    response.end();
  } else {
    response.write("Bye");
    response.end();
  }
});

//starting our server on our desired port and consoling "Server Started on console"
server.listen(port, () => console.log("Server Started"));
