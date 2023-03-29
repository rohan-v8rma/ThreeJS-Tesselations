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

    
    const totalNumberOfSpheres = 21;

    // Generating `totalNumberOfSpheres - 1`
    for(let sphereNum = 1; sphereNum <= totalNumberOfSpheres; sphereNum++) {
        const angleFraction = sphereNum / totalNumberOfSpheres;

        const theta = (Math.PI * 2) * angleFraction;

        let currentObject;
        if(sphereNum !== 1) {
        // if(sphereNum !== totalNumberOfSpheres) {
            console.log("hello");
            console.log(sphereNum);
            currentObject = protoSphere.clone();
        }
        else {
            //* We add the original object at the end otherwise the scale (multiplyScalar) function below will modify the scale of the original object, resultingly affecting all the cloned objects
            //? Another possible solution would be add it in the beginning but `set` the scale instead of using `multiplyScalar` so that the affects don't cascade.
            currentObject = protoSphere;
            console.log("bye");
        }

        // Used += to make the circle relative to the x position of the pre-existing sphere
        currentObject.position.x += arrangeRadius * (1 - Math.cos(theta));
        currentObject.position.y = arrangeRadius * Math.sin(theta);        
        currentObject.position.z = angleFraction * 5;        

        // Having the spheres as different sizes.
        // currentObject.scale.multiplyScalar(0.01 + angleFraction);
        currentObject.scale.set(0.01 + angleFraction, 0.01 + angleFraction, 0.01 + angleFraction);

        group.add(currentObject);
    }

    const radiansPerSecond = MathUtils.degToRad(30);

    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    }

    return group;
}

export default createMeshGroup;