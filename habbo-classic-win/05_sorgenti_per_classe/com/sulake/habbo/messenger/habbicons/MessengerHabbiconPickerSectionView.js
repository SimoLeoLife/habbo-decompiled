// Extracted from HabboAirLauncher.deobf.js, line 245994.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/habbicons/MessengerHabbiconPickerSectionView.as
// Obfuscated name: _ie4ec59dcabcbda

class a {
  constructor(e, r, t, i, s, o, d, c, f) {
    this._type = r;
    this._key = t;
    ((this._window = e.clone()), (this.sectionTitle.caption = i));
    let l = this.habbiconGrid.getGridItemAt(0);
    this.habbiconGrid.removeGridItems();
    let b = s.length,
      _ = Math.max(1, Math.ceil(b / a.GRID_COLUMNS)),
      h = _ * a.GRID_COLUMNS;
    for (let p = 0; p < h; p++) {
      let m = p < b ? s[p] : null,
        v = new wpe(l, m, o, d, c, f);
      (this.var_1822.push(v), this.habbiconGrid.addGridItem(v.window));
    }
    ((this.habbiconGrid.height = _ * a.SLOT_SIZE + (_ - 1) * a.SLOT_SPACING),
      (this._window.height = 20 + this.habbiconGrid.height + 2),
      l.dispose(),
      (this._window.visible = !0));
  }
  static {
    n(this, "MessengerHabbiconPickerSectionView");
  }
  static GRID_COLUMNS = 5;
  static SLOT_SIZE = 45;
  static SLOT_SPACING = 2;
  _window;
  var_1822 = [];
  _disposed = !1;
  get window() {
    return this._window;
  }
  get type() {
    return this._type;
  }
  get key() {
    return this._key;
  }
  clearUnseenCounterForHabbicon(e) {
    for (let r of this.var_1822) r.clearUnseenCounterForHabbicon(e);
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this.var_1822) e.dispose();
      ((this.var_1822.length = 0),
        this._window != null &&
          (this._window.parent != null &&
            this._window.parent.removeChild(this._window),
          this._window.dispose(),
          (this._window = null)),
        (this.var_1822 = null),
        (this._type = null),
        (this._key = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
  get sectionTitle() {
    return this._window.findChildByName("section_title");
  }
  get habbiconGrid() {
    return this._window.findChildByName("habbicon_grid");
  }
}
