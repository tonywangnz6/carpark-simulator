import { commandHandler } from './controller/commandHandler.js';
import {Bus} from "./model/bus";
import {Carpark} from "./model/carpark";

export let view = () => {
    let bus = new Bus(),
        dimensions = new Carpark();
    document.getElementById("command-submit").addEventListener("click", () => {
        let input =  document.getElementById("command-input"),
          output = document.getElementById("output"),
          command = input.value.trim(),
          element = document.createElement('p');
        input.value = '';
        while (output.hasChildNodes()) {
            output.removeChild(output.firstChild);
        }
        element.innerHTML = commandHandler(dimensions, bus, command);
        output.appendChild(element);
    });
};