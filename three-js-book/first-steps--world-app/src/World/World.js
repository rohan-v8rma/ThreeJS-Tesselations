import camera from './components/camera.js';
import cube from './components/cube.js';
import scene from './components/scene.js';

import renderer from './systems/renderer.js';
import Resizer from './systems/Resizer.js';

class World {
  constructor(container) {
    this.camera = camera;
    this.renderer = renderer;
    this.scene = scene;
    
    container.append(this.renderer.domElement);

    this.scene.add(cube);
  }
  
  render() {
		this.renderer.render(this.scene, this.camera);
  }
}

export default World;