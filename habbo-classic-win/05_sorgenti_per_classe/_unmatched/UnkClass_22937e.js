// Extracted from HabboAirLauncher.deobf.js, line 50718.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i22937e6f5f27b8

class {
  static {
    n(this, "UnkClass_22937e");
  }
  _r4b64bd2ef49c01 = null;
  set _r9f73dbd8456ba4(e) {
    this._r4b64bd2ef49c01 = e;
  }
  logError(e, r, t = -1, i = null) {
    let s = i?.stack ?? "";
    r ? this._r4b64bd2ef49c01?.logCrash(e) : this._r4b64bd2ef49c01?.logError(e);
  }
}
