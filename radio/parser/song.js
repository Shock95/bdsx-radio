"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const path = require('path');
class Song {
    constructor(speed, layers, songHeight, length, title, author, originalAuthor, description, filePath, firstCustomInstrumentIndex, customInstruments) {
        this.customInstruments = [];
        this.layers = layers;
        this.songHeight = songHeight;
        this.length = length;
        this.title = title;
        this.filePath = filePath;
        this.fileName = path.basename(filePath, ".nbs");
        this.author = author;
        this.originalAuthor = author;
        this.description = description;
        this.speed = speed;
        this.delay = 20 / speed;
        this.customInstruments = customInstruments;
        this.firstCustomInstrumentIndex = firstCustomInstrumentIndex;
    }
    getLayerMap() {
        return this.layers;
    }
    getSongHeight() {
        return this.songHeight;
    }
    getLength() {
        return this.length;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getOriginalAuthor() {
        return this.originalAuthor;
    }
    getPath() {
        return this.filePath;
    }
    getFileName() {
        return this.fileName;
    }
    getDescription() {
        return this.description;
    }
    getSpeed() {
        return this.speed;
    }
    getDelay() {
        return this.delay;
    }
    getCustomInstruments() {
        return this.customInstruments;
    }
    getFirstCustomInstrumentIndex() {
        return this.firstCustomInstrumentIndex;
    }
}
exports.Song = Song;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLE1BQWEsSUFBSTtJQWdCYixZQUFZLEtBQWEsRUFBRSxNQUEwQixFQUFFLFVBQWtCLEVBQUUsTUFBYyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsY0FBc0IsRUFBRSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsMEJBQWtDLEVBQUUsaUJBQXFDO1FBSGpQLHNCQUFpQixHQUF1QixFQUFFLENBQUM7UUFJeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsR0FBRywwQkFBMEIsQ0FBQztJQUNqRSxDQUFDO0lBRU0sV0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVNLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxvQkFBb0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVNLDZCQUE2QjtRQUNoQyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUFuRkQsb0JBbUZDIn0=