/* @Author melon */

importPackage(Packages.client.command);

var status;
var menu = ["传送", "专职"]
var maps = [
    {name: "自由市场", code: 910000000},
    {name: "彩虹村", code: 1000000},
    {name: "明珠港", code: 104000000},
    {name: "魔法密林", code: 101000000},
    {name: "射手村", code: 100000000},
    {name: "废弃都市", code: 103000000},
    {name: "勇士部落", code: 102000000},
    {name: "天空之城", code: 104000000},
    {name: "阿里安特", code: 260000000},
    {name: "童话村", code: 222000000},
    {name: "武陵", code: 250000000}
]

function handleMenu() {
    var sendStr = "快捷服务：\r\n\r\n#b";
    for (var i = 0; i < menu.length; i++) {
        sendStr += "#L" + i + "#" + menu[i] + "#l\r\n";
    }
    return sendStr;
}

function handleMap() {
    var sendStr = "地图：\r\n\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        sendStr += "#L" + (1000 + i) + "#" + maps[i].name + "#l\r\n";
    }
    return sendStr;
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
                cm.sendSimple(handleMap());
            } else {
                cm.sendSimple("功能待完善");
            }
        } else if (status == 2) {
            if (selection >= 1000 && selection < 2000) {
                var mapId = maps[selection - 1000].code;
                cm.getPlayer().changeMap(mapId);
                cm.dispose();
            } else {
                cm.sendSimple("功能待完善");
            }
        } else {
            cm.dispose();
        }
    }
}

