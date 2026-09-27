// Extracted from HabboAirLauncher.deobf.js, line 101782.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3274.as
// Obfuscated name: _i9f0e2752bab3af

class {
    static {
      n(this, "class_3274");
    }
    static {
      iXr(this, "class_3274");
    }
    _id = -1;
    var_2589 = [];
    var_204 = null;
    get id() {
      return this._id;
    }
    get avatar() {
      return this.var_204;
    }
    get objectList() {
      return this.var_2589;
    }
    flush() {
      return ((this._id = -1), (this.var_204 = null), (this.var_2589 = []), !0);
    }
    parse(e) {
      if (!e) return !1;
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readInteger(),
        s = e.readInteger(),
        o = e.readInteger();
      this.var_2589 = [];
      for (let c = 0; c < o; c++) {
        let f = e.readInteger(),
          l = Number(e.readString()),
          b = Number(e.readString()),
          _ = new k(r, t, l),
          h = new k(i, s, b);
        this.var_2589.push(new class_2720(f, _, h));
      }
      if (((this._id = e.readInteger()), !e.bytesAvailable)) return !0;
      let d = e.readInteger();
      switch (d) {
        case 0:
          break;
        case 1:
        case 2: {
          let c = e.readInteger(),
            f = Number(e.readString()),
            l = Number(e.readString()),
            b = new k(r, t, f),
            _ = new k(i, s, l),
            h = d === 1 ? class_2720.const_846 : class_2720.const_1069;
          this.var_204 = new class_2720(c, b, _, h);
          break;
        }
        default:
          break;
      }
      return !0;
    }
  }
