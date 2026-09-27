// Extracted from HabboAirLauncher.deobf.js, line 377765.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/class_2953.as
// Obfuscated name: _iec03e05c9f1e6f

class extends yRe {
  static {
    n(this, "class_2953");
  }
  _rfd8045b9ec45e4 = !1;
  _rotation = 0;
  _r37e81721eb275e = null;
  _rfc3db615952fcd = 0;
  _r70d14860bc2b6b = null;
  _r691ef3a1d1559e = null;
  _counter = 0;
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s);
  }
  render(e, r = !1) {
    (this.doMagic(), super.render(e, r));
  }
  _rfcef1d52bd8cc0() {
    return this.geometry;
  }
  doMagic() {
    let e = this._rfcef1d52bd8cc0();
    if (this._rotation !== 0) {
      let r = this._r70d14860bc2b6b;
      if (r == null) return;
      e.direction = new k(r.x + this._rotation, r.y, r.z);
      let t = e.direction;
      if ((e._r3f19880d400508(new k(t.x, t.y, 5)), this._r37e81721eb275e != null)) {
        let i = new k();
        (i.assign(this._r37e81721eb275e),
          (i.x +=
            this._rfc3db615952fcd *
            Math.cos(((t.x + 180) / 180) * Math.PI) *
            Math.cos((t.y / 180) * Math.PI)),
          (i.y +=
            this._rfc3db615952fcd *
            Math.sin(((t.x + 180) / 180) * Math.PI) *
            Math.cos((t.y / 180) * Math.PI)),
          (i.z += this._rfc3db615952fcd * Math.sin((t.y / 180) * Math.PI)),
          (e.location = i),
          (this._r691ef3a1d1559e = new k()),
          this._r691ef3a1d1559e.assign(i),
          (this._r70d14860bc2b6b = new k()),
          this._r70d14860bc2b6b.assign(e.direction));
      }
    }
    if (
      (Nb._r246bace9601ea9() !== this._rfd8045b9ec45e4 && this._r820d5910abf9a5(),
      ow._r246bace9601ea9() && this._re91b741d41401f(),
      this._rfd8045b9ec45e4)
    ) {
      this._counter++;
      let r = this._r70d14860bc2b6b,
        t = k.sum(
          r,
          new k(
            Math.sin(((this._counter * 5) / 180) * Math.PI) * 2,
            Math.sin((this._counter / 180) * Math.PI) * 5,
            Math.sin(((this._counter * 10) / 180) * Math.PI) * 2,
          ),
        );
      e.direction = t;
    } else ((this._counter = 0), (e.direction = this._r70d14860bc2b6b));
  }
  _r820d5910abf9a5() {
    if (((this._rfd8045b9ec45e4 = !this._rfd8045b9ec45e4), this._rfd8045b9ec45e4)) {
      let e = this._rfcef1d52bd8cc0().direction;
      this._r70d14860bc2b6b = new k(e.x, e.y, e.z);
    }
  }
  _re91b741d41401f() {
    if (this._rfd8045b9ec45e4) return;
    let e = this._rfcef1d52bd8cc0();
    if (this._rotation === 0) {
      ((this._r691ef3a1d1559e = new k()),
        this._r691ef3a1d1559e.assign(e.location),
        (this._r70d14860bc2b6b = new k()),
        this._r70d14860bc2b6b.assign(e.direction));
      let r = Rd.getIntersectionVector(e.location, e.directionAxis, new k(0, 0, 0), new k(0, 0, 1));
      r != null &&
        ((this._r37e81721eb275e = new k(r.x, r.y, r.z)),
        (this._rfc3db615952fcd = k.dif(r, e.location).length),
        (this._rotation = 1));
      return;
    }
    ((this._rotation = 0),
      (e.location = this._r691ef3a1d1559e),
      (e.direction = this._r70d14860bc2b6b),
      this._r70d14860bc2b6b != null &&
        e._r3f19880d400508(new k(this._r70d14860bc2b6b.x, this._r70d14860bc2b6b.y, 5)));
  }
}
