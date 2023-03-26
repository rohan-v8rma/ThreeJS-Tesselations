import { WebGLRenderer } from 'three';

function createRenderer() {

    // Passing a specification object to WebGLRenderer to turn on anti-aliasing
    const renderer = new WebGLRenderer({antialias: true});

    return renderer;
}

export default createRenderer;