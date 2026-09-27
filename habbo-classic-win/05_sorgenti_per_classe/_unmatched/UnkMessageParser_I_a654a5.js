// Extracted from HabboAirLauncher.deobf.js, line 77570.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia654a5ab5ec976

class {
    static {
      n(this, "UnkMessageParser_I_a654a5");
    }
    static {
      hgr(this, "UnkMessageParser_I_a654a5");
    }
    _rd6af6eba309544 = [];
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd6af6eba309544.push(new class_3746(e));
      return !0;
    }
    flush() {
      return ((this._rd6af6eba309544 = []), !0);
    }
    get _re260ed8e0c1afa() {
      return this._rd6af6eba309544;
    }
  }
