// Estratto da HabboAirLauncher.deobf.js, riga 209663.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/MovingBackgroundObjects.as
// Nome offuscato: _if3ccb9e6106c9d

class a {
  constructor(e) {
    this._landingView = e;
    this.initializeObjectTypeMapping();
  }
  static {
    n(this, "MovingBackgroundObjects");
  }
  static MAX_OBJECTS = 20;
  var_415 = [];
  _loc5_ = new B();
  _events = new EventDispatcherWrapper();
  _timingCode = "";
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    this._landingView = null;
    for (let e of this.var_415) e.dispose();
    ((this.var_415.length = 0), this._loc5_.reset());
  }
  initialize(e) {
    let r = e.findChildByName("moving_objects_container");
    if (!(r == null || this.var_415.length > 0 || this._landingView == null))
      for (let t = 1; t <= a.MAX_OBJECTS; t++) {
        let i =
          this._timingCode.length === 0
            ? this._landingView.getProperty(`landing.view.bgobject.${t}`)
            : this._landingView.getProperty(`landing.view.${this._timingCode}.bgobject.${t}`);
        if (i.length === 0) continue;
        let s = this.getObjectByDataContent(t, i, r);
        s != null && this.var_415.push(s);
      }
  }
  update(e) {
    for (let r of this.var_415) r.update(e);
  }
  set timingCode(e) {
    this._timingCode = e;
  }
  initializeObjectTypeMapping() {
    (this._loc5_.add(class_4334.LINEAR, class_4334._r8ff6a3a69a78a0),
      this._loc5_.add(class_4334.SPIRAL, class_4334._rff90addba1a88b),
      this._loc5_.add(class_4334.STATIC_ANIMATED, class_4334._rc0731fcd2cf8ae),
      this._loc5_.add(class_4334.RANDOM_WALK, class_4334._r3cfaa2cbdb7cd8));
  }
  getObjectByDataContent(e, r, t) {
    let i = r.split(";");
    if (i.length < 2 || this._landingView == null) return null;
    let s = i[1],
      o = this._loc5_.getValue(s);
    return o == null ? null : new o(e, t, this._events, this._landingView, r);
  }
}
