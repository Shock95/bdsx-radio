"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBSParser = void 0;
class NBSParser extends DataView {
    constructor(buffer) {
        super(buffer);
        this.current = 0;
    }
    readByte() {
        const byte = this.getInt8(this.current);
        this.current++;
        return byte;
    }
    readUnsignedByte() {
        const ubyte = this.getUint8(this.current);
        this.current++;
        return ubyte;
    }
    readInt() {
        const int = this.getInt32(this.current, true);
        this.current += 4;
        return int;
    }
    readShort() {
        const short = this.getInt16(this.current, true);
        this.current += 2;
        return short;
    }
    readString() {
        const length = this.readInt();
        let str = "";
        for (let i = 0; i < length; i++) {
            const byte = this.readUnsignedByte();
            str += String.fromCharCode(byte);
        }
        return str;
    }
}
exports.NBSParser = NBSParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmJzLXBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5icy1wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxTQUFVLFNBQVEsUUFBUTtJQUluQyxZQUFZLE1BQW1CO1FBQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUhsQixZQUFPLEdBQVcsQ0FBQyxDQUFDO0lBSXBCLENBQUM7SUFFTSxRQUFRO1FBQ1gsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sT0FBTztRQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSxTQUFTO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxVQUFVO1FBQ2IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDckMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQXpDRCw4QkF5Q0MifQ==