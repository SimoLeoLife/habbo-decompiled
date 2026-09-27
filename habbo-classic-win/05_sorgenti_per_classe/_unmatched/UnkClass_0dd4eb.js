// Extracted from HabboAirLauncher.deobf.js, line 283096.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0dd4eb63c06080

class a {
  constructor(
    e,
    r = a.const_29,
    t = a.MAX_NORMAL_COORDINATE_VALUE,
    i = a.const_29,
    s = a.MAX_NORMAL_COORDINATE_VALUE,
    o = null,
  ) {
    this.bitmap = e;
    this.normalMinX = r;
    this.normalMaxX = t;
    this.normalMinY = i;
    this.normalMaxY = s;
    this.assetName = o;
  }
  static {
    n(this, "UnkClass_0dd4eb");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  dispose() {
    this.bitmap = null;
  }
}
