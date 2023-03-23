import { Color, Scene } from 'three';
// import * as THREE from 'three';

function createScene (
    backgroundColor = 'skyblue'
) {
    const scene = new Scene();

    scene.background = new Color(backgroundColor);

    return scene;
}

export default createScene;