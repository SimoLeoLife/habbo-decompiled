// Extracted from HabboAirLauncher.deobf.js, line 83702.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_2235.as
// Obfuscated name: _i3bb8f8e5ff9ca0

class {
    static {
      n(this, "class_2235");
    }
    static {
      Jyr(this, "class_2235");
    }
    var_215 = null;
    var_2401 = 0;
    var_3521 = "";
    var_2008 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_2401 = e.readInteger()),
        (this.var_3521 = e.readString()),
        (this.var_2008 = e.readInteger()),
        (this.var_215 = new GameObjectsData(e)),
        !0
      );
    }
    get gameObjects() {
      return this.var_215;
    }
    get gameType() {
      return this.var_2401;
    }
    get roomType() {
      return this.var_3521;
    }
    get _rb18ff8fe8e394b() {
      return this.var_2008;
    }
  }
