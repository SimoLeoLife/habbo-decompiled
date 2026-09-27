// Extracted from HabboAirLauncher.deobf.js, line 277181.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2056.as
// Obfuscated name: _i605c6a61b35201

class a extends Pa {
  static {
    n(this, "class_2056");
  }
  static BADGE_SPRITE_TAG = "BADGE";
  var_2102 = "";
  var_2678 = "";
  var_4170 = -1;
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap();
    return (
      t != null &&
        !Number.isNaN(t._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_BADGE_IMAGE_STATUS)) &&
        t._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_BADGE_IMAGE_STATUS) !== 0 &&
        this.var_2102.length === 0 &&
        ((this.var_2102 = t.getString(RoomObjectVariableEnum.FURNITURE_BADGE_ASSET_NAME)),
        this.var_2678.length === 0 && (this.var_2678 = `${this.var_2102}_32`),
        t._ra3412bd0673156(RoomObjectVariableEnum.const_901) &&
          (this.var_4170 = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_901)),
        (r = !0)),
      r
    );
  }
  getSpriteAssetName(e, r) {
    return this.getSpriteTag(e, this.direction, r) !== a.BADGE_SPRITE_TAG ||
      (this.var_4170 !== -1 && (this.object?.getState(0) ?? 0) !== this.var_4170)
      ? super.getSpriteAssetName(e, r)
      : e === 32
        ? this.var_2678
        : this.var_2102;
  }
  getSpriteXOffset(e, r, t) {
    let i = super.getSpriteXOffset(e, r, t);
    if (this.getSpriteTag(e, r, t) === a.BADGE_SPRITE_TAG) {
      let s = this.getAsset(e === 32 ? this.var_2678 : this.var_2102, t);
      s != null &&
        (e === 64
          ? ((i += (40 - s.width) / 2),
            r === 2 &&
              (this.type === "china_c24_resolution1" || this.type === "china_c24_resolution2") &&
              (i -= 40))
          : (i += (20 - s.width) / 2));
    }
    return i;
  }
  getSpriteYOffset(e, r, t) {
    let i = super.getSpriteYOffset(e, r, t);
    if (this.getSpriteTag(e, r, t) === a.BADGE_SPRITE_TAG) {
      let s = this.getAsset(e === 32 ? this.var_2678 : this.var_2102, t);
      s != null && (i += e === 64 ? (40 - s.height) / 2 : (20 - s.height) / 2);
    }
    return i;
  }
  getLibraryAssetNameForSprite(e, r) {
    return r.tag === a.BADGE_SPRITE_TAG
      ? `%image.library.url%album1584/${r.assetName.replace("badge_", "")}.png`
      : super.getLibraryAssetNameForSprite(e, r);
  }
}
