// Estratto da HabboAirLauncher.deobf.js, riga 291225.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_1865.as
// Nome offuscato: _ife6fc3a9b52a5a

class a {
  static {
    n(this, "class_1865");
  }
  static const_684 = "l";
  static DIRECTION_RIGHT = "r";
  var_1271 = !1;
  _scale = 64;
  var_977 = [];
  _width = 0;
  _height = 0;
  _floorHeight = 0;
  get disposed() {
    return this.var_1271;
  }
  get scale() {
    return this._scale;
  }
  set scale(e) {
    this._scale = e;
  }
  dispose() {
    (this.reset(), (this.var_1271 = !0));
  }
  initialize(e, r, t) {
    if (e <= this._width && r <= this._height) {
      ((this._width = e), (this._height = r), (this._floorHeight = t));
      return;
    }
    this.reset();
    for (let i = 0; i < r; i++) {
      let s = [];
      for (let o = 0; o < e; o++) s.push(0);
      this.var_977.push(s);
    }
    ((this._width = e), (this._height = r), (this._floorHeight = t));
  }
  reset() {
    this.var_977 = [];
  }
  setTileHeight(e, r, t) {
    if (e < 0 || e >= this._width || r < 0 || r >= this._height) return !1;
    let i = this.var_977[r];
    return i != null ? ((i[e] = t), !0) : !1;
  }
  getTileHeight(e, r) {
    if (e < 0 || e >= this._width || r < 0 || r >= this._height) return 0;
    let t = this.var_977[r];
    return t != null ? t[e] : 0;
  }
  getLocation(e, r, t, i, s) {
    let o = Number(e),
      d = Number(r),
      c = this.getTileHeight(e, r);
    return (
      s === a.DIRECTION_RIGHT
        ? ((o += t / (this._scale / 2) - 0.5), (d += 0.5), (c -= (i - t / 2) / (this._scale / 2)))
        : ((d += (this._scale / 2 - t) / (this._scale / 2) - 0.5),
          (o += 0.5),
          (c -= (i - (this._scale / 2 - t) / 2) / (this._scale / 2))),
      new k(o, d, c)
    );
  }
  _r14e9296fb1f3d1(e, r, t) {
    let i = 0,
      s = Math.ceil(e),
      o = s - e,
      d = 0,
      c = 0,
      f = 0,
      l = 0,
      b = 0;
    for (i = 0; i < this._width; i++) {
      if (s >= 0 && s < this._height) {
        if (this.getTileHeight(i, s) <= this._floorHeight) {
          ((c = i - 1), (f = s), (d = i), (t = a.const_684));
          break;
        }
        if (this.getTileHeight(i, s + 1) <= this._floorHeight) {
          ((c = i), (f = s), (d = f - e), (t = a.DIRECTION_RIGHT));
          break;
        }
      }
      s++;
    }
    l = (this.scale / 2) * o;
    let _ = (-d * this.scale) / 2;
    return (
      (_ += (((-r * 18) / 32) * this.scale) / 2),
      (b = (this.getTileHeight(c, f) * this.scale) / 2 + _),
      t === a.DIRECTION_RIGHT ? (b += (o * this.scale) / 4) : (b += ((1 - o) * this.scale) / 4),
      this.getLocation(c, f, l, b, t)
    );
  }
  getOldLocation(e, r) {
    if (e == null) return null;
    let t = 0,
      i = 0,
      s = 0,
      o = 0,
      d = "",
      c = 0;
    if (r === 90)
      ((t = Math.floor(e.x - 0.5)),
        (i = Math.floor(e.y + 0.5)),
        (c = this.getTileHeight(t, i)),
        (s = this._scale / 2 - (e.y - i + 0.5) * (this._scale / 2)),
        (o = (c - e.z) * (this._scale / 2) + (this._scale / 2 - s) / 2),
        (d = a.const_684));
    else if (r === 180)
      ((t = Math.floor(e.x + 0.5)),
        (i = Math.floor(e.y - 0.5)),
        (c = this.getTileHeight(t, i)),
        (s = (e.x + 0.5 - t) * (this._scale / 2)),
        (o = (c - e.z) * (this._scale / 2) + s / 2),
        (d = a.DIRECTION_RIGHT));
    else return null;
    return [t, i, s, o, d];
  }
  getOldLocationString(e, r) {
    let t = this.getOldLocation(e, r);
    if (t == null) return null;
    let [i, s, o, d, c] = t;
    return `:w=${Math.trunc(i)},${Math.trunc(s)} l=${Math.trunc(o)},${Math.trunc(d)} ${c}`;
  }
  getDirection(e) {
    return e === a.DIRECTION_RIGHT ? 180 : 90;
  }
  _r455bf5cf7b4828(e, r) {
    let t = Math.trunc(this.getTileHeight(e, r)),
      i = t + 1;
    return (
      t +
      (Math.trunc(this.getTileHeight(e - 1, r - 1)) === i ||
      Math.trunc(this.getTileHeight(e, r - 1)) === i ||
      Math.trunc(this.getTileHeight(e + 1, r - 1)) === i ||
      Math.trunc(this.getTileHeight(e - 1, r)) === i ||
      Math.trunc(this.getTileHeight(e + 1, r)) === i ||
      Math.trunc(this.getTileHeight(e - 1, r + 1)) === i ||
      Math.trunc(this.getTileHeight(e, r + 1)) === i ||
      Math.trunc(this.getTileHeight(e + 1, r + 1)) === i
        ? 0.5
        : 0)
    );
  }
  _r3085c853f55b25(e, r) {
    return (
      e >= 0 && e < this._width && r >= 0 && r < this._height && (this.var_977[r]?.[e] ?? -1) >= 0
    );
  }
}
