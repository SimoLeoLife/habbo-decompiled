// Extracted from HabboAirLauncher.deobf.js, line 225874.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge/BadgeLayerOptions.as
// Obfuscated name: _i47b3ac57e00bb8

class a {
  static {
    n(this, "BadgeLayerOptions");
  }
  var_2329 = -1;
  var_3856 = -1;
  var_2742 = -1;
  var_1414 = -1;
  var_1664 = -1;
  setGrid(e) {
    ((this.var_1414 = Math.floor(e % 3)), (this.var_1664 = Math.floor(e / 3)));
  }
  clone() {
    let e = new a();
    return (
      (e.var_2329 = this.var_2329),
      (e.var_3856 = this.var_3856),
      (e.var_2742 = this.var_2742),
      (e.var_1414 = this.var_1414),
      (e.var_1664 = this.var_1664),
      e
    );
  }
  _rb1a491334354ac(e) {
    return !(
      e == null ||
      this.var_1414 !== e.gridX ||
      this.var_1664 !== e.gridY ||
      this.var_2742 !== e._rb918ebc3bf3388 ||
      (this.var_2329 === 0 && e.BadgeLayerOptions !== 0) ||
      (this.var_2329 !== 0 && e.BadgeLayerOptions === 0)
    );
  }
  _rd40114ffa78cf1(e) {
    return e.gridX === this.var_1414 && e.gridY === this.var_1664;
  }
  get BadgeLayerOptions() {
    return this.var_2329;
  }
  set BadgeLayerOptions(e) {
    this.var_2329 = e;
  }
  get partIndex() {
    return this.var_3856;
  }
  set partIndex(e) {
    this.var_3856 = e;
  }
  get _rb918ebc3bf3388() {
    return this.var_2742;
  }
  set _rb918ebc3bf3388(e) {
    this.var_2742 = e;
  }
  get gridX() {
    return this.var_1414;
  }
  set gridX(e) {
    this.var_1414 = e;
  }
  get gridY() {
    return this.var_1664;
  }
  set gridY(e) {
    this.var_1664 = e;
  }
  get position() {
    return this.gridY * 3 + this.gridX;
  }
}
