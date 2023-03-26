// To do...
import World from './World/World.js';

function main() {
    const container = document.querySelector('#scene-container');

    const world = new World(container);

    // Starting the animation loop.
    world.start();
}

//? Code for rendering upon button click.

// const button = document.createElement("button");
// button.innerText = "Render Cube";
// button.onclick = main;
// document.querySelector("body").append(button);


main();


