import { MinecraftPacketIds } from "bdsx";
import {RawPacket} from "bdsx/rawpacket";
import {NetworkIdentifier} from "bdsx/native";

export class PlaySoundPacket extends RawPacket {

    soundName: string;
    x: number;
    y: number;
    z: number;
    volume: number;
    pitch: number;

    constructor() {
        super(MinecraftPacketIds.PlaySound);
    }

    encode() {
        this.writeVarString(this.soundName);
        this.writeVarInt(this.x * 8);
        this.writeVarUint(this.y * 8);
        this.writeVarInt(this.z * 8);
        this.writeFloat32(this.volume);
        this.writeFloat32(this.pitch);
    }

    sendTo(target: NetworkIdentifier): void {
        this.encode();
        super.sendTo(target);
    }
}