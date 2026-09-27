// Estratto da HabboAirLauncher.deobf.js, riga 150751.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/events/HabboUnseenItemsUpdatedEvent.as
// Nome offuscato: _icdd06cb3b86570

class a extends M {
  static {
    n(this, "HabboUnseenItemsUpdatedEvent");
  }
  static const_207 = "HUIUE_UNSEEN_ITEMS_CHANGED";
  _r21d94a797217ff = 0;
  _r61b6dd69b63dc5 = new Map();
  constructor() {
    super(a.const_207);
  }
  getCategoryCount(e) {
    return this._r61b6dd69b63dc5.get(e) ?? 0;
  }
  setCategoryCount(e, r) {
    this._r61b6dd69b63dc5.set(e, r);
  }
  clone() {
    let e = new a();
    e._r21d94a797217ff = this._r21d94a797217ff;
    for (let [r, t] of this._r61b6dd69b63dc5.entries()) e.setCategoryCount(r, t);
    return e;
  }
}
