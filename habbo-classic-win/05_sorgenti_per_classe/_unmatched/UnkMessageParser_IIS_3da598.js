// Extracted from HabboAirLauncher.deobf.js, line 126095.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3da598547d8310

class {
    static {
      n(this, "UnkMessageParser_IIS_3da598");
    }
    static {
      byt(this, "UnkMessageParser_IIS_3da598");
    }
    var_598 = [];
    _userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      ((this.var_598 = []), (this._userId = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_598.push(e.readString());
      return !0;
    }
    get tags() {
      return this.var_598.slice();
    }
    get userId() {
      return this._userId;
    }
  }
