// Estratto da HabboAirLauncher.deobf.js, riga 74561.

class {
    static {
      n(this, "_i577cbbd87a9b7a");
    }
    static {
      v9r(this, "_i577cbbd87a9b7a");
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
      for (let t = 0; t < r; t++) this.offers.push(new _ie671c5da796359(e));
      ((this._r5e50ad5b106745 = new B()), (r = e.readInteger()));
      for (let t = 0; t < r; t++) {
        let i = new class_3518(e);
        this._r5e50ad5b106745.add(i.offerId, i);
      }
      return !0;
    }
  }
