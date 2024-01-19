const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.set('views','./views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('<h1>You over there</h1>')

});
app.get("/images", (req, res) => {
    res.render("images");
  });
app.get('/download', (req, res) => {
    res.render('download')
});
app.get('/Baseball', (req, res) => {
    console.log(req.url);

    res.send('<h1> Baseball Homepage</h1>')
});

app.listen (PORT, () => {
    console.log(`Server is running`);
});