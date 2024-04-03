const express = require('express');
const stocks = require('./database');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});
app.get('/database', (req, res) => {
    res.json(stocks.manswear.stock);
});
app.get('/getstock/:id', (req, res) => {
    const id = req.params.id;
    const stock = stocks.manswear.items.find((stock) => stock.id == id);
    res.json(stock);
});
app.listen(3000, () => {
    console.log('Server is running on  https://127.0.0.1:3000');
});
