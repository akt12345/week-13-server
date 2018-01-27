var http = require("http");
var fs = require("fs")

var PORT = 8080;

//create server and server will handle the request
var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server is listening correctly on the Port i created: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {


    case "/":
      return displayPage(path, req, res, "/index.html");

    case "/css":
      return displayPage(path, req, res, "/css.html");

    case "/foods":
      return displayPage(path, req, res, "/foods.html");


   case "/movies":
      return displayPage(path, req, res, "/movies.html");


    default:
      return displayPage(path, req, res, "/404.html");

}
}



//
 function displayPage(url, req, res, page){
 fs.readFile(__dirname + page, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}


