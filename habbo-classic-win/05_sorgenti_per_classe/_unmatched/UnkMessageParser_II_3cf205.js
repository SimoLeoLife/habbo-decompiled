// Extracted from HabboAirLauncher.deobf.js, line 104680.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3cf2056fd34c73

class {
    static {
      n(this, "UnkMessageParser_II_3cf205");
    }
    static {
      d$r(this, "UnkMessageParser_II_3cf205");
    }
    _rfee89969f2b3df = 0;
    _re06bf9a4168b34 = 0;
    get _re241e3a6abe789() {
      return this._rfee89969f2b3df;
    }
    get _r3d512a8ec34141() {
      return this._re06bf9a4168b34;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._rfee89969f2b3df = e.readInteger()),
        (this._re06bf9a4168b34 = e.readInteger()),
        !0
      );
    }
  }
