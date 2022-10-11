import { buildingType } from '../Types'
import { IBuilding, IOutside, IRoom } from '../Interfaces/Interfaces'


export default class BuildingGenerator implements IBuilding {
    constructor(
        public name: string,
        public type: buildingType,
        public rooms: IRoom[],
        public outsideArea: IOutside | false
    ) { }
}

