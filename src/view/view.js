import { init } from './init.js';
import { eventHandler } from './eventHandler.js';

export let view = () => {
    const initial = init();
    document.getElementById("command-submit").addEventListener("click", () => eventHandler(initial));
    document.getElementById("command-input").addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            eventHandler(initial);
        }
    });

};