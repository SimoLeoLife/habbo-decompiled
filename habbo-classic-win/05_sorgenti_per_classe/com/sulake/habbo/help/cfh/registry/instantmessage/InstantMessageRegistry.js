// Estratto da HabboAirLauncher.deobf.js, riga 233901.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/cfh/registry/instantmessage/InstantMessageRegistry.as
// Nome offuscato: _i03da6cdd9857d0

class a {
  static {
    n(this, "InstantMessageRegistry");
  }
  static ITEMS_TO_PURGE = 5;
  static MAX_MESSAGES_TO_STORE = 20;
  _registry = new B();
  var_2996 = 0;
  _r87fca79f57a752 = 0;
  _holdPurges = !1;
  addItem(e, r, t) {
    let i = this._registry.getValue(e) ?? [];
    (i.push(new _i0c63f6b96e5f23(this.var_2996++, e, r, t)),
      this._registry.hasKey(e) && this._registry.remove(e),
      this._registry.add(e, i),
      this._r87fca79f57a752++,
      this._r87fca79f57a752 % 3 === 0 && this.purgeRegistry());
  }
  set _r57d695ff15edb9(e) {
    this._holdPurges = e;
  }
  _r84e188e8801478(e) {
    return this._registry.getValue(e) ?? null;
  }
  _r92b2d93b5e6308(e) {
    return (this._r84e188e8801478(e)?.length ?? 0) > 0;
  }
  _rd28e31a47a1e3c() {
    return this._registry.length > 0;
  }
  _rc33dd608d2ddc4() {
    return this._registry;
  }
  getItem(e, r) {
    let t = this._r84e188e8801478(e) ?? [];
    for (let i of t) if (i.index === r) return i;
    return null;
  }
  purgeRegistry() {
    if (this._holdPurges) return;
    let e = Date.now();
    for (let r of this._registry.getKeys()) {
      let i = (this._registry.getValue(r) ?? []).filter(
        (s) => Math.floor((e - s._r9a6a5b81100380.getTime()) / 65500) <= 15,
      );
      (i.length > a.MAX_MESSAGES_TO_STORE && (i = i.slice(i.length - (a.MAX_MESSAGES_TO_STORE - a.ITEMS_TO_PURGE))),
        this._registry.remove(r),
        this._registry.add(r, i));
    }
  }
}
