// Estratto da HabboAirLauncher.deobf.js, riga 277347.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1819.as
// Nome offuscato: _i17d7fe4127b79c

class a extends Pa {
  static {
    n(this, "class_1819");
  }
  static WIRED_EMBLEM_SPRITE_TAG = "wired_emblem";
  var_4199 = !1;
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1383) === 1;
    return (t !== this.var_4199 && ((this.var_4199 = t), (r = !0)), r);
  }
  getSpriteAlpha(e, r, t) {
    let i = this.getSpriteTag(e, r, t);
    return !this.var_4199 && i === a.WIRED_EMBLEM_SPRITE_TAG ? 0 : super.getSpriteAlpha(e, r, t);
  }
}
