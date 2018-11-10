// import { initBus } from "./initBus.js";

export let commandHandler = (dimensions, bus, command) => {
    if(command === '') {
        return;
    }
    let commandArray = command.toLowerCase().split(' '),
        commandType = commandArray[0];


    if(!bus.getLocation().x) {
        if(commandType === 'place') {
            if(commandArray[1] && commandArray[1].indexOf(',') > 0) {
                let commandInfo = commandArray[1].split(',');
                if(commandInfo[0] && commandInfo[1] && commandInfo[2]) {
                    return bus[commandType](dimensions, commandInfo[0], commandInfo[1], commandInfo[2]);
                }else return 'please provide valid location command(x,y,t)!';
            }else return 'please provide valid place command';
        }else return 'please set place command at first!';
    }else {
        switch (commandType) {
            case 'place':
                let commandInfo = commandArray[1].split(',');
                return bus[commandType](dimensions, commandInfo[0], commandInfo[1], commandInfo[2]);
            case 'move':
                return bus[commandType](dimensions);
            case 'left':
                return bus[commandType]();
            case 'right':
                return bus[commandType]();
            case 'report':
                return bus.getLocation().x +  ',' + bus.getLocation().y +  ',' + bus.getLocation().f;
            default:
                return 'not valid command!';
        }
    }
};