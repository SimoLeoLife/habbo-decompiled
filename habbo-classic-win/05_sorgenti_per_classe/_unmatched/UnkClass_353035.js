// Extracted from HabboAirLauncher.deobf.js, line 111950.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i35303572e03460

class {
    static {
      n(this, "UnkClass_353035");
    }
    static {
      Ist(this, "UnkClass_353035");
    }
    _r7ec6d433acab6a = [];
    _r37bdf78d6e6877 = [];
    _r96829aa95ff786 = [];
    _r4116399c1f56ae = [];
    _r0526282f9f6f77 = [];
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r7ec6d433acab6a.push(new UnkClass_fcb46a(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._r37bdf78d6e6877.push(new UnkClass_fcb46a(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._r96829aa95ff786.push(new UnkClass_6529ec(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._r4116399c1f56ae.push(new UnkClass_6529ec(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._r0526282f9f6f77.push(new UnkClass_6529ec(e));
    }
    _r344683a4b0bb1d(e) {
      return e < 0 ||
        this._r96829aa95ff786.length <= 0 ||
        e >= this._r96829aa95ff786.length ||
        this._r4116399c1f56ae.length <= 0
        ? 0
        : this._r38112884e12c63(this._r96829aa95ff786[e], this._r4116399c1f56ae);
    }
    _rb6bb981ce59916(e) {
      return e < 0 ||
        this._r96829aa95ff786.length <= 0 ||
        e >= this._r96829aa95ff786.length ||
        this._r0526282f9f6f77.length <= 0
        ? 0
        : this._r38112884e12c63(this._r96829aa95ff786[e], this._r0526282f9f6f77);
    }
    _r38112884e12c63(e, r) {
      let t = qn._rd5a73912f7d1b1(e.color),
        i = 0,
        s = Number.MAX_VALUE;
      for (let o = 0; o < r.length; o++) {
        let d = qn._rd5a73912f7d1b1(r[o].color),
          c = Math.pow(t.x - d.x, 2) + Math.pow(t.y - d.y, 2) + Math.pow(t.z - d.z, 2);
        c < s && ((s = c), (i = o));
      }
      return r[i].id;
    }
  }
