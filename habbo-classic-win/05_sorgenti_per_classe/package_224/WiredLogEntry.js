// Extracted from HabboAirLauncher.deobf.js, line 109162.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_224/WiredLogEntry.as
// Obfuscated name: _i361f597880dde0

class {
    static {
      n(this, "WiredLogEntry");
    }
    static {
      ktt(this, "WiredLogEntry");
    }
    _id;
    var_4368;
    var_5424;
    var_5330;
    var_3436;
    var_5537;
    constructor(e) {
      ((this._id = e.readLong()),
        (this.var_4368 = e.readByte()),
        (this.var_5330 = e.readByte()),
        (this.var_5424 = e.readString()),
        (this.var_3436 = e.readLong()),
        (this.var_5537 = e.readString()));
    }
    get id() {
      return this._id;
    }
    get logLevel() {
      return this.var_4368;
    }
    get _r515ac7f6f04027() {
      return this.var_5330;
    }
    get _rba6ccde683fe3f() {
      return this.var_5424;
    }
    get timestamp() {
      return this.var_3436;
    }
    get _r9d1c666b9a0c07() {
      return this.var_5537;
    }
  }
