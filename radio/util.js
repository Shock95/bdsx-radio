"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.Utils = void 0;
const packets_1 = require("bdsx/bds/packets");
const instrument_1 = require("./parser/instrument");
class Utils {
    static sendMessage(actor, message, type = 1) {
        let pk = packets_1.TextPacket.create();
        pk.type = type;
        pk.message = message;
        pk.sendTo(actor.getNetworkIdentifier());
        pk.dispose();
    }
    static getSongName(song) {
        return song.getTitle() == "" ? song.getFileName() : song.getTitle();
    }
}
exports.Utils = Utils;
Utils.INSTRUMENT_MAP = {
    [instrument_1.Instrument.PIANO]: "note.harp",
    [instrument_1.Instrument.DOUBLE_BASS]: "note.bass",
    [instrument_1.Instrument.BASS_DRUM]: "note.bd",
    [instrument_1.Instrument.SNARE]: "note.snare",
    [instrument_1.Instrument.CLICK]: "note.hat",
    [instrument_1.Instrument.GUITAR]: "note.guitar",
    [instrument_1.Instrument.FLUTE]: "note.flute",
    [instrument_1.Instrument.BELL]: "note.bell",
    [instrument_1.Instrument.CHIME]: "note.chime",
    [instrument_1.Instrument.XYLOPHONE]: "note.xylophone",
    [instrument_1.Instrument.IRONXYLOPHONE]: "note.iron_xylophone",
    [instrument_1.Instrument.COWBELL]: "note.cow_bell",
    [instrument_1.Instrument.DIDGERIDOO]: "note.didgeridoo",
    [instrument_1.Instrument.BIT]: "note.bit",
    [instrument_1.Instrument.BANJO]: "note.banjo",
    [instrument_1.Instrument.PLING]: "note.pling"
};
var Color;
(function (Color) {
    Color["BLACK"] = "\u00A70";
    Color["DARK_BLUE"] = "\u00A71";
    Color["DARK_GREEN"] = "\u00A72";
    Color["DARK_AQUA"] = "\u00A73";
    Color["DARK_RED"] = "\u00A74";
    Color["DARK_PURPLE"] = "\u00A75";
    Color["GOLD"] = "\u00A76";
    Color["GRAY"] = "\u00A77";
    Color["DARK_GRAY"] = "\u00A78";
    Color["BLUE"] = "\u00A79";
    Color["GREEN"] = "\u00A7a";
    Color["AQUA"] = "\u00A7b";
    Color["RED"] = "\u00A7c";
    Color["LIGHT_PURPLE"] = "\u00A7d";
    Color["YELLOW"] = "\u00A7e";
    Color["WHITE"] = "\u00A7f";
    Color["MC_GOLD"] = "\u00A7g";
    Color["OBFUSCATED"] = "\u00A7k";
    Color["BOLD"] = "\u00A7l";
    Color["ITALIC"] = "\u00A7o";
    Color["RESET"] = "\u00A7r";
})(Color = exports.Color || (exports.Color = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQThDO0FBRTlDLG9EQUFpRDtBQUVqRCxNQUFhLEtBQUs7SUFxQlAsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWUsQ0FBQztRQUNyRSxJQUFJLEVBQUUsR0FBZSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2YsRUFBRSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDckIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFVO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7QUEvQkwsc0JBZ0NDO0FBOUJpQixvQkFBYyxHQUE0QjtJQUNwRCxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsV0FBVztJQUMvQixDQUFDLHVCQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVztJQUNyQyxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUztJQUNqQyxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWTtJQUNoQyxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVTtJQUM5QixDQUFDLHVCQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsYUFBYTtJQUNsQyxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWTtJQUNoQyxDQUFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVztJQUM5QixDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWTtJQUNoQyxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsZ0JBQWdCO0lBQ3hDLENBQUMsdUJBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxxQkFBcUI7SUFDakQsQ0FBQyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWU7SUFDckMsQ0FBQyx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGlCQUFpQjtJQUMxQyxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVTtJQUM1QixDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWTtJQUNoQyxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWTtDQUNuQyxDQUFDO0FBZU4sSUFBWSxLQXNCWDtBQXRCRCxXQUFZLEtBQUs7SUFDYiwwQkFBWSxDQUFBO0lBQ1osOEJBQWdCLENBQUE7SUFDaEIsK0JBQWlCLENBQUE7SUFDakIsOEJBQWdCLENBQUE7SUFDaEIsNkJBQWUsQ0FBQTtJQUNmLGdDQUFrQixDQUFBO0lBQ2xCLHlCQUFXLENBQUE7SUFDWCx5QkFBVyxDQUFBO0lBQ1gsOEJBQWdCLENBQUE7SUFDaEIseUJBQVcsQ0FBQTtJQUNYLDBCQUFZLENBQUE7SUFDWix5QkFBVyxDQUFBO0lBQ1gsd0JBQVUsQ0FBQTtJQUNWLGlDQUFtQixDQUFBO0lBQ25CLDJCQUFhLENBQUE7SUFDYiwwQkFBWSxDQUFBO0lBQ1osNEJBQWMsQ0FBQTtJQUNkLCtCQUFpQixDQUFBO0lBQ2pCLHlCQUFXLENBQUE7SUFDWCwyQkFBYSxDQUFBO0lBQ2IsMEJBQVcsQ0FBQTtBQUNmLENBQUMsRUF0QlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBc0JoQiJ9