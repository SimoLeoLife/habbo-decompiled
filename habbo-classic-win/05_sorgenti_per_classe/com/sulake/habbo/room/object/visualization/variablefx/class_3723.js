// Extracted from HabboAirLauncher.deobf.js, line 285399.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/class_3723.as
// Obfuscated name: _ib9d6e1e5bc9659

class {
  static {
    n(this, "class_3723");
  }
  static ASSET_NAME = "variablefx_renderer_mapping";
  static parse(e) {
    let r = [];
    if (e == null) return r;
    for (let t of e.children()) {
      if (!(t instanceof yi)) continue;
      let i = parseInt(String(t.attribute("id"))) | 0,
        s = String(t.attribute("name")),
        o = String(t.attribute("rendererClass")),
        d = class_2881.resolveById(i);
      d != null && s === d && o.length > 0 && r.push({ renderer: d, rendererId: i, rendererClass: o });
    }
    return r;
  }
}
