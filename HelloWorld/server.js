var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"}); //HTTP Status Code 200: The request has succeeded.
  response.write("Hello My World");
  response.end();
}).listen(8080);

console.log("Server is running at localhost:8080")
