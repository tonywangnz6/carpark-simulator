import { compass } from './compass.js';

export class Bus {
    constructor() {
        this.location = {
            x: null,
            y: null,
            f: null
        };
        this.place= this.place.bind(this);
        this.move= this.move.bind(this);
        this.left= this.left.bind(this);
        this.right= this.right.bind(this);
    }

    getLocation() {
        return this.location;
    }

    place(dimensions, x, y, f) {
        if(x >= 0 && y >= 0 && x < dimensions.getDimensions().x && y < dimensions.getDimensions().y && compass.includes(f)) {
            this.location = {
                x: x,
                y: y,
                f: f
            };
            return 'bus place into carpark';
        }else return 'bus place out of carpark range';
    }

    move(dimensions) {
        switch (this.location.f) {
            case 'north':
                if(this.location.y > dimensions.getDimensions().y - 1) {
                    return 'out of carpark range';
                }else {
                    this.location.y++;
                    return 'bus move on step to north';
                }
            case 'south':
                if(this.location.y <= 0) {
                    return 'out of carpark range';
                }else {
                    this.location.y--;
                    return 'bus move on step to south';
                }
            case 'east':
                if(this.location.x > dimensions.getDimensions().x - 1) {
                    return 'out of carpark range';
                }else {
                    this.location.x++;
                    return 'bus move on step to east';
                }
            case 'west':
                if(this.location.x <= 0) {
                    return 'out of carpark range';
                }else {
                    this.location.x--;
                    return 'bus move on step to west';
                }
        }
    }

    left() {
        if (compass.indexOf(this.location.f) !== 0) {
            this.location.f = compass[compass.indexOf(this.location.f) - 1];
        }else {
            this.location.f = compass[3];
        }
        return 'bus turn left';
    }

    right() {
        if (compass.indexOf(this.location.f) !== 3) {
            this.location.f = compass[compass.indexOf(this.location.f) + 1];
        } else {
            this.location.f = compass[0];
        }
        return 'bus turn right';
    }
}