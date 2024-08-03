const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // The name of the bundled output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Set the mode to development or production
};
