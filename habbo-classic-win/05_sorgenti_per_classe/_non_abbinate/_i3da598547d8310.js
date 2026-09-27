// Estratto da HabboAirLauncher.deobf.js, riga 126095.

class {
    static {
      n(this, "_i3da598547d8310");
    }
    static {
      byt(this, "_i3da598547d8310");
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
