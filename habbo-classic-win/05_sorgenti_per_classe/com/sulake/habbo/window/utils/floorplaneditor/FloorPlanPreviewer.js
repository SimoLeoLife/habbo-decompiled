// Extracted from HabboAirLauncher.deobf.js, line 146727.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/floorplaneditor/FloorPlanPreviewer.as
// Obfuscated name: _i18feeffd292276

class a {
  constructor(e) {
    this._bcFloorPlanEditor = e;
    ((this._r5f3697efbbb32d = e._r223f1e7a35055c),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_0_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_1_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_2_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_3_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_4_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_5_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_6_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_7_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_8_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_9_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_a_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_b_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_c_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_d_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_e_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_f_png")),
      this.Bitmap.push(this._bcFloorPlanEditor.tile_preview_entry("tile_preview_entry_png")));
  }
  static {
    n(this, "FloorPlanPreviewer");
  }
  Bitmap = [];
  _r5f3697efbbb32d;
  updatePreview() {
    let e = [],
      r = Number.MAX_SAFE_INTEGER,
      t = Number.MAX_SAFE_INTEGER,
      i = Number.MIN_SAFE_INTEGER,
      s = Number.MIN_SAFE_INTEGER;
    for (let l = 0; l < this._r5f3697efbbb32d._reba6d9dec10c70; l += 1)
      for (let b = 0; b < this._r5f3697efbbb32d._r6ec593f3f08d0b; b += 1) {
        let _ = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b, l);
        if (_ < 0) continue;
        let h = a.getCanvasPoint(b, l, _);
        ((r = Math.min(r, h.x)), (t = Math.min(t, h.y)), (i = Math.max(i, h.x)), (s = Math.max(s, h.y)));
        let p = _ + 1,
          m = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b - 1, l - 1),
          v = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b, l - 1),
          w = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b + 1, l - 1),
          I = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b - 1, l),
          C = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b + 1, l),
          W = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b - 1, l + 1),
          R = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b, l + 1),
          T = this._r5f3697efbbb32d._rfa5cc9422dc3ef(b + 1, l + 1),
          S =
            (m === p || v === p || I === p ? 1 : 0) |
            (w === p || v === p || C === p ? 2 : 0) |
            (W === p || R === p || I === p ? 4 : 0) |
            (T === p || R === p || C === p ? 8 : 0);
        (S === 15 && (S = 0),
          this._r5f3697efbbb32d._rc9c271dfd2d1f0(b, l) && (S = this.Bitmap.length - 1),
          e.push({ point: h, type: S }));
      }
    let o = Math.min(i - r + 18, Bd.DEFAULT_SIZE),
      d = Math.min(s - t + 18, Bd.DEFAULT_SIZE),
      c = new A(o, d, !1, 4294967295),
      f = new E(-r, -t);
    for (let l of e) {
      let b = this.Bitmap[l.type];
      b != null && c.copyPixels(b, b.rect, l.point.add(f));
    }
    this._bcFloorPlanEditor.updatePreviewBitmap(c);
  }
  static getCanvasPoint(e, r, t) {
    return new E(8 * (e - r), 4 * (e + r) - 8 * t);
  }
}
