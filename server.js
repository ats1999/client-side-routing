const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// Route for serving the HTML file
app.get("*", (req, res, next) => {
  // Check if requested URL does not end with .js extension
  if (!req.url.endsWith(".js")) {
    return res.sendFile(path.join(__dirname, "index.html"));
  }
  // If the requested URL ends with .js extension, pass the request to the next middleware
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
