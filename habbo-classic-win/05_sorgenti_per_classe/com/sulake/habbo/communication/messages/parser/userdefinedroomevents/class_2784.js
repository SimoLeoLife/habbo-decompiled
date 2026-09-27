// Estratto da HabboAirLauncher.deobf.js, riga 126127.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_2784.as
// Nome offuscato: _ic909b52b32226f

class {
    static {
      n(this, "class_2784");
    }
    static {
      uyt(this, "class_2784");
    }
    var_692 = [];
    flush() {
      return ((this.var_692 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      this.var_692 = [];
      for (let t = 0; t < r; t++) {
        let i = new B(),
          s = e.readInteger(),
          o = e.readBoolean(),
          d = e.readInteger(),
          c = e.readInteger(),
          f = e.readBoolean(),
          l = e.readInteger(),
          b = e.readInteger(),
          _ = e.readInteger(),
          h = e.readInteger(),
          p = e.readInteger(),
          m = e.readInteger(),
          v = e.readLong(),
          w = e.readLong(),
          I = e.readInteger();
        for (let C = 0; C < I; C++) i.add(e.readString(), e.readString());
        this.var_692.push(new _i4ba2041f482297(s, o, d, c, f, l, b, _, h, p, m, v, w, i));
      }
      return !0;
    }
    get configs() {
      return this.var_692;
    }
  }
