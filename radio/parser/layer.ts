import { Note } from "./note";

export class Layer {

    name: string;
    volume: number;
    stereo: number = 100;

    notes: Map<number, Note>;

    constructor(name: string, volume: number, stereo: number = 100) {
        this.name = name;
        this.volume = volume;
        this.stereo = stereo;

        this.notes = new Map<number, Note>();
    }

    public getNotes(): Map<number, Note> {
        return this.notes;
    }

    public setNotes(notes: Map<number, Note>) {
        this.notes = notes;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setNote(tick: number, note: Note) {
        this.notes.set(tick, note);
    }

    public getNote(tick: number) {
        return this.notes.get(tick);
    }

    public setVolume(volume: number) {
        this.volume = volume;
    }

    public getVolume(): number {
        return this.volume;
    }

    public setStereo(stereo: number) {
        this.stereo = stereo;
    }

    public getStereo(): number {
        return this.stereo;
    }
}