// Extracted from HabboAirLauncher.deobf.js, line 76956.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_3287.as
// Obfuscated name: _i949c588c89c2fa

class {
    static {
      n(this, "class_3287");
    }
    static {
      hmr(this, "class_3287");
    }
    _r03f2910fbe9c48 = 0;
    get success() {
      return this._r03f2910fbe9c48 === 0;
    }
    get fail() {
      return this._r03f2910fbe9c48 === 1;
    }
    get _ree8455f9992bb7() {
      return this._r03f2910fbe9c48 === 2;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    flush() {
      return ((this._r03f2910fbe9c48 = 0), !0);
    }
    parse(e) {
      return ((this._r03f2910fbe9c48 = e.readShort()), !0);
    }
  }
