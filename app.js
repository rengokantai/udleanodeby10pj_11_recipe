var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();

var connect = "postgres://root:root@localhost/recipebookdb";
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {

    pg.connect(connect, function (err, client, done) {
        if (err) {
            return console.error('error', err);
        }
        client.query('SELECT * FROM recipes', function (err, result) {


            if (err) {
                return console.error('error running', err);
            }
            res.render('index', {recipes: result.rows});
            done();
        });
    });
})

app.post('/add', function (req, res) {

    pg.connect(connect, function (err, client, done) {
        if (err) {
            return console.error('error', err);
        }
        client.query('INSERT INTO recipes(name,ingredients,directions) values($1,$2,$3)', [req.body.recipe, req.body.ing, req.body.dir], function (err, result) {

            done();
            res.redirect('/');

        });
    });
})



app.listen(3000);