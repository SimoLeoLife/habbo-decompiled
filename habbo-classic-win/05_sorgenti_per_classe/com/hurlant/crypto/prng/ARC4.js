// Estratto da HabboAirLauncher.deobf.js, riga 62490.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/prng/ARC4.as
// Nome offuscato: _i94ddee1971fa98

class {
  static {
    n(this, "ARC4");
  }
  var_2162 = 0;
  j = 0;
  S = new Array(256).fill(0);
  name_7 = 256;
  constructor(e = null) {
    if (e != null) this.init(e);
    else for (let r = 0; r < this.name_7; r++) this.S[r] = r;
  }
  _r79579c084e9a0f() {
    return this.name_7;
  }
  init(e) {
    let r = e.toUint8Array();
    for (let i = 0; i < this.name_7; i++) this.S[i] = i;
    let t = 0;
    for (let i = 0; i < this.name_7; i++)
      ((t = (t + (this.S[i] ?? 0) + (r[i % r.length] ?? 0)) & 255), this.swap(i, t));
    ((this.var_2162 = 0), (this.j = 0));
  }
  next() {
    return (
      (this.var_2162 = (this.var_2162 + 1) & 255),
      (this.j =
        (this.j + (this.S[this.var_2162] ?? 0)) & 255),
      this.swap(this.var_2162, this.j),
      (this.S[
        (this.S[this.var_2162] + this.S[this.j]) & 255
      ] ?? 0) & 255
    );
  }
  _r6a35379c3690c0() {
    return 1;
  }
  encrypt(e) {
    let r = Array.from(e.toUint8Array(), (t) => t & 255);
    for (let t = 0; t < r.length; t++) r[t] = (r[t] ?? 0) ^ this.next();
    (e.clear(), e.writeBytes(re.compress(Uint8Array.from(r))), (e.position = 0));
  }
  decrypt(e) {
    this.encrypt(e);
  }
  dispose() {
    for (let e = 0; e < this.S.length; e++)
      this.S[e] = Math.floor(Math.random() * 256);
    ((this.S.length = 0), (this.var_2162 = 0), (this.j = 0), class_4036.gc());
  }
  toString() {
    return "rc4";
  }
  swap(e, r) {
    let t = this.S[e] ?? 0;
    ((this.S[e] = this.S[r] ?? 0), (this.S[r] = t));
  }
}
