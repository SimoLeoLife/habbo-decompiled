// Estratto da HabboAirLauncher.deobf.js, riga 87848.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3922.as
// Nome offuscato: _i82ab165270dbef

class {
    static {
      n(this, "class_3922");
    }
    static {
      BWr(this, "class_3922");
    }
    _r4c7d51bb307872 = null;
    var_1957 = null;
    flush() {
      return (
        this._r4c7d51bb307872 && this._r4c7d51bb307872.dispose(),
        (this._r4c7d51bb307872 = null),
        this.var_1957 && this.var_1957.dispose(),
        (this.var_1957 = null),
        !0
      );
    }
    parse(e) {
      ((this._r4c7d51bb307872 = new B()), (this.var_1957 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this._r4c7d51bb307872.add(i, s);
      }
      r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this.var_1957.add(i, s);
      }
      return !0;
    }
    get _rc0def96722cca4() {
      return this._r4c7d51bb307872;
    }
    get _r6f078d78669557() {
      return this.var_1957;
    }
  }
