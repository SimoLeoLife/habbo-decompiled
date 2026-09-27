// Estratto da HabboAirLauncher.deobf.js, riga 50635.

class extends EventDispatcherWrapper {
  static {
    n(this, "_ib182ac399b1881");
  }
  data = null;
  _rb1fac8ba8605e0 = _i70a4b4b891980a.TEXT;
  constructor(e) {
    (super(), e && this.load(e));
  }
  async load(e) {
    this.dispatchEvent(new M(M.OPEN));
    try {
      let r = new Headers();
      for (let o of e._r7e4347d57a154d) r.set(o.name, o.value);
      let t = { method: e.method, headers: r, credentials: e._rde0d8d3450f335 ? "include" : "same-origin" };
      e.method !== _i8f47673af295dd.GET &&
        e.data != null &&
        (typeof e.data == "string"
          ? (t.body = e.data)
          : e.data instanceof _i87154f9ac885e8
            ? (t.body = e.data.toString())
            : (t.body = JSON.stringify(e.data)));
      let i = _icf1a3ef18fd9e0(e.url);
      if (e.method === _i8f47673af295dd.GET && e.data != null) {
        let o = e.data instanceof _i87154f9ac885e8 ? e.data.toString() : new URLSearchParams(e.data).toString();
        o.length > 0 && (i += i.includes("?") ? `&${o}` : `?${o}`);
      }
      let s = await fetch(i, t);
      if (
        (this.dispatchEvent(new _i9006bf9233cf9a(_i9006bf9233cf9a._re0bd97c8c9195c, !1, !1, s.status)),
        this.dispatchEvent(new _ie40b9435ae07b7(_ie40b9435ae07b7.PROGRESS, !1, !1, 0, 0)),
        (this.data =
          this._rb1fac8ba8605e0 === "binary"
            ? re._rd6d760d92a9f3f(new Uint8Array(await s.arrayBuffer()))
            : await s.text()),
        !s.ok)
      )
        throw new _i207e0270849f6a(_i207e0270849f6a._rb9739f8a5177c3, !1, !1, `Failed to load ${i}: ${s.status}`);
      (this.dispatchEvent(new _ie40b9435ae07b7(_ie40b9435ae07b7.PROGRESS, !1, !1, 1, 1)),
        this.dispatchEvent(new M(M.ComponentDependency)));
    } catch (r) {
      let t =
        r instanceof _i207e0270849f6a ? r : new _i207e0270849f6a(_i207e0270849f6a._rb9739f8a5177c3, !1, !1, r instanceof Error ? r.message : String(r));
      (this.dispatchEvent(t), this.dispatchEvent(new ErrorEvent_(ErrorEvent_.ERROR, !1, !1, t.text)));
    }
  }
}
