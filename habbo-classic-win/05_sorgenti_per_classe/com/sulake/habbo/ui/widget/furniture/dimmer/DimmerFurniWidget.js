// Extracted from HabboAirLauncher.deobf.js, line 316716.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/dimmer/DimmerFurniWidget.as
// Obfuscated name: _i4c04346bce7a60

class a extends RoomWidgetBase {
  static {
    n(this, "DimmerFurniWidget");
  }
  static AVAILABLE_COLORS = [7665141, 21495, 15161822, 15353138, 15923281, 8581961, 0];
  static _r559a3f230774a7 = [Math.trunc(0.3 * 255), Math.trunc(0.3 * 255)];
  _view = null;
  var_1479 = null;
  var_2043 = 0;
  _rb78a3386b13aa6 = 0;
  var_2503 = 0;
  _color = 16777215;
  var_3057 = 255;
  var_2735 = 0;
  var_1427 = !1;
  get isOn() {
    return this.var_1427;
  }
  get presets() {
    return this.var_1479;
  }
  get colors() {
    return a.AVAILABLE_COLORS;
  }
  get _r93c217d7b6ad70() {
    return a._r559a3f230774a7;
  }
  get selectedPresetIndex() {
    return this.var_2043;
  }
  set selectedPresetIndex(e) {
    this.var_2043 = e;
  }
  constructor(e, r, t = null, i = null) {
    super(e, r, t, i);
  }
  dispose() {
    (this.disposeInterface(), (this.var_1479 = null), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetDimmerUpdateEvent.const_825, this._ra8c2e6253d1659),
      e.addEventListener?.(RoomWidgetDimmerUpdateEvent.DIMMER_HIDE, this._r083999418603c4),
      e.addEventListener?.(dI.const_67, this._r94989dee55898e),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetDimmerUpdateEvent.const_825, this._ra8c2e6253d1659),
      e.removeEventListener?.(RoomWidgetDimmerUpdateEvent.DIMMER_HIDE, this._r083999418603c4),
      e.removeEventListener?.(dI.const_67, this._r94989dee55898e));
  }
  _ra8c2e6253d1659 = n((e) => {
    ((this.var_2735 = e.itemId),
      (this.var_1427 = e.isOn),
      (this.var_2043 = e._ree0dc0daf170e4 - 1),
      (this.var_1479 = []));
    for (let r of e.presets) r != null && this.var_1479.push(new UnkClass_0973b3(r.id, r.type, r.color, r.light));
    this.showInterface();
  }, "_ra8c2e6253d1659");
  _r083999418603c4 = n((e) => {
    this.var_2735 === e.itemId && this.disposeInterface();
  }, "_r083999418603c4");
  disposeInterface() {
    (this._view?.dispose(), (this._view = null));
  }
  _r94989dee55898e = n((e) => {
    (e.state > 0 && (this._rb78a3386b13aa6 = e.objectId),
      this._rb78a3386b13aa6 === e.objectId &&
        ((this.var_2503 = e.effectId),
        (this._color = e.color),
        (this.var_3057 = e.brightness)),
      this.var_2735 === e.objectId && (this.var_1427 = e.state > 0),
      this._view?.update(),
      this.validateBrightness(this.var_3057, this.var_2503) &&
        this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
          new m1(this._color, this.var_3057, this.var_2503 === 2),
        ));
  }, "_r94989dee55898e");
  showInterface() {
    (this._view == null && (this._view = new pxe(this)), this._view.showInterface());
  }
  _r84afbee0676c32(e) {
    if (!this.var_1427 || this._r1515e6bde00451 == null) return;
    let r = this.var_2043 + 1;
    if (this.var_1479 == null || r < 0 || r > this.var_1479.length) return;
    let t = this._view?.selectedType ?? 0,
      i = this.colors[this._view?._r4c047a67fec73a ?? 0] ?? 0,
      s = this._view?._r926e05e4eb57e6 ?? 0,
      o = this.var_1479[this.var_2043] ?? null;
    (o != null && o.type === t && o.color === i && o.light === s && !e) ||
      (o != null && ((o.type = t), (o.color = i), (o.light = s)),
      this.validateBrightness(s, t) &&
        this._r1515e6bde00451.RoomWidgetLetUserInMessage(new lm(r, t, i, s, e, this.var_2735)));
  }
  _r629371c546d78c() {
    !this.var_1427 ||
      this._r1515e6bde00451 == null ||
      this._view == null ||
      (this.validateBrightness(this._view._r926e05e4eb57e6, this._view.selectedType) &&
        this._r1515e6bde00451.RoomWidgetLetUserInMessage(
          new m1(
            this.colors[this._view._r4c047a67fec73a] ?? 0,
            this._view._r926e05e4eb57e6,
            this._view.selectedType === 2,
          ),
        ));
  }
  _rac820bfc004f79() {
    this._r1515e6bde00451 != null && this._r1515e6bde00451.RoomWidgetLetUserInMessage(new fm(this.var_2735));
  }
  _re37fd0d61b9b10() {
    this._r1515e6bde00451 != null &&
      this.validateBrightness(this.var_3057, this.var_2503) &&
      this._r1515e6bde00451.RoomWidgetLetUserInMessage(
        new m1(this._color, this.var_3057, this.var_2503 === 2),
      );
  }
  validateBrightness(e, r) {
    return !0;
  }
}
