// Extracted from HabboAirLauncher.deobf.js, line 75894.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i81aa8987d4c146

class {
    static {
      n(this, "UnkMessageParser_I_81aa89");
    }
    static {
      F7r(this, "UnkMessageParser_I_81aa89");
    }
    _rdbbf3a43de3aa8 = [];
    get _rd0d7bda27edc47() {
      return this._rdbbf3a43de3aa8;
    }
    flush() {
      return ((this._rdbbf3a43de3aa8 = []), !1);
    }
    _r7e512aa496c54d() {
      return this._rdbbf3a43de3aa8.length > 0;
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rdbbf3a43de3aa8.push(new UnkClass_ca1162(e));
      return !0;
    }
  }
