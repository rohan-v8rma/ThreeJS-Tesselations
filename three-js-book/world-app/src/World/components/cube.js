import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube (
    side = 2
) {
    const geometry = new BoxBufferGeometry(side, side, side);

    // This is the only material visible without lights
    const material = new MeshBasicMaterial();

    const cube = new Mesh(geometry, material);

    return cube;
}

export default createCube;