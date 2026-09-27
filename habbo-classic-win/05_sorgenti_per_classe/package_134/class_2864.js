// Extracted from HabboAirLauncher.deobf.js, line 96430.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_134/class_2864.as
// Obfuscated name: _i6a2e28ac7e87f2

class {
    static {
      n(this, "class_2864");
    }
    static {
      RFr(this, "class_2864");
    }
    _points = new Map();
    get points() {
      return this._points;
    }
    flush() {
      return ((this._points = new Map()), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger();
        this._points.set(i, s);
      }
      return !0;
    }
  }
