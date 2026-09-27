// Extracted from HabboAirLauncher.deobf.js, line 108649.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_2851.as
// Obfuscated name: _i5e23d29e68cbbe

class {
    static {
      n(this, "class_2851");
    }
    static {
      Qrt(this, "class_2851");
    }
    var_2859 = null;
    _allVariablesHash = 0;
    var_3382 = !1;
    var_2511 = null;
    flush() {
      return (
        (this._allVariablesHash = 0),
        (this.var_3382 = !1),
        (this.var_2511 = null),
        (this.var_2859 = null),
        !0
      );
    }
    parse(e) {
      ((this._allVariablesHash = e.readInteger()), (this.var_3382 = e.readBoolean()));
      let r = e.readInteger();
      this.var_2511 = [];
      for (let i = 0; i < r; i++) this.var_2511.push(e.readString());
      let t = e.readInteger();
      this.var_2859 = new Map();
      for (let i = 0; i < t; i++) {
        let s = e.readInteger(),
          o = new WiredVariable(e);
        this.var_2859.set(o, s);
      }
      return !0;
    }
    get _r40cb523a517bf8() {
      return this.var_3382;
    }
    get _re8423e5f8121ba() {
      return this.var_2511;
    }
    get _rdfa4bf05dddbd0() {
      return this.var_2859;
    }
    get allVariablesHash() {
      return this._allVariablesHash;
    }
  }
