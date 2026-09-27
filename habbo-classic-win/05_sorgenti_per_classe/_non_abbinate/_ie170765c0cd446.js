// Estratto da HabboAirLauncher.deobf.js, riga 280985.

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
    n(this, "_ie170765c0cd446");
  }
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  dispose() {
    this.asset = null;
  }
}
