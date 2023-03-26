//TODO Read more about the Resizer module and why it is a class, here: https://discoverthreejs.com/book/first-steps/world-app/#systems-the-resizer-module-1

const setSize = (camera, container, renderer) => {
    // Set camera's aspect ratio
    //? We don't do this when we create the camera, since the container variable would have to be in scope and we are avoiding mixing concerns.
    //TODO: Understand why the cube is appearing horizontally stretched when aspect ratio of camera is 1.
    camera.aspect = container.clientWidth / container.clientHeight;


    // Updating the camera's frustum because we changed a parameter of the camera. 
    //? We do this because the viewing frustum doesn't automatically update upon changing of any of the fields of the camera
    camera.updateProjectionMatrix();

    // Updating size of renderer
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Setting pixel ratio (for clarity on mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(camera, container, renderer) {
        // Setting initial size on-load
        setSize(camera, container, renderer);

        window.addEventListener("resize", () => {
            // Setting the size again if a resize occurs
            setSize(camera, container, renderer);
        })
    };
}

export default Resizer;