// Extracted from HabboAirLauncher.deobf.js, line 56416.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i88cf60ef4c6109

class {
    constructor(e = new UnkClass_8eff3a()) {
      this._r9ab88222718c57 = e;
    }
    static {
      n(this, "UnkClass_88cf60");
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
