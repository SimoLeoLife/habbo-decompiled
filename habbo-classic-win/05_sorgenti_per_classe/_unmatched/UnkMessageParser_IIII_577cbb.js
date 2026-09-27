// Extracted from HabboAirLauncher.deobf.js, line 74561.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i577cbbd87a9b7a

class {
    static {
      n(this, "UnkMessageParser_IIII_577cbb");
    }
    static {
      v9r(this, "UnkMessageParser_IIII_577cbb");
    }
    _r551d99ad913889 = 0;
    _r6a9dca7b6b5588 = 0;
    offers = [];
    _r5e50ad5b106745 = null;
    flush() {
      return (
        this._r5e50ad5b106745 && (this._r5e50ad5b106745.dispose(), (this._r5e50ad5b106745 = null)),
        (this.offers = []),
        !0
      );
    }
    parse(e) {
      ((this._r551d99ad913889 = e.readInteger()),
        (this._r6a9dca7b6b5588 = e.readInteger()),
        (this.offers = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.offers.push(new UnkClass_e671c5(e));
      ((this._r5e50ad5b106745 = new B()), (r = e.readInteger()));
      for (let t = 0; t < r; t++) {
        let i = new class_3518(e);
        this._r5e50ad5b106745.add(i.offerId, i);
      }
      return !0;
    }
  }
