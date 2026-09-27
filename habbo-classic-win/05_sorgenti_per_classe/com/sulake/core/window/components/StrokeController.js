// Extracted from HabboAirLauncher.deobf.js, line 140931.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/StrokeController.as
// Obfuscated name: _i01a05cf990eab8

class a extends st {
  static {
    n(this, "StrokeController");
  }
  static SIDE_TOP = 1;
  static SIDE_RIGHT = 2;
  static SIDE_BOTTOM = 4;
  static SIDE_LEFT = 8;
  static _r8ed17edde554f2 = "all";
  static SIDE_NAMES = ["top", "right", "bottom", "left"];
  static _rd6eb78cdffc19e =
    this.SIDE_TOP | this.SIDE_RIGHT | this.SIDE_BOTTOM | this.SIDE_LEFT;
  _radius = 0;
  _r753b76832fd3f5 = 0;
  _rc4853b2763de73 = a._r8ed17edde554f2;
  _ra529cd9378c075 = a._rd6eb78cdffc19e;
  get radius() {
    return this._radius;
  }
  set radius(e) {
    let r = a._r664b9c1016eb59(e);
    this._radius !== r && ((this._radius = r), this.invalidate());
  }
  get strokeThickness() {
    return this._r753b76832fd3f5;
  }
  set strokeThickness(e) {
    let r = a._r664b9c1016eb59(e);
    this._r753b76832fd3f5 !== r && ((this._r753b76832fd3f5 = r), this.invalidate());
  }
  get sides() {
    return this._rc4853b2763de73;
  }
  set sides(e) {
    this._r00aac8eb8f0a28(a.sidesFromString(e));
  }
  get _rad360b721a1819() {
    return this._ra529cd9378c075;
  }
  set _rad360b721a1819(e) {
    this._r00aac8eb8f0a28(a._r0ff6f3b1308feb(e));
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((this._radius = 0),
      (this._r753b76832fd3f5 = 0),
      (this._rc4853b2763de73 = a._r8ed17edde554f2),
      (this._ra529cd9378c075 = a._rd6eb78cdffc19e),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  static sidesFromString(e) {
    if (e == null) return this._rd6eb78cdffc19e;
    let r = e.trim().toLowerCase();
    if (r === "" || r === this._r8ed17edde554f2) return this._rd6eb78cdffc19e;
    let t = 0;
    for (let i of r.split(","))
      switch (i.trim()) {
        case this._r8ed17edde554f2:
          return this._rd6eb78cdffc19e;
        case "top":
          t |= this.SIDE_TOP;
          break;
        case "right":
          t |= this.SIDE_RIGHT;
          break;
        case "bottom":
          t |= this.SIDE_BOTTOM;
          break;
        case "left":
          t |= this.SIDE_LEFT;
          break;
      }
    return t === 0 ? this._rd6eb78cdffc19e : t;
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.push(this.createProperty(class_3436.RADIUS, this._radius)),
      e.push(this.createProperty(class_3436.STROKE_THICKNESS, this._r753b76832fd3f5)),
      e.push(this.createProperty(class_3436.SIDES, this._rc4853b2763de73)),
      e
    );
  }
  set properties(e) {
    let r = !1;
    for (let t of e)
      switch (t.key) {
        case class_3436.RADIUS: {
          let i = a._r664b9c1016eb59(Number(t.value));
          this._radius !== i && ((this._radius = i), (r = !0));
          break;
        }
        case class_3436.STROKE_THICKNESS: {
          let i = a._r664b9c1016eb59(Number(t.value));
          this._r753b76832fd3f5 !== i && ((this._r753b76832fd3f5 = i), (r = !0));
          break;
        }
        case class_3436.SIDES:
          this._r889a474d0cfc8b(a.sidesFromString(String(t.value))) && (r = !0);
          break;
      }
    (r && this.invalidate(), (super.properties = e));
  }
  static _r664b9c1016eb59(e) {
    return Number.isNaN(e) ? 0 : Math.max(0, e);
  }
  static _r0ff6f3b1308feb(e) {
    let r = (e >>> 0) & this._rd6eb78cdffc19e;
    return r === 0 ? this._rd6eb78cdffc19e : r;
  }
  static sidesToString(e) {
    if (((e = this._r0ff6f3b1308feb(e)), e === this._rd6eb78cdffc19e)) return this._r8ed17edde554f2;
    let r = [];
    return (
      (e & this.SIDE_TOP) !== 0 && r.push(this.SIDE_NAMES[0]),
      (e & this.SIDE_RIGHT) !== 0 && r.push(this.SIDE_NAMES[1]),
      (e & this.SIDE_BOTTOM) !== 0 && r.push(this.SIDE_NAMES[2]),
      (e & this.SIDE_LEFT) !== 0 && r.push(this.SIDE_NAMES[3]),
      r.join(",")
    );
  }
  _r00aac8eb8f0a28(e) {
    this._r889a474d0cfc8b(e) && this.invalidate();
  }
  _r889a474d0cfc8b(e) {
    e = a._r0ff6f3b1308feb(e);
    let r = a.sidesToString(e);
    return this._ra529cd9378c075 !== e || this._rc4853b2763de73 !== r
      ? ((this._ra529cd9378c075 = e), (this._rc4853b2763de73 = r), !0)
      : !1;
  }
}
