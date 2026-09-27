// Extracted from HabboAirLauncher.deobf.js, line 93045.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8a335155b18dc2

class {
    static {
      n(this, "UnkMessageParser_SS_8a3351");
    }
    static {
      qSr(this, "UnkMessageParser_SS_8a3351");
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
