// Extracted from HabboAirLauncher.deobf.js, line 96042.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieb5a8a61dbdfa0

class {
    static {
      n(this, "UnkClass_eb5a8a");
    }
    static {
      iFr(this, "UnkClass_eb5a8a");
    }
    _r2a7dc34b2dea4e;
    _r142fb4f6ede350;
    _r17aeee82bd7d57 = [];
    constructor(e, r = null) {
      if (r) {
        ((this._r2a7dc34b2dea4e = r.searchCode),
          (this._r142fb4f6ede350 = r.text),
          this._r17aeee82bd7d57.push(r));
        return;
      }
      ((this._r2a7dc34b2dea4e = e.readString()), (this._r142fb4f6ede350 = e.readString()));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._r17aeee82bd7d57.push(new class_2005(e));
    }
    get var_485() {
      return this._r2a7dc34b2dea4e;
    }
    get _r9c1a4c7a359c22() {
      return this._r142fb4f6ede350;
    }
    get blocks() {
      return this._r17aeee82bd7d57;
    }
    findGuestRoom(e) {
      for (let r of this._r17aeee82bd7d57) {
        let t = r.findGuestRoom(e);
        if (t) return t;
      }
      return null;
    }
  }
