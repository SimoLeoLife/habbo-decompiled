// Extracted from HabboAirLauncher.deobf.js, line 221966.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i66142e2954d529

class {
    static {
      n(this, "UnkClass_66142e");
    }
    _r = 0;
    _g = 0;
    _b = 0;
    _a = 0;
    constructor(e = 0) {
      this._rae3d27c4e7e5ef(e);
    }
    get r() {
      return this._r;
    }
    get g() {
      return this._g;
    }
    get b() {
      return this._b;
    }
    get a() {
      return this._a;
    }
    _rae3d27c4e7e5ef(e) {
      ((this._a = (e >> 24) & 255),
        (this._r = (e >> 16) & 255),
        (this._g = (e >> 8) & 255),
        (this._b = e & 255));
    }
    get rgb() {
      return (this._a << 24) | (this._r << 16) | (this._g << 8) | this._b;
    }
    _checksumIndicatorColor(e) {
      e != null &&
        ((this._a += Math.trunc((e.a - this.a) / 24)),
        (this._r += Math.trunc((e.r - this.r) / 24)),
        (this._g += Math.trunc((e.g - this.g) / 24)),
        (this._b += Math.trunc((e.b - this.b) / 24)));
    }
  }
