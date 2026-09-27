// Extracted from HabboAirLauncher.deobf.js, line 377857.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/class_2225.as
// Obfuscated name: _iaac3202013ec7d

class {
  constructor(e) {
    this.var_82 = e;
  }
  static {
    n(this, "class_2225");
  }
  var_415 = new B();
  _rbb6ed82fd04651 = new B();
  _disposed = !1;
  var_4412 = null;
  get disposed() {
    return this._disposed;
  }
  get roomObjectVariableAccurateZ() {
    return this.var_4412;
  }
  set roomObjectVariableAccurateZ(e) {
    this.var_4412 = e;
  }
  dispose() {
    if (!this._disposed) {
      for (let e = 0; e < this._rbb6ed82fd04651.length; e++) this._rbb6ed82fd04651.getWithIndex(e)?.dispose();
      (this._rbb6ed82fd04651.dispose(),
        this.var_415.dispose(),
        (this.var_82 = null),
        (this._disposed = !0));
    }
  }
  reset() {
    this.var_415.reset();
  }
  _r8cec0c80a8d0c0(e) {
    return e != null ? String(e.getInstanceId()) : null;
  }
  _r598c25af9b671f(e) {
    let r = this._r8cec0c80a8d0c0(e);
    r != null && !this.var_415.hasKey(r) && this.var_415.add(r, e);
  }
  _rb99560071708c2(e) {
    let r = this._r8cec0c80a8d0c0(e);
    if (r != null) {
      this.var_415.remove(r);
      for (let t = 0; t < this._rbb6ed82fd04651.length; t++)
        this._rbb6ed82fd04651.getWithIndex(t)?._rc9003fbab6f83f(r);
    }
  }
  _ra1f5cb56d0c2d8(e) {
    return this.var_415.getValue(e) ?? null;
  }
  getRoomObjectWithIndex(e) {
    return this.var_415.getWithIndex(e) ?? null;
  }
  getRoomObjectIdWithIndex(e) {
    return this.var_415.getKey(e) ?? null;
  }
  getRoomObjectCount() {
    return this.var_415.length;
  }
  render() {
    let e = _ia411d8d8194a3a();
    for (let r = this._rbb6ed82fd04651.length - 1; r >= 0; r--)
      this._rbb6ed82fd04651.getWithIndex(r)?.render(e);
  }
  createCanvas(e, r, t, i) {
    let s = String(e),
      o = this._rbb6ed82fd04651.getValue(s) ?? null;
    if (o != null) {
      o.initialize(r, t);
      let c = o.geometry;
      return (c instanceof Rd && (c.scale = i), o);
    }
    let d = this.createCanvasInstance(e, r, t, i);
    return (this._rbb6ed82fd04651.add(s, d), d);
  }
  getCanvas(e) {
    return this._rbb6ed82fd04651.getValue(String(e)) ?? null;
  }
  _r5619b0619b2c16(e) {
    return ((this._rbb6ed82fd04651.remove(String(e)) ?? null)?.dispose(), !1);
  }
  update(e) {
    this.render();
    for (let r = this._rbb6ed82fd04651.length - 1; r >= 0; r--)
      this._rbb6ed82fd04651.getWithIndex(r)?.update();
  }
  createCanvasInstance(e, r, t, i) {
    return new class_2953(this, e, r, t, i);
  }
}
