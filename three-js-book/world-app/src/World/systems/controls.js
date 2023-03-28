import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//TODO: Read up on orbit controls over here: https://discoverthreejs.com/book/first-steps/camera-controls/#initialize-the-controls

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas); // canvas is the domElement which contains our scene

    //? Panning the controls using right mouse button pans the `target` (present in `controls.target` property) too. Can be disabled by setting enablePan to false.
    controls.enablePan = false;


    /*
    * As soon as the user stops interacting with the scene, the camera will come to an abrupt stop. 
    * Objects in the real world have inertia and never stop abruptly like this, so we can make the controls feel more realistic by enabling damping.
    * With damping enabled, the controls will slow to a stop over several frames which gives them a feeling of weight. You can adjust the .dampingFactor to control how fast the camera comes to a stop. 
    ? However, for damping to work, we must call `controls.update` every frame in the animation loop. 
    ? If we’re rendering frames on demand instead of using the loop, we cannot use damping.
    */

    controls.enableDamping = true;
    controls.dampingFactor = 0.05; // 0.05 is the default value. 1 means no damping, controls come to a complete stop immediately.

    //! controls.update needs to be called in animation loop for damping to work correctly.
    controls.tick = () => controls.update();

    return controls;
}

export default createControls;