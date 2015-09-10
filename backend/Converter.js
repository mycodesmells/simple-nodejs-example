function Converter() {

    this.toFahrenheit = function(celsius) {
        return celsius * 9.0 / 5 + 32;
    };

    this.toCelsius = function(fahrenheit) {
        return (fahrenheit - 32) * 5.0 / 9;
    };

}

module.exports = Converter;