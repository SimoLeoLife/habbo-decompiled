// Extracted from HabboAirLauncher.deobf.js, line 91714.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_2781.as
// Obfuscated name: _i1eeee38d5ad055

class a {
    static {
      n(this, "class_2781");
    }
    static {
      wPr(this, "class_2781");
    }
    static const_816 = 3;
    static const_84 = 1;
    static const_129 = 2;
    static const_195 = 4;
    static const_237 = 500;
    _offers = null;
    var_5276 = 0;
    flush() {
      return ((this._offers = null), !0);
    }
    parse(e) {
      this._offers = [];
      let r = "",
        t = e.readInteger();
      for (let i = 0; i < t; i++) {
        let s = null,
          o = !1,
          d = !1,
          c = e.readInteger(),
          f = e.readInteger(),
          l = e.readInteger(),
          b = 0;
        if (l === a.const_84 || l === a.const_195)
          ((b = e.readInteger()),
            (s = zs.parseStuffData(e)),
            (o = l === a.const_195),
            o && ((d = e.readBoolean()), (l = a.const_84)));
        else if (l === a.const_129) ((b = e.readInteger()), (r = e.readString()));
        else if (l === a.const_816) {
          if (((b = e.readInteger()), (s = UnkClass_5205b2._r41d3e1274ff5f9(mi.FORMAT_KEY)), !s)) return !1;
          ((s.uniqueSerialNumber = e.readInteger()),
            (s.uniqueSeriesSize = e.readInteger()),
            (l = a.const_84));
        }
        let _ = e.readInteger(),
          h = e.readInteger(),
          p = e.readInteger(),
          m = e.readInteger(),
          v = new class_2451(c, b, l, r, s, _, f, h, p, m, Number.NaN, o, d);
        (i < a.const_237 && this._offers.push(v), (r = ""));
      }
      return ((this.var_5276 = e.readInteger()), !0);
    }
    get offers() {
      return this._offers;
    }
    get totalItemsFound() {
      return this.var_5276;
    }
  }
