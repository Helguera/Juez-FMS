const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));

app.get('/', (req, res) => {
    res.render('index');

});

app.get('/puntuacion', (req, res) => {
    res.render('puntos');

});

app.post('/resultado', (req, res) => {
    console.log(req.body.comp1_easymode_skill);
});












//static files
app.use(express.static(path.join(__dirname, 'public')));  //linea necesaria para que coja los recursos de public

// Init server
app.listen(app.get('port'), () => {
    console.log('Servidor arrancado en puerto 8080');
})