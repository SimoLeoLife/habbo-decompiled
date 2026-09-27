// Estratto da HabboAirLauncher.deobf.js, riga 299830.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i496d8ac8b187a9");
  }
  _re2f074a3909a45 = 0;
  _r96bf9197415ed7 = 0;
  _r2206eb6748af70 = 0;
  processUpdateMessage(e) {
    if (e == null) return;
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
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
        super.processUpdateMessage(new _i39f7ecd6ab9902(this._re2f074a3909a45, r, this._r96bf9197415ed7)));
    }
    super.update(e);
  }
  _rcac11c894f1f38(e) {
    let r = Math.floor(e.state / 1e3),
      t = e.state % 1e3;
    if (t === 0) {
      this._r2206eb6748af70 = 0;
      let i = new mi();
      (i.setString(String(r)), super.processUpdateMessage(new _i39f7ecd6ab9902(r, i, e.extra)));
      return;
    }
    ((this._re2f074a3909a45 = r),
      (this._r96bf9197415ed7 = e.extra),
      (this._r2206eb6748af70 = this._rd5b25ad4c3f288 + t));
  }
}
