// Estratto da HabboAirLauncher.deobf.js, riga 152761.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/CellTemplate.as
// Nome offuscato: _i7cf244ea644be1

class {
  static {
    n(this, "CellTemplate");
  }
  var_1643;
  _highlightBorderTemplate;
  var_4103;
  var_4195;
  var_4168;
  var_4254;
  constructor(e) {
    ((this.var_1643 = e),
      (this._highlightBorderTemplate = e.findChildByName("highlight_border")),
      (this.var_4103 = e.findChildByName("element_text")),
      (this.var_4195 = e.findChildByName("element_input")),
      (this.var_4168 = e.findChildByName("link_container")),
      (this.var_4254 = e.findChildByName("extra_button")),
      this.var_1643.removeChild(this.var_4254),
      this.var_1643.removeChild(this.var_4168),
      this.var_1643.removeChild(this.var_4195),
      this.var_1643.removeChild(this.var_4103),
      this.var_1643.removeChild(this._highlightBorderTemplate));
  }
  clone() {
    return this.var_1643.clone();
  }
  _rf23b5755b945d7(e) {
    return this.fixAlignmentsAndAdd(this._highlightBorderTemplate, e);
  }
  _r891eba13a2be49(e) {
    return this.fixAlignmentsAndAdd(this.var_4103, e);
  }
  _rbbcfb6d6d63d27(e) {
    return this.fixAlignmentsAndAdd(this.var_4195, e);
  }
  _r6d1c8f4e846fd1(e) {
    return this.fixAlignmentsAndAdd(this.var_4168, e);
  }
  _rfc3af5332c9ddf(e) {
    return this.fixAlignmentsAndAdd(this.var_4254, e);
  }
  fixAlignmentsAndAdd(e, r) {
    let t = r.width - this.var_1643.width,
      i = e.clone(),
      s = e.param,
      o = e.x,
      d = e.width,
      c = s & N._rcf781b4b002bb2;
    return (
      c === N._rf567d650b39a78
        ? (d += t)
        : c === N._r251b340ca94bef
          ? (o += t)
          : c === N._ra20cc779361d59 &&
            (r.width < e.width && e.getParamFlag(N.const_421)
              ? (o = 0)
              : (o = Math.floor(r.width / 2) - Math.floor(d / 2))),
      (i.x = o),
      (i.width = d),
      r.addChild(i),
      i
    );
  }
}
