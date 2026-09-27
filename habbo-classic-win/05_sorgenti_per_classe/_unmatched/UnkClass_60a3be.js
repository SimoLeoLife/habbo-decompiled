// Extracted from HabboAirLauncher.deobf.js, line 65247.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i60a3bee9c5ecc1

class a {
  constructor(e, r, t) {
    this.cipher = e;
    this.hash = r;
    this.key = t;
  }
  static {
    n(this, "UnkClass_60a3be");
  }
  static _r6f56cd8a274f58 = 27;
  static _ra0df8793b1faa6 = 52;
  static _rfdad926f64ee3f = 58;
  static _reaff1aae652f3d = 26;
  static _r84266a8bcea831 = 24;
  static _rf2c55615122f07 = 13;
  static _rd3b046b01b1560 = 48;
  static _r40f358929d919d = 54;
  static _r598ac510c91e34 = 12;
  static _r13b78116220d23 = 16;
  static _r04afa289316172 = 49;
  static _r6b250e9b65d577 = 55;
  static _r2c334cdfcfc4dd = 15;
  static _r14b85f107f7a66 = 19;
  static _rac9b686e58aef2 = 50;
  static _rd4f8ad9b418e22 = 56;
  static _rc8a0b0127668b3 = 18;
  static _r90f768e99cca95 = 22;
  static _r669bcca22835a0 = 51;
  static _r3ffcae4dfa8325 = 57;
  static _rb04c63cd2b993d = 21;
  static _rb8e9907133e066 = 0;
  static _r900267779ff259 = 10;
  static _r40a8cc5222514b = 47;
  static _r5342a7aa1abd59 = 53;
  static _r34f9a87a930695 = 9;
  static _r7fc68bdfc6428c = 7;
  static _rfbadb8e32e8e0c = 1;
  static _r07a941e8cc2196 = 2;
  static _r87d1de20ae71e5 = 4;
  static _r4496085085db8b = 5;
  static _rd42da488213cae = new Map([
    [a._rb8e9907133e066, new a(zc.NULL, Qc.NULL, Pl.NULL)],
    [a._rfbadb8e32e8e0c, new a(zc.NULL, Qc.MD5, Pl.RSA)],
    [a._r07a941e8cc2196, new a(zc.NULL, Qc.SHA1, Pl.RSA)],
    [a._r87d1de20ae71e5, new a(zc._r44f63e705149d8, Qc.MD5, Pl.RSA)],
    [a._r4496085085db8b, new a(zc._r44f63e705149d8, Qc.SHA1, Pl.RSA)],
    [a._r34f9a87a930695, new a(zc._rc8b01846c5768e, Qc.SHA1, Pl.RSA)],
    [a._r900267779ff259, new a(zc._ra8027eb8d17ec3, Qc.SHA1, Pl.RSA)],
    [a._r40a8cc5222514b, new a(zc._ra36b250b831b63, Qc.SHA1, Pl.RSA)],
    [a._r5342a7aa1abd59, new a(zc._r57b96c1c23d464, Qc.SHA1, Pl.RSA)],
  ]);
  static _rfd2c68e2945060(e) {
    return a._r271d1f239565b2(e).cipher;
  }
  static _r6b74d9fd2c46df(e) {
    return a._r271d1f239565b2(e).hash;
  }
  static _r9e777c6e6a4254(e) {
    return a._r271d1f239565b2(e).key;
  }
  static _r9db207bfc816cd() {
    return [
      a._r5342a7aa1abd59,
      a._r900267779ff259,
      a._r40a8cc5222514b,
      a._r4496085085db8b,
      a._r87d1de20ae71e5,
      a._r34f9a87a930695,
    ];
  }
  static _r271d1f239565b2(e) {
    let r = a._rd42da488213cae.get(e);
    if (r == null) throw new Error(`Unknown cipher ${e.toString(16)}`);
    return r;
  }
}
