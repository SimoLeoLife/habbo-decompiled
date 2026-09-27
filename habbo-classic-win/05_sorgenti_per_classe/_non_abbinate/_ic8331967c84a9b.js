// Estratto da HabboAirLauncher.deobf.js, riga 90995.

class {
    static {
      n(this, "_ic8331967c84a9b");
    }
    static {
      gRr(this, "_ic8331967c84a9b");
    }
    _r5a6a3441934cb5 = -1;
    _r04e2d742e2ada0 = -1;
    flush() {
      return ((this._r04e2d742e2ada0 = -1), (this._r5a6a3441934cb5 = -1), !0);
    }
    parse(e) {
      return (
        (this._r04e2d742e2ada0 = e.readInteger()),
        (this._r5a6a3441934cb5 = e.readInteger()),
        !0
      );
    }
    get _r6153f7218b625e() {
      return this._r04e2d742e2ada0;
    }
    get _r87e7818b304030() {
      return this._r5a6a3441934cb5;
    }
  }
