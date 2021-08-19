package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;
import client.inventory.Item;
import client.inventory.MapleInventoryType;

import java.util.Objects;

public class ItemIdCommand extends Command {

    @Override
    public void execute(MapleClient client, String[] params) {
        MapleCharacter player = client.getPlayer();
        byte inventoryType = 1;
        if (params.length > 0) {
            inventoryType = (byte) (Integer.parseInt(params[0]));
        }
        Item item = player.getInventory(Objects.requireNonNull(MapleInventoryType.getByType(inventoryType))).getItem((short) 1);
        player.dropMessage(String.format("道具id: %s", item.getItemId()));
    }
}
