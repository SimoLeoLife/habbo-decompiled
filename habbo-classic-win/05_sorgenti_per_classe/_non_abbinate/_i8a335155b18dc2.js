// Estratto da HabboAirLauncher.deobf.js, riga 93045.

class {
    static {
      n(this, "_i8a335155b18dc2");
    }
    static {
      qSr(this, "_i8a335155b18dc2");
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
