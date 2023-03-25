import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube (
    side = 2,
    x = 0, 
    y = 0,
    z = 0,
) {
    const geometry = new BoxBufferGeometry(side, side, side);

    // This is the only material visible without lights
    const material = new MeshBasicMaterial();

    const cube = new Mesh(geometry, material);

    cube.position.set(x, y, z);

    return cube;
}

export default createCube;