// Estratto da HabboAirLauncher.deobf.js, riga 249520.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenIssuesView.as
// Nome offuscato: _ifc81d1e19633bb

class {
  constructor(e, r, t) {
    this.var_2305 = e;
    this._window = t;
    this._window.visible = !1;
    let i = this._window.findChildByName("issue_list");
    this._ra172912c2cac09 = new IssueListView(this.var_2305, r.assets, i);
  }
  static {
    n(this, "OpenIssuesView");
  }
  _ra172912c2cac09;
  get view() {
    return this._window;
  }
  set visible(e) {
    this._window.visible = e;
  }
  update() {
    this._ra172912c2cac09.update(this.var_2305._r738c5d7e12548d("issue_bundle_open"));
  }
}
