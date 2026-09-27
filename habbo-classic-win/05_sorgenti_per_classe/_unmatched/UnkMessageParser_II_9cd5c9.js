// Extracted from HabboAirLauncher.deobf.js, line 78538.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9cd5c96c2d404f

class {
    static {
      n(this, "UnkMessageParser_II_9cd5c9");
    }
    static {
      Xvr(this, "UnkMessageParser_II_9cd5c9");
    }
    _r8a4c820d8c33ee = 0;
    _r07b208920b7aa2 = [];
    get _ra60778ee193e16() {
      return this._r8a4c820d8c33ee;
    }
    get _r6ec858df0bd32d() {
      return this._r07b208920b7aa2;
    }
    flush() {
      return ((this._r07b208920b7aa2 = []), !0);
    }
    parse(e) {
      this._r8a4c820d8c33ee = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r07b208920b7aa2.push(new class_2024(e));
      return !0;
    }
  }
