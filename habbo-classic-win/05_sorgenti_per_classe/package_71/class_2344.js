// Extracted from HabboAirLauncher.deobf.js, line 101473.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2344.as
// Obfuscated name: _ic414d76e07df43

class {
    static {
      n(this, "class_2344");
    }
    static {
      LQr(this, "class_2344");
    }
    var_415 = [];
    get objectCount() {
      return this.var_415.length;
    }
    getObjectData(e) {
      return e < 0 || e >= this.objectCount ? null : (this.var_415[e] ?? null);
    }
    flush() {
      return ((this.var_415 = []), !0);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger();
      this.var_415 = [];
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = zs.parseStuffData(e),
          o = 0,
          d = s.getLegacyString();
        (Number.isNaN(Number.parseFloat(d)) || (o = Number.parseInt(d, 10)),
          this.var_415.push(new UnkClass_7e7424(i, o, s)));
      }
      return !0;
    }
  }
