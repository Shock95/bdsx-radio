"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBSFile = void 0;
const song_1 = require("./song");
const nbs_parser_1 = require("./nbs-parser");
const custom_instrument_1 = require("./custom-instrument");
const layer_1 = require("./layer");
const note_1 = require("./note");
const fs = require("fs");
class NBSFile {
    static load(filePath) {
        return new Promise((resolve) => {
            let layers = new Map();
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                let file = new nbs_parser_1.NBSParser(data.buffer);
                let length = file.readShort();
                let firstCustomInstrument = 10;
                let nbsVersion = 0;
                if (length === 0) {
                    nbsVersion = file.readByte();
                    firstCustomInstrument = file.readByte();
                    if (nbsVersion >= 3) {
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
                if (nbsVersion >= 4) {
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
                        let layer = layers.get(currentLayer) || new layer_1.Layer("", 100);
                        if (!layers.has(currentLayer)) {
                            layers.set(currentLayer, layer);
                        }
                        layer.setNote(currentTick, new note_1.Note(instrument, key));
                    }
                }
                if (nbsVersion > 0 && nbsVersion < 3) {
                    length = currentTick;
                }
                for (let i = 0; i < songHeight; i++) {
                    let layer = layers.get(i);
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
                let customInstruments = [];
                for (let index = 0; index < customCount; index++) {
                    let name = file.readString();
                    let soundFile = file.readString();
                    let pitch = file.readByte();
                    let pressKey = file.readByte() === 1;
                    customInstruments[index] = new custom_instrument_1.CustomInstrument(index, name, soundFile, pitch, pressKey);
                }
                let song = new song_1.Song(speed, layers, songHeight, length, name, author, originalAuthor, description, filePath, firstCustomInstrument, customInstruments);
                resolve(song);
            });
        });
    }
}
exports.NBSFile = NBSFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmJzLWZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYnMtZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpQ0FBOEI7QUFDOUIsNkNBQXlDO0FBQ3pDLDJEQUF1RDtBQUN2RCxtQ0FBZ0M7QUFDaEMsaUNBQThCO0FBRTlCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixNQUFhLE9BQU87SUFFVCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQWdCO1FBQy9CLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNqQyxJQUFJLE1BQU0sR0FBdUIsSUFBSSxHQUFHLEVBQWlCLENBQUM7WUFDMUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUEwQixFQUFFLElBQVk7Z0JBQ25FLElBQUcsR0FBRyxFQUFFO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUU5QixJQUFJLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUVuQixJQUFHLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2IsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDN0IscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QyxJQUFHLFVBQVUsSUFBSSxDQUFDLEVBQUU7d0JBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7cUJBQzdCO2lCQUNKO2dCQUVELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFT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