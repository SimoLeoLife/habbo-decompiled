// Extracted from HabboAirLauncher.deobf.js, line 84499.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i83a8f363b248f7

class a {
    static {
      n(this, "UnkClass_83a8f3");
    }
    static {
      pxr(this, "UnkClass_83a8f3");
    }
    static _rddd716383b144a = 8;
    static _r7778fd31349205 = 12;
    static _rc5ded5a1a4d824 = 1;
    static _r5c369bfe66aaaf = 7;
    static _rc4bc4287b0621d = 11;
    static _r702889510560a3 = 2;
    static _rb4303d911e8e82 = 3;
    static _r643e8d9619d067 = 4;
    static _r6c8adb17161f80 = new Map();
    _id;
    constructor(e) {
      this._id = e;
    }
    get id() {
      return this._id;
    }
    set id(e) {
      this._id = e;
    }
    parse(e) {}
    static register(e, r) {
      a._r6c8adb17161f80.set(e, r);
    }
    static create(e) {
      let r = a._r6c8adb17161f80.get(e);
      return r == null ? null : new r(e);
    }
  }
