/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft 2016 - 2018 RonanLana

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package tools.locks;

/**
 *
 * @author RonanLana
 */

public enum MonitoredLockType {
    UNDEFINED,
    CHARACTER_CHR,
    CHARACTER_EFF,
    CHARACTER_PET,
    CHARACTER_PRT,
    CLIENT,
    CLIENT_ENCODER,
    CLIENT_LOGIN,
    BOOK,
    ITEM,
    INVENTORY,
    SRVHANDLER_IDLE,
    SRVHANDLER_TEMP,
    BUFF_STORAGE,
    PLAYER_STORAGE,
    SERVER,
    SERVER_LOGIN,
    SERVER_DISEASES,
    MERCHANT,
    CHANNEL,
    CHANNEL_FACEEXPRS,
    CHANNEL_FACESCHDL,
    CHANNEL_MOBACTION,
    CHANNEL_MOBANIMAT,
    CHANNEL_MOBSTATUS,
    CHANNEL_OVTSTATUS,
    CHANNEL_OVERALL,
    GUILD,
    PARTY,
    WORLD_PARTY,
    WORLD_OWL,
    WORLD_PETS,
    WORLD_CHARS,
    WORLD_MOUNTS,
    WORLD_PSHOPS,
    WORLD_MERCHS,
    WORLD_MAPOBJS,
    EIM,
    EIM_PARTY,
    EIM_SCRIPT,
    EM_LOBBY,
    EM_QUEUE,
    CASHSHOP,
    VISITOR_PSHOP,
    STORAGE,
    MOB,
    MOB_ANI,
    MOB_EXT,
    MOB_STATI,
    MOBSKILL_FACTORY,
    PORTAL,
    VISITOR_MERCH,
    MAP_CHRS,
    MAP_OBJS,
    MAP_FACTORY,
    MAP_ITEM,
    MAP_BOUNDS,
    MINIDUNGEON,
    REACTOR,
    REACTOR_HIT;
}
