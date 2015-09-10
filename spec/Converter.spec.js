var Converter = require('../backend/Converter');

describe('Converter', function(){

    it('should convert positive Celsius to Fahreheit', function(){
        // given
        var converter = new Converter();

        //when
        var result = converter.toFahrenheit(40);

        //then
        expect(result).toEqual(104);
    });

    it('should convert positive Fahreheit to Celsius', function(){
        // given
        var converter = new Converter();

        //when
        var result = converter.toCelsius(104);

        //then
        expect(result).toEqual(40);
    });

});