import { DirectionalLightHelper } from 'three';
import createCamera from './components/camera.js';
import createCube from './components/cube.js';
import createLights from './components/lights.js';
import createScene from './components/scene.js';

import createControls from './systems/controls.js';
import createRenderer from './systems/renderer.js';
import Loop from './systems/Loop.js';
import Resizer from './systems/Resizer.js';


//* The below variables need to be accessed repeatedly, which is why we keep them in the scope of the entire module and not just the scope of the constructor.
// Module-scoped variables using the `let` keyword. CANNOT be accessed outside World.js, which is requirement since we want to keep the implementation details as separated as possible. 
//? Read the reason behind that here: https://discoverthreejs.com/book/first-steps/world-app/#guard-your-secrets-well
//! Limitation to that is we cannot create two World instances because these variables will be overrwritten.
let camera;
let loop;
let renderer;
let scene;

// Previously, we were using variables that were properties of class instances, which could be accessed outside this module as well.
//TODO: A better option would be private class variables - https://caniuse.com/?search=private%20class%20fields

class World {
  constructor(container) {
    camera = createCamera(0, 0, 15);
    renderer = createRenderer();
    scene = createScene();  

    // Objects that just need to be added into the scene are made as local to the scope of the constructor.
    //! We do NOT need to acess the below defined variables once they have been added into the scene
    const cube = createCube(3);
    // const cube2 = createCube(3, 6, 0, 0);
    const light = createLights(0, 3, 3, 0, 0, 0);
    const lightHelper = new DirectionalLightHelper(light, 5);
    
    const controls = createControls(camera, renderer.domElement);
    //* By default, the controls orbit around the center of the scene, point (0,0,0). This is stored in the controls.target property.
    // controls.target.set(10, 20, 30); // Making controls to orbit a point in world space
    controls.target.copy(cube.position); // Making controls to orbit the cube

    //? Panning the controls using right mouse button pans the target too. Can be disabled by setting enablePan to false.
    controls.enablePan = false;

    container.append(renderer.domElement);

    //!NOTE: Added the light and the mesh in a single call of scene.add. We can add as many objects as we like, separated by commas.
    scene.add(
      cube, 
      // cube2,
      light, 
      lightHelper
    );

    //? We keep this variable since it does update the aspect ratios on resize, even though not re-rendering World itself (that is being taken care of by setAnimationLoop)
    const resizer = new Resizer(camera, container, renderer);

    //* External hook definition
    //? Arrow function to preserve value of `this`
    // resizer.onResize = () => {
    //   this.render();
    // }
    //! Temporarily removing it since we have setup an animation loop that is already calling the `render()` method at every frame; so we don't need to call it manually.

    loop = new Loop(camera, renderer, scene);
    loop.updatables.push(cube);
    // loop.updatables.push(camera);
    // loop.updatables.push(light);
  }
  
  render() {
		renderer.render(scene, camera);
  }

  // The below two functions are how we provide access to these methods in main.js since `loop` variable is module-scoped.
  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;