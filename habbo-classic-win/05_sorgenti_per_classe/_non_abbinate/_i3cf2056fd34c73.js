// Estratto da HabboAirLauncher.deobf.js, riga 104680.

class {
    static {
      n(this, "_i3cf2056fd34c73");
    }
    static {
      d$r(this, "_i3cf2056fd34c73");
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
