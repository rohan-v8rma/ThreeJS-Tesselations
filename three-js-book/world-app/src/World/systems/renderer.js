import { WebGLRenderer } from 'three';

function createRenderer() {

    // Passing a specification object to WebGLRenderer to turn on anti-aliasing
    const renderer = new WebGLRenderer({antialias: true});

    renderer.physicallyCorrectLights = true;
    //TODO: Checkout this example of physically correct lights: https://threejs.org/examples/#webgl_lights_physical

    return renderer;
}

export default createRenderer;