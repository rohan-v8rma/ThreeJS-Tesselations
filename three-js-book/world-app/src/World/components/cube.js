import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

// To do...

const geometry = new BoxBufferGeometry(2, 2, 2);

// This is the only material visible without lights
const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

export default cube;