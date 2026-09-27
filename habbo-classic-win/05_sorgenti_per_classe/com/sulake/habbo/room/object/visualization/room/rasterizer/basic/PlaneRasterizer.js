// Extracted from HabboAirLauncher.deobf.js, line 283155.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneRasterizer.as
// Obfuscated name: _i409db2025a9976

class a {
  static {
    n(this, "PlaneRasterizer");
  }
  static DEFAULT_TYPE = "default";
  var_1600 = null;
  _r0670dc73fa014b = new B();
  _textures = new B();
  _rac8ee552f8f91b = new B();
  _geometries = new B();
  _data = null;
  get data() {
    return this._data;
  }
  get assetCollection() {
    return this.var_1600;
  }
  _rafc56c240e6f7b(e, r) {
    return !0;
  }
  dispose() {
    for (let e of this._rac8ee552f8f91b.getValues()) e.dispose();
    (this._rac8ee552f8f91b.dispose(),
      this.resetMaterials(),
      this._r0670dc73fa014b.dispose(),
      this.resetTextures(),
      this._textures.dispose());
    for (let e of this._geometries.getValues()) e.dispose();
    (this._geometries.dispose(), (this._data = null), (this.var_1600 = null));
  }
  clearCache() {
    for (let e of this._rac8ee552f8f91b.getValues()) e.clearCache();
    for (let e of this._r0670dc73fa014b.getValues()) e.clearCache();
  }
  initialize(e) {
    this._data = e;
  }
  reinitialize() {
    (this.resetTextures(), this.resetMaterials(), this.initializeAll());
  }
  initializeAssetCollection(e) {
    this.data == null || e == null || ((this.var_1600 = e), this.initializeAll());
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    return null;
  }
  _rb67ca682c77f71(e, r) {
    return String(e);
  }
  _rc77cca44f7df44(e) {
    let r = this._r25c26bee31a886(e);
    return (r == null && (r = this._r25c26bee31a886(a.DEFAULT_TYPE)), r?._rc77cca44f7df44() ?? []);
  }
  getTexture(e) {
    return this._textures.getValue(e) ?? null;
  }
  PlaneDrawingData(e) {
    return this._r0670dc73fa014b.getValue(e) ?? null;
  }
  _r25c26bee31a886(e) {
    return this._rac8ee552f8f91b.getValue(e) ?? null;
  }
  _r5009c6796a3332(e, r) {
    return r == null || this._rac8ee552f8f91b.getValue(e) != null
      ? !1
      : (this._rac8ee552f8f91b.add(e, r), !0);
  }
  initializePlanes() {}
  getGeometry(e, r, t) {
    let i = Math.min(90, Math.abs(r)),
      s = Math.min(90, Math.abs(t)),
      o = `${e}_${Math.round(i)}_${Math.round(s)}`,
      d = this._geometries.getValue(o) ?? null;
    return (
      d == null && ((d = new Rd(e, new k(i, s), new k(-10, 0, 0))), this._geometries.add(o, d)),
      d
    );
  }
  _r04668c05d18864(e, r) {
    if (e != null)
      for (let t of r) {
        if (!this._r291a932119ee17(t) || !da.checkRequiredAttributes(t, ["size"])) continue;
        let i = this.parsePlaneMaterialCells(t, "size"),
          s = this.parseMaskBitmaps(t, "horizontalAngle", UnkPlaneSubclass_6095d4._r9519ddaa6bb42e),
          o = this.parseMaskBitmaps(t, "verticalAngle", UnkPlaneSubclass_6095d4._rd71d30b14bb04d),
          d = t.child("visualizationLayer").toArray(),
          c = e.createPlaneVisualization(i, d.length, this.getGeometry(i, s, o));
        if (c != null)
          for (let f = 0; f < d.length; f++) {
            let l = d[f];
            if (!this._r291a932119ee17(l)) continue;
            let b = String(l.attribute("materialId") ?? ""),
              _ = b.length > 0 ? this.PlaneDrawingData(b) : null,
              h = this.parsePlaneMaterialCells(l, "offset", pl.DEFAULT_OFFSET),
              p = this.parsePlaneMaterialCells(l, "color", UnkPlaneSubclass_6095d4.DEFAULT_COLOR),
              v = String(l.attribute("align") ?? "") === "bottom" ? pl.ALIGN_BOTTOM : pl.ALIGN_TOP;
            c.setLayer(f, _, p, v, h);
          }
      }
  }
  initializeAll() {
    this.data != null && (this._r41aef5c5c6f231(), this.initializePlanes());
  }
  _r41aef5c5c6f231() {
    let e = this.data?.child("textures");
    e != null && e.length() > 0 && this._r40094b3dafb3c2(e.toArray()[0], this.assetCollection);
    let r = this.data?.child("materials");
    r != null && r.length() > 0 && this._r774fd57c07120f(r.toArray()[0]);
  }
  resetMaterials() {
    for (let e of this._r0670dc73fa014b.getValues()) e.dispose();
    this._r0670dc73fa014b.reset();
  }
  resetTextures() {
    for (let e of this._textures.getValues()) e.dispose();
    this._textures.reset();
  }
  _r40094b3dafb3c2(e, r) {
    if (!(e == null || r == null))
      for (let t of e.child("texture").toArray()) {
        if (!this._r291a932119ee17(t) || !da.checkRequiredAttributes(t, ["id"])) continue;
        let i = String(t.attribute("id") ?? "");
        if (i.length === 0 || this._textures.getValue(i) != null) continue;
        let s = new bg();
        for (let o of t.child("bitmap").toArray()) {
          if (!this._r291a932119ee17(o) || !da.checkRequiredAttributes(o, ["assetName"])) continue;
          let d = String(o.attribute("assetName") ?? ""),
            c = r.getAsset(d),
            f = c?.nativeTexture,
            l = c?.asset,
            b = f ?? null;
          if (b == null) {
            let _ = l?.content instanceof A ? l.content : null;
            _ != null && (b = _.texture);
          }
          if (b != null) {
            if (c?.flipH) {
              let _ = l?.content instanceof A ? l.content : null;
              b = class_4281._r4dc9bc55df3b49(_)?.texture ?? b;
            }
            b != null &&
              s.addBitmap(
                b,
                this.parseMaskBitmaps(o, "normalMinX", bg.const_29),
                this.parseMaskBitmaps(o, "normalMaxX", bg.MAX_NORMAL_COORDINATE_VALUE),
                this.parseMaskBitmaps(o, "normalMinY", bg.const_29),
                this.parseMaskBitmaps(o, "normalMaxY", bg.MAX_NORMAL_COORDINATE_VALUE),
                d,
              );
          }
        }
        this._textures.add(i, s);
      }
  }
  _r774fd57c07120f(e) {
    if (e != null)
      for (let r of e.child("material").toArray()) {
        if (!this._r291a932119ee17(r) || !da.checkRequiredAttributes(r, ["id"])) continue;
        let t = String(r.attribute("id") ?? "");
        if (t.length === 0) continue;
        let i = new Xve();
        for (let s of r.child("materialCellMatrix").toArray()) {
          if (!this._r291a932119ee17(s)) continue;
          let o = this.parsePlaneMaterialCellColumn(String(s.attribute("repeatMode") ?? "")),
            d = this._r8246311cc0886d(String(s.attribute("align") ?? "")),
            c = s.child("materialCellColumn").toArray();
          if (c.length === 0) continue;
          let f = i.addMaterialCellMatrix(
            c.length,
            o,
            d,
            this.parseMaskBitmaps(s, "normalMinX", pc.const_29),
            this.parseMaskBitmaps(s, "normalMaxX", pc.MAX_NORMAL_COORDINATE_VALUE),
            this.parseMaskBitmaps(s, "normalMinY", pc.const_29),
            this.parseMaskBitmaps(s, "normalMaxY", pc.MAX_NORMAL_COORDINATE_VALUE),
          );
          for (let l = 0; l < c.length; l++) this._r8635750a8ac5aa(c[l], f, l);
        }
        this._r0670dc73fa014b.add(t, i);
      }
  }
  _r8635750a8ac5aa(e, r, t) {
    if (e == null || r == null) return;
    let i = this._rd83f1693e2486e(String(e.attribute("repeatMode") ?? "")),
      s = this.parsePlaneMaterialCells(e, "width"),
      o = this._r59642412fc1990(e);
    r._r6b958bac2f6f2f(t, s, o, i);
  }
  _r59642412fc1990(e) {
    if (e == null) return null;
    let r = [];
    for (let t of e.child("materialCell").toArray()) {
      if (!this._r291a932119ee17(t)) continue;
      let i = String(t.attribute("textureId") ?? ""),
        s = null,
        o = null,
        d = null,
        c = 0,
        f = t.child("extraItemData").toArray()[0] ?? null;
      if (this._r291a932119ee17(f)) {
        let b = f.child("extraItemTypes").toArray()[0] ?? null,
          _ = f.child("offsets").toArray()[0] ?? null;
        this._r291a932119ee17(b) &&
          this._r291a932119ee17(_) &&
          ((s = this.parseTextures(b)),
          (d = this.parseExtraItemOffsets(_)),
          (c = d.length),
          String(f.attribute("limitMax") ?? "").length > 0 && (c = this.parsePlaneMaterialCells(f, "limitMax", c)));
      }
      if (s != null) {
        o = [];
        for (let b = 0; b < s.length; b++) {
          let _ = s[b] ?? "",
            h = this.assetCollection?.getAsset(_) ?? null;
          h != null && o.push(h);
        }
      }
      let l = this.getTexture(i);
      r.push(new QQ(l, o, d, c));
    }
    return r.length > 0 ? r : null;
  }
  parseTextures(e) {
    let r = [];
    if (e == null) return r;
    for (let t of e.child("extraItemType").toArray())
      this._r291a932119ee17(t) &&
        da.checkRequiredAttributes(t, ["assetName"]) &&
        r.push(String(t.attribute("assetName") ?? ""));
    return r;
  }
  parseExtraItemOffsets(e) {
    let r = [];
    if (e == null) return r;
    for (let t of e.child("offset").toArray())
      this._r291a932119ee17(t) &&
        da.checkRequiredAttributes(t, ["x", "y"]) &&
        r.push(new E(this.parsePlaneMaterialCells(t, "x"), this.parsePlaneMaterialCells(t, "y")));
    return r;
  }
  parsePlaneMaterialCellColumn(e) {
    switch (e) {
      case "borders":
        return pc.REPEAT_MODE_BORDERS;
      case "center":
        return pc.REPEAT_MODE_CENTER;
      case "first":
        return pc.REPEAT_MODE_FIRST;
      case "last":
        return pc.REPEAT_MODE_LAST;
      case "random":
        return pc.REPEAT_MODE_RANDOM;
      default:
        return pc._r280fc10c7b3c8d;
    }
  }
  _r8246311cc0886d(e) {
    switch (e) {
      case "bottom":
        return pc.ALIGN_BOTTOM;
      case "top":
        return pc.ALIGN_TOP;
      default:
        return pc._r3a2eda2df73619;
    }
  }
  _rd83f1693e2486e(e) {
    switch (e) {
      case "borders":
        return _b.REPEAT_MODE_BORDERS;
      case "center":
        return _b.REPEAT_MODE_CENTER;
      case "first":
        return _b.REPEAT_MODE_FIRST;
      case "last":
        return _b.REPEAT_MODE_LAST;
      case "none":
        return _b._r97964780ff4d2b;
      default:
        return _b._r3dcecf28a5e014;
    }
  }
  parsePlaneMaterialCells(e, r, t = 0) {
    let i = String(e.attribute(r) ?? "");
    return i.length > 0 ? Number.parseInt(i, 0) : t;
  }
  parseMaskBitmaps(e, r, t = 0) {
    let i = String(e.attribute(r) ?? "");
    return i.length > 0 ? Number.parseFloat(i) : t;
  }
  _r291a932119ee17(e) {
    return e != null && typeof e == "object" && "attribute" in e && "child" in e;
  }
}
