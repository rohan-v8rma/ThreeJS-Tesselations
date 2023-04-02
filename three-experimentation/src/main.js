import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//-------- ----------
// SCENE TYPE OBJECT, CAMERA TYPE OBJECT, and RENDERER
//-------- ----------
const scene = new THREE.Scene();
scene.add(new THREE.GridHelper(9, 9));

const camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 100);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(1080, 810, false);

const canvas = document.getElementById('scene-container')
canvas.appendChild(renderer.domElement);

//-------- ----------
// Creating MESH Object
//-------- ----------
// create a box geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// create a material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// create a mesh object with the box geometry and material
const mesh = new THREE.Mesh(geometry, material);

// add the mesh to the scene
scene.add(mesh);

// clone the mesh object
const clonedMesh = mesh.clone();

// create a sphere geometry
const newGeometry = new THREE.SphereGeometry(0.5, 32, 32);

// create a new material
const newMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// replace the cloned mesh's geometry with the sphere geometry
clonedMesh.geometry = newGeometry;

// replace the cloned mesh's material with the new material
clonedMesh.material = newMaterial;

// set the position of the cloned mesh
clonedMesh.position.x = 2;

// add the cloned mesh to the scene
scene.add(clonedMesh);


//-------- ----------
// ANIMATION LOOP
//-------- ----------

// let angle = 0;
// let lastTimeStamp = 0;
// const radPerSecond = MathUtils.degToRad(180);

// The parameter of the callback passed to setAnimationLoop is a timestamp indicating the current time. It is a DOMHighResTimeStamp value, which is a double representing a number of milliseconds accurate to a thousandth of a millisecond. The value represents the time elapsed since the start of the program or since a certain reference time, depending on the platform and the browser implementation.
// renderer.setAnimationLoop((delta) => {
//     angle += (radPerSecond * ( (delta - lastTimeStamp) / 1000 ) );
//     angle %= Math.PI * 2;

//     lastTimeStamp = delta;    
    
//     // Mesh moving in a circle
//     mesh1.position.set(2 * Math.sin(angle), 0, 2 * Math.cos(angle));

//     //* Mesh always made to look at center
//     //? This .lookAt method is inherited from Object3D class. It is usually used for cameras, which also are derived from Object3D.
//     mesh1.lookAt(0, 0, 0);

//     renderer.render(scene, camera);
// })


//-------- ----------
// CONTROLS
//-------- ----------
const controls = new OrbitControls(camera, canvas); 
controls.enablePan = false;

controls.addEventListener('change', () => {
    renderer.render(scene, camera);  
})

//-------- ----------
// RENDER
//-------- ----------
renderer.render(scene, camera);
