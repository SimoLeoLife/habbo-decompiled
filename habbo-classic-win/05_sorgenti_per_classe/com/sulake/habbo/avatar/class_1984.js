// Extracted from HabboAirLauncher.deobf.js, line 167686.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/class_1984.as
// Obfuscated name: _i768174f7debbdb

class {
  static {
    n(this, "class_1984");
  }
  _parts = new B();
  constructor(e) {
    this.getFigureStringWithFace(e);
  }
  getPartTypeIds() {
    return this._parts.getKeys();
  }
  _r1c5fbe40a0ba54(e) {
    return this._parts.getValue(e) != null;
  }
  getPartSetId(e) {
    return this._parts.getValue(e)?._rebd7c11478f60d ?? 0;
  }
  getPartColorIds(e) {
    return this._parts.getValue(e)?._rc1b05a345cfbc8 ?? [];
  }
  updatePart(e, r, t) {
    (this._parts.remove(e),
      this._parts.add(e, { type: e, _rebd7c11478f60d: r, _rc1b05a345cfbc8: t.slice() }));
  }
  removePart(e) {
    this._parts.remove(e);
  }
  parseFigureString() {
    let e = [];
    for (let r of this._parts.getKeys()) {
      let t = this._parts.getValue(r);
      t != null &&
        e.push([t.type, String(t._rebd7c11478f60d), ...t._rc1b05a345cfbc8.map((i) => String(i))].join("-"));
    }
    return e.join(".");
  }
  getFigureStringWithFace(e) {
    if (!(e == null || e === ""))
      for (let r of e.split(".")) {
        let t = r.split("-");
        if (t.length < 2) continue;
        let i = t[0],
          s = Number.parseInt(t[1], 10),
          o = t
            .slice(2)
            .map((d) => Number.parseInt(d, 10))
            .filter((d) => !Number.isNaN(d));
        this.updatePart(i, Number.isNaN(s) ? 0 : s, o);
      }
  }
}
