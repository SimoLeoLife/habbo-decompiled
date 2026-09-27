// Extracted from HabboAirLauncher.deobf.js, line 92742.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_3563.as
// Obfuscated name: _i46d12be9f5d085

class {
    static {
      n(this, "class_3563");
    }
    static {
      kSr(this, "class_3563");
    }
    var_2688 = null;
    get issueData() {
      return this.var_2688;
    }
    flush() {
      return ((this.var_2688 = null), !0);
    }
    parse(e) {
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readInteger(),
        s = e.readInteger(),
        o = e.readInteger(),
        d = e.readInteger(),
        c = e.readInteger(),
        f = e.readInteger(),
        l = e.readString(),
        b = e.readInteger(),
        _ = e.readString(),
        h = e.readInteger(),
        p = e.readString(),
        m = e.readString(),
        v = e.readInteger(),
        w = e.readInteger(),
        I = [];
      for (let C = 0; C < w; C++) I.push(new class_4007(e));
      return ((this.var_2688 = new class_3267(r, t, i, s, o, d, c, f, l, b, _, h, p, m, v, I)), !0);
    }
  }
