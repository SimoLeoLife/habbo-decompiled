// Extracted from HabboAirLauncher.deobf.js, line 297580.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/logic/ObjectLogicBase.as
// Obfuscated name: _i0d12989151372c

class {
  static {
    n(this, "ObjectLogicBase");
  }
  _events = null;
  var_627 = null;
  get _r11e12b4ff1ca8e() {
    return this._events;
  }
  set _r11e12b4ff1ca8e(e) {
    this._events = e;
  }
  get object() {
    return this.var_627;
  }
  set object(e) {
    this.var_627 !== e &&
      (this.var_627 != null && this.var_627.setEventHandler(null),
      e == null
        ? (this.dispose(), (this.var_627 = null))
        : ((this.var_627 = e), this.var_627.setEventHandler(this)));
  }
  getEventTypes() {
    return [];
  }
  getAllEventTypes(e, r) {
    let t = e.slice();
    for (let i of r) t.includes(i) || t.push(i);
    return t;
  }
  dispose() {
    this.var_627 = null;
  }
  mouseEvent(e, r) {}
  initialize(e) {}
  update(e) {}
  processUpdateMessage(e) {
    e != null &&
      this.var_627 != null &&
      (e.loc != null && this.var_627._rf91a6212aca31a(e.loc),
      e.dir != null && this.var_627.setDirection(e.dir));
  }
  _rce2b5eb85a79e0() {}
  _r04bcf029737be6() {}
  get widget() {
    return null;
  }
  get contextMenu() {
    return null;
  }
}
