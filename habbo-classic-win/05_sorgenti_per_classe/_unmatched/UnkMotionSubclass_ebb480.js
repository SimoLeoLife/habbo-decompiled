// Extracted from HabboAirLauncher.deobf.js, line 66525.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iebb480f306747f

class extends Motion {
  static {
    n(this, "UnkMotionSubclass_ebb480");
  }
  _rbf50cdce941841;
  _queue = [];
  constructor(...e) {
    super(e.length > 0 ? (e[0]?.target ?? null) : null);
    for (let r of e) this._queue.push(r);
    ((this._rbf50cdce941841 = e[0] ?? null), (this._complete = this._rbf50cdce941841 == null));
  }
  get running() {
    return this.var_894 && (this._rbf50cdce941841 ? this._rbf50cdce941841.running : !1);
  }
  start() {
    (super.start(), this._rbf50cdce941841?.start());
  }
  update(e) {
    (super.update(e), this._rbf50cdce941841?.running && this._rbf50cdce941841.update(e));
  }
  stop() {
    (super.stop(), this._rbf50cdce941841?.stop());
  }
  tick(e) {
    if (
      (super.tick(e),
      !!this._rbf50cdce941841 && (this._rbf50cdce941841.tick(e), this._rbf50cdce941841.complete))
    ) {
      this._rbf50cdce941841.stop();
      let r = this._queue.indexOf(this._rbf50cdce941841);
      r < this._queue.length - 1
        ? ((this._rbf50cdce941841 = this._queue[r + 1] ?? null),
          (this.var_203 = this._rbf50cdce941841?.target ?? null),
          this._rbf50cdce941841?.start())
        : (this._complete = !0);
    }
  }
}
