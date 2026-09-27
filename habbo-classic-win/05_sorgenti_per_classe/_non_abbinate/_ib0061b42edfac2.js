// Estratto da HabboAirLauncher.deobf.js, riga 50309.

class {
  static {
    n(this, "_ib0061b42edfac2");
  }
  _styles = new globalThis.Map();
  parseCSS(e) {
    let r = /([^{]+)\{([^}]*)\}/g,
      t;
    for (; (t = r.exec(e)) != null;) {
      let i = t[1]?.trim(),
        s = t[2] ?? "";
      if (!i) continue;
      let o = {};
      for (let d of s.split(";")) {
        let [c, f] = d.split(":"),
          l = c?.trim(),
          b = f?.trim();
        !l || !b || (o[this._r2d2ad49b5ad6b4(l)] = b);
      }
      this._styles.set(i, o);
    }
  }
  _r22c9347ecec607(e) {
    return this._styles.get(e) ?? null;
  }
  _r14e5354d420daf(e, r) {
    this._styles.set(e, { ...r });
  }
  _r2d2ad49b5ad6b4(e) {
    return e.replace(/-([a-z])/g, (r, t) => t.toUpperCase());
  }
}
