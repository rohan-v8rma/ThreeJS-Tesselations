import { Group } from 'three';
import createMeshes from './meshes';

class Train extends Group {
    constructor() {
        //* Since we made a call to `super`, now the Train class has all the normal functionality of Group.
        //? Meaning we can add objects to it. Transformations to a Train instance will apply to the entire collection of shapes representing the train.
        super();

        //* The use of a member variable is INTENTIONAL, because we'll need to access these meshes from outside the constructor.
        //? We'll access meshes from outside to add animations.
        this.meshes = createMeshes();

        // Adding all the meshes that are part of the train to a group allows us to move this model as one piece
        this.add(
            this.meshes.cabin,
            this.meshes.chimney,
            this.meshes.largeWheel,
            this.meshes.nose,
            this.meshes.smallWheelFront,
            this.meshes.smallWheelMiddle,
            this.meshes.smallWheelRear
        )

        // this.position.set(0, 0, -1.5);

        const radiansPerSecond = Math.PI;

        this.tick = (delta) => {
            const deltaChangeInAngle = radiansPerSecond * delta;
        
            /*
            * Inner rotation 
            * The axis of rotation for this group rotation is the center of the group's bounding box
            ? The center of a group's bounding box is determined by computing the minimum and maximum extents of the group's children along each axis (x, y, and z). 
            ? If a group contains multiple objects with different positions, their collective center of gravity will determine the center point of the group. This center point will be the average of all the individual object positions, weighted by their masses (which, in three.js, are typically the volumes of the objects). 
            ? So if there are a lot of objects centered around a particular point in a group, and just one object that is at an arbitrary position, the center of the group will roughly be at the point around which the majority of objects are centered, due to the average calculation.
            
            */
            this.rotation.y -= deltaChangeInAngle;
        }
    }
}

export default Train;