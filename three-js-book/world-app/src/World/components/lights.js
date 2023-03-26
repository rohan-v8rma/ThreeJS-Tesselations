// Adding a DirectionalLight to the scene...
//TODO: Read about it here - https://discoverthreejs.com/book/first-steps/physically-based-rendering/#introducing-the-directionallight

import { DirectionalLight } from 'three';

function createLights(
    fromX=10, 
    fromY=10, 
    fromZ=10, 
    toX=0, 
    toY=0, 
    toZ=0
) {


    // White light with an intensity of 8
    const light = new DirectionalLight('white', 8);

    // Shines from `light.position` to `light.target.position`

    // Moving the light to right, up and towards us.
    light.position.set(fromX, fromY, fromZ);
    // Now, light is shining from (fromY, fromY, fromZ), towards (toX, toY, toZ).

    light.target.position.set(toX, toY, toZ);

    return light;
}

export default createLights;