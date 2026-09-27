// Estratto da HabboAirLauncher.deobf.js, riga 91831.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_3406.as
// Nome offuscato: _i31a8cb9b8cd3db

class a {
    static {
      n(this, "class_3406");
    }
    static {
      MPr(this, "class_3406");
    }
    static const_237 = 500;
    static const_153 = 2;
    static const_1189 = 3;
    _offers = null;
    var_4912 = 0;
    flush() {
      return ((this._offers = null), !0);
    }
    parse(e) {
      ((this._offers = []), (this.var_4912 = e.readInteger()));
      let r = "",
        t = e.readInteger();
      for (let i = 0; i < t; i++) {
        let s = null,
          o = e.readInteger(),
          d = e.readInteger(),
          c = e.readInteger(),
          f = 0;
        if (c === Nl.const_84 || c === Nl.const_195)
          ((f = e.readInteger()),
            (s = zs.parseStuffData(e)),
            c === Nl.const_195 && (e.readBoolean(), (c = Nl.const_84)));
        else if (c === Nl.const_129) ((f = e.readInteger()), (r = e.readString()));
        else if (c === Nl.const_816) {
          if (((f = e.readInteger()), (s = _i5205b2079e8037._r41d3e1274ff5f9(mi.FORMAT_KEY)), !s)) return !1;
          ((s.uniqueSerialNumber = e.readInteger()),
            (s.uniqueSeriesSize = e.readInteger()),
            (c = Nl.const_84));
        }
        let l = e.readInteger(),
          b = e.readInteger(),
          _ = e.readInteger(),
          h = Number.NaN;
        (d === a.const_153 || d === a.const_1189) && (h = e.readLong());
        let p = new class_2451(o, f, c, r, s, l, d, b, _, -1, h);
        (i < a.const_237 && this._offers.push(p), (r = ""));
      }
      return !0;
    }
    get offers() {
      return this._offers;
    }
    get creditsWaiting() {
      return this.var_4912;
    }
  }
