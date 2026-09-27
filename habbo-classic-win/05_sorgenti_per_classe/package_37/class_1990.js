// Extracted from HabboAirLauncher.deobf.js, line 72806.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_1990.as
// Obfuscated name: _i57293f30cd01ad

class {
    static {
      n(this, "class_1990");
    }
    static {
      W8r(this, "class_1990");
    }
    isOpen = !1;
    var_5059 = !1;
    _rb3db64c4e4ea6d = !1;
    flush() {
      return ((this.isOpen = !1), (this.var_5059 = !1), (this._rb3db64c4e4ea6d = !1), !0);
    }
    parse(e) {
      return (
        (this.isOpen = e.readBoolean()),
        (this.var_5059 = e.readBoolean()),
        e.bytesAvailable && (this._rb3db64c4e4ea6d = e.readBoolean()),
        !0
      );
    }
  }
