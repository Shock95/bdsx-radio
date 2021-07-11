import { Player } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { int32_t } from "bdsx/nativetype";
import { NBSLoader } from "./loader";
import { Color, Utils } from "./util";

const PREFIX = Color.GOLD + NBSLoader.PREFIX + Color.RESET;
const USAGE = PREFIX + ` ${Color.RED}/radioplay: Connects you to the radio\n/radiostop: Disconnects you from the radio\n/radiostatus: Gives you information on the radio.\n/radiohelp: Shows you this text!\n/radiovolume: Lets you set the volume of the radio!`;

command.register("radioplay", "Turns on the radio!").alias("rp").overload((p, o) => {
    let player = o.getEntity() as Player;
    if (player.isPlayer()) {
        if (NBSLoader.checkPlaying(player)) {
            Utils.sendMessage(player, PREFIX + ` ${Color.RED}Use /radio stop to stop playing`);
            return;
        };
        NBSLoader.startPlaying(player);
        Utils.sendMessage(player, PREFIX + ` ${Color.GREEN}You have been connected, use ${Color.BLUE}/radio stop ${Color.GREEN}to stop playing`);
        Utils.sendMessage(player, `§6Now Playing: §a${Utils.getSongName(NBSLoader.getCurrentSong())}`, 4);
    } else {
        console.log("Can't run this command from console!");
    }
}, {});

command.register("radiostop", "Stops the radio!").alias("rs").overload((p, o) => {
    let player = o.getEntity() as Player;
    if (player.isPlayer()) {
        if (NBSLoader.checkPlaying(player)) {
            NBSLoader.stopPlaying(player);
            Utils.sendMessage(player, PREFIX + ` ${Color.GREEN}You have been disconnected`);
        } else {
            Utils.sendMessage(player, PREFIX + ` ${Color.RED}You are not playing radio`);
        }
    } else {
        console.log("Can't run this command from console!");
    }
}, {});

command.register("radiovolume", "Sets the radio volume!").alias("rv").overload((p, o) => {
    let player = o.getEntity() as Player;
    let volume = p.volume;
    if (player.isPlayer()) {
        if (NBSLoader.checkPlaying(player)) {
            NBSLoader.setVolume(player, volume);
            Utils.sendMessage(player, PREFIX + ` ${Color.GREEN}Volume set to ${volume}`);
        } else {
            Utils.sendMessage(player, PREFIX + ` ${Color.RED}You are not playing radio`);
        }
    }
}, {
    volume: int32_t
});

command.register("radiostatus", "Shows the radio status!").alias("rs").overload((p, o) => {
    let player = o.getEntity() as Player;
    if (player.isPlayer()) {
        let playing = NBSLoader.isActive();
        let status = player ? Color.GREEN + "Active" : Color.RED + "Not Active";
        Utils.sendMessage(player, PREFIX + ` ${Color.AQUA}Status: ` + status);
        if (playing) {
            Utils.sendMessage(player, PREFIX + ` ${Color.GREEN}Now Playing: §a${Utils.getSongName(NBSLoader.getCurrentSong())}`);
        }
        Utils.sendMessage(player, `§6Volume: §a${NBSLoader.getVolume(player)}`);
    }
}, {});

command.register("radiohelp", "Shows the radio help!").alias("rh").overload((p, o) => {
    let player = o.getEntity() as Player;
    if (player.isPlayer()) {
        Utils.sendMessage(player, USAGE);
    }
}, {});