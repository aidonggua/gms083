/* @Author melon */

importPackage(Packages.client.command);

var status;
var menu = ["传送"]
var map = [
    {name: '魔法密林', code: '100000'},
    {name: '魔法密林', code: '100000'},
]

function handleMenu() {
    var sendStr = "快捷服务：\r\n\r\n#b";
    for (var i = 0; i <= menu.length; i++) {
        sendStr += "#L" + i + "#" + menu[i] + "#l\r\n";
    }
    return sendStr
}

function handleMap() {
    var sendStr = "地图：\r\n\r\n#b";
    for (var i = 0; i <= map.length; i++) {
        sendStr += "#L" + (1000 + i) + "#" + map[i].name + "#l\r\n";
    }
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++; else status--;
        if (status == 0) {
            cm.sendSimple(handleMenu());
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendPrev(goto());
            } else {
                cm.sendPrev("功能待完善");
            }
        } else if (status == 2) {
            if (selection >= 1000 && selection < 2000) {
                var mapCode = map[selection - 1000]
                // 传送到mapCode
                cm.dispose();
            } else {
                cm.sendPrev("功能待完善");
            }
        } else {
            cm.dispose();
        }
    }
}

