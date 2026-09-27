// Estratto da HabboAirLauncher.deobf.js, riga 168949.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/class_3391.as
// Nome offuscato: _iba0fdd1889b1d7

class a {
  static {
    n(this, "class_3391");
  }
  _id = "";
  _state = "";
  _r60153f827e2bbf = 0;
  _r5a8c0b1ebee932 = "";
  _assetPartDefinition = "";
  _rf3a164abbf7469 = "";
  _rc604edc1dba7c1 = "";
  _r3080fd9d7d20dd = !1;
  _rcafe30c1553bd4 = !1;
  _rc7b5114651ae1a = !1;
  _r1f0d3ac439b7a6 = !1;
  _r4b7715b0a7ef61 = [];
  _r87a883e45ff1d7 = !1;
  _r8dad22ea491ca7 = null;
  _types = new Map();
  _r3253e8dad24e91 = new Map();
  _rbae4f268185863 = "";
  constructor(e = null) {
    e != null && this._r63de467df5b2e9(e);
  }
  _r63de467df5b2e9(e) {
    ((this._id = _ifdbe20062cc5b0(e, "id")),
      (this._state = _ifdbe20062cc5b0(e, "state")),
      (this._r60153f827e2bbf = _i897b98cdeac318(e, "precedence")),
      (this._r5a8c0b1ebee932 = _ifdbe20062cc5b0(e, "activepartset")),
      (this._assetPartDefinition = _ifdbe20062cc5b0(e, "assetpartdefinition")),
      (this._rf3a164abbf7469 = _ifdbe20062cc5b0(e, "lay")),
      (this._rc604edc1dba7c1 = _ifdbe20062cc5b0(e, "geometrytype")),
      (this._r3080fd9d7d20dd = _i68c84906b18730(e, "main")),
      (this._rcafe30c1553bd4 = _i68c84906b18730(e, "isdefault")),
      (this._rc7b5114651ae1a = _i68c84906b18730(e, "animation")),
      (this._r1f0d3ac439b7a6 = _ifdbe20062cc5b0(e, "startfromframezero") === "true"),
      (this._r87a883e45ff1d7 = _ifdbe20062cc5b0(e, "preventheadturn") === "true"));
    let r = _ifdbe20062cc5b0(e, "prevents");
    r !== "" && (this._r4b7715b0a7ef61 = r.split(","));
    for (let t of _ib5ee1bd09422e6(e, "param")) {
      let i = _ifdbe20062cc5b0(t, "id"),
        s = _ifdbe20062cc5b0(t, "value");
      i === "default" ? (this._rbae4f268185863 = s) : this._r3253e8dad24e91.set(i, s);
    }
    for (let t of _ib5ee1bd09422e6(e, "type")) {
      let i = _ifdbe20062cc5b0(t, "id");
      this._types.set(i, new _i7d43921526789a(t));
    }
  }
  setOffsets(e, r, t) {
    this._r8dad22ea491ca7 == null && (this._r8dad22ea491ca7 = new B());
    let i = this._r8dad22ea491ca7.getValue(e);
    (i == null && ((i = new B()), this._r8dad22ea491ca7.add(e, i)), i.remove(r), i.add(r, t));
  }
  getOffsets(e, r) {
    return this._r8dad22ea491ca7?.getValue(e)?.getValue(r) ?? null;
  }
  _r9e092fb3de98bc(e) {
    return e === "" ? "" : (this._r3253e8dad24e91.get(e) ?? this._rbae4f268185863);
  }
  _rc310f198500e68(e) {
    return e === "" ? [] : (this._types.get(e)?.prevents ?? []);
  }
  get id() {
    return this._id;
  }
  get state() {
    return this._state;
  }
  get precedence() {
    return this._r60153f827e2bbf;
  }
  get activePartSet() {
    return this._r5a8c0b1ebee932;
  }
  get isMain() {
    return this._r3080fd9d7d20dd;
  }
  get isDefault() {
    return this._rcafe30c1553bd4;
  }
  get assetPartDefinition() {
    return this._assetPartDefinition;
  }
  get lay() {
    return this._rf3a164abbf7469;
  }
  get geometryType() {
    return this._rc604edc1dba7c1;
  }
  get isAnimation() {
    return this._rc7b5114651ae1a;
  }
  getPrevents(e = "") {
    return this._r4b7715b0a7ef61.concat(this._rc310f198500e68(e));
  }
  getPreventHeadTurn(e = "") {
    return e === ""
      ? this._r87a883e45ff1d7
      : (this._types.get(e)?._rb9e1e5245977a3 ?? this._r87a883e45ff1d7);
  }
  isAnimated(e) {
    return e === "" ? !0 : (this._types.get(e)?.isAnimated ?? !0);
  }
  get startFromFrameZero() {
    return this._r1f0d3ac439b7a6;
  }
  get params() {
    return this._r3253e8dad24e91;
  }
  _r3ad7c069fb8e13(e) {
    this._rc604edc1dba7c1 = e;
  }
  setState(e) {
    this._state = e;
  }
  _r206a2a3042835d(e) {
    this._assetPartDefinition = e;
  }
  copy() {
    let e = new a();
    return (
      (e._id = this._id),
      (e._state = this._state),
      (e._r60153f827e2bbf = this._r60153f827e2bbf),
      (e._r5a8c0b1ebee932 = this._r5a8c0b1ebee932),
      (e._assetPartDefinition = this._assetPartDefinition),
      (e._rf3a164abbf7469 = this._rf3a164abbf7469),
      (e._rc604edc1dba7c1 = this._rc604edc1dba7c1),
      (e._r3080fd9d7d20dd = this._r3080fd9d7d20dd),
      (e._rcafe30c1553bd4 = this._rcafe30c1553bd4),
      (e._rc7b5114651ae1a = this._rc7b5114651ae1a),
      (e._r1f0d3ac439b7a6 = this._r1f0d3ac439b7a6),
      (e._r4b7715b0a7ef61 = this._r4b7715b0a7ef61.slice()),
      (e._r87a883e45ff1d7 = this._r87a883e45ff1d7),
      (e._r8dad22ea491ca7 = this._r8dad22ea491ca7),
      (e._types = this._types),
      (e._r3253e8dad24e91 = this._r3253e8dad24e91),
      (e._rbae4f268185863 = this._rbae4f268185863),
      e
    );
  }
}
