// Extracted from HabboAirLauncher.deobf.js, line 186198.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1dfe4febbaf8ea

class {
  static {
    n(this, "UnkClass_1dfe4f");
  }
  _rb09a82e48b5834;
  _prizes;
  _ra973f639450be5;
  constructor(e, r) {
    ((this._rb09a82e48b5834 = e.prizeLevelId),
      (this._ra973f639450be5 = e._ree58da3a3dbd5a),
      (this._prizes = []));
    for (let t of e.prizes) {
      let i;
      if (t.isDeal) i = new DealPrizeContainer(t._ref140d0201ea74, this._rb09a82e48b5834, r);
      else {
        let s = r?.products(t.productItemTypeId, t.productItemType) ?? null;
        i = new PrizeContainer(t.productItemType, t.productItemTypeId, s, this._rb09a82e48b5834, r);
      }
      this._prizes.push(i);
    }
  }
  get prizeLevelId() {
    return this._rb09a82e48b5834;
  }
  get prizes() {
    return this._prizes;
  }
  get _ree58da3a3dbd5a() {
    return this._ra973f639450be5;
  }
}
