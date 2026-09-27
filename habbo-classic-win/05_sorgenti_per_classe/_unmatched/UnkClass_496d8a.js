// Extracted from HabboAirLauncher.deobf.js, line 299830.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i496d8ac8b187a9

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_496d8a");
  }
  _re2f074a3909a45 = 0;
  _r96bf9197415ed7 = 0;
  _r2206eb6748af70 = 0;
  processUpdateMessage(e) {
    if (e == null) return;
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    if (r != null) {
      this._rcac11c894f1f38(r);
      return;
    }
    super.processUpdateMessage(e);
  }
  update(e) {
    if (this._r2206eb6748af70 > 0 && e >= this._r2206eb6748af70) {
      this._r2206eb6748af70 = 0;
      let r = new mi();
      (r.setString(String(this._re2f074a3909a45)),
        super.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(this._re2f074a3909a45, r, this._r96bf9197415ed7)));
    }
    super.update(e);
  }
  _rcac11c894f1f38(e) {
    let r = Math.floor(e.state / 1e3),
      t = e.state % 1e3;
    if (t === 0) {
      this._r2206eb6748af70 = 0;
      let i = new mi();
      (i.setString(String(r)), super.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(r, i, e.extra)));
      return;
    }
    ((this._re2f074a3909a45 = r),
      (this._r96bf9197415ed7 = e.extra),
      (this._r2206eb6748af70 = this._rd5b25ad4c3f288 + t));
  }
}
