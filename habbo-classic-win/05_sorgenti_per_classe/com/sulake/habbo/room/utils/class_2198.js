// Estratto da HabboAirLauncher.deobf.js, riga 294549.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_2198.as
// Nome offuscato: _i22200329e429e4

class {
  static {
    n(this, "class_2198");
  }
  var_2440 = 0;
  _r660159888c3e93 = null;
  _r41956c02f82db7 = null;
  _r6076d293c746ce = null;
  _r0d53ac42e1dbf6 = null;
  _selectedObject = null;
  _rb71175614df83f = null;
  _ra961f576525e7b = null;
  _r1d5aec6ec4ac5e = new B();
  getWallItemDataWithId = new B();
  _rfbd9fae8df61bf = [];
  constructor(e) {
    ((this.var_2440 = e), (this._r41956c02f82db7 = new zI()), (this._r0d53ac42e1dbf6 = new Swe()));
  }
  get roomId() {
    return this.var_2440;
  }
  get _ra6985b17d5757b() {
    return this._r660159888c3e93;
  }
  get _rbe0cfe1c1ef99b() {
    return this._r41956c02f82db7;
  }
  get _ra2b9f4114d1cd1() {
    return this._r6076d293c746ce;
  }
  get _rfbe73ee0d1bc7f() {
    return this._r0d53ac42e1dbf6;
  }
  get _rad593ad6a0877a() {
    return this._ra961f576525e7b;
  }
  set _rad593ad6a0877a(e) {
    this._ra961f576525e7b = e;
  }
  get _r11ba5ec084117f() {
    return this._selectedObject;
  }
  get _r137d937a096fce() {
    return this._rb71175614df83f;
  }
  get _r60738f1f049132() {
    return this._rfbd9fae8df61bf;
  }
  set _ra6985b17d5757b(e) {
    (this._r660159888c3e93?.dispose(),
      (this._r660159888c3e93 = e),
      this._r6076d293c746ce?.dispose(),
      (this._r6076d293c746ce =
        this._r660159888c3e93 != null
          ? new _ie8acdd5d1c04f0(this._r660159888c3e93.width, this._r660159888c3e93.height)
          : null));
  }
  set _r11ba5ec084117f(e) {
    (this._selectedObject?.dispose(), (this._selectedObject = e));
  }
  set _r137d937a096fce(e) {
    (this._rb71175614df83f?.dispose(), (this._rb71175614df83f = e));
  }
  dispose() {
    (this._r660159888c3e93?.dispose(),
      (this._r660159888c3e93 = null),
      this._r41956c02f82db7?.dispose(),
      (this._r41956c02f82db7 = null),
      this._r0d53ac42e1dbf6?.dispose(),
      (this._r0d53ac42e1dbf6 = null),
      this._selectedObject?.dispose(),
      (this._selectedObject = null),
      this._rb71175614df83f?.dispose(),
      (this._rb71175614df83f = null),
      this._r1d5aec6ec4ac5e.dispose(),
      this.getWallItemDataWithId.dispose(),
      this._r6076d293c746ce?.dispose(),
      (this._r6076d293c746ce = null));
  }
  _r9d7eab207b92c1(e) {
    e != null && (this._r1d5aec6ec4ac5e.remove(e.id), this._r1d5aec6ec4ac5e.add(e.id, e));
  }
  products() {
    return this._r1d5aec6ec4ac5e.length > 0
      ? this._rd71e58e6570006(this._r1d5aec6ec4ac5e.getKey(0) ?? -1)
      : null;
  }
  _rd71e58e6570006(e) {
    return this._r1d5aec6ec4ac5e.remove(e);
  }
  _rc19271fc7980aa(e) {
    e != null && (this.getWallItemDataWithId.remove(e.id), this.getWallItemDataWithId.add(e.id, e));
  }
  getWallItemData() {
    return this.getWallItemDataWithId.length > 0
      ? this.var_993(this.getWallItemDataWithId.getKey(0) ?? -1)
      : null;
  }
  var_993(e) {
    return this.getWallItemDataWithId.remove(e);
  }
  _r7a445614fef986(e) {
    return this._rfbd9fae8df61bf.indexOf(e) === -1 ? (this._rfbd9fae8df61bf.push(e), !0) : !1;
  }
  _rb802b6b011fa18(e) {
    let r = this._rfbd9fae8df61bf.indexOf(e);
    return r > -1 ? (this._rfbd9fae8df61bf.splice(r, 1), !0) : !1;
  }
  _r4499ae3da6092e() {
    return this._rfbd9fae8df61bf.length > 0;
  }
}
