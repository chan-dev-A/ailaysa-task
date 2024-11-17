const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySqlPool = require("./config/db");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.use("/api",require('./routes/routes'))


app.get('/test', (req, res) => {
    res.send({ message: 'Hello from Node.js!' });
});

mySqlPool.query('SELECT 1').then(() => {
    console.log('db connection established');


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

}).catch((err) => {
    console.error(err);
});