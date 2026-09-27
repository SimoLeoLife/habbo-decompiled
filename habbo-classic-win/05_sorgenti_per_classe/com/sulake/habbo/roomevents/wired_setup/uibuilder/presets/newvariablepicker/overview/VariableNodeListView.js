// Estratto da HabboAirLauncher.deobf.js, riga 348552.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/overview/VariableNodeListView.as
// Nome offuscato: _i80c76766307628

class a {
  constructor(e, r, t, i = !1) {
    this._picker = e;
    if (
      ((this._window = this._picker._r4c9b549e0dbdb0._r2c4ae0a4aa4b2c.clone()),
      i || (this._window.style = 12),
      (this._window.width = t),
      r != null && r.length > 0)
    ) {
      for (let d = 0; d < r.length; d += 1) {
        let c = r[d],
          f = new rWe(c, this._picker, this, d);
        (this.nodesList.addListItem(f.window), this._childNodes.push(f));
      }
      let s = this._childNodes[0].window.height * r.length;
      this.nodesList.height = Math.min(s, a.MAX_HEIGHT);
      let o = t - this.scrollbarWidth;
      i || (o -= 3);
      for (let d of this._childNodes) ((d.window.width = o), i || (d.window.x = 1));
    } else this.nodesList.height = 10;
  }
  static {
    n(this, "VariableNodeListView");
  }
  static MAX_HEIGHT = 300;
  static SCROLLBAR_WIDTH = 9;
  _window;
  _childNodes = [];
  _r2299247f03d6dc = null;
  _disposed = !1;
  get scrollbarWidth() {
    return this.nodesList._rb4a5f64054fcb5 ? a.SCROLLBAR_WIDTH : 0;
  }
  get childNodes() {
    return this._childNodes;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  setHover(e) {
    e !== this._r2299247f03d6dc &&
      (this._r2299247f03d6dc != null && ((this._r2299247f03d6dc.hover = !1), (this._r2299247f03d6dc = null)),
      e != null && ((this._r2299247f03d6dc = e), (e.hover = !0)));
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this._childNodes) e.dispose();
      (this.nodesList.removeListItems(),
        (this._childNodes = null),
        (this._picker = null),
        this._window.dispose(),
        (this._window = null),
        (this._r2299247f03d6dc = null),
        (this._disposed = !0));
    }
  }
  get nodesList() {
    return this._window.findChildByName("nodes_list");
  }
}
