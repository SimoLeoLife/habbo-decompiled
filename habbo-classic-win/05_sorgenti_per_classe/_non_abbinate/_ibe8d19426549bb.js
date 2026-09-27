// Estratto da HabboAirLauncher.deobf.js, riga 156568.

class a extends EventDispatcherWrapper {
  constructor(r, t) {
    super();
    this._loader = r;
    this._url = t;
    this.load();
  }
  static {
    n(this, "_ibe8d19426549bb");
  }
  static _rf649f9e8fd93ab(r, t, i) {
    let s = new a(r, t);
    return (s.addEventListener(M.ComponentDependency, i), s);
  }
  static async _r6dc693b333c923(r) {
    return _idc5dea63909f80_(r);
  }
  async load() {
    try {
      let r = await _idc5dea63909f80_(this._url);
      if (r == null) throw new Error("IOError: Missing runtime image loader");
      ((this._loader.bitmapData = r),
        this.dispatchEvent(new _i36dda2ad7d38bd(M.ComponentDependency, this._loader, this._url)));
    } catch (r) {
      let t = r instanceof Error ? r.message : String(r);
      this.dispatchEvent(new ErrorEvent_(ErrorEvent_.ERROR, !1, !1, t));
    }
  }
}
