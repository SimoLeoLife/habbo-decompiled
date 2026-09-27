// Extracted from HabboAirLauncher.deobf.js, line 153820.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/encryption/ArcFour.as
// Obfuscated name: _i24b36eb1576e5c

class {
    static {
      n(this, "ArcFour");
    }
    static {
      pCt(this, "ArcFour");
    }
    var_2162 = 0;
    j = 0;
    sbox = [];
    var_4754 = 0;
    var_5596 = 0;
    _raedd2418489d43 = [];
    init(e) {
      let r = e.toUint8Array(),
        t = e.length;
      for (this.var_2162 = 0; this.var_2162 < 256; this.var_2162++)
        this.sbox[this.var_2162] = this.var_2162;
      for (
        this.j = 0, this.var_2162 = 0;
        this.var_2162 < 256;
        this.var_2162++
      ) {
        this.j =
          (this.j +
            this.sbox[this.var_2162] +
            r[this.var_2162 % t]) %
          256;
        let i = this.sbox[this.var_2162];
        ((this.sbox[this.var_2162] = this.sbox[this.j]),
          (this.sbox[this.j] = i));
      }
      ((this.var_2162 = 0), (this.j = 0));
    }
    _rb665561956d187(e) {
      let r = e.toUint8Array(),
        t = 0;
      for (; t < r.length;) ((r[t] ^= this.next()), (t += 1));
      (e.clear(), e.writeBytes(re.compress(r)));
    }
    _r4bed6f4d0b94a4(e) {
      this._rb665561956d187(e);
    }
    mark() {
      ((this.var_4754 = this.var_2162),
        (this.var_5596 = this.j),
        (this._raedd2418489d43 = this.sbox.slice()));
    }
    reset() {
      ((this.var_2162 = this.var_4754),
        (this.j = this.var_5596),
        (this.sbox = this._raedd2418489d43.slice()));
    }
    next() {
      ((this.var_2162 = (this.var_2162 + 1) & 255),
        (this.j =
          (this.j + this.sbox[this.var_2162]) & 255));
      let e = this.sbox[this.var_2162];
      return (
        (this.sbox[this.var_2162] = this.sbox[this.j]),
        (this.sbox[this.j] = e),
        this.sbox[(e + this.sbox[this.var_2162]) & 255]
      );
    }
  }
