// Estratto da HabboAirLauncher.deobf.js, riga 285684.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/class_4356.as
// Nome offuscato: _i365aa3bdac4ac5

class {
  static {
    n(this, "class_4356");
  }
  static METADATA_ASSET_NAME = "variablefx_icon_metadata";
  static ICON_ASSET_PREFIX = "variablefx_icon_";
  static resolve(e, r) {
    let t = this.trim(r),
      s = this.resolveMetadata(e)[t];
    return new VariableFxIconDefinition(
      t,
      this.ICON_ASSET_PREFIX + t.replace(/\./g, "_"),
      s == null ? 0 : s.offsetX | 0,
      s == null ? 0 : s.offsetY | 0,
    );
  }
  static resolveMetadata(e) {
    let r = e == null ? null : e._r93de184d6f2403(this.METADATA_ASSET_NAME),
      t = {};
    if (r == null) return t;
    for (let i of r.children()) {
      if (!(i instanceof yi)) continue;
      let s = this.trim(String(i.attribute("name")));
      s.length > 0 &&
        (t[s] = { offsetX: parseInt(String(i.attribute("x"))), offsetY: parseInt(String(i.attribute("y"))) });
    }
    return t;
  }
  static trim(e) {
    return e == null ? "" : e.replace(/^\s+|\s+$/g, "");
  }
}
