// Extracted from HabboAirLauncher.deobf.js, line 50622.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i87154f9ac885e8

class {
  static {
    n(this, "UnkClass_87154f");
  }
  toString() {
    let e = new URLSearchParams();
    for (let [r, t] of Object.entries(this))
      typeof t == "function" ||
        t == null ||
        (typeof t == "object" ? e.set(r, JSON.stringify(t)) : e.set(r, String(t)));
    return e.toString();
  }
}
