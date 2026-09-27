// Estratto da HabboAirLauncher.deobf.js, riga 96303.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_208/class_4131.as
// Nome offuscato: _id590ec350a5dbf

class {
    static {
      n(this, "class_4131");
    }
    static {
      IFr(this, "class_4131");
    }
    _nftAvatars = [];
    flush() {
      return ((this._nftAvatars = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._nftAvatars.push(new NftWardrobeItem(e));
      return !0;
    }
    get nftAvatars() {
      return this._nftAvatars;
    }
  }
