import { MeshStandardMaterial } from "three";

// We enable flatShading to give our object a carved and faceted look
//TODO: Read more about it here - https://discoverthreejs.com/book/first-steps/built-in-geometries/#the-materialflatshading-property

function createMaterials() {
    const body = new MeshStandardMaterial({
        color: 'firebrick',
        flatShading: true,
    });

    const highlights = new MeshStandardMaterial({
        color: 'darkslategray',
        flatShading: true,
    });

    return { body, highlights };
}

export default createMaterials;