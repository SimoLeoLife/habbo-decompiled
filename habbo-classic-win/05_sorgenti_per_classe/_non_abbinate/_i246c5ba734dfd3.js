// Estratto da HabboAirLauncher.deobf.js, riga 95909.

class {
    static {
      n(this, "_i246c5ba734dfd3");
    }
    static {
      YOr(this, "_i246c5ba734dfd3");
    }
    _r3213277b21adbf = [];
    flush() {
      return ((this._r3213277b21adbf = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r3213277b21adbf.push(new SavedSearch(e));
      return !0;
    }
    get _rff6faffdb109ff() {
      return this._r3213277b21adbf;
    }
  }
