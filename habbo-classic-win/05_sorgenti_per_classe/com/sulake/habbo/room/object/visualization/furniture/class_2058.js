// Extracted from HabboAirLauncher.deobf.js, line 279018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2058.as
// Obfuscated name: _i91f324b2523c67

class a extends VI {
  static {
    n(this, "class_2058");
  }
  static PRIMARY_COLOUR_SPRITE_TAG = "COLOR1";
  static SECONDARY_COLOUR_SPRITE_TAG = "COLOR2";
  static DEFAULT_COLOR_1 = 15658734;
  static DEFAULT_COLOR_2 = 4934475;
  _color1 = a.DEFAULT_COLOR_1;
  _color2 = a.DEFAULT_COLOR_2;
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap();
    if (t != null) {
      if (!this.hasThumbnailImage) {
        let o = t.getString(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_BADGE_ASSET_NAME);
        o != null && this._r779052eba46805(this._re8d8ef218c84df(o), this._re8d8ef218c84df(`${o}_32`));
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
  getLibraryAssetNameForSprite(e, r) {
    if (r.tag === VI.THUMBNAIL_SPRITE_TAG) {
      let t = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_GUILD_CUSTOMIZED_BADGE_ASSET_NAME) ?? "";
      if (t.length > 0) return `%group.badge.url%${t.replace("badge_", "")}`;
    }
    return super.getLibraryAssetNameForSprite(e, r);
  }
  _re8d8ef218c84df(e) {
    return (this.assetCollection?.getAsset(e) ?? null)?.asset?.content;
  }
}
