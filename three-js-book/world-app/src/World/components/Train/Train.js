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

        this.position.set(0, 0, -1.5);

        const radiansPerSecond = Math.PI;

    }
}

export default Train;