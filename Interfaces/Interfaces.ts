import { buildingType, outsideType, roomType } from "../Types"

export interface IFurniture {
    name: string,
    type: string,
    id?: string
}

export interface IAsset {
    name: string,
    type: string,
    id?: string
}

export interface IRoom {
    name: string,
    type: roomType,
    singular: boolean,
    vital: boolean,
    size: number,
    assets?: IAsset[],
    furniture?: IFurniture[]
}

export interface IBathroom extends IRoom {
    canBathe?: boolean
}

export interface IOutside {
    type: outsideType,
    minSize: number,
    maxSize?: number | false,
}

export interface IBuilding {
    name: string,
    type: buildingType,
    rooms: IRoom[],
    outsideArea: IOutside | false
}