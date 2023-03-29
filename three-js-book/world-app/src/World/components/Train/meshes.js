import { Mesh } from 'three';

// We need geometries and materials to make meshes, which is why we need to import these.
import createGeometries from './geometries.js';
import createMaterials from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();
}

export default createMeshes;