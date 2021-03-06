import { init } from './init.js';
import { eventHandler } from './eventHandler.js';
import { file } from './fileReadHandler.js';
import { testEventHandler } from "./testHandler";

export const view = () => {
    const initial = init();
    document.getElementById('files').addEventListener('change', () => file(event, initial), false);
    document.getElementById("command-submit").addEventListener("click", () => eventHandler(initial));
    document.getElementById("test-data").addEventListener("click", () => testEventHandler(initial));
    document.getElementById("command-input").addEventListener("keyup", (event) => {
        event.preventDefault();
        if (event.keyCode === 13) {
            eventHandler(initial);
        }
    });

};