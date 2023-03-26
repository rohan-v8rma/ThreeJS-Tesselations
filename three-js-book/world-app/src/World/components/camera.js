import { PerspectiveCamera } from "three";

function createCamera (
    x=0,
    y=0, 
    z=10,
    aspect = 1,
    //! Used dummy value instead of a refering the container. Will sort this out using the Resizer class.
    fov = 35,
    //? Only `fov` property takes angle in degrees. All other angles in threeJS need to be specified in radians.
    farClip = 100,
    nearClip = 0.1
) {
    const camera = new PerspectiveCamera(fov, aspect, nearClip, farClip);
    camera.position.set(x,y,z);

    return camera;
}

/* 
Changing from exporting a PerspectiveCamera instance to exporting a function that creates a PerspectiveCamera instance has the following advantages:

1. Minimal performance impact by creating the instance only when the function is called
2. Possible modification of parameters in this case.
*/

export default createCamera;