var THREE = require('three.js');
var BasicMaterial = require('./BasicMaterial');

class Cube {
	constructor(size) {
		this.geometry = new THREE.BoxGeometry(size.width, size.height, size.depth);
		this.material = new BasicMaterial(0x00ffff);

		this.mesh = new THREE.Mesh(this.geometry, this.material.getMaterial());
	}

	update() {
		this.mesh.rotation.x += 0.01;
		// this.mesh.rotation.y += 0.01;
	}

	getMesh() {
		return this.mesh;
	}
}

module.exports = Cube;