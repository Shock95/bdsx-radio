"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBSPlayer = void 0;
const util_1 = require("./util");
const PlaySoundPacket_1 = require("./packet/PlaySoundPacket");
const loader_1 = require("./loader");
const instrument_1 = require("./parser/instrument");
const system = server.registerSystem(0, 0);
class NBSPlayer {
    constructor(song) {
        this.playing = false;
        this.tick = -1;
        this.updateTick = 0;
        this.delayTick = 0;
        this.setSong(song);
        this.playing = true;
        this.start();
    }
    start() {
        system.update = () => {
            if (!this.playing) {
                return;
            }
            if (this.tick > this.song.getLength()) {
                this.delayTick++;
                if (this.delayTick % 60 == 0) {
                    this.tick = -1;
                    this.delayTick = 0;
                    this.setSong(loader_1.NBSLoader.getNextSong());
                }
            }
            let delay = Math.floor(this.song.getDelay());
            this.updateTick++;
            if (this.updateTick % delay == 0) {
                this.tick++;
                loader_1.NBSLoader.getPlayers().forEach((actor) => {
                    this.playTick(actor);
                });
            }
        };
    }
    playTick(actor) {
        this.song.getLayerMap().forEach((layer) => {
            var _a;
            let note = layer.getNote(this.tick);
            if (note == null || actor == null) {
                return;
            }
            let volume = ((layer.getVolume() * loader_1.NBSLoader.getVolume(actor)) / 10000);
            let pitch = 2 ** ((note.getKey() - 45) / 12);
            let sound = (_a = util_1.Utils.INSTRUMENT_MAP[note.instrument]) !== null && _a !== void 0 ? _a : util_1.Utils.INSTRUMENT_MAP[instrument_1.Instrument.PIANO];
            if (actor) {
                let posComp = system.getComponent(actor.getEntity(), "minecraft:position");
                if (!posComp)
                    return;
                let pos = posComp.data;
                let pk = new PlaySoundPacket_1.PlaySoundPacket();
                pk.soundName = sound;
                pk.x = pos.x;
                pk.y = pos.y;
                pk.z = pos.z;
                pk.volume = volume;
                pk.pitch = pitch;
                pk.sendTo(actor.getNetworkIdentifier());
                pk.dispose();
                note = undefined;
            }
        });
    }
    setSong(song) {
        this.song = song;
        loader_1.NBSLoader.getPlayers().forEach((actor) => {
            util_1.Utils.sendMessage(actor, `§6Now Playing: §a${util_1.Utils.getSongName(song)}`, 4);
        });
    }
    getSong() {
        return this.song;
    }
    setPlaying(playing) {
        this.playing = playing;
    }
    isPlaying() {
        return this.playing;
    }
}
exports.NBSPlayer = NBSPlayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUErQjtBQUMvQiw4REFBMkQ7QUFHM0QscUNBQXFDO0FBSXJDLG9EQUFpRDtBQUdqRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUzQyxNQUFhLFNBQVM7SUFTbEIsWUFBWSxJQUFVO1FBTnRCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsU0FBSSxHQUFZLENBQUMsQ0FBQyxDQUFDO1FBRW5CLGVBQVUsR0FBWSxDQUFDLENBQUM7UUFDeEIsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUduQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sS0FBSztRQUNSLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE9BQU87YUFDVjtZQUNELElBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztpQkFDekM7YUFDSjtZQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxL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