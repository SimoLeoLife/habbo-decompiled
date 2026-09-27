// Extracted from HabboAirLauncher.deobf.js, line 348862.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/ExpandedVariablePickerView.as
// Obfuscated name: _ia6882b207ee06a

class {
  constructor(e, r) {
    this._picker = e;
    this._window = r;
    ((this.var_3096 = this.buttonList.removeListItemAt(0)),
      (this._r3aed34b4bb2345 = this.contentBox.removeChild(
        this.contentBox.getChildByName("variable_overview_template"),
      )),
      this.contentBox.removeChild(this.contentBox.getChildByName("node_template")),
      (this.var_692 = new fh(this._picker)),
      (this.var_2124 = []),
      (this.expandedWindow.width = this._picker.window.width));
    let t = (this.expandedWindow.width - 3) / this.var_692.tabButtons.length,
      i = t % this.var_692.tabButtons.length;
    for (let s of this.var_692.tabButtons) {
      let o = 0;
      i > 0 && ((o += 1), (i -= 1));
      let d = new tWe(this, s, t + o);
      (this.var_2124.push(d), this.buttonList.addListItem(d.window));
    }
  }
  static {
    n(this, "ExpandedVariablePickerView");
  }
  var_3096;
  _r3aed34b4bb2345;
  var_2124;
  var_692;
  var_573 = null;
  _rcb8122ec7787b2 = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get _r41f5cc7d3516ce() {
    return this._picker._r41f5cc7d3516ce;
  }
  get _r4bc00060b1deef() {
    return this.var_573;
  }
  get _r942e984982a1e9() {
    return this._rcb8122ec7787b2;
  }
  get _r31348c719f39bd() {
    return this.var_3096;
  }
  get _r2c4ae0a4aa4b2c() {
    return this._r3aed34b4bb2345;
  }
  get window() {
    return this._window;
  }
  _r083999418603c4() {
    this._rcb8122ec7787b2 != null &&
      (this.contentBox.removeChild(this._rcb8122ec7787b2.window),
      this._rcb8122ec7787b2.dispose(),
      (this._rcb8122ec7787b2 = null));
  }
  _r815d8e1a23bbd1() {
    this._r6535b36312914d(this.var_573.tabConfig);
  }
  _r8c2d3170c4e6b4(e) {
    for (let r of this.var_2124) if (r.tabConfig.tabId === e) return r;
    return null;
  }
  selectTab(e, r = !1) {
    if (this.var_573 === e) {
      r && this.var_573 != null && this._r6535b36312914d(this.var_573.tabConfig);
      return;
    }
    (this.var_573 != null && ((this.var_573.active = !1), (this.var_573 = null)),
      e != null &&
        ((this.var_573 = e),
        (this.var_573.active = !0),
        this._r6535b36312914d(this.var_573.tabConfig)),
      this._picker.inputField.focus());
  }
  _r6535b36312914d(e) {
    this._rcb8122ec7787b2 != null &&
      (this.contentBox.removeChild(this._rcb8122ec7787b2.window),
      this._rcb8122ec7787b2.dispose(),
      (this._rcb8122ec7787b2 = null));
    let r = e._re5fad65d75b7cf();
    r.variableNode === 0
      ? ((this.emptyContainer.visible = !0), (this.contentBox.height = this.emptyContainer.height))
      : ((this.emptyContainer.visible = !1),
        (this._rcb8122ec7787b2 = new zX(this._picker, r.children, this.contentBox.width, !0)),
        this.contentBox.addChild(this._rcb8122ec7787b2.window),
        (this.contentBox.height = this._rcb8122ec7787b2.window.height));
  }
  dispose() {
    if (!this._disposed) {
      this.buttonList.removeListItems();
      for (let e of this.var_2124) e.dispose();
      (this._rcb8122ec7787b2 != null && (this._rcb8122ec7787b2.dispose(), (this._rcb8122ec7787b2 = null)),
        (this.var_2124 = null),
        (this._picker = null),
        (this._window = null),
        (this.var_3096 = null),
        (this.var_692 = null),
        (this.var_573 = null),
        (this._disposed = !0));
    }
  }
  get buttonList() {
    return this._window.findChildByName("button_list");
  }
  get expandedWindow() {
    return this._window.findChildByName("expanded_view");
  }
  get contentBox() {
    return this._window.findChildByName("content_box");
  }
  get emptyContainer() {
    return this._window.findChildByName("empty_container");
  }
}
