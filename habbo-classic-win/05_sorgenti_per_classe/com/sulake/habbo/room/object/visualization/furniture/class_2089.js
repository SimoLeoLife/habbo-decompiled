// Extracted from HabboAirLauncher.deobf.js, line 280365.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_2089.as
// Obfuscated name: _ieaf994a0a8db4d

class a extends FurnitureExternalImageVisualization {
  static {
    n(this, "class_2089");
  }
  static THUMBNAIL_URL_KEY = "THUMBNAIL_URL";
  getThumbnailURL() {
    let e = this.object?.getStringToStringMap(),
      r = e?._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA) ?? null,
      t = e?.getString(RoomObjectVariableEnum.SESSION_URL_PREFIX) ?? "";
    return t.length === 0 ? null : `${t}${r?.getValue(a.THUMBNAIL_URL_KEY) ?? ""}`;
  }
}
