// Estratto da HabboAirLauncher.deobf.js, riga 283096.

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
    n(this, "_i0dd4eb63c06080");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  dispose() {
    this.bitmap = null;
  }
}
