// Estratto da HabboAirLauncher.deobf.js, riga 208133.

class {
  static {
    n(this, "_i9c86dd796530ca");
  }
  initialize(e, r, t, i) {
    let s = r;
    ((s.assetUri = t[1] ?? ""),
      t.length > 2 && (s.x = Number.parseInt(t[2])),
      t.length > 3 && (s.y = Number.parseInt(t[3])));
  }
  refresh() {}
}
