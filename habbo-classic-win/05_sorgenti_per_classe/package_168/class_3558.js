// Extracted from HabboAirLauncher.deobf.js, line 103276.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3558.as
// Obfuscated name: _i3891ec352dd230

class {
    static {
      n(this, "class_3558");
    }
    static {
      uYr(this, "class_3558");
    }
    var_344 = -1;
    var_748 = null;
    get objectId() {
      return this.var_344;
    }
    get figureData() {
      return this.var_748;
    }
    flush() {
      return ((this.var_344 = -1), (this.var_748 = null), !0);
    }
    parse(e) {
      return e
        ? ((this.var_344 = e.readInteger()),
          e.bytesAvailable && (this.var_748 = new class_3800_(e)),
          !0)
        : !1;
    }
  }
