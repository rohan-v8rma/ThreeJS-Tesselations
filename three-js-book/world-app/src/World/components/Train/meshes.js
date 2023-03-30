import { Mesh } from 'three';

// We need geometries and materials to make meshes, which is why we need to import these.
import createGeometries from './geometries.js';
import createMaterials from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const cabin = new Mesh(geometries.cabin, materials.body);

    /*
    (Upwards) y: Half the height of the cabin + 0.1 for a bit of clearance for the wheels, which we will also apply for nose.
    */
    cabin.position.set(0, ( 2.25 / 2 ) + 0.1, 0);

    const chimney = new Mesh(geometries.chimney, materials.highlights);
    /*
    (Upwards) y : Half the height of the chimney to get its base at 0 + Twice the radius of the nose
    (Outwards) z : Approximately equal to height of nose.
    */
    chimney.position.set(0, ( 0.5 / 2 ) + ( 0.75 * 2 ), 3);

    const nose = new Mesh(geometries.nose, materials.body);
    /*
    (Upwards) y: Radius of the nose + 0.1 for a bit of clearance for the wheels
    (Outwards) z: Half the length of the nose + Half the depth of the cabin
    */
    nose.position.set(0, 0.75 + 0.1, ( 3 / 2 ) + ( 2 / 2 ));
    nose.rotation.x = Math.PI/2;

    const protoWheel = new Mesh(geometries.wheel, materials.highlights);
    protoWheel.rotation.z = Math.PI/2;

    const smallWheelRear = protoWheel.clone();
    /*
    (Upwards) y: Radius of the wheel
    (Outwards) z: Radius of the wheel + Half the depth of the cabin + Little bit clearance to avoid touching
    */
    smallWheelRear.position.set(0, 0.4, 0.4 + ( 2 / 2 ) + 0.1);

    const smallWheelMiddle = smallWheelRear.clone();
    // Approximate
    smallWheelMiddle.position.z += 1;

    const smallWheelFront = smallWheelRear.clone();
    // Approximate
    smallWheelFront.position.z += 2;

    const largeWheel = protoWheel.clone();
    /*
    (Upwards) y: Scaling factor * Radius of the wheel 
    (Outwards) z: None
    */
    largeWheel.position.set(0, 2 * 0.4, 0);
    largeWheel.scale.set(2, 1.25, 2);

    return {
        cabin,
        chimney,
        largeWheel,
        nose,
        smallWheelFront,
        smallWheelRear,
        smallWheelMiddle,
    }
}

export default createMeshes;