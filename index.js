const express = require('express');
const cors = require('cors');
const route = require('./src/routes/tww.route.js');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();
connectToDatabase();
app.use(cors());
app.use(express.json());

app.use('/tww', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
