// Create web server
var express = require("express");
var app = express();
var port = 3000;

app.listen(port, function() {
  console.log("Server is running on port " + port);
});

// Serve static files
app.use(express.static("public"));

// Comments
// 1. Create a new route that listens for GET requests on the path '/comments'
app.get("/comments", function(req, res) {
  // 2. Send back the text 'Comments page'
  res.send("Comments page");
});

// 3. Visit http://localhost:3000/comments in your browser
// 4. You should see the text 'Comments page'
// 5. The 'Comments page' text is sent back when a GET request is made to the '/comments' path

// 6. Create a new route that listens for GET requests on the path '/comments/new'
app.get("/comments/new", function(req, res) {
  // 7. Send back the text 'New comments page'
  res.send("New comments page");
});

// 8. Visit http://localhost:3000/comments/new in your browser
// 9. You should see the text 'New comments page'
// 10. The 'New comments page' text is sent back when a GET request is made to the '/comments/new' path
// 11. The '/comments' and '/comments/new' paths are different routes that send back different text

// 12. Create a new route that listens for GET requests on the path '/comments/:id'
app.get("/comments/:id", function(req, res) {
  // 13. Get the 'id' parameter from the URL
  var id = req.params.id;
  
  // 14. Send back the text 'Comment ' followed by the 'id' parameter
  res.send("Comment " + id);
});

// 15. Visit http://localhost:3000/comments/1 in your browser
// 16. You should see the text 'Comment 1'
// 17. Visit http://localhost:3000/comments/2 in your browser
// 18. You should see the text 'Comment 2'
// 19. The 'Comment 1' and 'Comment 2' text is sent back when a GET request is made to the '/comments/1' and '/comments/2' paths

// 20. Create a new route