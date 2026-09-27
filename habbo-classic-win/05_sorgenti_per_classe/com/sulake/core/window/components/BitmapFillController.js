// Extracted from HabboAirLauncher.deobf.js, line 131242.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/BitmapFillController.as
// Obfuscated name: _i8b0919275ce546

class a extends StaticBitmapWrapperController {
  static {
    n(this, "BitmapFillController");
  }
  static FILL_MODE_STRETCH = "stretch";
  static FILL_MODE_TILE = "tile";
  static FILL_MODE_CENTER = "center";
  static FILL_MODE_COVER = "cover";
  static FILL_MODE_CONTAIN = "contain";
  static FILL_MODES = [
    a.FILL_MODE_STRETCH,
    a.FILL_MODE_TILE,
    a.FILL_MODE_CENTER,
    a.FILL_MODE_COVER,
    a.FILL_MODE_CONTAIN,
  ];
  _fillMode = a.FILL_MODE_STRETCH;
  _tint = !1;
  var_659 = 0;
  get fillMode() {
    return this._fillMode;
  }
  set fillMode(e) {
    let r = a._rbe0b38525e8bcd(e);
    this._fillMode !== r && ((this._fillMode = r), this.invalidate());
  }
  get tint() {
    return this._tint;
  }
  set tint(e) {
    this._tint !== e && ((this._tint = e), this.invalidate());
  }
  get spacing() {
    return this.var_659;
  }
  set spacing(e) {
    let r = a._ra8710b8ae80da0(e);
    this.var_659 !== r && ((this.var_659 = r), this.invalidate());
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    let h = s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t);
    ((this._fillMode = a._rbe0b38525e8bcd(String(h.get(class_3436.BITMAP_FILL_MODE).value))),
      (this._tint = a._r6b660b476538d5(h.get(class_3436.const_658).value)),
      (this.var_659 = a._ra8710b8ae80da0(Number(h.get(class_3436._rdaf6bdcdccb2b4).value))),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  static _rbe0b38525e8bcd(e) {
    return this.FILL_MODES.includes(e) ? e : this.FILL_MODE_STRETCH;
  }
  static _ra8710b8ae80da0(e) {
    return Number.isNaN(e) ? 0 : Math.max(0, e);
  }
  static _r6b660b476538d5(e) {
    if (typeof e == "boolean") return e;
    if (typeof e == "string") {
      let r = e.trim().toLowerCase();
      return r === "true" || r === "1";
    }
    return !!e;
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.push(this.createProperty(class_3436.BITMAP_FILL_MODE, this._fillMode)),
      e.push(this.createProperty(class_3436.const_658, this._tint)),
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.var_659)),
      e
    );
  }
  set properties(e) {
    let r = !1;
    for (let t of e)
      switch (t.key) {
        case class_3436.BITMAP_FILL_MODE: {
          let i = a._rbe0b38525e8bcd(String(t.value));
          this._fillMode !== i && ((this._fillMode = i), (r = !0));
          break;
        }
        case class_3436.const_658: {
          let i = a._r6b660b476538d5(t.value);
          this._tint !== i && ((this._tint = i), (r = !0));
          break;
        }
        case class_3436._rdaf6bdcdccb2b4: {
          let i = a._ra8710b8ae80da0(Number(t.value));
          this.var_659 !== i && ((this.var_659 = i), (r = !0));
          break;
        }
      }
    (r && this.invalidate(), (super.properties = e));
  }
}
