// Estratto da HabboAirLauncher.deobf.js, riga 126223.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_2855.as
// Nome offuscato: _i5a98b86347ddd2

class {
    static {
      n(this, "class_2855");
    }
    static {
      Iyt(this, "class_2855");
    }
    _r7e78ea8fa950ce = [];
    flush() {
      return ((this._r7e78ea8fa950ce = []), !0);
    }
    parse(e) {
      let r = e.readBoolean(),
        t = e.readInteger();
      this._r7e78ea8fa950ce = [];
      for (let i = 0; i < t; i++) {
        let s = e.readString(),
          o = e.readBoolean() || r,
          d = e.readBoolean(),
          c = e.readInteger(),
          f = e.readLong(),
          l = e.readBoolean(),
          b = null,
          _ = null;
        l && ((b = e.readLong()), (_ = e.readLong()));
        let h = new B(),
          p = e.readInteger();
        for (let m = 0; m < p; m++) h.add(e.readString(), e.readString());
        this._r7e78ea8fa950ce.push(new KZ(s, o, d, c, f, b, _, h));
      }
      return !0;
    }
    get _rf28e89ae590c43() {
      return this._r7e78ea8fa950ce;
    }
  }
