// Extracted from HabboAirLauncher.deobf.js, line 102853.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3669.as
// Obfuscated name: _ied892f5ed74b96

class a {
    static {
      n(this, "class_3669");
    }
    static {
      HXr(this, "class_3669");
    }
    var_2784 = [];
    var_2969 = [];
    var_2801 = [];
    var_2571 = [];
    flush() {
      return (
        (this.var_2784 = []),
        (this.var_2969 = []),
        (this.var_2801 = []),
        (this.var_2571 = []),
        !0
      );
    }
    parse(e) {
      if (!e) return !1;
      this.flush();
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        switch (e.readInteger()) {
          case 0:
            this.var_2784.push(a._rfc69623582a1ac(e));
            break;
          case 1:
            this.var_2969.push(a._r135ae280919a1a(e));
            break;
          case 2:
            this.var_2801.push(a._rf00a4869c96d57(e));
            break;
          case 3:
            this.var_2571.push(a._r8bc14fa127eba6(e));
            break;
        }
      return !0;
    }
    static _rfc69623582a1ac(e) {
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readInteger(),
        s = e.readInteger(),
        o = Number(e.readString()),
        d = Number(e.readString()),
        c = e.readInteger(),
        f = e.readInteger(),
        l = e.readInteger(),
        b = e.readInteger(),
        _ = e.readInteger(),
        h = Number.NaN;
      return (
        e.readBoolean() && (h = e.readInteger()),
        new class_3458(
          c,
          new k(r, t, o),
          new k(i, s, d),
          f === 0 ? class_2720.const_846 : class_2720.const_1069,
          l,
          b,
          _,
          h,
        )
      );
    }
    static _r135ae280919a1a(e) {
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readInteger(),
        s = e.readInteger(),
        o = Number(e.readString()),
        d = Number(e.readString()),
        c = e.readInteger(),
        f = e.readInteger(),
        l = e.readInteger(),
        b = Number.NaN;
      e.readBoolean() && (b = e.readInteger());
      let _ = Number.NaN;
      return (
        e.readBoolean() && (_ = e.readInteger()),
        new class_2421(c, new k(r, t, o), new k(i, s, d), f, l, b, _)
      );
    }
    static _rf00a4869c96d57(e) {
      return new class_3071(
        e.readInteger(),
        e.readBoolean(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
        e.readInteger(),
      );
    }
    static _r8bc14fa127eba6(e) {
      return new class_3775(e.readInteger(), e.readInteger(), e.readInteger());
    }
    get _r707d42200755de() {
      return this.var_2784;
    }
    get _reb2fb4be961248() {
      return this.var_2969;
    }
    get _rc5713b8600cf71() {
      return this.var_2801;
    }
    get _rdc1154115b0c05() {
      return this.var_2571;
    }
  }
