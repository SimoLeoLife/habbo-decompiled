// Extracted from HabboAirLauncher.deobf.js, line 90173.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i118a91bde3304d

class {
    static {
      n(this, "UnkMessageParser_II_118a91");
    }
    static {
      fTr(this, "UnkMessageParser_II_118a91");
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
