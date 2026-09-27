// Extracted from HabboAirLauncher.deobf.js, line 145533.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/AlertDialogWithLink.as
// Obfuscated name: _i82471c54383cae

class extends c0 {
  static {
    n(this, "AlertDialogWithLink");
  }
  _r41cecca578e1c6 = "";
  var_4179 = "";
  constructor(e, r, t, i, s, o, d, c) {
    (super(e, r, t, i, d, c, !1), (this.linkTitle = s), (this.linkUrl = o));
  }
  dialogEventProc(e, r) {
    if (e.type === u.CLICK && r.name === "_alert_button_link") {
      Ae.navigateToURL(this.var_4179, "_empty");
      return;
    }
    super.dialogEventProc(e, r);
  }
  set linkTitle(e) {
    this._r41cecca578e1c6 = e;
    let r = this._window?.findChildByTag("LINK");
    r != null && (r.caption = this._r41cecca578e1c6);
  }
  get linkTitle() {
    return this._r41cecca578e1c6;
  }
  set linkUrl(e) {
    this.var_4179 = e;
  }
  get linkUrl() {
    return this.var_4179;
  }
}
