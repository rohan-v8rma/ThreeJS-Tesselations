import { DirectionalLightHelper } from 'three';
import createCamera from './components/camera.js';
import createCube from './components/cube.js';
import createLights from './components/lights.js';
import createScene from './components/scene.js';

import createRenderer from './systems/renderer.js';
import Resizer from './systems/Resizer.js';


// Module-scoped variables using the `let` keyword. CANNOT be accessed outside World.js, which is requirement since we want to keep the implementation details as separated as possible. 

//? Read the reason behind that here: https://discoverthreejs.com/book/first-steps/world-app/#guard-your-secrets-well
//! Limitation to that is we cannot create two World instances because these variables will be overrwritten.
let camera;
let cube1;
let cube2;
let helper;
let light;
let renderer;
let scene;

// Previously, we were using variables that were properties of class instances, which could be accessed outside this module as well.
//TODO: A better option would be private class variables - https://caniuse.com/?search=private%20class%20fields

class World {
  constructor(container) {
    camera = createCamera(3, 0, 15);
    cube1 = createCube(3);
    cube2 = createCube(3, 6, 0, 0);
    light = createLights(3, 3, 3, 3, 0, 0);
    renderer = createRenderer();
    scene = createScene();

    helper = new DirectionalLightHelper(light, 5);

    container.append(renderer.domElement);

    //!NOTE: Added the light and the mesh in a single call of scene.add. We can add as many objects as we like, separated by commas.
    scene.add(cube1, cube2, helper, light);

    const resizer = new Resizer(camera, container, renderer);

    //* External hook definition
    //? Arrow function to preserve value of `this`
    resizer.onResize = () => {
      this.render();
    }
  }
  
  render() {
		renderer.render(scene, camera);
  }
}

export default World;