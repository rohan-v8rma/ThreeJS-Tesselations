// Adding a DirectionalLight to the scene...
//TODO: Read about it here - https://discoverthreejs.com/book/first-steps/physically-based-rendering/#introducing-the-directionallight

import { DirectionalLight } from 'three';

function createLights() {

    // White light with an intensity of 8
    const light = new DirectionalLight('white', 8);

    // Shines from `light.position` to `light.target.position`

    // Moving the light to right, up and towards us.
    light.position.set(10, 10, 10);
    // Now, light is shining from (10, 10, 10), towards (0, 0, 0).

    return light;
}

export default createLights;