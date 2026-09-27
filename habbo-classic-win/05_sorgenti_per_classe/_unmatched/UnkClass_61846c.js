// Extracted from HabboAirLauncher.deobf.js, line 99078.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i61846cb3166727

class {
    static {
      n(this, "UnkClass_61846c");
    }
    static {
      uGr(this, "UnkClass_61846c");
    }
    _rb09a82e48b5834;
    _ra973f639450be5;
    _prizes;
    constructor(e) {
      ((this._rb09a82e48b5834 = e.readInteger()),
        (this._ra973f639450be5 = e.readInteger()),
        (this._prizes = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._prizes.push(new PrizeMessageData(e));
      this._prizes.sort((t, i) =>
        t._raeb033db5aa083.localeCompare(i._raeb033db5aa083, void 0, { sensitivity: "accent" }),
      );
    }
    get prizeLevelId() {
      return this._rb09a82e48b5834;
    }
    get _ree58da3a3dbd5a() {
      return this._ra973f639450be5;
    }
    get prizes() {
      return this._prizes;
    }
  }
