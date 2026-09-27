// Extracted from HabboAirLauncher.deobf.js, line 90995.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic8331967c84a9b

class {
    static {
      n(this, "UnkMessageParser_II_c83319");
    }
    static {
      gRr(this, "UnkMessageParser_II_c83319");
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
