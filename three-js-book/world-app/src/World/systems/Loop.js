import { Clock } from "three";

const clock = new Clock();

class Loop {
    constructor(camera, renderer, scene) {
        this.camera = camera;
        this.renderer = renderer;
        this.scene = scene;

        this.updatables = [];
    }

    start() {
        //* We don’t need to worry about the technicalities of creating an animation loop since three.js provides a method that does everything for us: `WebGLRenderer.setAnimationLoop`
        //? It internally uses requestAnimationFrame, which schedules frame in-sync with refresh rate of screen.
        //TODO: Read up on animation loops from here: https://gameprogrammingpatterns.com/game-loop.html
        
        this.renderer.setAnimationLoop(() => {
            
            // Every animated object is made to tick forward one frame.
            this.tick();

            // Re-rendering to showcase the updated physical values.
            this.renderer.render(this.scene, this.camera);
        })
    }
    
    stop() {
        // Cancelling a running loop by passing null as a callback.
        this.renderer.setAnimationLoop(null);
    }



    //* This is where we make updates to the physical attributes of objects that need to be animated.
    //? We define a `tick()` method inside of every object that needs to be updated instead of having all those updates inside of the below method, which would not conform to the principles of modular design.
    //! NOTE: Loop.tick() will run every frame so it is important to keep work done inside every tick method to a minimum.
    tick() {
        // Calling getDelta at the start of a frame to measure how long each subsequent frame takes.
        const delta = clock.getDelta();

        for(const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export default Loop;