// Extracted from HabboAirLauncher.deobf.js, line 201666.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/simulation/ChatBubbleSimulationEntity.as
// Obfuscated name: _iafcc3dc1f16fab

class a {
  static {
    n(this, "ChatBubbleSimulationEntity");
  }
  static VISUALIZATION_OVERLAP_VERTICAL = 10;
  static MOVE_NEGATIVE_FEEDBACK = 0.1;
  static const_540 = 2500;
  _visualization;
  _x;
  _y;
  _ref0c9b7f1a2866 = new D();
  var_58 = null;
  _r36a9e210b27d09 = 0;
  _ra260df523ecbd7 = 0;
  _rc482d3dcfb189b = 0;
  _rb9ee9ce1831a4a = !1;
  _rf7e5b6880bfb73 = [];
  _ra2abdc5b8e25ba = !1;
  constructor(e, r = !1) {
    this._visualization = e;
    let t = e.overlap;
    ((this._x = e.x + (t?.x ?? 0)),
      (this._y = e.y + (t?.y ?? 0)),
      (this._ref0c9b7f1a2866.x = this._x),
      (this._ref0c9b7f1a2866.y = this._y),
      (this._ref0c9b7f1a2866.width = e.width - (t != null ? t.x + t.width : 0)),
      (this._ref0c9b7f1a2866.height =
        e._re57a77ac735086 - a.VISUALIZATION_OVERLAP_VERTICAL - (t != null ? t.y + t.height : 0)),
      e.minHeight !== -1 && (this._ref0c9b7f1a2866.height = e.minHeight),
      r &&
        ((this.var_58 = new D()),
        (this.var_58.width = this._ref0c9b7f1a2866.width + 2 * a.const_540),
        (this.var_58.height = e.minHeight !== -1 ? e.minHeight : this._ref0c9b7f1a2866.height / 2),
        (this.var_58.x = this._ref0c9b7f1a2866.x - a.const_540),
        (this.var_58.y = this._ref0c9b7f1a2866.y)),
      (this._rc482d3dcfb189b = e.scrolledUserPositionX));
  }
  dispose() {
    (this._visualization != null && (this._visualization.readyToRecycle = !0),
      (this._visualization = null),
      (this.var_58 = null),
      (this._rf7e5b6880bfb73 = []));
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e),
      (this._ref0c9b7f1a2866.y = this._y),
      this.var_58 != null && (this.var_58.y = this._ref0c9b7f1a2866.y));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = this._x + (e - this._x) * (1 - a.MOVE_NEGATIVE_FEEDBACK)),
      (this._ref0c9b7f1a2866.x = this._x),
      this.var_58 != null &&
        (this.var_58.x = this._ref0c9b7f1a2866.x - a.const_540));
  }
  get _r6fab2a1c919ac9() {
    return this._ref0c9b7f1a2866;
  }
  get _r711128012627df() {
    return this.var_58 ?? this._ref0c9b7f1a2866;
  }
  get _rae7815e97af563() {
    return this.var_58 != null;
  }
  get centerX() {
    return this._x + this._ref0c9b7f1a2866.width / 2;
  }
  initializePosition(e, r) {
    let t = this._visualization?.overlap;
    ((this._x = e + (t?.x ?? 0)),
      (this._y = r + (t?.y ?? 0)),
      (this._ref0c9b7f1a2866.x = this._x),
      (this._ref0c9b7f1a2866.y = this._y),
      this.var_58 != null &&
        ((this.var_58.x = this._ref0c9b7f1a2866.x - a.const_540),
        (this.var_58.y = this._ref0c9b7f1a2866.y)));
  }
  _re2bfb5ef53d0a9(e) {
    this._r36a9e210b27d09 += e;
  }
  _r19a020ecf008cb(e) {
    this._rf7e5b6880bfb73.push(e);
  }
  _rffb3224cef3873(e) {
    return this._rf7e5b6880bfb73.includes(e);
  }
  areSameY(e) {
    this._ra260df523ecbd7 += e;
  }
  _r752738cd8e2097(e) {
    ((this.x += this._r36a9e210b27d09), (this.y += Math.max(this._ra260df523ecbd7, -e)));
  }
  resetSimulationStep() {
    ((this._r36a9e210b27d09 = 0), (this._ra260df523ecbd7 = 0), (this._rf7e5b6880bfb73 = []));
  }
  syncToVisualization(e = !1) {
    if (this._visualization == null) return;
    let r = this._visualization.overlap;
    ((e = e || this._rb9ee9ce1831a4a), (this._rb9ee9ce1831a4a = !1));
    let t = Math.trunc(this._x - (r?.x ?? 0)),
      i = Math.trunc(this._y - (r?.y ?? 0));
    e ? this._visualization._rb8123e5e5241b9(t, i) : this._visualization.moveTo(t, i);
  }
  syncToUserScreenPosition() {
    if (this._visualization == null) return;
    let e = this._visualization.scrolledUserPositionX,
      r = e - this._rc482d3dcfb189b;
    r !== 0 &&
      ((this._x += r),
      (this._ref0c9b7f1a2866.x += r),
      this.var_58 != null && (this.var_58.x += r),
      (this._rc482d3dcfb189b = e),
      (this._rb9ee9ce1831a4a = !0));
  }
  set _r858d41d4d634c3(e) {
    this.var_58 != null &&
      (this.var_58.height = e ? this._ref0c9b7f1a2866.height : this._ref0c9b7f1a2866.height / 2);
  }
  get _r0a8498eb983f1d() {
    return this._visualization?._rcd017dc41de16b ?? !1;
  }
  set readyToRecycle(e) {
    this._visualization != null && (this._visualization.readyToRecycle = e);
  }
  get readyToRecycle() {
    return this._visualization?.readyToRecycle ?? !0;
  }
  get timeStamp() {
    return this._visualization?.timeStamp ?? 0;
  }
  get isSpacer() {
    return this._ra2abdc5b8e25ba;
  }
  set isSpacer(e) {
    this._ra2abdc5b8e25ba = e;
  }
  intersectsWith(e) {
    return this.var_58 != null
      ? this._ref0c9b7f1a2866.intersects(e._ref0c9b7f1a2866) ||
          this.var_58.intersects(e._r711128012627df)
      : e.var_58 != null
        ? this._ref0c9b7f1a2866.intersects(e._ref0c9b7f1a2866) ||
          this._ref0c9b7f1a2866.intersects(e.var_58)
        : this._ref0c9b7f1a2866.intersects(e._ref0c9b7f1a2866);
  }
  _r12667c9395dd4c(e) {
    return this._ref0c9b7f1a2866.intersects(e._ref0c9b7f1a2866);
  }
}
