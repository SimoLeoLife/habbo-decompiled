// Extracted from HabboAirLauncher.deobf.js, line 101523.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2814.as
// Obfuscated name: _ic64b0d73e1ffb4

class {
    static {
      n(this, "class_2814");
    }
    static {
      HQr(this, "class_2814");
    }
    var_415 = [];
    flush() {
      return ((this.var_415 = []), !0);
    }
    getObjectCount() {
      return this.var_415.length;
    }
    getObject(e) {
      if (e < 0 || e >= this.getObjectCount()) return null;
      let r = this.var_415[e] ?? null;
      return (r && r.setReadOnly(), r);
    }
    parse(e) {
      if (!e) return !1;
      this.var_415 = [];
      let r = new B(),
        t = e.readInteger();
      for (let s = 0; s < t; s++) r.add(e.readInteger(), e.readString());
      let i = e.readInteger();
      for (let s = 0; s < i; s++) {
        let o = zs.parseObjectData(e);
        o && ((o.ownerName = r.getValue(o.ownerId) ?? ""), this.var_415.push(o));
      }
      return !0;
    }
  }
