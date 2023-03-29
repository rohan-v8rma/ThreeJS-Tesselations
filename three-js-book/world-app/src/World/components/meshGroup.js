import {
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    SphereBufferGeometry
} from 'three';

function createMeshGroup() {
    const group = new Group();

    const geometry = new SphereBufferGeometry(0.25, 16, 16);

    const material = new MeshStandardMaterial({
        color: 'indigo'
    })

    const protoSphere = new Mesh(geometry, material);

    /* 
    * Cloned objects have everything same as the original object. 
    ? Adjusting position, rotation and scale of cloned object don't affect the original object.
    ! BUT, geometry and material are shared. Changes to the shared material will lead to changes everywhere. E.g: If we set color of either the original or cloned material, both will change.
    ? This connection can be broken by instantiating a new material or geometry for the cloned object.
    ! Only default properties will be cloned. E.g.: Custom properties like `.tick` method won't be cloned.
    */
    
    // Taking the radius of the circle in which the spheres are arranged as 3.
    const arrangeRadius = 3;

    // Doing this so that the circle is centered along the Z-axis
    protoSphere.position.x = -1 * arrangeRadius;

    group.add(protoSphere);

    
    const totalNumberOfSpheres = 21;
    const increment = 1/totalNumberOfSpheres;

    // Generating `totalNumberOfSpheres - 1`
    for(let angleFraction = increment; angleFraction < 1; angleFraction += increment) {
        const theta = (Math.PI * 2) * angleFraction

        const clonedSphere = protoSphere.clone();
        // Used += to make the circle relative to the x position of the pre-existing sphere
        clonedSphere.position.x += arrangeRadius * (1 - Math.cos(theta));
        clonedSphere.position.y = arrangeRadius * Math.sin(theta);        

        // Having the spheres as different sizes.
        clonedSphere.scale.multiplyScalar(0.01 + angleFraction);

        group.add(clonedSphere);
    }

    const radiansPerSecond = MathUtils.degToRad(30);

    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    }

    return group;
}

export default createMeshGroup;