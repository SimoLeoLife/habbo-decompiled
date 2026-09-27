// Estratto da HabboAirLauncher.deobf.js, riga 233814.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/cfh/registry/chat/ChatRegistry.as
// Nome offuscato: _idb27b2f46e0e2a

class a {
  static {
    n(this, "ChatRegistry");
  }
  static MAX_ITEMS_TO_STORE = 120;
  static ITEMS_TO_PURGE = 20;
  _registry = [];
  var_2996 = 0;
  _holdPurges = !1;
  _rd28e31a47a1e3c() {
    return this._registry.length > 0;
  }
  _rb58aa599e4f70a(e) {
    return this._r9012e39d5582d0(e).length > 0;
  }
  _rc33dd608d2ddc4() {
    return this._registry;
  }
  addItem(e, r, t, i, s) {
    (this._registry.push(new ChatRegistryItem(this.var_2996++, e, r, t, i, s)), this.purgeRegistry());
  }
  set _r57d695ff15edb9(e) {
    this._holdPurges = e;
  }
  getItem(e) {
    for (let r of this._registry) if (r.index === e) return r;
    return null;
  }
  _r84e188e8801478(e) {
    return this._registry.filter((r) => r.userId === e);
  }
  purgeRegistry() {
    if (this._holdPurges) return;
    let e = Date.now(),
      r = this._registry.filter((t) => Math.floor((e - t._r9a6a5b81100380.getTime()) / 65500) <= 15);
    (r.length > a.MAX_ITEMS_TO_STORE && (r = r.slice(r.length - (a.MAX_ITEMS_TO_STORE - a.ITEMS_TO_PURGE))),
      (this._registry = r));
  }
  _r9012e39d5582d0(e) {
    return this._registry.filter((r) => r.userId !== e);
  }
}
