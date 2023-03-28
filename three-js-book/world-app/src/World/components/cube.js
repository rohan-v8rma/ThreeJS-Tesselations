import { 
    BoxBufferGeometry, 
    SphereBufferGeometry, 
    MathUtils, 
    Mesh, 
    MeshStandardMaterial,
    TextureLoader
} from 'three';

// Switched from MeshBasic to MeshStandard to make the material react to light sources.
//TODO: Read about MeshBasicMaterial here: https://discoverthreejs.com/book/first-steps/physically-based-rendering/#switch-to-the-physically-based-meshstandardmaterial

function createMaterial() {
    // Creating a texture loader.
    const textureLoader = new TextureLoader();

    // Returns a blank Texture class instance that is BLACK in color, and replaces with the loaded image when the loading is complete.
    const textureBW = textureLoader.load('/assets/textures/uv-test-bw.png');
    const textureCol = textureLoader.load('/assets/textures/uv-test-col.png');

    // This is the only material visible without lights
    // const material = new MeshBasicMaterial();

    // Passing an object into this that simulates named parameters
    const material = new MeshStandardMaterial({
        normalMap: textureCol,
        // Assigning a texture to the color map slot of the material

        // color: "red", 
        /* 
        If we assign both `map` and `color` properties in a material, the combined result will be displayed.
        !NOTE that since white is the default color, it doesn't have any effect on the tint of the texture. 
        !The texture can only be made darker using colors that are NOT white.
        */
    });
    //TODO: Figure out why `peachpuff` and `papayawhip` aren't working

    return material;
}

function createCube (
    side = 2,
    x = 0, 
    y = 0,
    z = 0,
) {
    const geometry = new BoxBufferGeometry(side, side, side);
    // const geometry = new SphereBufferGeometry(1, 32, 32);

    const material = createMaterial();

    const cube = new Mesh(geometry, material);

    cube.position.set(x, y, z);

    //* The parameters define rotation around X axis, rotation around Y axis and rotation around Z axis, respectively.
    //? POSITIVE value describes rotation according to right-hand thumb rule; where if we keep thumb along the positive direction of the respective axis, and curl our fingers, the direction of the curl is the direction of rotation.
    //? NEGATIVE value is opposite of that.
    //! The rotation value is relative to pi (3.14), where 2pi = 360 degrees
    // cube.rotation.set(0, 0, 0);

    //* It is also possible to use `degToRad` utility
    //? The order of rotations being applied is `XYZ`. This can be changed by `Euler.order` property
    // const rotX = MathUtils.degToRad(10);
    // const rotY = MathUtils.degToRad(10);
    // const rotZ = MathUtils.degToRad(10);
    // cube.rotation.set(rotX, rotY, rotZ);
    //? The Euler instance stored in `.quaternion` property is automatically updated when `.rotation` is updated and vice versa.
    // console.log(cube.quaternion);

    // This is the amount of rotation we want per second, irrespective of the refresh rate of the screen.
    const radPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        // We straight up multiply delta with radPerSecond since delta is a fraction of a second so multiplying it with the total rotation per second gives us the required amount of rotation for the next delta.
        cube.rotation.x += radPerSecond * delta;
        cube.rotation.y += radPerSecond * delta;
        cube.rotation.z += radPerSecond * delta;
    }

    return cube;
}

export default createCube;

