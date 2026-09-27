// Extracted from HabboAirLauncher.deobf.js, line 273817.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/stacked/class_4243.as
// Obfuscated name: _i4f006e26e6fef4

class {
  static {
    n(this, "class_4243");
  }
  minX = 0;
  minY = 0;
  maxX = 0;
  maxY = 0;
  _initialized = !1;
  get width() {
    return this.maxX - this.minX;
  }
  get height() {
    return this.maxY - this.minY;
  }
  add(e, r, t, i) {
    if (((e |= 0), (r |= 0), (t |= 0), (i |= 0), !this._initialized)) {
      ((this.minX = e), (this.minY = r), (this.maxX = e + t), (this.maxY = r + i), (this._initialized = !0));
      return;
    }
    ((this.minX = Math.min(this.minX, e)),
      (this.minY = Math.min(this.minY, r)),
      (this.maxX = Math.max(this.maxX, e + t)),
      (this.maxY = Math.max(this.maxY, r + i)));
  }
}
