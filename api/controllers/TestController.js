/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	connection: 'sqlserver',
    create: function (req, res, next){
        var objeto = {
            nombre: req.param('nombre'),
            otroNombre: req.param('otroNombre'),
            meteUnNumero: req.param('meteUnNumero')
        }
        Test.create(objeto, function testCreated(err,Test){
            console.log("Esoooooooooo congratz");
        });
    }
};

