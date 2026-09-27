// Extracted from HabboAirLauncher.deobf.js, line 289986.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia27cd49e2ca324

class {
  static {
    n(this, "UnkClass_a27cd4");
  }
  _ra7e1f8fbefe886;
  _layers;
  _r4a9084488e8563 = {};
  constructor(e) {
    ((this._layers = e), (this._ra7e1f8fbefe886 = e.numbers));
  }
  _r0859b3ad471b24(e) {
    let r = e & 16777215,
      t = String(r),
      i = this._r4a9084488e8563[t];
    return (i != null || ((i = this._r962a49dd096615(r)), (this._r4a9084488e8563[t] = i)), i);
  }
  dispose() {
    for (let e in this._r4a9084488e8563) this._r4a9084488e8563[e]?.dispose();
    ((this._r4a9084488e8563 = {}), (this._layers = null), (this._ra7e1f8fbefe886 = null));
  }
  _r962a49dd096615(e) {
    let r = this._layers,
      t = r.numbers,
      i = new A(t.width, t.height, !0, 0);
    i.lock();
    try {
      let s = new Tt(i);
      (s.clear(0),
        s._re07cb7ce4d72ad(t, 0, 0, t.width, t.height, 0, 0, ie.NORMAL, 255, null, this._rfbff946e2538e1(e)),
        this._rb3c0e1181742da(s, r._rcffab147cfe597, ie.NORMAL),
        this._rb3c0e1181742da(s, r.darkening, ie.MULTIPLY),
        this._rb3c0e1181742da(s, r.lighting, ie.ADD));
    } finally {
      i.unlock();
    }
    return i;
  }
  _rb3c0e1181742da(e, r, t) {
    r != null && e.drawLayer(r, 0, 0, t, 255);
  }
  _rfbff946e2538e1(e) {
    return new UnkClass_4210dc(((e >>> 16) & 255) / 255, ((e >>> 8) & 255) / 255, (e & 255) / 255, 1);
  }
}
