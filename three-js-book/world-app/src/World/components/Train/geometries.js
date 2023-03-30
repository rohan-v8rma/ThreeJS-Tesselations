import { BoxBufferGeometry, CylinderBufferGeometry } from 'three';

function createGeometries() {
    const cabin = new BoxBufferGeometry(1.5, 2.25, 2);

    const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5); // Leaving the number of radial segments to their default value.

    const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);

    const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);

    return {
        cabin,
        chimney,
        nose, 
        wheel
    };
}

export default createGeometries;