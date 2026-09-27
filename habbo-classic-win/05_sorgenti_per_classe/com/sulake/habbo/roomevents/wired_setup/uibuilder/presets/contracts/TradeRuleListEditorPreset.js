// Estratto da HabboAirLauncher.deobf.js, riga 350525.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/TradeRuleListEditorPreset.as
// Nome offuscato: _iff502295c1b254

class a extends WiredUIPreset {
  static {
    n(this, "TradeRuleListEditorPreset");
  }
  static MAX_RULES = 3;
  var_122;
  _rbb964496538e73;
  _r386d3115eac8d1;
  _r1de1ae5c2372ab = null;
  _rfe788f434e761d = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._r1de1ae5c2372ab = e),
      (this._rfe788f434e761d = r),
      (this.var_122 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_122.spacing = this.var_40._r249f7dc0054eba),
      (this._r386d3115eac8d1 = this.var_102.createButton(
        "${wiredcontracts.payment_add_more}",
        this._r0c9828e4c8482d,
      )),
      (this._rbb964496538e73 = []),
      this.var_122.addListItem(this._r386d3115eac8d1.window),
      this.refreshAddMoreVisibility());
  }
  set rules(e) {
    this.removeAllRules();
    let r = e;
    r.length === 0 && (r = [new J_([])]);
    let t = 1;
    for (let i of r) {
      let s = this.var_102._r318831a25a6133(
        "-",
        this._r1de1ae5c2372ab,
        this._rfe788f434e761d,
        t === 1 ? null : this.var_2624,
      );
      ((s.rule = i.deepCopy()),
        this._rbb964496538e73.push(s),
        this.var_122.addListItemAt(s.window, this.var_122.numListItems - 1),
        s.resizeToWidth(this.var_122.width),
        (t += 1));
    }
    (this.fixNames(), this.refreshAddMoreVisibility());
  }
  _r14b03f12f49678() {
    let e = [];
    for (let r of this._rbb964496538e73) {
      let t = r._r85539ae3d0f4bc();
      t.nodes.length > 0 && e.push(t);
    }
    return e;
  }
  _r0c9828e4c8482d = n(() => {
    let e = this.var_122.numListItems,
      r = new J_([]),
      t = this.var_102._r318831a25a6133(
        "",
        this._r1de1ae5c2372ab,
        this._rfe788f434e761d,
        e === 1 ? null : this.var_2624,
      );
    ((t.rule = r),
      this._rbb964496538e73.push(t),
      this.var_122.addListItemAt(t.window, e - 1),
      t.resizeToWidth(this.var_122.width),
      this.fixNames(),
      this.refreshAddMoreVisibility());
  }, "_r0c9828e4c8482d");
  refreshAddMoreVisibility() {
    this._r386d3115eac8d1.disabled = this._rbb964496538e73.length >= a.MAX_RULES;
  }
  var_2624 = n((e) => {
    let r = this._rbb964496538e73.indexOf(e);
    r !== -1 &&
      (this.var_122.removeListItemAt(r),
      this._rbb964496538e73.splice(r, 1),
      e.dispose(),
      this.fixNames(),
      this.refreshAddMoreVisibility());
  }, "var_2624");
  removeAllRules() {
    for (; this.var_122.numListItems > 1;) this.var_122.removeListItemAt(0);
    for (let e of this._rbb964496538e73) e.dispose();
    ((this._rbb964496538e73 = []), this.refreshAddMoreVisibility());
  }
  fixNames() {
    let e = 0;
    for (let r of this._rbb964496538e73)
      ((e += 1),
        r._r139633561a2a04(
          this.localizations.getLocalizationWithParams("wiredcontracts.payment_rule", "", "i", String(e)),
        ));
  }
  get window() {
    return this.var_122;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this.var_122.width = e));
    for (let r of this._rbb964496538e73) r.resizeToWidth(e);
    this._r386d3115eac8d1.resizeToWidth(e);
  }
  get childPresets() {
    return [...this._rbb964496538e73, this._r386d3115eac8d1];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this._rbb964496538e73 = null),
      (this._r386d3115eac8d1 = null),
      (this._r1de1ae5c2372ab = null),
      (this._rfe788f434e761d = null),
      this.var_122.dispose(),
      (this.var_122 = null));
  }
}
