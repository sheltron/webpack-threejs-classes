var THREE = require('three.js');

class BasicMaterial {

	constructor(color) {
		this.material = new THREE.MeshBasicMaterial({
			color: color
		});
	}

	getMaterial() {
		return this.material
	}

}

module.exports = BasicMaterial;