// Extracted from HabboAirLauncher.deobf.js, line 98127.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/quest/class_4251.as
// Obfuscated name: _i63e0ce2e374a38

class {
    static {
      n(this, "class_4251");
    }
    static {
      qVr(this, "class_4251");
    }
    _prizes = [];
    get prizes() {
      return this._prizes;
    }
    flush() {
      return ((this._prizes = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._prizes.push(new class_4336(e));
      return !0;
    }
  }
