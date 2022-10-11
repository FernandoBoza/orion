import { roomType } from '../Types'
import { furniture, assets } from '../assets/mockAPI.json'
import { IAsset, IBathroom, IFurniture, IRoom } from '../Interfaces/Interfaces'

export default class RoomGenerator implements IBathroom, IRoom {
    constructor(
        public name: string,
        public type: roomType,
        public singular: boolean,
        public vital: boolean,
        public size: number,
        public assets?: IAsset[],
        public furniture?: IFurniture[],
    ) {
    }

    static generateGarage = (size: number, name: string = 'garage', singular = true, vital = false) => {
        return new RoomGenerator(name, 'garage', singular, vital, size, [], [])
    }

    static generateRooms = (bedrooms: number, bathrooms: number, minSizeBed: number, maxSizeBed: number, minSizeBath: number, maxSizeBath: number) => {

        const rooms: (IRoom | IBathroom)[] = [];

        const getRndInteger = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const renderRooms = (category: number, short: roomType, minSize: number, maxSize: number, canBathe?: boolean) => {
            for (let index = 0; index < category; index++) {
                const roomSize = getRndInteger(minSize, maxSize);
                const room: IBathroom = new RoomGenerator(`${short} ${index}`, short, false, true, roomSize, [], [])
                if (canBathe) {
                    room.canBathe = true
                }
                rooms.push(room)
            }
        }

        renderRooms(bedrooms, 'bedroom', minSizeBed, maxSizeBed)
        renderRooms(bathrooms, 'bathroom', minSizeBath, maxSizeBath, true)

        for (const room of rooms) {
            if (room.size === Math.max(...rooms.map(o => o.size))) {
                room.name = 'Master bedroom'
            }
        }

        return rooms
    }
}
