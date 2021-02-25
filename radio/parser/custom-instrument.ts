export class CustomInstrument {

    index: number;
    name: string;
    soundFileName: string;
    sound: string = "";
    pitch: number;
    pressKey: boolean;

    constructor(index: number, name: string, soundFile: string, pitch: number = 45, pressKey: boolean = false) {
        this.index = index;
        this.name = name;
        soundFile.replace(".ogg", "");
        soundFile.replace(".fsb", "");
        this.soundFileName = soundFile;

        if(this.soundFileName.toLowerCase() === "pling") {
            this.sound = "note.pling";
        }
        this.pitch = pitch;
        this.pressKey = pressKey;
    }

    public getIndex(): number {
        return this.index;
    }

    public getName(): string {
        return this.name;
    }

    public getSoundFileName(): string {
        return this.soundFileName;
    }

    public getSound(): string {
        return this.sound;
    }
}