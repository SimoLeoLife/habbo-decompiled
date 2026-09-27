// Extracted from HabboAirLauncher.deobf.js, line 77146.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iaa04a27dbbde94

class {
    static {
      n(this, "UnkMessageParser_II_aa04a2");
    }
    static {
      Pmr(this, "UnkMessageParser_II_aa04a2");
    }
    _r698082ebce2833 = null;
    _r18c5cfb858d468 = null;
    get _r2b9a530a361f21() {
      return this._r698082ebce2833;
    }
    get _r93e1ed108b0c32() {
      return this._r18c5cfb858d468;
    }
    flush() {
      return ((this._r698082ebce2833 = null), (this._r18c5cfb858d468 = null), !0);
    }
    parse(e) {
      this._r698082ebce2833 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r698082ebce2833.push(new UnkSubclassOf_class_2508_04a79d(e));
      ((this._r18c5cfb858d468 = []), (r = e.readInteger()));
      for (let t = 0; t < r; t++) this._r18c5cfb858d468.push(new UnkSubclassOf_class_2508_04a79d(e));
      return !0;
    }
  }
