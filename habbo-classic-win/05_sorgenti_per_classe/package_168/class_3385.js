// Extracted from HabboAirLauncher.deobf.js, line 103664.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3385.as
// Obfuscated name: _i9ce61ef07a0481

class {
    static {
      n(this, "class_3385");
    }
    static {
      jYr(this, "class_3385");
    }
    var_4427 = 0;
    var_1479 = [];
    var_2735 = 0;
    var_1427 = !1;
    get itemId() {
      return this.var_2735;
    }
    get presetCount() {
      return this.var_1479.length;
    }
    get _ree0dc0daf170e4() {
      return this.var_4427;
    }
    get isOn() {
      return this.var_1427;
    }
    getPreset(e) {
      return e < 0 || e >= this.presetCount ? null : (this.var_1479[e] ?? null);
    }
    flush() {
      return ((this.var_1479 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      ((this.var_4427 = e.readInteger()), (this.var_1479 = []));
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = Number.parseInt(e.readString().slice(1), 16),
          d = e.readInteger(),
          c = new class_2606(i);
        ((c.type = s), (c.color = o), (c.light = d), c.setReadOnly(), this.var_1479.push(c));
      }
      return ((this.var_1427 = e.readBoolean()), (this.var_2735 = e.readInteger()), !0);
    }
  }
