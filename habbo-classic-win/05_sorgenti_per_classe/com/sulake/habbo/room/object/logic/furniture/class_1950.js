// Extracted from HabboAirLauncher.deobf.js, line 300661.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1950.as
// Obfuscated name: _i2094e5e2955149

class a extends Qr {
  static {
    n(this, "class_1950");
  }
  static UPDATE_INTERVAL = 50;
  static MAX_UPDATE_TIME = 3e3;
  var_971 = 0;
  _lastUpdate = 0;
  _r433cb8869b77b1 = a.UPDATE_INTERVAL;
  processUpdateMessage(e) {
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    if (r != null) {
      this._r3a65fb33b0319a(r.state);
      return;
    }
    super.processUpdateMessage(e);
  }
  update(e) {
    if ((super.update(e), this.object != null)) {
      let r = this.object.getState(0);
      if (r !== this.var_971 && e >= this._lastUpdate + this._r433cb8869b77b1) {
        let t = e - this._lastUpdate,
          i = Math.trunc(t / this._r433cb8869b77b1),
          s = 1;
        (this.var_971 < r && (s = -1),
          i > s * (this.var_971 - r) && (i = s * (this.var_971 - r)),
          this.object.setState(r + s * i, 0),
          (this._lastUpdate = e - (t - i * this._r433cb8869b77b1)));
      }
    }
  }
  _r3a65fb33b0319a(e) {
    this.var_971 = e;
    let r = this.object?.getState(0) ?? 0;
    if (this.var_971 !== r) {
      let t = this.var_971 - r;
      (t < 0 && (t = -t),
        t * a.UPDATE_INTERVAL > a.MAX_UPDATE_TIME
          ? (this._r433cb8869b77b1 = Math.trunc(a.MAX_UPDATE_TIME / t))
          : (this._r433cb8869b77b1 = a.UPDATE_INTERVAL),
        (this._lastUpdate = _ia411d8d8194a3a()));
    }
  }
}
