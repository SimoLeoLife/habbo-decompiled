// Extracted from HabboAirLauncher.deobf.js, line 108519.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_4085.as
// Obfuscated name: _ib66bb292ca65e3

class {
    static {
      n(this, "class_4085");
    }
    static {
      Rrt(this, "class_4085");
    }
    var_3768 = !1;
    _key = "";
    var_3087 = -1;
    flush() {
      return ((this.var_3087 = -1), (this.var_3768 = !1), (this._key = ""), !0);
    }
    parse(e) {
      return (
        (this.var_3087 = e.readInteger()),
        (this.var_3768 = e.readBoolean()),
        (this._key = e.readString()),
        !0
      );
    }
    get _r418fec78af8664() {
      return this.var_3087;
    }
    get _r763be770945f84() {
      return this.var_3768;
    }
    get key() {
      return this._key;
    }
  }
