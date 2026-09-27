// Extracted from HabboAirLauncher.deobf.js, line 91039.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibf261a8c49fde6

class {
    static {
      n(this, "UnkMessageParser_II_bf261a");
    }
    static {
      IRr(this, "UnkMessageParser_II_bf261a");
    }
    _rdb237ac9da5553 = !1;
    _ra87a412e5902c1 = -1;
    flush() {
      return ((this._ra87a412e5902c1 = -1), (this._rdb237ac9da5553 = !1), !0);
    }
    parse(e) {
      return (
        (this._ra87a412e5902c1 = e.readInteger()),
        (this._rdb237ac9da5553 = e.readInteger() > 0),
        !0
      );
    }
    get userID() {
      return this._ra87a412e5902c1;
    }
    get _r22db0312772e45() {
      return this._rdb237ac9da5553;
    }
  }
