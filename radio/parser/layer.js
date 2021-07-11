"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = void 0;
class Layer {
    constructor(name, volume, stereo = 100) {
        this.stereo = 100;
        this.name = name;
        this.volume = volume;
        this.stereo = stereo;
        this.notes = new Map();
    }
    getNotes() {
        return this.notes;
    }
    setNotes(notes) {
        this.notes = notes;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setNote(tick, note) {
        this.notes.set(tick, note);
    }
    getNote(tick) {
        return this.notes.get(tick);
    }
    setVolume(volume) {
        this.volume = volume;
    }
    getVolume() {
        return this.volume;
    }
    setStereo(stereo) {
        this.stereo = stereo;
    }
    getStereo() {
        return this.stereo;
    }
}
exports.Layer = Layer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLEtBQUs7SUFRZCxZQUFZLElBQVksRUFBRSxNQUFjLEVBQUUsU0FBaUIsR0FBRztRQUo5RCxXQUFNLEdBQVcsR0FBRyxDQUFDO1FBS2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7SUFDekMsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUF3QjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBVTtRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFjO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBYztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sU0FBUztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUF2REQsc0JBdURDIn0=