// const Logger = require('./logger')
// const logger = new Logger();

// //Register a listerner
// // emitter.on('messageLogged', function(arg) {
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called.', arg);
// })
// logger.log(__dirname)
// logger.log(__filename)

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('hello world------')
//         res.end();
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]))
//         res.end();
//     }
// });
// server.listen(3000)

// logger.log('server listining on port 3000!')

var http = require('http'),
    // path = require('path'),
    // methods = require('methods'),
    express = require('express'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    // passport = require('passport'),
    errorhandler = require('errorhandler'),
    // mongoose = require('mongoose');
    // Task = require('.api/models/user_model'), //created model loading here

    isProduction = process.env.NODE_ENV === 'production';

// Create global app object
app = express();

app.use(cors());

// Normal express config defaults
// app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var routes = require('./api/routes/user_route'); //importing route
routes(app); //register the route

// app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'conduit',
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));

if (!isProduction) {
    app.use(errorhandler());
}

// if (isProduction) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect('mongodb://localhost/conduit');
//   mongoose.set('debug', true);
// }

// require('./models/User');
// require('./models/Article');
// require('./models/Comment');
// require('./config/passport');

// app.use(require('./routes'));

/// error handlers
/// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.use(function (req, res) {
//     res.status(404).send({
//         url: req.originalUrl + ' not found'
//     })
// });

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function (err, req, res, next) {
        console.log(err.stack);

        res.status(err.status || 500);

        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});

// finally, let's start our server...
var server = app.listen(port, function () {
    console.log('Server listening on port ' + server.address().port);
});