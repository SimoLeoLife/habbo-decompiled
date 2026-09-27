// Extracted from HabboAirLauncher.deobf.js, line 105114.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_3085.as
// Obfuscated name: _i3579588c53be5d

class {
    static {
      n(this, "class_3085");
    }
    static {
      Q$r(this, "class_3085");
    }
    _flatId = 0;
    _r4f1fff31ed0e33 = new B();
    _r8cbd57fa88e76c = 0;
    get flatId() {
      return this._flatId;
    }
    get _r20948525010a05() {
      return this._r8cbd57fa88e76c;
    }
    flush() {
      return (this._r4f1fff31ed0e33.reset(), !0);
    }
    parse(e) {
      (this._r4f1fff31ed0e33.reset(), (this._flatId = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readInteger();
        t === 0 && (this._r8cbd57fa88e76c = s);
        let o = new class_2984(i, s),
          d = e.readInteger();
        for (let c = 0; c < d; c++) o.addQueue(e.readString(), e.readInteger());
        this._r4f1fff31ed0e33.add(o.target, o);
      }
      return !0;
    }
    getQueueSetTargets() {
      return this._r4f1fff31ed0e33.getKeys();
    }
    getQueueSet(e) {
      return this._r4f1fff31ed0e33.getValue(e) ?? null;
    }
  }
