"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInstrument = void 0;
class CustomInstrument {
    constructor(index, name, soundFile, pitch = 45, pressKey = false) {
        this.sound = "";
        this.index = index;
        this.name = name;
        soundFile.replace(".ogg", "");
        soundFile.replace(".fsb", "");
        this.soundFileName = soundFile;
        if (this.soundFileName.toLowerCase() === "pling") {
            this.sound = "note.pling";
        }
        this.pitch = pitch;
        this.pressKey = pressKey;
    }
    getIndex() {
        return this.index;
    }
    getName() {
        return this.name;
    }
    getSoundFileName() {
        return this.soundFileName;
    }
    getSound() {
        return this.sound;
    }
}
exports.CustomInstrument = CustomInstrument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWluc3RydW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXN0b20taW5zdHJ1bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGdCQUFnQjtJQVN6QixZQUFZLEtBQWEsRUFBRSxJQUFZLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLEVBQUUsV0FBb0IsS0FBSztRQUp6RyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBS2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFFL0IsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQkFBZ0I7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQXRDRCw0Q0FzQ0MifQ==