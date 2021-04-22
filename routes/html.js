const path = require('path');
const app = express();
const fs = require('fs')

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, './views/exercise.html'));
  });


  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, './views/stats.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });
};