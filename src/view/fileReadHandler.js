import {commandHandler} from "../controller/commandHandler";

export const file = (event, initial) => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        let files = event.target.files; //FileList object
        let output = document.getElementById("result");

        for (let file of files) {
            if (!file.type.match('plain')) continue;

            let picReader = new FileReader();

            picReader.addEventListener("load", function(event) {

                let result = event.target.result,
                    resultsArray = result.split('\n'),
                    div = document.createElement("div");
                div.innerText = result;
                output.insertBefore(div, null);

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
            });

            //Read the text file
            picReader.readAsText(file);
        }
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
};