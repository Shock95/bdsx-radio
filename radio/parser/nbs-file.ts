import ErrnoException = NodeJS.ErrnoException;
import { Song } from "./song";
import { NBSParser } from "./nbs-parser";
import { CustomInstrument } from "./custom-instrument";
import { Layer } from "./layer";
import { Note } from "./note";

const fs = require("fs");

export class NBSFile {

    public static load(filePath: string): Promise<Song> {
        return new Promise<Song>((resolve) => {
            let layers: Map<number, Layer> = new Map<number, Layer>();
            fs.readFile(filePath, function(err: ErrnoException | null, data: Buffer) {
                if(err) {
                    console.log(err);
                    return;
                }
                let file = new NBSParser(data.buffer);

                let length = file.readShort();

                let firstCustomInstrument = 10;
                let nbsVersion = 0;

                if(length === 0) {
                    nbsVersion = file.readByte();
                    firstCustomInstrument = file.readByte();
                    if(nbsVersion >= 3) {
                        length = file.readShort();
                    }
                }

                let songHeight = file.readShort();
                let name = file.readString();
                let author = file.readString();
                let originalAuthor = file.readString();
                let description = file.readString();
                let speed = file.readShort() / 100;

                file.readByte(); // Auto save enabled
                file.readByte(); // Auto save duration
                file.readByte(); // Time signature
                file.readInt(); // Minutes spent
                file.readInt(); // Left clicks
                file.readInt(); // Right clicks
                file.readInt(); // Blocks added
                file.readInt(); // Blocks removed
                file.readString(); // MIDI file name

                if(nbsVersion >= 4) {
                    file.readByte(); // Loop on/off
                    file.readByte(); // Max loop count
                    file.readShort(); // Loop start tick
                }

                let currentTick = -1;
                while (true) {
                    const jumpTicks = file.readShort();
                    if (jumpTicks === 0) {
                        break;
                    }
                    currentTick += jumpTicks;
                    let currentLayer = -1;
                    while (true) {
                        const jumpLayers = file.readShort();
                        if (jumpLayers === 0) {
                            break;
                        }
                        currentLayer += jumpLayers;
                        const instrument = file.readByte();
                        const key = file.readByte();

                        let layer = layers.get(currentLayer) || new Layer("", 100);
                        if(!layers.has(currentLayer)) {
                            layers.set(currentLayer, layer);
                        }
                        layer.setNote(currentTick, new Note(instrument, key));
                    }
                }
                if(nbsVersion > 0 && nbsVersion < 3) {
                    length = currentTick;
                }

                for (let i = 0; i < songHeight; i++) {
                    let layer: Layer|undefined = layers.get(i);
                    let name = file.readString();
                    if (nbsVersion >= 4) {
                        file.readByte(); // Layer lock
                    }
                    let volume = file.readByte();
                    let stereo = 100;
                    if (nbsVersion >= 2) {
                        stereo = file.readByte();
                    }
                    if (layer !== undefined) {
                        layer.setName(name);
                        layer.setVolume(volume);
                        layer.setStereo(stereo);
                    }
                }

                let customCount = file.readByte();
                let customInstruments: CustomInstrument[] = [];

                for(let index = 0; index < customCount; index++) {
                    let name = file.readString();
                    let soundFile = file.readString();
                    let pitch = file.readByte();
                    let pressKey = file.readByte() === 1;
                    customInstruments[index] = new CustomInstrument(index, name, soundFile, pitch, pressKey);
                }
                let song = new Song(speed, layers, songHeight, length, name, author, originalAuthor, description, filePath, firstCustomInstrument, customInstruments);
                resolve(song);
            });
        });
    }
}