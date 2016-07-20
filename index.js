var test = require('./js/gl/test');
var Application = require('./js/gl/app');
var Cube = require('./js/gl/cube');

let app = new Application();

app.add(new Cube({
	width: 10,
	height: 10,
	depth: 10
}));


