// Estratto da HabboAirLauncher.deobf.js, riga 101684.

class {
    static {
      n(this, "_i74713bc7a10778");
    }
    static {
      qQr(this, "_i74713bc7a10778");
    }
    _r97b83bf2105c76 = !1;
    _r45e3b5e6b13590 = 1;
    _r02ad9c4ed7f3ba = 1;
    get _rde6cf27c3b230d() {
      return this._r97b83bf2105c76;
    }
    get _rd42fde7a8fe0db() {
      return this._r45e3b5e6b13590;
    }
    get _r0337760c226f75() {
      return this._r02ad9c4ed7f3ba;
    }
    flush() {
      return ((this._r97b83bf2105c76 = !1), (this._r45e3b5e6b13590 = 1), (this._r02ad9c4ed7f3ba = 1), !0);
    }
    parse(e) {
      if (!e) return !1;
      this._r97b83bf2105c76 = e.readBoolean();
      let r = e.readInteger(),
        t = e.readInteger();
      return (
        r < -2 ? (r = -2) : r > 1 && (r = 1),
        t < -2 ? (t = -2) : t > 1 && (t = 1),
        (this._r45e3b5e6b13590 = Math.pow(2, r)),
        (this._r02ad9c4ed7f3ba = Math.pow(2, t)),
        !0
      );
    }
  }
