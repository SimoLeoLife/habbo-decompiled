// Estratto da HabboAirLauncher.deobf.js, riga 64436.

class a {
  static {
    n(this, "_if444fed2adec69");
  }
  static getCipher(e, r, t = null) {
    let i = e.split("-");
    switch (i[0]) {
      case "simple": {
        i.shift();
        let s = a.getCipher(i.join("-"), r, t);
        return s instanceof _i5b44e54477e1aa ? new _i6d6ab0e3a4eb80(s) : s;
      }
      case "aes":
      case "aes128":
      case "aes192":
      case "aes256":
        return (
          i.shift(),
          Number(r.length * 8) === Number(i[0]) && i.shift(),
          a.getMode(i[0], new _ia630b881ad585d(r), t)
        );
      case "bf":
      case "blowfish":
        return (i.shift(), a.getMode(i[0], new _i4cf72658265a3b(r), t));
      case "des":
        i.shift();
        {
          let s = i[0] ?? "";
          if (s !== "ede" && s !== "ede3") return a.getMode(s, new jv(r), t);
          i.length === 1 && i.push("ecb");
        }
      case "3des":
      case "des3":
        return (i.shift(), a.getMode(i[0], new ine(r), t));
      case "xtea":
        return (i.shift(), a.getMode(i[0], new nne(r), t));
      case "rc4":
        return (i.shift(), new ARC4(r));
      default:
        return null;
    }
  }
  static _r880d6ec8ddf62f(e) {
    let r = e.split("-");
    switch (r[0]) {
      case "simple":
        return (r.shift(), a._r880d6ec8ddf62f(r.join("-")));
      case "aes128":
        return 16;
      case "aes192":
        return 24;
      case "aes256":
        return 32;
      case "aes":
        return (r.shift(), parseInt(r[0] ?? "0", 10) / 8);
      case "bf":
      case "blowfish":
        return 16;
      case "des":
        switch ((r.shift(), r[0] ?? "")) {
          case "ede":
            return 16;
          case "ede3":
            return 24;
          default:
            return 8;
        }
      case "3des":
      case "des3":
        return 24;
      case "xtea":
        return 8;
      case "rc4":
        return parseInt(r[1] ?? "0", 10) > 0 ? parseInt(r[1] ?? "0", 10) / 8 : 16;
      default:
        return 0;
    }
  }
  static _r1b3e073998897b(e) {
    switch (e) {
      case "md2":
        return new TZ();
      case "md5":
        return new D_();
      case "sha":
      case "sha1":
        return new Xh();
      case "sha224":
        return new _i6737ff69adc891();
      case "sha256":
        return new NC();
      default:
        return null;
    }
  }
  static _rf312184dd8d752(e) {
    let r = e.split("-");
    r[0] === "hmac" && r.shift();
    let t = r.length > 1 ? parseInt(r[1] ?? "0", 10) : 0,
      i = a._r1b3e073998897b(r[0] ?? "");
    return i != null ? new _ie6a0f66e9b875c(i, t) : null;
  }
  static _r13850ee1fb146c(e) {
    let r = e.split("-");
    r[0] === "mac" && r.shift();
    let t = r.length > 1 ? parseInt(r[1] ?? "0", 10) : 0,
      i = a._r1b3e073998897b(r[0] ?? "");
    return i != null ? new _ia62302643898cb(i, t) : null;
  }
  static _re7bc3691126e93(e) {
    switch (e) {
      case "null":
        return new _i4a189fb4d26e19();
      case "pkcs5":
      default:
        return new _i6e169014c9a468();
    }
  }
  static _ra73117df627425(e, r) {
    return M2._r5c6f3199866788(r, e);
  }
  static getMode(e, r, t = null) {
    switch (e) {
      case "ecb":
        return new _ie025516bb46c53(r, t);
      case "cfb":
        return new _i525a594d4e1c93(r, t);
      case "cfb8":
        return new _i11952523c7fcbd(r, t);
      case "ofb":
        return new _i07cf43dfd172e2(r, t);
      case "ctr":
        return new _ifc85f8e45ad121(r, t);
      case "cbc":
      default:
        return new _ifa93e4524b88a5(r, t);
    }
  }
}
