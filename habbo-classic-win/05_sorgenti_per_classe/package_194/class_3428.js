// Extracted from HabboAirLauncher.deobf.js, line 89449.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_194/class_3428.as
// Obfuscated name: _i9747aefb0ed888

class {
    static {
      n(this, "class_3428");
    }
    static {
      ikr(this, "class_3428");
    }
    var_3515 = 0;
    var_3144 = 0;
    class_3622 = null;
    flush() {
      return (this.class_3622 && (this.class_3622.dispose(), (this.class_3622 = null)), !0);
    }
    parse(e) {
      ((this.var_3515 = e.readInteger()),
        (this.var_3144 = e.readInteger()),
        (this.class_3622 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this.class_3622.add(s, new UnkClass_4aef89(i, s, e.readInteger(), e.readInteger()));
      }
      return !0;
    }
    get _rec250fae6d7fc2() {
      return this.var_3515;
    }
    get _rd646a5cabacc16() {
      return this.var_3144;
    }
    get _r90349b91438f2b() {
      return this.class_3622;
    }
  }
