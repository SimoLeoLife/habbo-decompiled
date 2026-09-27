// Extracted from HabboAirLauncher.deobf.js, line 249494.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/MyIssuesView.as
// Obfuscated name: _i872f63f6cf1dd3

class {
  constructor(e, r, t) {
    this.var_2305 = e;
    this._window = t;
    this._window.visible = !1;
    let i = this._window.findChildByName("issue_list");
    ((this._ra172912c2cac09 = new IssueListView(this.var_2305, r.assets, i)),
      this._window.findChildByName("release_all")?.addEventListener(u.CLICK, this._r5731b1bb09a8f5));
  }
  static {
    n(this, "MyIssuesView");
  }
  _ra172912c2cac09;
  get view() {
    return this._window;
  }
  set visible(e) {
    this._window.visible = e;
  }
  update() {
    this._ra172912c2cac09.update(this.var_2305._r738c5d7e12548d("issue_bundle_my"));
  }
  _r5731b1bb09a8f5 = n(() => {
    this.var_2305._r15bac7445b87a3();
  }, "_r5731b1bb09a8f5");
}
