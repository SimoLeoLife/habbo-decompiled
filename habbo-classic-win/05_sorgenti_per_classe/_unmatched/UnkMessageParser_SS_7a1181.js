// Extracted from HabboAirLauncher.deobf.js, line 92889.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7a11814d75cd74

class {
    static {
      n(this, "UnkMessageParser_SS_7a1181");
    }
    static {
      USr(this, "UnkMessageParser_SS_7a1181");
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
