// Extracted from HabboAirLauncher.deobf.js, line 300298.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i10037e19d5896f

class a extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_10037e");
  }
  static _rebcfe8366347fd = 0;
  static _rc3e511a426e6ce = 10;
  _rc848f1e63a1355 = new k();
  constructor() {
    (super(), this._r38d715e97aaf18(h_._r3d27f8c73280f4));
  }
  processUpdateMessage(e) {
    if (e == null) return;
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_123426 ? e : null;
    if (this.object != null && r == null && e.loc != null) {
      let s = this.object.getLocation(),
        o = k.dif(e.loc, s);
      if (o != null && Math.abs(o.x) < 2 && Math.abs(o.y) < 2) {
        let d = s;
        if (((Math.abs(o.x) > 1 || Math.abs(o.y) > 1) && (d = k.sum(s, k.product(o, 0.5))), d != null)) {
          let c = e.dir ?? this.object.getDirection();
          if (c == null) return;
          ((r = new UnkRoomObjectUpdateMessageSubclass_123426(d, e.loc, c)), super.processUpdateMessage(r));
          return;
        }
      }
    }
    if (e.loc != null && r == null) {
      let s = e.dir ?? this.object?.getDirection();
      if (s == null) return;
      ((r = new UnkRoomObjectUpdateMessageSubclass_123426(e.loc, e.loc, s)), super.processUpdateMessage(r));
    }
    let t = r == null || Number.isNaN(r._rff74398609cf6a) ? h_._r3d27f8c73280f4 : r._rff74398609cf6a,
      i = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    if (i != null) {
      (i.state > 0 ? this._r38d715e97aaf18(t / this._ra4279df9192cb9(i.state)) : this._r38d715e97aaf18(1),
        this._r637611401f025e(i));
      return;
    }
    super.processUpdateMessage(e);
  }
  update(e) {
    this.object != null &&
      (this._rc848f1e63a1355.assign(this.object.getLocation()),
      super.update(e),
      (k.dif(this.object.getLocation(), this._rc848f1e63a1355)?.length ?? 0) === 0 &&
        this.object.getState(0) !== a._rebcfe8366347fd &&
        this.object.setState(a._rebcfe8366347fd, 0));
  }
  _ra4279df9192cb9(e) {
    return Math.trunc(e / a._rc3e511a426e6ce);
  }
  _rd3840cd7399a37(e) {
    return e % a._rc3e511a426e6ce;
  }
  _r637611401f025e(e) {
    let r = this._rd3840cd7399a37(e.state);
    if (r !== e.state) {
      let t = new mi();
      (t.setString(String(r)), (e = new UnkRoomObjectUpdateMessageSubclass_39f7ec(r, t, e.extra)));
    }
    super.processUpdateMessage(e);
  }
}
