// Extracted from HabboAirLauncher.deobf.js, line 280985.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie170765c0cd446

class a {
  constructor(
    e,
    r = a.const_29,
    t = a.MAX_NORMAL_COORDINATE_VALUE,
    i = a.const_29,
    s = a.MAX_NORMAL_COORDINATE_VALUE,
  ) {
    this.asset = e;
    this.normalMinX = r;
    this.normalMaxX = t;
    this.normalMinY = i;
    this.normalMaxY = s;
  }
  static {
    n(this, "UnkClass_e17076");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  dispose() {
    this.asset = null;
  }
}
