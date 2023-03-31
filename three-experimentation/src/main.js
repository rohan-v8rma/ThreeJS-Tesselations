// To do...
// import World from './World/World.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
scene.add(new THREE.GridHelper(10, 10));
const camera = new THREE.PerspectiveCamera(50, 4 / 3, 0.1, 100);
scene.add(camera);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(1080, 810, false);

const canvas = document.getElementById('scene-container')
canvas.appendChild(renderer.domElement);

//-------- ----------
// RENDER
//-------- ----------
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
renderer.render(scene, camera);


const controls = new OrbitControls(camera, canvas); 
controls.enablePan = false;

controls.addEventListener('change', () => {
    renderer.render(scene, camera);  
})