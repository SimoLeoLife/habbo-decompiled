// Extracted from HabboAirLauncher.deobf.js, line 95909.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i246c5ba734dfd3

class {
    static {
      n(this, "UnkMessageParser_I_246c5b");
    }
    static {
      YOr(this, "UnkMessageParser_I_246c5b");
    }
    _r3213277b21adbf = [];
    flush() {
      return ((this._r3213277b21adbf = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r3213277b21adbf.push(new SavedSearch(e));
      return !0;
    }
    get _rff6faffdb109ff() {
      return this._r3213277b21adbf;
    }
  }
