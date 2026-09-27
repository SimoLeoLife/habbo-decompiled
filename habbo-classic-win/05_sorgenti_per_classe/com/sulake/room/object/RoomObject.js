// Estratto da HabboAirLauncher.deobf.js, riga 297409.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/RoomObject.as
// Nome offuscato: _i6739f2d927a4f7

class a {
  constructor(e, r, t) {
    this._id = e;
    this._type = t;
    ((this.var_1315 = new Array(r).fill(0)),
      (this.var_38 = new Hwe()),
      (this.var_3974 = a.var_4605++));
  }
  static {
    n(this, "RoomObject");
  }
  static var_4605 = 0;
  var_190 = new k();
  var_911 = new k();
  _r86c9a9c16fe3ff = new k();
  var_3954 = new k();
  var_1315;
  var_38;
  _visualization = null;
  _r29104bcda0b8ef = null;
  _updateID = 0;
  _r088e391e3f3689 = "";
  var_3974;
  _r6a2259e7f1ed23 = !1;
  dispose() {
    ((this._r088e391e3f3689 = ""),
      this.setVisualization(null),
      this.setEventHandler(null),
      this.var_38?.dispose(),
      (this.var_38 = null));
  }
  setInitialized(e) {
    this._r6a2259e7f1ed23 = e;
  }
  isInitialized() {
    return this._r6a2259e7f1ed23;
  }
  getId() {
    return this._id;
  }
  getInstanceId() {
    return this.var_3974;
  }
  getType() {
    return this._type;
  }
  getLocation() {
    return (this._r86c9a9c16fe3ff.assign(this.var_190), this._r86c9a9c16fe3ff);
  }
  getDirection() {
    return (this.var_3954.assign(this.var_911), this.var_3954);
  }
  getStringToStringMap() {
    return this.var_38;
  }
  getModelController() {
    return this.var_38;
  }
  getState(e) {
    return e >= 0 && e < this.var_1315.length ? (this.var_1315[e] ?? -1) : -1;
  }
  getVisualization() {
    return this._visualization;
  }
  _rf91a6212aca31a(e) {
    (this.var_190.x !== e.x || this.var_190.y !== e.y || this.var_190.z !== e.z) &&
      ((this.var_190.x = e.x),
      (this.var_190.y = e.y),
      (this.var_190.z = e.z),
      this._updateID++);
  }
  setDirection(e) {
    (this.var_911.x !== e.x || this.var_911.y !== e.y || this.var_911.z !== e.z) &&
      ((this.var_911.x = ((e.x % 360) + 360) % 360),
      (this.var_911.y = ((e.y % 360) + 360) % 360),
      (this.var_911.z = ((e.z % 360) + 360) % 360),
      this._updateID++);
  }
  setState(e, r) {
    return r < 0 || r >= this.var_1315.length
      ? !1
      : (this.var_1315[r] !== e && ((this.var_1315[r] = e), this._updateID++), !0);
  }
  setVisualization(e) {
    e !== this._visualization &&
      (this._visualization?.dispose(),
      (this._visualization = e),
      this._visualization != null && (this._visualization.object = this));
  }
  setEventHandler(e) {
    if (e === this._r29104bcda0b8ef) return;
    let r = this._r29104bcda0b8ef,
      t = _ib619bfd98fe9f2.as({
        value: e,
        guard: n((i) => i != null && typeof i.transferStateFrom == "function", "guard"),
      });
    (r != null && t != null && t.transferStateFrom(r),
      r != null && ((this._r29104bcda0b8ef = null), (r.object = null)),
      (this._r29104bcda0b8ef = e),
      this._r29104bcda0b8ef != null && (this._r29104bcda0b8ef.object = this));
  }
  _rc3df04144b8b80() {
    return this._r29104bcda0b8ef;
  }
  getUpdateID() {
    return this._updateID;
  }
  _rf289f21439d5ea() {
    return this._rc3df04144b8b80();
  }
  getAvatarLibraryAssetName() {
    return (
      this._r088e391e3f3689.length === 0 && (this._r088e391e3f3689 = `avatar_${this.getId()}`),
      this._r088e391e3f3689
    );
  }
  _r04bcf029737be6() {
    this._r29104bcda0b8ef?._r04bcf029737be6();
  }
}
