
export class Carpark {
    constructor() {
        this.dimensions = {
            x: 5,
            y: 5
        };
        this.getDimensions= this.getDimensions.bind(this);
        this.setDimensions= this.setDimensions.bind(this);
    }

    getDimensions() {
        return this.dimensions;
    }

    setDimensions(x, y) {
        this.dimensions = {
            x: x,
            y: y
        }
    }
}