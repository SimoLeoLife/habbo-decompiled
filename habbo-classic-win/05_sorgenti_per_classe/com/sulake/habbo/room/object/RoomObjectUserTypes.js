// Extracted from HabboAirLauncher.deobf.js, line 79364.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomObjectUserTypes.as
// Obfuscated name: _ib8e25425329f1c

class a {
  static {
    n(this, "RoomObjectUserTypes");
  }
  static BOT = "bot";
  static MONSTERPLANT = "monsterplant";
  static PET = "pet";
  static RENTABLE_BOT = "rentable_bot";
  static USER = "user";
  static const_11 = new Map([
    [a.USER, 1],
    [a.PET, 2],
    [a.BOT, 3],
    [a.RENTABLE_BOT, 4],
  ]);
  static getTypeId(e) {
    return this.const_11.get(e) ?? 0;
  }
  static getName(e) {
    for (let [r, t] of this.const_11.entries()) if (t === e) return r;
    return null;
  }
  static _r1d008b524790bb(e) {
    switch (e) {
      case a.BOT:
      case a.RENTABLE_BOT:
        return a.USER;
      default:
        return e;
    }
  }
}
