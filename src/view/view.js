import { init } from './init.js';
import { eventHandler } from './eventHandler.js';

export let view = () => {
    const initial = init();
    document.getElementById("command-submit").addEventListener("click", () => eventHandler(initial));
};