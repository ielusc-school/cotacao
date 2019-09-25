const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const convert = require('./lib/convert');

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/cotacao', (req, res) => {
  console.log(req.query);
  const { cotacao, quantidade } = req.query;
  if(!cotacao && !quantidade) {
    res.render('cotacao', {
      error: 'Valores Inválidos'
    })
  } else {
    const conversao = convert.convert(cotacao, quantidade);
    console.log(conversao);
    res.render('cotacao', {
      error: false,
      cotacao: convert.toMoney(cotacao),
      quantidade: convert.toMoney(quantidade),
      conversao: convert.toMoney(conversao)
    });
  }
});

app.listen(PORT, err => {
  if(err) {
    console.log('app - error start down');
  } 
  console.log('app - start up in', PORT);
});