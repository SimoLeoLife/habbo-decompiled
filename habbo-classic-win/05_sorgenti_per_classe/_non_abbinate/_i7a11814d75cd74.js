// Estratto da HabboAirLauncher.deobf.js, riga 92889.

class {
    static {
      n(this, "_i7a11814d75cd74");
    }
    static {
      USr(this, "_i7a11814d75cd74");
    }
    var_1065 = "";
    _url = "";
    get message() {
      return this.var_1065;
    }
    get url() {
      return this._url;
    }
    flush() {
      return ((this.var_1065 = ""), (this._url = ""), !0);
    }
    parse(e) {
      return ((this.var_1065 = e.readString()), (this._url = e.readString()), !0);
    }
  }
