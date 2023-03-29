// Adding a DirectionalLight to the scene...
//TODO: Read about it here - https://discoverthreejs.com/book/first-steps/physically-based-rendering/#introducing-the-directionallight

import { 
    AmbientLight,
    DirectionalLight,
    HemisphereLight
} from 'three';

function createLights(
    fromX=10, 
    fromY=10, 
    fromZ=10, 
    toX=0, 
    toY=0, 
    toZ=0
) {


    //* White light with an intensity of 2 (8 was too high, reaching a point where the texture was getting brightened by it)
    //? In the case of directional light, only the direction vector matters. So light from (2, 5, 6) to (0, 0, 0) OR from (200, 500, 600) to (0, 0, 0); are equivalent for any object (even one that is behind the light).
    const mainLight = new DirectionalLight('white', 5);
    // Shines from `light.position` to `light.target.position`

    // Moving the light to right, up and towards us, if all parameters are POSITIVE.
    //! These directions are under the assumption that the camera hasn't been rotated.
    mainLight.position.set(fromX, fromY, fromZ);
    // Now, light is shining from (fromY, fromY, fromZ), towards (toX, toY, toZ).

    mainLight.target.position.set(toX, toY, toZ);

    const meterPerSecond = 1;

    let moveRight = true;

    mainLight.tick = (delta) => {
        if(mainLight.position.x > 4) {
            moveRight = false;
        }
        else if(mainLight.position.x < -4) {
            moveRight = true;
        }

        if(moveRight) {
            mainLight.position.x += meterPerSecond * delta;
        }
        else {
            mainLight.position.x -= meterPerSecond * delta;
        }
    }

    //* Creating an ambient light with intensity 0.5. Less than the directional light it is paired with.
    //? Doesn't give any information about depth. Depth is determined by difference in lighting across a surface (shading) but this one lights surfaces evenly.
    //? No need for direction, rotation, position, etc because it affects all objects equally.
    const ambientLight = new AmbientLight('white', 0.5);

    const hemisphereLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategray', // dim ground color
        10, // intensity
    );

    hemisphereLight.position.set(0, 10, 10);

    return { ambientLight, hemisphereLight, mainLight };
}

export default createLights;