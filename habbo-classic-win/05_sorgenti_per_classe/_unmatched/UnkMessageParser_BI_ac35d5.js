// Extracted from HabboAirLauncher.deobf.js, line 110575.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iac35d5a92c3f85

class {
    static {
      n(this, "UnkMessageParser_BI_ac35d5");
    }
    static {
      git(this, "UnkMessageParser_BI_ac35d5");
    }
    _r109f8ac31651c7 = !1;
    var_3191 = 0;
    _r415bbcf1cba022 = new class_3437();
    get _rdf3133a4638fcd() {
      return this._r415bbcf1cba022;
    }
    get _r1238571df4d291() {
      return this._r109f8ac31651c7;
    }
    get extra() {
      return this.var_3191;
    }
    flush() {
      return (this._r415bbcf1cba022.flush(), (this._r109f8ac31651c7 = !1), (this.var_3191 = 0), !0);
    }
    parse(e) {
      return (
        this._r415bbcf1cba022.parse(e),
        (this._r109f8ac31651c7 = e.readBoolean()),
        (this.var_3191 = e.readInteger()),
        !0
      );
    }
  }
