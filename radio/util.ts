import { Actor } from "bdsx/bds/actor";
import { TextPacket } from "bdsx/bds/packets";
import { Song } from "./parser/song";
import { Instrument } from "./parser/instrument";

export class Utils {

    public static INSTRUMENT_MAP: {[key: number]: string} = {
        [Instrument.PIANO]: "note.harp",
        [Instrument.DOUBLE_BASS]: "note.bass",
        [Instrument.BASS_DRUM]: "note.bd",
        [Instrument.SNARE]: "note.snare",
        [Instrument.CLICK]: "note.hat",
        [Instrument.GUITAR]: "note.guitar",
        [Instrument.FLUTE]: "note.flute",
        [Instrument.BELL]: "note.bell",
        [Instrument.CHIME]: "note.chime",
        [Instrument.XYLOPHONE]: "note.xylophone",
        [Instrument.IRONXYLOPHONE]: "note.iron_xylophone",
        [Instrument.COWBELL]: "note.cow_bell",
        [Instrument.DIDGERIDOO]: "note.didgeridoo",
        [Instrument.BIT]: "note.bit",
        [Instrument.BANJO]: "note.banjo",
        [Instrument.PLING]: "note.pling"
    };

    public static sendMessage(actor: Actor, message: string, type: number = 1) {
        let pk: TextPacket = TextPacket.create();
        pk.type = type;
        pk.message = message;
        pk.sendTo(actor.getNetworkIdentifier());
        pk.dispose();
    }

    public static getSongName(song: Song) {
        return song.getTitle() == "" ? song.getFileName() : song.getTitle();
    }
}

export enum Color {
    BLACK = "§0",
    DARK_BLUE = "§1",
    DARK_GREEN = "§2",
    DARK_AQUA = "§3",
    DARK_RED = "§4",
    DARK_PURPLE = "§5",
    GOLD = "§6",
    GRAY = "§7",
    DARK_GRAY = "§8",
    BLUE = "§9",
    GREEN = "§a",
    AQUA = "§b",
    RED = "§c",
    LIGHT_PURPLE = "§d",
    YELLOW = "§e",
    WHITE = "§f",
    MC_GOLD = "§g",
    OBFUSCATED = "§k",
    BOLD = "§l",
    ITALIC = "§o",
    RESET= "§r",
}