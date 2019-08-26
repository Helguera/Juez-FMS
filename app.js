const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.get('/', (req, res) => {
    res.render('index');

});

app.post('/puntuacion', (req, res) => {
    var competidor1 = req.body.competidor1;
    var competidor2 = req.body.competidor2;

    req.session.competidor1 = competidor1;
    req.session.competidor2 = competidor2;

    res.render('puntos', {
        competidor1, competidor2
    });

});

app.post('/resultado', (req, res) => {
    var puntos_competidor1;
    var puntos_competidor2;


    puntos_competidor1 = parseInt(req.body.comp1_easymode_pat1)
        + parseInt(req.body.comp1_easymode_pat2)
        + parseInt(req.body.comp1_easymode_pat3)
        + parseInt(req.body.comp1_easymode_pat4)
        + parseInt(req.body.comp1_easymode_pat5)
        + parseInt(req.body.comp1_easymode_pat6)
        + parseInt(req.body.comp1_easymode_escena)
        + parseInt(req.body.comp1_easymode_flow)
        + parseInt(req.body.comp1_easymode_skill)
        + parseInt(req.body.comp1_hardmode_pat1)
        + parseInt(req.body.comp1_hardmode_pat2)
        + parseInt(req.body.comp1_hardmode_pat3)
        + parseInt(req.body.comp1_hardmode_pat4)
        + parseInt(req.body.comp1_hardmode_pat5)
        + parseInt(req.body.comp1_hardmode_pat6)
        + parseInt(req.body.comp1_hardmode_escena)
        + parseInt(req.body.comp1_hardmode_flow)
        + parseInt(req.body.comp1_hardmode_skill)
        + parseInt(req.body.comp1_tematica1_pat1)
        + parseInt(req.body.comp1_tematica1_pat2)
        + parseInt(req.body.comp1_tematica1_pat3)
        + parseInt(req.body.comp1_tematica1_pat4)
        + parseInt(req.body.comp1_tematica1_escena)
        + parseInt(req.body.comp1_tematica1_flow)
        + parseInt(req.body.comp1_tematica1_skill)
        + parseInt(req.body.comp1_tematica2_pat1)
        + parseInt(req.body.comp1_tematica2_pat2)
        + parseInt(req.body.comp1_tematica2_pat3)
        + parseInt(req.body.comp1_tematica2_pat4)
        + parseInt(req.body.comp1_tematica2_escena)
        + parseInt(req.body.comp1_tematica2_flow)
        + parseInt(req.body.comp1_tematica2_skill)
        + parseInt(req.body.comp1_personajes_pat1)
        + parseInt(req.body.comp1_personajes_pat2)
        + parseInt(req.body.comp1_personajes_pat3)
        + parseInt(req.body.comp1_personajes_pat4)
        + parseInt(req.body.comp1_personajes_pat5)
        + parseInt(req.body.comp1_personajes_pat6)
        + parseInt(req.body.comp1_personajes_escena)
        + parseInt(req.body.comp1_personajes_flow)
        + parseInt(req.body.comp1_personajes_skill)
        + parseInt(req.body.comp1_sangre1_pat1)
        + parseInt(req.body.comp1_sangre1_pat2)
        + parseInt(req.body.comp1_sangre1_pat3)
        + parseInt(req.body.comp1_sangre1_pat4)
        + parseInt(req.body.comp1_sangre1_pat5)
        + parseInt(req.body.comp1_sangre1_pat6)
        + parseInt(req.body.comp1_sangre1_escena)
        + parseInt(req.body.comp1_sangre1_flow)
        + parseInt(req.body.comp1_sangre1_skill)
        + parseInt(req.body.comp1_sangre2_pat1)
        + parseInt(req.body.comp1_sangre2_pat2)
        + parseInt(req.body.comp1_sangre2_pat3)
        + parseInt(req.body.comp1_sangre2_pat4)
        + parseInt(req.body.comp1_sangre2_pat5)
        + parseInt(req.body.comp1_sangre2_pat6)
        + parseInt(req.body.comp1_sangre2_escena)
        + parseInt(req.body.comp1_sangre2_flow)
        + parseInt(req.body.comp1_sangre2_skill)
        + parseInt(req.body.comp1_deluxe_cap1)
        + parseInt(req.body.comp1_deluxe_cap2)
        + parseInt(req.body.comp1_deluxe_cap3)
        + parseInt(req.body.comp1_deluxe_pat1)
        + parseInt(req.body.comp1_deluxe_pat2)
        + parseInt(req.body.comp1_deluxe_pat3)
        + parseInt(req.body.comp1_deluxe_pat4)
        + parseInt(req.body.comp1_deluxe_pat5)
        + parseInt(req.body.comp1_deluxe_pat6)
        + parseInt(req.body.comp1_deluxe_pat7)
        + parseInt(req.body.comp1_deluxe_pat8)
        + parseInt(req.body.comp1_deluxe_escena)
        + parseInt(req.body.comp1_deluxe_flow)
        + parseInt(req.body.comp1_deluxe_skill);

    puntos_competidor2 = parseInt(req.body.comp2_easymode_pat1)
        + parseInt(req.body.comp2_easymode_pat2)
        + parseInt(req.body.comp2_easymode_pat3)
        + parseInt(req.body.comp2_easymode_pat4)
        + parseInt(req.body.comp2_easymode_pat5)
        + parseInt(req.body.comp2_easymode_pat6)
        + parseInt(req.body.comp2_easymode_escena)
        + parseInt(req.body.comp2_easymode_flow)
        + parseInt(req.body.comp2_easymode_skill)
        + parseInt(req.body.comp2_hardmode_pat1)
        + parseInt(req.body.comp2_hardmode_pat2)
        + parseInt(req.body.comp2_hardmode_pat3)
        + parseInt(req.body.comp2_hardmode_pat4)
        + parseInt(req.body.comp2_hardmode_pat5)
        + parseInt(req.body.comp2_hardmode_pat6)
        + parseInt(req.body.comp2_hardmode_escena)
        + parseInt(req.body.comp2_hardmode_flow)
        + parseInt(req.body.comp2_hardmode_skill)
        + parseInt(req.body.comp2_tematica1_pat1)
        + parseInt(req.body.comp2_tematica1_pat2)
        + parseInt(req.body.comp2_tematica1_pat3)
        + parseInt(req.body.comp2_tematica1_pat4)
        + parseInt(req.body.comp2_tematica1_escena)
        + parseInt(req.body.comp2_tematica1_flow)
        + parseInt(req.body.comp2_tematica1_skill)
        + parseInt(req.body.comp2_tematica2_pat1)
        + parseInt(req.body.comp2_tematica2_pat2)
        + parseInt(req.body.comp2_tematica2_pat3)
        + parseInt(req.body.comp2_tematica2_pat4)
        + parseInt(req.body.comp2_tematica2_escena)
        + parseInt(req.body.comp2_tematica2_flow)
        + parseInt(req.body.comp2_tematica2_skill)
        + parseInt(req.body.comp2_personajes_pat1)
        + parseInt(req.body.comp2_personajes_pat2)
        + parseInt(req.body.comp2_personajes_pat3)
        + parseInt(req.body.comp2_personajes_pat4)
        + parseInt(req.body.comp2_personajes_pat5)
        + parseInt(req.body.comp2_personajes_pat6)
        + parseInt(req.body.comp2_personajes_escena)
        + parseInt(req.body.comp2_personajes_flow)
        + parseInt(req.body.comp2_personajes_skill)
        + parseInt(req.body.comp2_sangre1_pat1)
        + parseInt(req.body.comp2_sangre1_pat2)
        + parseInt(req.body.comp2_sangre1_pat3)
        + parseInt(req.body.comp2_sangre1_pat4)
        + parseInt(req.body.comp2_sangre1_pat5)
        + parseInt(req.body.comp2_sangre1_pat6)
        + parseInt(req.body.comp2_sangre1_escena)
        + parseInt(req.body.comp2_sangre1_flow)
        + parseInt(req.body.comp2_sangre1_skill)
        + parseInt(req.body.comp2_sangre2_pat1)
        + parseInt(req.body.comp2_sangre2_pat2)
        + parseInt(req.body.comp2_sangre2_pat3)
        + parseInt(req.body.comp2_sangre2_pat4)
        + parseInt(req.body.comp2_sangre2_pat5)
        + parseInt(req.body.comp2_sangre2_pat6)
        + parseInt(req.body.comp2_sangre2_escena)
        + parseInt(req.body.comp2_sangre2_flow)
        + parseInt(req.body.comp2_sangre2_skill)
        + parseInt(req.body.comp2_deluxe_cap1)
        + parseInt(req.body.comp2_deluxe_cap2)
        + parseInt(req.body.comp2_deluxe_cap3)
        + parseInt(req.body.comp2_deluxe_pat1)
        + parseInt(req.body.comp2_deluxe_pat2)
        + parseInt(req.body.comp2_deluxe_pat3)
        + parseInt(req.body.comp2_deluxe_pat4)
        + parseInt(req.body.comp2_deluxe_pat5)
        + parseInt(req.body.comp2_deluxe_pat6)
        + parseInt(req.body.comp2_deluxe_pat7)
        + parseInt(req.body.comp2_deluxe_pat8)
        + parseInt(req.body.comp2_deluxe_escena)
        + parseInt(req.body.comp2_deluxe_flow)
        + parseInt(req.body.comp2_deluxe_skill);

    if ("on".localeCompare(req.body.comp2_sangre1_resp1) == 0) {
        puntos_competidor2++;
    }
    if ("on".localeCompare(req.body.comp2_sangre1_resp2) == 0) {
        puntos_competidor2++;
    }
    if ("on".localeCompare(req.body.comp2_sangre1_resp3) == 0) {
        puntos_competidor2++;
    }
    if ("on".localeCompare(req.body.comp2_sangre1_resp4) == 0) {
        puntos_competidor2++;
    }
    if ("on".localeCompare(req.body.comp2_sangre1_resp5) == 0) {
        puntos_competidor2++;
    }
    if ("on".localeCompare(req.body.comp2_sangre1_resp6) == 0) {
        puntos_competidor2++;
    }

    if ("on".localeCompare(req.body.comp1_sangre2_resp1) == 0) {
        puntos_competidor1++;
    }
    if ("on".localeCompare(req.body.comp1_sangre2_resp2) == 0) {
        puntos_competidor1++;
    }
    if ("on".localeCompare(req.body.comp1_sangre2_resp3) == 0) {
        puntos_competidor1++;
    }
    if ("on".localeCompare(req.body.comp1_sangre2_resp4) == 0) {
        puntos_competidor1++;
    }
    if ("on".localeCompare(req.body.comp1_sangre2_resp5) == 0) {
        puntos_competidor1++;
    }
    if ("on".localeCompare(req.body.comp1_sangre2_resp6) == 0) {
        puntos_competidor1++;
    }

    var competidor1 = req.session.competidor1;
    var competidor2 = req.session.competidor2;

    if (Math.abs(puntos_competidor1 - puntos_competidor2) <= 5) {

    } else {
        if (puntos_competidor1 > puntos_competidor2) {
            res.render('resultado', {
                puntos_ganador: puntos_competidor1,
                puntos_perdedor: puntos_competidor2,
                ganador: competidor1,
                perdedor: competidor2
            });
        } else {
            res.render('resultado', {
                puntos_ganador: puntos_competidor2,
                puntos_perdedor: puntos_competidor1,
                ganador: competidor2,
                perdedor: competidor1
            });
        }
    }









});

app.get('/resultado', (req, res) => {
    res.render('resultado');

});











//static files
app.use(express.static(path.join(__dirname, 'public')));  //linea necesaria para que coja los recursos de public

// Init server
app.listen(app.get('port'), () => {
    console.log('Servidor arrancado en puerto 8080');
})