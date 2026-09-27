// Estratto da HabboAirLauncher.deobf.js, riga 29856.

class {
  static {
    n(this, "TickerPlugin");
  }
  static init(e) {
    ((e = Object.assign({ autoStart: !0, sharedTicker: !1 }, e)),
      Object.defineProperty(this, "ticker", {
        configurable: !0,
        set(r) {
          (this._ticker && this._ticker.remove(this.render, this),
            (this._ticker = r),
            r && r.add(this.render, this, wh.LOW));
        },
        get() {
          return this._ticker;
        },
      }),
      (this.stop = () => {
        this._ticker.stop();
      }),
      (this.start = () => {
        this._ticker.start();
      }),
      (this._ticker = null),
      (this.ticker = e.sharedTicker ? vc.shared : new vc()),
      e.autoStart && this.start());
  }
  static destroy() {
    if (this._ticker) {
      let e = this._ticker;
      ((this.ticker = null), e.destroy());
    }
  }
}
