import { CustomInstrument } from "./custom-instrument";
import { Layer } from "./layer";

const path = require('path');

export class Song {

    private readonly layers: Map<number, Layer>;
    private readonly songHeight: number;
    private readonly length: number;
    private readonly title: string;
    private readonly filePath: string;
    private readonly fileName: string;
    private readonly author: string;
    private readonly originalAuthor: string;
    private readonly description: string;
    private readonly speed:number;
    private readonly delay: number;
    private readonly customInstruments: CustomInstrument[] = [];
    private readonly firstCustomInstrumentIndex: number;

    constructor(speed: number, layers: Map<number, Layer>, songHeight: number, length: number, title: string, author: string, originalAuthor: string, description: string, filePath: string, firstCustomInstrumentIndex: number, customInstruments: CustomInstrument[]) {
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

    public getLayerMap(): Map<number, Layer> {
        return this.layers;
    }

    public getSongHeight(): number {
        return this.songHeight;
    }

    public getLength(): number {
        return this.length;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getOriginalAuthor(): string {
        return this.originalAuthor;
    }

    public getPath(): string {
        return this.filePath;
    }

    public getFileName(): string {
        return this.fileName;
    }

    public getDescription(): string {
        return this.description;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getDelay(): number {
        return this.delay;
    }

    public getCustomInstruments(): CustomInstrument[] {
        return this.customInstruments;
    }

    public getFirstCustomInstrumentIndex(): number {
        return this.firstCustomInstrumentIndex;
    }
}