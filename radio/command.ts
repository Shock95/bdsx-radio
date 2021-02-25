import { Actor, CANCEL, command, MinecraftPacketIds, netevent } from "bdsx/index";
import { NBSLoader } from "./loader";
import { Color, Utils } from "./util";

const PREFIX = Color.GOLD + NBSLoader.PREFIX + Color.RESET;
const USAGE = PREFIX + ` ${Color.RED}Usage: /radio [play | stop | volume | status]`;

command.hook.on((command, origin) => {
    return 0; // suppress unknown command messages
});

netevent.after(MinecraftPacketIds.CommandRequest).on((ev, networkIdentifier) => {
    let command = ev.command;
    let actor = networkIdentifier.getActor() as Actor;
    let args = command.split(/\s+/);
    if(args[0] == "/radio") {
        if (args.length <= 1) {
            Utils.sendMessage(actor, USAGE);
            return CANCEL;
        }
        switch (args[1]) {
            case "play":
                if (NBSLoader.checkPlaying(actor)) {
                    Utils.sendMessage(actor, PREFIX + ` ${Color.RED}Use /radio stop to stop playing`);
                    return CANCEL;
                }
                NBSLoader.startPlaying(actor);
                Utils.sendMessage(actor, PREFIX + ` ${Color.GREEN}You have been connected, use ${Color.BLUE}/radio stop ${Color.GREEN}to stop playing`);
                Utils.sendMessage(actor, `§6Now Playing: §a${Utils.getSongName(NBSLoader.getCurrentSong())}`, 4);
                break;
            case "stop":
                if (!NBSLoader.checkPlaying(actor)) {
                    Utils.sendMessage(actor, PREFIX + ` ${Color.RED}You are not connected to the radio`);
                    return CANCEL;
                }
                NBSLoader.stopPlaying(actor);
                break;
            case "status":
                let playing = NBSLoader.isActive();
                let status = playing ? Color.GREEN + "Active" : Color.RED + "Not active";
                Utils.sendMessage(actor, PREFIX + ` ${Color.AQUA}Status: ` + status);
                if(playing) {
                    Utils.sendMessage(actor, `${Color.AQUA}Current Song: ${Color.YELLOW}` + Utils.getSongName(NBSLoader.getCurrentSong()));
                }
                Utils.sendMessage(actor, `${Color.AQUA}Volume: ${Color.GREEN}` + NBSLoader.getVolume(actor));
                break;
            case "volume":
                let volume = args[2];
                if (!Number(volume)) {
                    Utils.sendMessage(actor, PREFIX + ` ${Color.RED}Invalid number provided`);
                    return CANCEL;
                }
                let playerVolume: number = Number(volume);
                if (playerVolume < 1 || playerVolume > 100) {
                    Utils.sendMessage(actor, PREFIX + ` ${Color.RED}Volume must be in a range of 1-100`);
                    return CANCEL;
                }
                NBSLoader.setVolume(actor, playerVolume);
                Utils.sendMessage(actor, PREFIX + ` ${Color.GREEN}Volume has been set to ${Color.AQUA}` + playerVolume);
                break;
            default:
                Utils.sendMessage(actor, USAGE);
                break;
        }
        return CANCEL;
    }
});