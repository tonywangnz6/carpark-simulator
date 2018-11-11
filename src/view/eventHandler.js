import {commandHandler} from "../controller/commandHandler";

export const eventHandler = (initial) => {
    let input =  document.getElementById("command-input"),
      output = document.getElementById("output"),
      command = input.value.trim(),
      element = document.createElement('p');
    input.value = '';
    // while (output.hasChildNodes()) {
    //     output.removeChild(output.firstChild);
    // }
    element.innerHTML = commandHandler(initial.dimensions, initial.bus, command);
    output.appendChild(element);
};
