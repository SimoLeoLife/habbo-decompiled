// Extracted from HabboAirLauncher.deobf.js, line 95947.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic0af351d7b6d1b

class {
    static {
      n(this, "UnkMessageParser_ISI_c0af35");
    }
    static {
      qOr(this, "UnkMessageParser_ISI_c0af35");
    }
    _r9f3525e2ffa26c = new Map();
    flush() {
      return ((this._r9f3525e2ffa26c = new Map()), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        this._r9f3525e2ffa26c.set(i, s);
      }
      return !0;
    }
    get _r9085f1816b174c() {
      return this._r9f3525e2ffa26c;
    }
  }
