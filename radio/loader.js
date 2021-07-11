"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NBSLoader = void 0;
const player_1 = require("./player");
const nbs_file_1 = require("./parser/nbs-file");
const glob = require('glob');
const colors = require("colors");
class NBSLoader {
    static init(path) {
        glob(path + "/*.nbs", {}, (err, files) => {
            const promises = files.map((path) => {
                return new Promise((resolve) => {
                    nbs_file_1.NBSFile.load(path).then((song) => {
                        resolve(song);
                    });
                });
            });
            Promise.all(promises).then((results) => {
                this.songs = results;
                if (results.length == 0) {
                    console.log(colors.yellow(this.PREFIX) + ` Could not find any .NBS files, make sure they are located in the songs folder at the BDSX directory.`);
                    return;
                }
                console.log(colors.yellow(this.PREFIX) + colors.brightBlue(` Successfully loaded ${colors.cyan(String(results.length))} songs`));
                NBSLoader.startRadio();
                console.log(colors.yellow(this.PREFIX) + colors.brightGreen(" Radio has been started"));
            });
        });
    }
    static addSongFile(songFile) {
        this.songs.push(songFile);
    }
    static getSongList() {
        return this.songs;
    }
    static getPreviousSong() {
        if (this.currentSong === 0) {
            this.currentSong = this.songs.length;
        }
        this.currentSong--;
        return this.songs[this.currentSong];
    }
    static getCurrentSong() {
        return this.songs[this.currentSong];
    }
    static getNextSong() {
        this.currentSong++;
        this.currentSong = this.currentSong % this.songs.length;
        return this.songs[this.currentSong];
    }
    static getRandomSong() {
        return this.songs[Math.floor(Math.random() * this.songs.length)];
    }
    static getVolume(actor) {
        return this.volume[actor.getUniqueIdLow()] || this.DEFAULT_VOLUME;
    }
    static getSoundVolume(actor) {
        return this.getVolume(actor) / 100;
    }
    static setVolume(actor, volume) {
        return this.volume[actor.getUniqueIdLow()] = volume;
    }
    static startPlaying(actor) {
        this.players.push(actor);
    }
    static stopPlaying(actor) {
        this.players.forEach((element, index) => {
            if (element == actor)
                delete this.players[index];
        });
    }
    static checkPlaying(actor) {
        return this.players.some(e => e === actor);
    }
    static getPlayers() {
        return this.players;
    }
    static getPlayer() {
        return this.player;
    }
    static startRadio() {
        if (this.player != null) {
            return false;
        }
        this.player = new player_1.NBSPlayer(this.getCurrentSong());
        return true;
    }
    static isActive() {
        if (this.player == null) {
            return false;
        }
        return this.player.isPlaying();
    }
}
exports.NBSLoader = NBSLoader;
NBSLoader.PREFIX = "[Radio]";
NBSLoader.DEFAULT_VOLUME = 50;
NBSLoader.songs = [];
NBSLoader.volume = {};
NBSLoader.players = [];
NBSLoader.currentSong = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFxQztBQUVyQyxnREFBNEM7QUFFNUMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGlDQUFrQztBQUVsQyxNQUFhLFNBQVM7SUFjWCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLEtBQWUsRUFBRSxFQUFFO1lBQ3BELE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUMzQixrQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRTt3QkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7Z0JBQ3JCLElBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsdUdBQXVHLENBQUMsQ0FBQztvQkFDbEosT0FBTztpQkFDVjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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