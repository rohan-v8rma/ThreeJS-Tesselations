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
    }
}

export default Train;