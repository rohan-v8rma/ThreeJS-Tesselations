import createCamera from './components/camera.js';
import createCube from './components/cube.js';
import createScene from './components/scene.js';

import createRenderer from './systems/renderer.js';
import Resizer from './systems/Resizer.js';


// Module-scoped variables using the `let` keyword. CANNOT be accessed outside World.js, which is requirement since we want to keep the implementation details as separated as possible. 

//? Read the reason behind that here: https://discoverthreejs.com/book/first-steps/world-app/#guard-your-secrets-well
//! Limitation to that is we cannot create two World instances because these variables will be overrwritten.
let camera;
let cube;
let renderer;
let scene;

// Previously, we were using variables that were properties of class instances, which could be accessed outside this module as well.
//TODO: A better option would be private class variables - https://caniuse.com/?search=private%20class%20fields

class World {
  constructor(container) {
    camera = createCamera();
    cube = createCube();
    renderer = createRenderer();
    scene = createScene();

    container.append(renderer.domElement);

    scene.add(cube);
  }
  
  render() {
		renderer.render(scene, camera);
  }
}

export default World;