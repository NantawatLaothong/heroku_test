require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.static(__dirname + 'public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})