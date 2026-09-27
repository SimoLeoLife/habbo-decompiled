// Extracted from HabboAirLauncher.deobf.js, line 156568.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibe8d19426549bb

class a extends EventDispatcherWrapper {
  constructor(r, t) {
    super();
    this._loader = r;
    this._url = t;
    this.load();
  }
  static {
    n(this, "UnkEventDispatcherWrapperSubclass_be8d19");
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
        this.dispatchEvent(new UnkClass_36dda2(M.ComponentDependency, this._loader, this._url)));
    } catch (r) {
      let t = r instanceof Error ? r.message : String(r);
      this.dispatchEvent(new ErrorEvent_(ErrorEvent_.ERROR, !1, !1, t));
    }
  }
}
