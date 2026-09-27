// Estratto da HabboAirLauncher.deobf.js, riga 50622.

class {
  static {
    n(this, "_i87154f9ac885e8");
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
