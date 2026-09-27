// Estratto da HabboAirLauncher.deobf.js, riga 116720.

class {
    static {
      n(this, "_if542123396ec8d");
    }
    static {
      M0t(this, "_if542123396ec8d");
    }
    _r0b00f5e1408abf = "FLASH29";
    dispose() {}
    getMessageArray() {
      let e = "55_classic-js-806140824ba8",
        r = this._rbcb9c0147a0268(),
        t = _i800195a40a1adf.UNKNOWN;
      return (
        r.includes("windows") || r.includes("win32")
          ? (t = _i800195a40a1adf._r3aae35f317d66e)
          : r.includes("mac")
            ? (t = _i800195a40a1adf._r41c2bc452acc77)
            : r.includes("linux") && (t = _i800195a40a1adf._rfe1d4cce4d6146),
        [e, this._r0b00f5e1408abf, t, _i18319bdd617093._r88dd7367c257ca]
      );
    }
    _rbcb9c0147a0268() {
      return typeof navigator < "u"
        ? `${navigator.platform ?? ""} ${navigator.userAgent ?? ""}`.toLowerCase()
        : (globalThis.process?.platform ?? "").toLowerCase();
    }
  }
