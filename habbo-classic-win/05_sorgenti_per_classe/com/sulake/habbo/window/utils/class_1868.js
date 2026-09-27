// Estratto da HabboAirLauncher.deobf.js, riga 146128.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/class_1868.as
// Nome offuscato: _i94a86f08ab2bc0

class a {
  static {
    n(this, "class_1868");
  }
  static RENDERER_TYPE_SKIN = "skin";
  static RENDERER_TYPE_BITMAP = "bitmap";
  static RENDERER_TYPE_FILL = "fill";
  static RENDERER_TYPE_GRADIENT = "gradient";
  static RENDERER_TYPE_TEXT = "text";
  static RENDERER_TYPE_LABEL = "label";
  static RENDERER_TYPE_SHAPE = "shape";
  static RENDERER_TYPE_BITMAP_FILL = "bitmap_fill";
  static RENDERER_TYPE_STROKE = "stroke";
  static RENDERER_TYPE_UNKNOWN = "unknown";
  static RENDERER_TYPE_NULL = "null";
  static parse(e, r, t) {
    let i = {},
      s = {};
    class_2715.fillTables(i, s);
    let o = new Map(),
      d = new Map();
    class_3684.fillTables(o, d);
    let c = {
      [a.RENDERER_TYPE_SKIN]: bj,
      [a.RENDERER_TYPE_BITMAP]: qhe,
      [a.RENDERER_TYPE_FILL]: FillSkinRenderer,
      [a.RENDERER_TYPE_GRADIENT]: r3e,
      [a.RENDERER_TYPE_TEXT]: n3e,
      [a.RENDERER_TYPE_LABEL]: t3e,
      [a.RENDERER_TYPE_SHAPE]: Ry,
      [a.RENDERER_TYPE_BITMAP_FILL]: Jhe,
      [a.RENDERER_TYPE_STROKE]: i3e,
      [a.RENDERER_TYPE_UNKNOWN]: SkinRenderer,
      [a.RENDERER_TYPE_NULL]: NullSkinRenderer,
    };
    if (e == null) return;
    let f = e.child("window").toArray();
    for (let l of f) {
      if (typeof l == "string") continue;
      let b = l,
        _ = String(b.attribute("type")),
        h = String(b.attribute("intent")),
        p = Number.parseInt(String(b.attribute("style")), 10) || 0,
        m = String(b.attribute("asset")),
        v = String(b.attribute("layout")),
        w = String(b.attribute("window_layout")),
        I = String(b.attribute("renderer")),
        C = b.child("states"),
        W = c[I],
        R = null;
      if (W != null) {
        R = new W(v);
        let z = r.getAssetByName(m);
        z != null && R.parse(z, C, r);
      }
      let T = new s3e();
      ((T.threshold = b.attribute("treshold").length() > 0 ? Number(b.attribute("treshold")) : 10),
        (T.background =
          b.attribute("background").length() > 0 ? String(b.attribute("background")) === "true" : !1),
        (T.blend = b.attribute("blend").length() > 0 ? Number(b.attribute("blend")) : 1),
        (T.color = b.attribute("color").length() > 0 ? Number(b.attribute("color")) : 16777215),
        (T.width_min =
          b.attribute("width_min").length() > 0 ? Number(b.attribute("width_min")) : Number.MIN_SAFE_INTEGER),
        (T.width_max =
          b.attribute("width_max").length() > 0 ? Number(b.attribute("width_max")) : Number.MAX_SAFE_INTEGER),
        (T.height_min =
          b.attribute("height_min").length() > 0
            ? Number(b.attribute("height_min"))
            : Number.MIN_SAFE_INTEGER),
        (T.height_max =
          b.attribute("height_max").length() > 0
            ? Number(b.attribute("height_max"))
            : Number.MAX_SAFE_INTEGER));
      let S = null;
      if (w.length > 0) {
        let z = r.getAssetByName(w);
        z != null && (S = z.content);
      }
      t.addSkinRenderer(i[_], p, h, R, S, T);
    }
  }
}
