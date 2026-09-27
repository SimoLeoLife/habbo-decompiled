// Extracted from HabboAirLauncher.deobf.js, line 87789.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4247.as
// Obfuscated name: _ib15bd910f60728

class {
    static {
      n(this, "class_4247");
    }
    static {
      CWr(this, "class_4247");
    }
    var_3180 = -1;
    _description = null;
    _data = null;
    flush() {
      return (
        this._data && this._data.dispose(),
        (this._data = null),
        (this.var_3180 = -1),
        (this._description = null),
        !0
      );
    }
    parse(e) {
      ((this._data = new B()),
        (this.var_3180 = e.readInteger()),
        (this._description = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this._data.add(i, s);
      }
      return !0;
    }
    get categoryId() {
      return this.var_3180;
    }
    get description() {
      return this._description;
    }
    get data() {
      return this._data;
    }
  }
