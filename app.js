const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

// Only start the server if run directly
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
