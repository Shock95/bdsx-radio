import { ActorUniqueID } from "bdsx/bds/actor";
import { Actor } from "bdsx";
import { NBSPlayer } from "./player";
import { Song } from "./parser/song";
import { NBSFile } from "./parser/nbs-file";

const glob = require('glob');
import colors = require('colors');

export class NBSLoader {

    public static readonly PREFIX = "[Radio]";

    public static DEFAULT_VOLUME = 50;

    static songs: Song[] = [];
    static volume: Record<ActorUniqueID, number> = {};

    static players: Actor[] = [];

    static currentSong: number = 0;
    static player: NBSPlayer;

    public static init(path: string) {
        glob(path + "/*.nbs", {}, (err: any, files: string[]) => {
            const promises = files.map((path) => {
                return new Promise((resolve) => {
                    NBSFile.load(path).then((song: Song) => {
                        resolve(song);
                    });
                });
            });
            Promise.all(promises).then((results: Song[]) => {
                this.songs = results;
                if(results.length == 0) {
                    console.log(colors.yellow(this.PREFIX) + ` Could not find any .NBS files, make sure they are located in the songs folder at the BDSX directory.`);
                    return;
                }
                console.log(colors.yellow(this.PREFIX) + colors.brightBlue(` Successfully loaded ${colors.cyan(String(results.length))} songs`));

                NBSLoader.startRadio();
                console.log(colors.yellow(this.PREFIX) + colors.brightGreen(" Radio has been started"));
            });
        });
    }

    public static addSongFile(songFile: Song) {
        this.songs.push(songFile);
    }

    public static getSongList(): Song[] {
        return this.songs;
    }

    public static getPreviousSong(): Song | undefined {
        if(this.currentSong === 0) {
            this.currentSong = this.songs.length;
        }
        this.currentSong--;
        return this.songs[this.currentSong];
    }

    public static getCurrentSong(): Song {
        return this.songs[this.currentSong];
    }

    public static getNextSong(): Song {
        this.currentSong++;
        this.currentSong = this.currentSong % this.songs.length;
        return this.songs[this.currentSong];
    }

    public static getRandomSong(): Song {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }

    public static getVolume(actor: Actor): number {
        return this.volume[actor.getUniqueIdLow()] || this.DEFAULT_VOLUME;
    }

    public static getSoundVolume(actor: Actor): number {
        return this.getVolume(actor) / 100;
    }

    public static setVolume(actor: Actor, volume: number) {
        return this.volume[actor.getUniqueIdLow()] = volume;
    }

    public static startPlaying(actor: Actor) {
        this.players.push(actor);
    }

    public static stopPlaying(actor: Actor) {
        this.players.forEach((element,index)=>{
            if(element == actor) delete this.players[index];
        });
    }

    public static checkPlaying(actor: Actor):boolean {
        return this.players.some(e => e === actor);
    }

    public static getPlayers(): Actor[] {
        return this.players;
    }

    public static getPlayer(): NBSPlayer {
        return this.player;
    }

    public static startRadio(): boolean {
        if(this.player != null) {
            return false;
        }
        this.player = new NBSPlayer(this.getCurrentSong());
        return true;
    }

    public static isActive(): boolean {
        if(this.player == null) {
           return false;
        }
        return this.player.isPlaying();
    }
}