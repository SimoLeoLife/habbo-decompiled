// Extracted from HabboAirLauncher.deobf.js, line 58727.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5b8596126e61a2

class a {
  static {
    n(this, "UnkClass_5b8596");
  }
  static _rea83521b8ec24f = a._re4e567f980d494();
  static get majorVersion() {
    return a._rea83521b8ec24f.majorVersion;
  }
  static get _r5fd4f7ae733b7a() {
    return a._rea83521b8ec24f._r5fd4f7ae733b7a;
  }
  static get _r12a1dcbb10c3b4() {
    return a._rea83521b8ec24f._r12a1dcbb10c3b4;
  }
  static _re4e567f980d494() {
    let e = "Unknown";
    return (
      typeof navigator < "u"
        ? (e = navigator.platform || navigator.userAgent || e)
        : typeof process < "u" && (e = process.platform),
      { majorVersion: 10, _r5fd4f7ae733b7a: 1, _r12a1dcbb10c3b4: e }
    );
  }
}
