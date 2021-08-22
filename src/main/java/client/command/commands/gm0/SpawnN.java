package client.command.commands.gm0;

import client.MapleClient;
import client.command.Command;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.maps.MapleMap;

import java.util.Objects;

public class SpawnN extends Command {

    @Override
    public void execute(MapleClient client, String[] params) {
        int monster = Integer.parseInt(params[0]);
        int number = Integer.parseInt(params[1]);
        MapleMap map = client.getPlayer().getMap();
        MapleMonster mapleMonster = map.getAllMonsters().get(monster);
        for (int i = 0; i < number; i++) {
            map.spawnMonsterOnGroundBelow(Objects.requireNonNull(MapleLifeFactory.getMonster(mapleMonster.getId())), client.getPlayer().getPosition());
        }
    }
}
