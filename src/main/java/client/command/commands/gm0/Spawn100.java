package client.command.commands.gm0;

import client.MapleClient;
import client.command.Command;
import server.life.MapleMonster;
import server.maps.MapleMap;

public class Spawn100 extends Command {

    @Override
    public void execute(MapleClient client, String[] params) {
        MapleMap map = client.getPlayer().getMap();
        MapleMonster mapleMonster = map.getAllMonsters().get(Integer.parseInt(params[0]));
        for (int i = 0; i < 100; i++) {
            map.spawnMonster(mapleMonster);
        }
    }
}
