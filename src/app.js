const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Placeholder for route inclusion
// const taskRoutes = require('./routes/taskRoutes');
// app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('TODO List API is up and running!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;