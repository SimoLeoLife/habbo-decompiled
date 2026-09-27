// Extracted from HabboAirLauncher.deobf.js, line 116720.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if542123396ec8d

class {
    static {
      n(this, "UnkMessageComposer_0args_f54212");
    }
    static {
      M0t(this, "UnkMessageComposer_0args_f54212");
    }
    _r0b00f5e1408abf = "FLASH29";
    dispose() {}
    getMessageArray() {
      let e = "55_classic-js-806140824ba8",
        r = this._rbcb9c0147a0268(),
        t = UnkConstants_800195.UNKNOWN;
      return (
        r.includes("windows") || r.includes("win32")
          ? (t = UnkConstants_800195._r3aae35f317d66e)
          : r.includes("mac")
            ? (t = UnkConstants_800195._r41c2bc452acc77)
            : r.includes("linux") && (t = UnkConstants_800195._rfe1d4cce4d6146),
        [e, this._r0b00f5e1408abf, t, UnkConstants_18319b._r88dd7367c257ca]
      );
    }
    _rbcb9c0147a0268() {
      return typeof navigator < "u"
        ? `${navigator.platform ?? ""} ${navigator.userAgent ?? ""}`.toLowerCase()
        : (globalThis.process?.platform ?? "").toLowerCase();
    }
  }
