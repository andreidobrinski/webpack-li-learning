const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // creates output in a 'dist' folder
    path: path.join(__dirname, "dist")
  }
}