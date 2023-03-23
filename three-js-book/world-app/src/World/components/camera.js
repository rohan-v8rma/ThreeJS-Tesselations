import { PerspectiveCamera } from "three";

const fov = 35;

const aspect = 1; 
// Used dummy value instead of a refering the container. Will sort this out using the Resizer class.

const nearClip = 0.1;
const farClip = 100;

const camera = new PerspectiveCamera(fov, aspect, nearClip, farClip);

camera.position.set(0, 0, 10);

export default camera;