// Estratto da HabboAirLauncher.deobf.js, riga 56416.

class {
    constructor(e = new _i8eff3a83038a79()) {
      this._r9ab88222718c57 = e;
    }
    static {
      n(this, "_i88cf60ef4c6109");
    }
    async load(e) {
      let r = e.directHabUrl != null ? [e.directHabUrl] : _i8e113be9974579(e.sourceUrl);
      if (r.length === 0)
        throw new Error(`No HAB URL is available for asset library "${e.libraryName}" from ${e.sourceUrl}.`);
      let t = [];
      for (let i of r) {
        let s = await this._r9ab88222718c57._r11cdcf322baa2c(i, e.signal);
        if (!s.ok) {
          t.push(`${s.url} (status ${s.status})`);
          continue;
        }
        let o = _ic16fff7f81cf2c(s.bytes, s.url);
        return _i104c3411a718e5(o, e, s.url);
      }
      throw new Error(`Failed to load HAB asset library "${e.libraryName}": ${t.join(", ")}.`);
    }
  }
