// Extracted from HabboAirLauncher.deobf.js, line 319302.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/trophy/TrophyView.as
// Obfuscated name: _i416619cc42513a

class {
  constructor(e) {
    this.var_17 = e;
  }
  static {
    n(this, "TrophyView");
  }
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_17 = null));
  }
  showInterface() {
    let e = this.var_17?.assets?.getAssetByName("trophy");
    if (e?.content == null) return !1;
    (this._window == null &&
      (this._window = this.var_17?.windowManager?.buildFromXML(e.content)),
      this._window?.center(),
      this._window?.findChildByName("close")?.addEventListener(u.CLICK, this._r7972d0b08e8494));
    let t = this._window?.findChildByName("title_bg");
    t != null && this.var_17 != null && (t.color = this.var_17._headerColor);
    let i = this._window?.findChildByName("title");
    i != null && this.var_17 != null && (i.text = this.var_17.frameTitle);
    let s = this._window?.findChildByName("greeting");
    s != null &&
      this.var_17 != null &&
      (s.text = this.var_17.message.replace(
        /\\r/g,
        `
`,
      ));
    let o = this._window?.findChildByName("date");
    o != null && this.var_17 != null && (o.text = this.var_17.date);
    let d = this._window?.findChildByName("name");
    d != null && this.var_17 != null && (d.text = this.var_17.name);
    let c = this.var_17?.assets?.getAssetByName(
        tn._reb9cc699a3afdc(this.var_17?._r17fe2fbbdc1d1b ?? tn.GOLD),
      ),
      f = this._window?.findChildByName("trophy_bg");
    if (
      (f != null && this.var_17 != null && (f.color = this.var_17.color),
      c != null && f != null)
    ) {
      let l = c.content;
      l != null && (f.bitmap = l);
    }
    return !0;
  }
  disposeInterface() {
    (this._window?.dispose(), (this._window = null));
  }
  _r7972d0b08e8494 = n((e) => {
    this.disposeInterface();
  }, "_r7972d0b08e8494");
}
