// To do...
import World from './World/World.js';

function main() {
    const container = document.querySelector('#scene-container');

    const world = new World(container);

    world.render();
}

const button = document.createElement("button");

button.innerText = "Render Cube";

button.onclick = main;

document.querySelector("body").append(button);



