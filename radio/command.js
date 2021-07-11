"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const loader_1 = require("./loader");
const util_1 = require("./util");
const PREFIX = util_1.Color.GOLD + loader_1.NBSLoader.PREFIX + util_1.Color.RESET;
const USAGE = PREFIX + ` ${util_1.Color.RED}/radioplay: Connects you to the radio\n/radiostop: Disconnects you from the radio\n/radiostatus: Gives you information on the radio.\n/radiohelp: Shows you this text!\n/radiovolume: Lets you set the volume of the radio!`;
command_1.command.register("radioplay", "Turns on the radio!").alias("rp").overload((p, o) => {
    let player = o.getEntity();
    if (player.isPlayer()) {
        if (loader_1.NBSLoader.checkPlaying(player)) {
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.RED}Use /radio stop to stop playing`);
            return;
        }
        ;
        loader_1.NBSLoader.startPlaying(player);
        util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.GREEN}You have been connected, use ${util_1.Color.BLUE}/radio stop ${util_1.Color.GREEN}to stop playing`);
        util_1.Utils.sendMessage(player, `§6Now Playing: §a${util_1.Utils.getSongName(loader_1.NBSLoader.getCurrentSong())}`, 4);
    }
    else {
        console.log("Can't run this command from console!");
    }
}, {});
command_1.command.register("radiostop", "Stops the radio!").alias("rs").overload((p, o) => {
    let player = o.getEntity();
    if (player.isPlayer()) {
        if (loader_1.NBSLoader.checkPlaying(player)) {
            loader_1.NBSLoader.stopPlaying(player);
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.GREEN}You have been disconnected`);
        }
        else {
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.RED}You are not playing radio`);
        }
    }
    else {
        console.log("Can't run this command from console!");
    }
}, {});
command_1.command.register("radiovolume", "Sets the radio volume!").alias("rv").overload((p, o) => {
    let player = o.getEntity();
    let volume = p.volume;
    if (player.isPlayer()) {
        if (loader_1.NBSLoader.checkPlaying(player)) {
            loader_1.NBSLoader.setVolume(player, volume);
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.GREEN}Volume set to ${volume}`);
        }
        else {
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.RED}You are not playing radio`);
        }
    }
}, {
    volume: nativetype_1.int32_t
});
command_1.command.register("radiostatus", "Shows the radio status!").alias("rs").overload((p, o) => {
    let player = o.getEntity();
    if (player.isPlayer()) {
        let playing = loader_1.NBSLoader.isActive();
        let status = player ? util_1.Color.GREEN + "Active" : util_1.Color.RED + "Not Active";
        util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.AQUA}Status: ` + status);
        if (playing) {
            util_1.Utils.sendMessage(player, PREFIX + ` ${util_1.Color.GREEN}Now Playing: §a${util_1.Utils.getSongName(loader_1.NBSLoader.getCurrentSong())}`);
        }
        util_1.Utils.sendMessage(player, `§6Volume: §a${loader_1.NBSLoader.getVolume(player)}`);
    }
}, {});
command_1.command.register("radiohelp", "Shows the radio help!").alias("rh").overload((p, o) => {
    let player = o.getEntity();
    if (player.isPlayer()) {
        util_1.Utils.sendMessage(player, USAGE);
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBdUM7QUFDdkMsZ0RBQTBDO0FBQzFDLHFDQUFxQztBQUNyQyxpQ0FBc0M7QUFFdEMsTUFBTSxNQUFNLEdBQUcsWUFBSyxDQUFDLElBQUksR0FBRyxrQkFBUyxDQUFDLE1BQU0sR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDO0FBQzNELE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJLFlBQUssQ0FBQyxHQUFHLDZOQUE2TixDQUFDO0FBRWxRLGlCQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDL0UsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBWSxDQUFDO0lBQ3JDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLElBQUksa0JBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsWUFBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksWUFBSyxDQUFDLEdBQUcsaUNBQWlDLENBQUMsQ0FBQztZQUNuRixPQUFPO1NBQ1Y7UUFBQSxDQUFDO1FBQ0Ysa0JBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsWUFBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksWUFBSyxDQUFDLEtBQUssZ0NBQWdDLFlBQUssQ0FBQyxJQUFJLGVBQWUsWUFBSyxDQUFDLEtBQUssaUJBQWlCLENBQUMsQ0FBQztRQUN6SSxZQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsWUFBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBUyxDQUFDLGNBQWMsRUFB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