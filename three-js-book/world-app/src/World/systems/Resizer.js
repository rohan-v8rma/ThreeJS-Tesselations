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
    //? devicePixelRatio values other than 1 render the scene at a higher or low resolution and then scale it to fit in the canvas. A DPR of 2 will render the scene at double resolution and scale down, while a DPR of 0.5 will render at half resolution and scale up. As you can imagine, high DPR values are very expensive to render!
    renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
    constructor(camera, container, renderer) {
        // Setting initial size on-load
        setSize(camera, container, renderer);

        window.addEventListener("resize", () => {
            // Setting the size again if a resize occurs
            setSize(camera, container, renderer);
            // Perform externally defined custom actions
            this.onResize();
        })
    };

    //* This method OR hook enables us to perform some customer behavior when a resize happens
    //? The camera, renderer, and <canvas> element are all being resized correctly. However, we’re only calling `.render` a single time, which draws a single frame into the canvas. 
    //? When the canvas is resized, this frame is stretched to fit the new size, which causes stretching of objects in the frame.
    onResize() {}
}

export default Resizer;