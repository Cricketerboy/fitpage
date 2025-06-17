const express = require('express');
const cors = require('cors');
const { initDB } = require('./models');
const routes = require('./routes/reviewRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(5000, async () => {
  await initDB();
  console.log("API running on http://localhost:5000");
});
