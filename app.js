var http = require('http');
var url = require('url');

var Converter = require('./backend/Converter');
var converter = new Converter();

var server = http.createServer(function(req, res){
    var urlObject = url.parse(req.url, true);
    var baseUrl = urlObject.pathname;
    var parameters = urlObject.query;

    if (baseUrl === '/celsius') {
        var celsius = parseInt(parameters.c, 10);
        var fahrenheit = converter.toFahrenheit(celsius);
        res.end(fahrenheit + '\n');
    } else if(baseUrl === '/fahrenheit') {
        var fahrenheit = parseInt(parameters.f, 10);
        var celsius = converter.toCelsius(fahrenheit);
        res.end(celsius + '\n');
    } else {
        res.end("Unsupported operation\n");
    }
});

server.listen(2015);