// Estratto da HabboAirLauncher.deobf.js, riga 365942.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/utils/WiredUserAction.as
// Nome offuscato: _icb42933946e5f8

class a {
  constructor(e, r, t = !1, i = null, s = null) {
    this._name = e;
    this._code = r;
    this.var_5617 = t;
    this._extraIdToString = i;
    this.var_4780 = s;
  }
  static {
    n(this, "WiredUserAction");
  }
  static allWiredUserActions = [
    new a("wave", 0),
    new a("blow", 1),
    new a("laugh", 2),
    new a("respect", 3),
    new a("awake", 4),
    new a("sleep", 5),
    new a("sit", 6),
    new a("stand", 7),
    new a("lay", 8),
    new a(
      "sign",
      10,
      !0,
      (e) => e.toString(),
      (e) => Number.parseInt(e, 10),
    ),
    new a(
      "dance",
      11,
      !0,
      (e) => `dance ${e}`,
      (e) => Number.parseInt(e.split(" ")[1] ?? "0", 10),
    ),
    new a("67", 67),
  ];
  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }
  get hasExtra() {
    return this.var_5617;
  }
  _r0846225a9e5a5b(e) {
    return this._extraIdToString?.(e) ?? "";
  }
  _r804c778b0da0d0(e) {
    return this.var_4780?.(e) ?? 0;
  }
}
