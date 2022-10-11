import BuildingGenerator from "./Generators/BuildingGenerator";
import RoomGenerator from "./Generators/RoomGenerator";
import { IOutside, IRoom } from "./Interfaces/Interfaces";
import { furniture, assets } from './assets/mockAPI.json'

const outside: IOutside = {
    type: 'patio',
    minSize: 70,
    maxSize: false
}

let newRooms: IRoom[] = [
    ...RoomGenerator.generateRooms(3, 2, 30, 60, 7, 17),
    RoomGenerator.generateGarage(30),
]

const MyHome = new BuildingGenerator('Home', 'house', newRooms, outside)




console.log(MyHome);

