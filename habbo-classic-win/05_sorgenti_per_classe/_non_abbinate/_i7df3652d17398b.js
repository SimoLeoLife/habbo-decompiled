// Estratto da HabboAirLauncher.deobf.js, riga 121367.

class {
    static {
      n(this, "_i7df3652d17398b");
    }
    constructor(e, r, t = 0) {
      ((this._recipientName = e), (this._text = r), (this.var_3616 = t));
    }
    static {
      d9t(this, "_i7df3652d17398b");
    }
    getMessageArray() {
      return [`${this._recipientName} ${this._text}`, this.var_3616];
    }
    dispose() {}
  }
