import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//TODO: Read up on orbit controls over here: https://discoverthreejs.com/book/first-steps/camera-controls/#initialize-the-controls

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas); // canvas is the domElement which contains our scene

    return controls;
}

export default createControls;