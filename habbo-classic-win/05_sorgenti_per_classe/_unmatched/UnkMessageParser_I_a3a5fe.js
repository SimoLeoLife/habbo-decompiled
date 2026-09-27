// Extracted from HabboAirLauncher.deobf.js, line 105416.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia3a5fec5c63ea6

class {
    static {
      n(this, "UnkMessageParser_I_a3a5fe");
    }
    static {
      wZr(this, "UnkMessageParser_I_a3a5fe");
    }
    _flatId = 0;
    _data = null;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this._data = new UnkClass_ec27db(e)), !0);
    }
    get flatId() {
      return this._flatId;
    }
    get data() {
      return this._data;
    }
  }
