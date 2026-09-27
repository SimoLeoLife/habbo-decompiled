// Extracted from HabboAirLauncher.deobf.js, line 190034.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/PageLocalization.as
// Obfuscated name: _ic2efb71277bc3c

class a {
  constructor(e, r) {
    this._images = e;
    this.var_1490 = r;
  }
  static {
    n(this, "PageLocalization");
  }
  static HEADER_IMAGE = "catalog.header.image";
  static const_351 = "catalog.header.icon";
  static HEADER_TITLE = "catalog.header.title";
  static const_234 = "catalog.header.description";
  static _rc5bda8833c70c9 = [
    a.const_234,
    "ctlg_description",
    "ctlg_special_txt",
    "ctlg_text_1",
    "ctlg_text_2",
  ];
  static _r2e8b68ddcd084d = [
    a.HEADER_IMAGE,
    "ctlg_teaserimg_1",
    "ctlg_special_img",
    "ctlg_teaserimg_2",
    "ctlg_teaserimg_3",
  ];
  static _r0054f60d0fb08c = new Map([["frontpage4", [a.HEADER_IMAGE, "ctlg_teaserimg_1"]]]);
  static _re245d4a33fbb29 = new Map([
    ["camera1", [a.const_234, "ctlg_text_1"]],
    ["presents", [a.const_234, "ctlg_text1"]],
    ["pets", [a.const_234, "ctlg_text_1", "ctlg_text_2", "ctlg_text_3"]],
    ["pets2", [a.const_234, "ctlg_text_1", "ctlg_text_2", "ctlg_text_3"]],
    ["pets3", [a.const_234, "ctlg_text_1", "ctlg_text_2", "ctlg_text_3"]],
    [
      "info_rentables",
      [a.const_234, "ctlg_text_1", "ctlg_text_2", "ctlg_text_3", "ctlg_text_4", "ctlg_text_5"],
    ],
    ["info_duckets", ["ctlg_description"]],
    ["info_loyalty", ["ctlg_description"]],
    ["trophies", ["trophy.description", "trophy.enscription"]],
    ["frontpage4", ["ctlg_txt1", "ctlg_txt2"]],
    ["builders_club_frontpage", ["ctlg_description"]],
    ["builders_club_addons", ["ctlg_description"]],
    ["builders_club_loyalty", ["ctlg_description"]],
  ]);
  static _r6220a1f11ad83f = new Map([
    ["club_buy", ["club_link"]],
    ["mad_money", ["ctlg_madmoney_button"]],
    ["monkey", ["ctlg_teaserimg_1_region", "ctlg_special_img_region"]],
    ["niko", ["ctlg_teaserimg_1_region", "ctlg_special_img_region"]],
    ["pets3", ["ctlg_text_3"]],
  ]);
  get _re0804bffd78c28() {
    return this._images.length;
  }
  get _r8339ed0082fdb8() {
    return this.var_1490.length;
  }
  dispose() {
    ((this._images = []), (this.var_1490 = []));
  }
  _r122eff707ac5c0(e) {
    return a._r6220a1f11ad83f.has(e);
  }
  _re718a5cdc8fc2f(e) {
    return a._r6220a1f11ad83f.get(e) ?? [];
  }
  _r8d4a4221b320de(e, r) {
    let t = a._re245d4a33fbb29.get(r) ?? a._rc5bda8833c70c9;
    return e < t.length ? (t[e] ?? "") : "";
  }
  _r2b5d324386dc88(e, r) {
    let t = a._r0054f60d0fb08c.get(r) ?? a._r2e8b68ddcd084d;
    return e < t.length ? (t[e] ?? "") : "";
  }
  _rff5b31f1444eed(e) {
    return e < this.var_1490.length ? (this.var_1490[e] ?? "") : "";
  }
  _rdf91ea8f2aff55(e) {
    return e < this._images.length ? (this._images[e] ?? "") : "";
  }
  getColorUintFromText(e) {
    return e >= this.var_1490.length
      ? 0
      : Number(String(this.var_1490[e]).replace("#", "0x")) || 0;
  }
}
