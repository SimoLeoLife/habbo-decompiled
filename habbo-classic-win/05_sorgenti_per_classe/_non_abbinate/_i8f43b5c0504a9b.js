// Estratto da HabboAirLauncher.deobf.js, riga 65146.

class a {
    constructor(e, r, t, i, s, o) {
      this.type = e;
      this.keyBytes = r;
      this.expandedKeyBytes = t;
      this.effectiveKeyBits = i;
      this.IVSize = s;
      this.blockSize = o;
    }
    static {
      n(this, "_i8f43b5c0504a9b");
    }
    static _ra36b250b831b63 = 8;
    static _r57b96c1c23d464 = 9;
    static _r34618f0bf8d763 = 1;
    static _rc8b01846c5768e = 4;
    static _ra8027eb8d17ec3 = 5;
    static _r97cb16d265a326 = 6;
    static _r8f7b0831675187 = 7;
    static NULL = 0;
    static _r89c45815acd29c = 3;
    static _r44f63e705149d8 = 2;
    static _r0006565bf0b91c = 1;
    static _r44cb538fbf7b80 = 0;
    static _r01519719975fc6 = ["", "rc4", "rc4", "", "des-cbc", "3des-cbc", "des-cbc", "", "aes", "aes"];
    static _rd42da488213cae = new Map([
      [a.NULL, new a(a._r44cb538fbf7b80, 0, 0, 0, 0, 0)],
      [a._r0006565bf0b91c, new a(a._r44cb538fbf7b80, 5, 16, 40, 0, 0)],
      [a._r44f63e705149d8, new a(a._r44cb538fbf7b80, 16, 16, 128, 0, 0)],
      [a._r89c45815acd29c, new a(a._r34618f0bf8d763, 5, 16, 40, 8, 8)],
      [a._rc8b01846c5768e, new a(a._r34618f0bf8d763, 8, 8, 56, 8, 8)],
      [a._ra8027eb8d17ec3, new a(a._r34618f0bf8d763, 24, 24, 168, 8, 8)],
      [a._r97cb16d265a326, new a(a._r34618f0bf8d763, 5, 8, 40, 8, 8)],
      [a._r8f7b0831675187, new a(a._r34618f0bf8d763, 16, 16, 128, 8, 8)],
      [a._ra36b250b831b63, new a(a._r34618f0bf8d763, 16, 16, 128, 16, 16)],
      [a._r57b96c1c23d464, new a(a._r34618f0bf8d763, 32, 32, 256, 16, 16)],
    ]);
    static getType(e) {
      return a._r271d1f239565b2(e).type;
    }
    static _rca89ab3f404a76(e) {
      return a._r271d1f239565b2(e).keyBytes;
    }
    static _r2fb3a628d1f986(e) {
      return a._r271d1f239565b2(e).expandedKeyBytes;
    }
    static _re89f0f84c4d074(e) {
      return a._r271d1f239565b2(e).effectiveKeyBits;
    }
    static _ra26d3c0519111f(e) {
      return a._r271d1f239565b2(e).IVSize;
    }
    static _r6a35379c3690c0(e) {
      return a._r271d1f239565b2(e).blockSize;
    }
    static getCipher(e, r, t) {
      return t === r8r
        ? k2.getCipher(a._r01519719975fc6[e] ?? "", r, new _i76381ca4aafc01())
        : k2.getCipher(a._r01519719975fc6[e] ?? "", r, new _i446595eb657f16());
    }
    static _r271d1f239565b2(e) {
      let r = a._rd42da488213cae.get(e);
      if (r == null) throw new Error(`Unknown bulk cipher ${e.toString(16)}`);
      return r;
    }
  }
