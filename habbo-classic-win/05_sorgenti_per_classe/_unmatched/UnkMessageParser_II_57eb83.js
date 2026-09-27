// Extracted from HabboAirLauncher.deobf.js, line 72846.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i57eb83b3871bef

class {
    static {
      n(this, "UnkMessageParser_II_57eb83");
    }
    static {
      T8r(this, "UnkMessageParser_II_57eb83");
    }
    isOpen = !1;
    _r0a1a3a8752e558 = 0;
    flush() {
      return ((this.isOpen = !1), (this._r0a1a3a8752e558 = 0), !0);
    }
    parse(e) {
      return ((this.isOpen = e.readInteger() > 0), (this._r0a1a3a8752e558 = e.readInteger()), !0);
    }
  }
