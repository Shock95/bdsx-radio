export class NBSParser extends DataView {

    current: number = 0;
    
    constructor(buffer: ArrayBuffer) {
        super(buffer);
    }

    public readByte() {
        const byte = this.getInt8(this.current);
        this.current++;
        return byte;
    }

    public readUnsignedByte() {
        const ubyte = this.getUint8(this.current);
        this.current++;
        return ubyte;
    }

    public readInt() {
        const int = this.getInt32(this.current, true);
        this.current += 4;
        return int;
    }

    public readShort() {
        const short = this.getInt16(this.current, true);
        this.current += 2;
        return short;
    }

    public readString() {
        const length = this.readInt();
        let str = "";
        for (let i = 0; i < length; i++) {
            const byte = this.readUnsignedByte();
            str += String.fromCharCode(byte);
        }
        return str;
    }
}