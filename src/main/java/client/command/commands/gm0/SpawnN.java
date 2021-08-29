package client.command.commands.gm0;

import client.MapleClient;
import client.command.Command;
import server.life.AbstractLoadedMapleLife;
import server.life.MapleLifeFactory;
import server.maps.MapleMap;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class SpawnN extends Command {

    @Override
    public void execute(MapleClient client, String[] params) {
        int monster = Integer.parseInt(params[0]);
        int number = Integer.parseInt(params[1]);
        MapleMap map = client.getPlayer().getMap();
        List<Integer> idList = map.getAllMonsters().stream().map(AbstractLoadedMapleLife::getId).distinct().collect(Collectors.toList());
        for (int i = 0; i < number; i++) {
            map.spawnMonsterOnGroundBelow(Objects.requireNonNull(MapleLifeFactory.getMonster(idList.get(monster))), client.getPlayer().getPosition());
        }

    }
}
