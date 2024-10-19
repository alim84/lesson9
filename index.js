const express = require("express");
const app = express();
const PORT = 5001;
app.get("/", (req, res) => {
  res.send("I am home route");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
