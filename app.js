const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const axios = require('axios');

//importo lo script di twitter
const twit = require('./script/twit');

//inizializzo la variabile dell'API a null
var twitApi = null;

const app = express();
const port = 5000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// routes
const mzRouter = require('./src/routes/agesci');

app.use('/', mzRouter);

//twitter
const update = async() => {
    twit.getTweet()
    try {
        twitAPI = JSON.parse(await fs.readFile(__dirname + '/script/json/twittAgesci.json', 'utf8', (err,data) => {
                if (err) {
                    console.error(err)
                }
                return data
            }));       
    } catch(err) {
        console.error('Error: ', err)
    }
    
}
const renderHome = async (req, res) => {
    await update() //aspetto che tutti i file vengano scaricati
    
    try {
        res.render('index', { twitt: twitAPI.statuses})
    } catch (err) {
        res.render('index', { twitt: null})
        console.error('Error: ', err)
    }
}

//gestisco monza.ejs
app.get('/index', renderHome);


//Listen on port 5000
app.listen(port, () => console.log('Listening on port 5000'));