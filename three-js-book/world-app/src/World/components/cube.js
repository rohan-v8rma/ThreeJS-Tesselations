import { BoxBufferGeometry, Color, Mesh, MeshStandardMaterial } from 'three';

// Switched from MeshBasic to MeshStandard to make the material react to light sources.
//TODO: Read about MeshBasicMaterial here: https://discoverthreejs.com/book/first-steps/physically-based-rendering/#switch-to-the-physically-based-meshstandardmaterial

function createCube (
    side = 2,
    x = 0, 
    y = 0,
    z = 0,
) {
    const geometry = new BoxBufferGeometry(side, side, side);

    // This is the only material visible without lights
    // const material = new MeshBasicMaterial();

    // Passing an object into this that simulates named parameters
    const material = new MeshStandardMaterial({color: "red"});
    //TODO: Figure out why `peachpuff` and `papayawhip` aren't working

    const cube = new Mesh(geometry, material);

    cube.position.set(x, y, z);

    //* The parameters deefine rotation around X axis, rotation around Y axis and rotation around Z axis, respectively.
    //? POSITIVE value describes rotation according to right-hand thumb rule; where if we keep thumb along the positive direction of the respective axis, and curl our fingers, the direction of the curl is the direction of rotation.
    //? NEGATIVE value is opposite of that.
    //! The rotation value is relative to pi (3.14), where 2pi = 360 degrees
    cube.rotation.set(0, 0, 0);

    return cube;
}

export default createCube;