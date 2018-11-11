import {commandHandler} from "../controller/commandHandler";
import {testData} from "../model/testData";

export const testEventHandler = (initial) => {
    const result = testData,
      resultsArray = result.split('\n');
    // div.innerText = result;
    // output.insertBefore(div, null);

    resultsArray.forEach(result => {
        if(result !== '') {
            let output = document.getElementById("output"),
              element = document.createElement('p');

            // while (output.hasChildNodes()) {
            //     output.removeChild(output.firstChild);
            // }
            element.innerHTML = commandHandler(initial.dimensions, initial.bus, result);
            output.appendChild(element);
        }
    });
};