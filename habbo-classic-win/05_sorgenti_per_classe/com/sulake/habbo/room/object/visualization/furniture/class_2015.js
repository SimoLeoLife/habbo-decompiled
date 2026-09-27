// Estratto da HabboAirLauncher.deobf.js, riga 278967.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2015.as
// Nome offuscato: _i795fa2ffc016ed

class a extends Pa {
  static {
    n(this, "class_2015");
  }
  static PRIMARY_COLOUR_SPRITE_TAG = "COLOR1";
  static SECONDARY_COLOUR_SPRITE_TAG = "COLOR2";
  static DEFAULT_COLOR_1 = 15658734;
  static DEFAULT_COLOR_2 = 4934475;
  static BADGE_SPRITE_TAG = "BADGE";
  _color1 = a.DEFAULT_COLOR_1;
  _color2 = a.DEFAULT_COLOR_2;
  var_2102 = "";
  var_2678 = "";
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap();
    if (t != null) {
      if (this.var_2102.length === 0) {
        let o = t.getString(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_BADGE_ASSET_NAME);
        o != null && ((this.var_2102 = o), (this.var_2678 = `${o}_32`));
      }
      let i = t._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_COLOR_1);
      this._color1 = Number.isNaN(i) ? a.DEFAULT_COLOR_1 : i;
      let s = t._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_COLOR_2);
      this._color2 = Number.isNaN(s) ? a.DEFAULT_COLOR_2 : s;
    }
    return r;
  }
  getSpriteColor(e, r, t) {
    switch (this.getSpriteTag(e, this.direction, r)) {
      case a.PRIMARY_COLOUR_SPRITE_TAG:
        return this._color1;
      case a.SECONDARY_COLOUR_SPRITE_TAG:
        return this._color2;
      default:
        return super.getSpriteColor(e, r, t);
    }
  }
  getSpriteAssetName(e, r) {
    return this.getSpriteTag(e, this.direction, r) === a.BADGE_SPRITE_TAG
      ? e === 32
        ? this.var_2678
        : this.var_2102
      : super.getSpriteAssetName(e, r);
  }
  getLibraryAssetNameForSprite(e, r) {
    return r.tag === a.BADGE_SPRITE_TAG
      ? `%group.badge.url%${r.assetName.replace("badge_", "")}`
      : super.getLibraryAssetNameForSprite(e, r);
  }
}
