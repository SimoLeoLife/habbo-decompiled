// Estratto da HabboAirLauncher.deobf.js, riga 87950.

class {
    static {
      n(this, "_i7de68aff63ab6b");
    }
    static {
      LWr(this, "_i7de68aff63ab6b");
    }
    var_3156 = -1;
    _raddeac52b47e68 = null;
    flush() {
      return ((this.var_3156 = -1), (this._raddeac52b47e68 = null), !0);
    }
    parse(e) {
      return (
        (this.var_3156 = e.readInteger()),
        (this._raddeac52b47e68 = e.readString()),
        !0
      );
    }
    get _re812cd9299d86c() {
      return this.var_3156;
    }
    get _r7ec2737e897909() {
      return this._raddeac52b47e68;
    }
  }
