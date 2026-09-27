// Extracted from HabboAirLauncher.deobf.js, line 121367.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7df3652d17398b

class {
    static {
      n(this, "UnkMessageComposer_3args_7df365");
    }
    constructor(e, r, t = 0) {
      ((this._recipientName = e), (this._text = r), (this.var_3616 = t));
    }
    static {
      d9t(this, "UnkMessageComposer_3args_7df365");
    }
    getMessageArray() {
      return [`${this._recipientName} ${this._text}`, this.var_3616];
    }
    dispose() {}
  }
