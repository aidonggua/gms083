/* @Author melon */

importPackage(Packages.client.command);

var status;
var menu = ["传送", "练级传送", "专职"]
var maps = [
    {name: "自由市场", code: 910000000},
    {name: "彩虹村", code: 1000000},
    {name: "明珠港", code: 104000000},
    {name: "魔法密林", code: 101000000},
    {name: "射手村", code: 100000000},
    {name: "废弃都市", code: 103000000},
    {name: "勇士部落", code: 102000000},
    {name: "林中之城", code: 105040400},
    {name: "天空之城", code: 104000000},
    {name: "玩具城", code: 220000000},
    {name: "阿里安特", code: 260000000},
    {name: "童话村", code: 222000000},
    {name: "武陵", code: 250000000},
    {name: "百草堂", code: 251000000}
]

var monsterMaps = [
    {name: "林中之城-蚂蚁广场-30", code: 105070000},
    {name: "林中之城-冰独眼兽洞穴-50", code: 105080000},
    {name: "林中之城-巨人之林-50", code: 105040306},
    {name: "童话村-老虎山坡-50", code: 222010200},
    {name: "冰封雪域-冰雪峡谷-60", code: 211040100},
    {name: "冰封雪域-死亡之林-60", code: 211041400},
    {name: "艰苦洞穴-80", code: 211041400},
    {name: "时间通道-扭曲的时间-70", code: 220060000},
    {name: "时间通道-时间消失之路-70", code: 220070000}
]

var jobMap = [
    {name: "勇士", code: 100},
    {name: "剑客", code: 110},
    {name: "骑士", code: 120},
    {name: "枪战士", code: 130},
    {name: "勇士", code: 111},
    {name: "白骑士", code: 121},
    {name: "龙骑士", code: 131},
    {name: "魔法师", code: 200},
    {name: "弓箭手", code: 300},
    {name: "飞侠", code: 400},
    {name: "刺客", code: 410},
    {name: "侠客", code: 420},
    {name: "无影人", code: 411},
    {name: "独行客", code: 421},
    {name: "隐士", code: 412},
    {name: "侠盗", code: 422}
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

function handleMonsterMap() {
    var sendStr = "练级地图：\r\n\r\n#b";
    for (var i = 0; i < monsterMaps.length; i++) {
        sendStr += "#L" + (2000 + i) + "#" + monsterMaps[i].name + "#l\r\n";
    }
    return sendStr;
}

function handleJobMap() {
    var sendStr = "职业：\r\n\r\n#b";
    for (var i = 0; i < jobMap.length; i++) {
        sendStr += "#L" + (3000 + i) + "#" + jobMap[i].name + "#l\r\n";
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
            } else if (selection == 1) {
                cm.sendSimple(handleMonsterMap());
            } else {
                cm.sendSimple(handleJobMap());
            }
        } else if (status == 2) {
            if (selection >= 1000 && selection < 2000) {
                var mapId = maps[selection - 1000].code;
                cm.getPlayer().changeMap(mapId);
                cm.dispose();
            } else if (selection >= 2000 && selection < 3000) {
                var mapId = monsterMaps[selection - 2000].code;
                cm.getPlayer().changeMap(mapId);
                cm.dispose();
            } else if (selection >= 3000 && selection < 4000) {
                var jobId = jobMap[selection - 3000].code;
                cm.getPlayer().changeJob(jobId);
                cm.getPlayer().equipChanged();
            } else {
                cm.sendSimple("功能待完善");
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
    }
}

