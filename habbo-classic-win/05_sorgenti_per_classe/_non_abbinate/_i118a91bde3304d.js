// Estratto da HabboAirLauncher.deobf.js, riga 90173.

class {
    static {
      n(this, "_i118a91bde3304d");
    }
    static {
      fTr(this, "_i118a91bde3304d");
    }
    _id = 0;
    _rb84b16640ea9c0 = 0;
    parse(e) {
      return ((this._id = e.readInteger()), (this._rb84b16640ea9c0 = e.readInteger()), !0);
    }
    flush() {
      return !0;
    }
    get id() {
      return this._id;
    }
    get _r8f2eab56c4c354() {
      return this._rb84b16640ea9c0;
    }
  }
