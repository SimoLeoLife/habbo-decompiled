// Extracted from HabboAirLauncher.deobf.js, line 283481.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/animated/LandscapeRasterizer.as
// Obfuscated name: _i0207260716a6da

class a extends u_ {
  static {
    n(this, "LandscapeRasterizer");
  }
  static UPDATE_INTERVAL = 500;
  _r45233f238fc703 = 0;
  _ra510e6841d4d64 = 0;
  _rafc56c240e6f7b(e, r) {
    return ((this._r45233f238fc703 = Math.max(0, e)), (this._ra510e6841d4d64 = Math.max(0, r)), !0);
  }
  initializePlanes() {
    let e = this.data?.child("landscapes") ?? null;
    e?.length() != null && e.length() > 0 && this._re7615500696515(e.toArray()[0]);
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    let h = this._r25c26bee31a886(r);
    if ((h == null && (h = this._r25c26bee31a886(u_.DEFAULT_TYPE)), h == null)) return null;
    let p = h.render(e, t, i, s, o, d, c, f, l, b, _);
    return p == null
      ? null
      : !h.isStatic(s) && a.UPDATE_INTERVAL > 0
        ? new UnkClass_3fbc7e(p, Math.round(_ / a.UPDATE_INTERVAL) * a.UPDATE_INTERVAL + a.UPDATE_INTERVAL)
        : new UnkClass_3fbc7e(p, -1);
  }
  _rb67ca682c77f71(e, r) {
    return r == null ? super._rb67ca682c77f71(e, r) : `${e}_${r.x < 0 ? 0 : 1}`;
  }
  _re7615500696515(e) {
    if (e == null) return;
    let r = Math.random() * 654321;
    for (let t of e.child("landscape").toArray()) {
      if (!this._r291a932119ee17(t) || !da.checkRequiredAttributes(t, ["id"])) continue;
      let i = String(t.attribute("id") ?? ""),
        s = new UnkPlaneSubclass_676ed2();
      for (let o of t.child("animatedVisualization").toArray()) {
        if (!this._r291a932119ee17(o) || !da.checkRequiredAttributes(o, ["size"])) continue;
        let d = this.parsePlaneMaterialCells(o, "size"),
          c = this.parseMaskBitmaps(o, "horizontalAngle", UnkPlaneSubclass_676ed2._r9519ddaa6bb42e),
          f = this.parseMaskBitmaps(o, "verticalAngle", UnkPlaneSubclass_676ed2._rd71d30b14bb04d),
          l = o.child("visualizationLayer").length() + o.child("animationLayer").length(),
          b = s.createPlaneVisualization(d, l, this.getGeometry(d, c, f));
        if (b == null) continue;
        ih.setSeed(r);
        let _ = o.children().toArray();
        for (let h = 0; h < _.length; h++) {
          let p = _[h];
          if (this._r291a932119ee17(p))
            if (String(p.name()) === "visualizationLayer") {
              let m = String(p.attribute("materialId") ?? ""),
                v = m.length > 0 ? this.PlaneDrawingData(m) : null,
                w = this.parsePlaneMaterialCells(p, "offset", pl.DEFAULT_OFFSET),
                I = this.parsePlaneMaterialCells(p, "color", UnkPlaneSubclass_676ed2.DEFAULT_COLOR),
                C =
                  String(p.attribute("align") ?? "") === "bottom" ? pl.ALIGN_BOTTOM : pl.ALIGN_TOP;
              b.setLayer(h, v, I, C, w);
            } else String(p.name()) === "animationLayer" && b.setAnimationLayer(h, p, this.assetCollection);
        }
      }
      (s._rafc56c240e6f7b(this._r45233f238fc703, this._ra510e6841d4d64),
        this._r5009c6796a3332(i, s) || s.dispose());
    }
  }
  _r291a932119ee17(e) {
    return e != null && typeof e == "object" && "attribute" in e && "child" in e;
  }
}
