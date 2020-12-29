let express = require('express');
let exphbs = require('express-handlebars');
// var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller');

app.use('/', routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });

