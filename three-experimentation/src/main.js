import * as THREE from 'three';
import { MathUtils } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//-------- ----------
// SCENE TYPE OBJECT, CAMERA TYPE OBJECT, and RENDERER
//-------- ----------
const scene = new THREE.Scene();
scene.add(new THREE.GridHelper(9, 9));

const camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 100);
camera.position.set(10, 10, 10);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(1080, 810, false);

const canvas = document.getElementById('scene-container')
canvas.appendChild(renderer.domElement);

//-------- ----------
// Creating MESH Object
//-------- ----------
const geo1 = new THREE.BoxGeometry(1, 1, 1);
const mat1 = new THREE.MeshBasicMaterial({color: new THREE.Color(1, 1, 0) });

const mesh1 = new THREE.Mesh(geo1, mat1);
scene.add(mesh1);
// object3d rotation prop of mesh object
mesh1.rotation.z = Math.PI / 180 * 45;

//-------- ----------
// RENDER
//-------- ----------
camera.position.set(10, 10, 10);

camera.lookAt(mesh1.position);
renderer.render(scene, camera);


//-------- ----------
// ANIMATION LOOP
//-------- ----------

let angle = 0;
let lastTimeStamp = 0;
const radPerSecond = MathUtils.degToRad(180);

// The parameter of the callback passed to setAnimationLoop is a timestamp indicating the current time. It is a DOMHighResTimeStamp value, which is a double representing a number of milliseconds accurate to a thousandth of a millisecond. The value represents the time elapsed since the start of the program or since a certain reference time, depending on the platform and the browser implementation.
renderer.setAnimationLoop((delta) => {
    angle += (radPerSecond * ( (delta - lastTimeStamp) / 1000 ) );
    angle %= Math.PI * 2;

    lastTimeStamp = delta;    
    
    // Mesh moving in a circle
    mesh1.position.set(2 * Math.sin(angle), 0, 2 * Math.cos(angle));

    //* Mesh always made to look at center
    //? This .lookAt method is inherited from Object3D class. It is usually used for cameras, which also are derived from Object3D.
    mesh1.lookAt(0, 0, 0);

    renderer.render(scene, camera);
})


//-------- ----------
// CONTROLS
//-------- ----------
const controls = new OrbitControls(camera, canvas); 
controls.enablePan = false;

controls.addEventListener('change', () => {
    renderer.render(scene, camera);  
})
