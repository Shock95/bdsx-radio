"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaySoundPacket = void 0;
const rawpacket_1 = require("bdsx/rawpacket");
const packetids_1 = require("bdsx/bds/packetids");
class PlaySoundPacket extends rawpacket_1.RawPacket {
    constructor() {
        super(packetids_1.MinecraftPacketIds.PlaySound);
    }
    encode() {
        this.writeVarString(this.soundName);
        this.writeVarInt(this.x * 8);
        this.writeVarUint(this.y * 8);
        this.writeVarInt(this.z * 8);
        this.writeFloat32(this.volume);
        this.writeFloat32(this.pitch);
    }
    sendTo(target) {
        this.encode();
        super.sendTo(target);
    }
}
exports.PlaySoundPacket = PlaySoundPacket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVNvdW5kUGFja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGxheVNvdW5kUGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUF5QztBQUN6QyxrREFBd0Q7QUFHeEQsTUFBYSxlQUFnQixTQUFRLHFCQUFTO0lBUzFDO1FBQ0ksS0FBSyxDQUFDLDhCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUF5QjtRQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQTFCRCwwQ0EwQkMifQ==