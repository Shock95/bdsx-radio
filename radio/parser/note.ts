export class Note {

    instrument: number
    key: number

    public constructor(instrument: number, key: number) {
        this.instrument = instrument;
        this.key = key;
    }

    public setInstrument(instrument: number) {
        this.instrument = instrument;
    }

    public getInstrument(): number {
        return this.instrument;
    }

    public setKey(key: number) {
        this.key = key;
    }

    public getKey(): number {
        return this.key;
    }
}