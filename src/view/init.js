import {Bus} from "../model/bus";
import {Carpark} from "../model/carpark";


export const init = () => {
    const bus = new Bus(),
        dimensions = new Carpark();

    return {
        bus: bus,
        dimensions: dimensions
    }
};