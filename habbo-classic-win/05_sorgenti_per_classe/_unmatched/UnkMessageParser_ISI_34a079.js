// Extracted from HabboAirLauncher.deobf.js, line 89353.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i34a07938974da9

class {
    static {
      n(this, "UnkMessageParser_ISI_34a079");
    }
    static {
      $Ar(this, "UnkMessageParser_ISI_34a079");
    }
    _data = [];
    flush() {
      return ((this._data = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        for (let o = 0; o < s; o++) this._data.push(new class_3733(i, e));
      }
      return !0;
    }
    get data() {
      return this._data;
    }
  }
