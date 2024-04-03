const express = require('express');
const stocks = require('./database');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect("Home.html")
});
app.get('/database', (req, res) => {
    console.log(req.query)
    switch(req.query.type){
        case "tshirts":
            res.json(stocks.shirts.stock)
            break;
        case "footwear":
            res.send(stocks.footwear.stock)
            break;
        case "hoddies":
            res.json(stocks.hoddies.stock)
            break;
        default :
        res.send("not found")
    }


});
app.get('/getstock/', (req, res) => {
    const query =req.query
    console.log(req.query)
    switch(req.query.type){
        case "tshirts":
            const sstock = stocks.shirts.items.find((stock) => stock.id == query.id);
            res.json(sstock);
            break;
        case "footwear":
            const fstock = stocks.footwear.items.find((stock) => stock.id == query.id);
            res.json(fstock)
            break;
        case "hoddies":
            const hstock = stocks.footwear.items.find((stock) => stock.id == query.id);
            res.json(hstock)
            break;
        default :
        res.send("not found")
    }

});
app.listen(3000, () => {
    console.log('Server is running on  https://127.0.0.1:3000');
});
