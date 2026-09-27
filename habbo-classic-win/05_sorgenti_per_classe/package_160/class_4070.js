// Extracted from HabboAirLauncher.deobf.js, line 106373.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_160/class_4070.as
// Obfuscated name: _i803e156dac6643

class {
    static {
      n(this, "class_4070");
    }
    static {
      kqr(this, "class_4070");
    }
    var_3318 = -1;
    _rf7a78e8a91d3c2 = [];
    get _r324a52e782ac7d() {
      return this.var_3318;
    }
    get _r7469b99b1f3a7b() {
      return this._rf7a78e8a91d3c2;
    }
    flush() {
      return ((this.var_3318 = -1), (this._rf7a78e8a91d3c2 = []), !0);
    }
    parse(e) {
      this.var_3318 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readInteger(),
          o = e.readString(),
          d = e.readString();
        this._rf7a78e8a91d3c2.push(new class_2354(i, s, o, d));
      }
      return !0;
    }
  }
