import { Utils } from "./util";
import { PlaySoundPacket } from "./packet/PlaySoundPacket";

import { Song } from "./parser/song";
import { NBSLoader } from "./loader";
import { Note } from "./parser/note";
import { Layer } from "./parser/layer";
import { NBSFile } from "./parser/nbs-file";
import { Instrument } from "./parser/instrument";
import { Actor } from "bdsx/bds/actor";

const system = server.registerSystem(0, 0);

export class NBSPlayer {

    song: Song;
    playing: boolean = false;
    tick : number = -1;

    updateTick : number = 0;
    delayTick : number = 0;

    constructor(song: Song) {
        this.setSong(song);
        this.playing = true;
        this.start();
    }

    public start() {
        system.update = () => {
            if(!this.playing) {
                return;
            }
            if(this.tick > this.song.getLength()) {
                this.delayTick++;
                if(this.delayTick % 60 == 0) {
                    this.tick = -1;
                    this.delayTick = 0;

                    this.setSong(NBSLoader.getNextSong());
                }
            }
            let delay = Math.floor(this.song.getDelay());
            this.updateTick++;
            if (this.updateTick % delay == 0) {
                this.tick++;
                NBSLoader.getPlayers().forEach((actor: Actor) => {
                    this.playTick(actor);
                });
            }
        };
    }

    public playTick(actor: Actor) {
        this.song.getLayerMap().forEach((layer: Layer) => {
            let note: Note | undefined = layer.getNote(this.tick);
            if (note == null || actor == null) {
                return;
            }
            let volume = ((layer.getVolume() * NBSLoader.getVolume(actor)) / 10000);
            let pitch = 2 ** ((note.getKey() - 45) / 12);
            let sound = Utils.INSTRUMENT_MAP[note.instrument] ?? Utils.INSTRUMENT_MAP[Instrument.PIANO];

            if (actor) {
                let posComp: IComponent<IPositionComponent> | null = system.getComponent(actor.getEntity(), "minecraft:position");
                if (!posComp) return;
                let pos = posComp.data;

                let pk = new PlaySoundPacket();
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

    public setSong(song: Song) {
        this.song = song;

        NBSLoader.getPlayers().forEach((actor: Actor) => {
            Utils.sendMessage(actor, `§6Now Playing: §a${Utils.getSongName(song)}`, 4);
        });
    }

    public getSong(): Song {
        return this.song;
    }

    public setPlaying(playing: boolean) {
        this.playing = playing;
    }

    public isPlaying(): boolean {
        return this.playing;
    }
}