// Extracted from HabboAirLauncher.deobf.js, line 346819.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/SectionParam.as
// Obfuscated name: _i87102ffda54365

class a {
  constructor(e = null, r = 0, t = null, i = 0) {
    this._expandMode = e;
    this.var_3824 = r;
    this._headerOptionLeft = t;
    this.var_3610 = i;
  }
  static {
    n(this, "SectionParam");
  }
  static DEFAULT = new a(null, 0);
  static COLLAPSED = new a(null, 1);
  static EXPANDED = new a(null, 2);
  static var_5868 = 0;
  static var_5917 = 1;
  static var_5914 = 2;
  _rddd0158839b3f9 = [];
  get _r1bf56750ab0d62() {
    return this.var_3824;
  }
  get _r6f75bfc8fee8c5() {
    return this._expandMode;
  }
  set _r1bf56750ab0d62(e) {
    this.var_3824 = e;
  }
  set _r6f75bfc8fee8c5(e) {
    this._expandMode = e;
  }
  addHeaderOption(e) {
    this._rddd0158839b3f9.push(e);
  }
  get _r2bc8c0f354a757() {
    return this._rddd0158839b3f9;
  }
  get _r5dcacbb0f4a4c3() {
    return this._headerOptionLeft;
  }
  get _r176ecc19700a82() {
    return this.var_3610;
  }
  set _r5dcacbb0f4a4c3(e) {
    this._headerOptionLeft = e;
  }
  set _r176ecc19700a82(e) {
    this.var_3610 = e;
  }
}
