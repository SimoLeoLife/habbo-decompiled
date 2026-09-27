// Extracted from HabboAirLauncher.deobf.js, line 126184.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_2524.as
// Obfuscated name: _if6d3e0e768e6a9

class {
    static {
      n(this, "class_2524");
    }
    static {
      gyt(this, "class_2524");
    }
    _r8b2f2fafe7a71a = [];
    flush() {
      return ((this._r8b2f2fafe7a71a = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      this._r8b2f2fafe7a71a = [];
      for (let t = 0; t < r; t++) this._r8b2f2fafe7a71a.push(e.readInteger());
      return !0;
    }
    get _r261d20c14810e0() {
      return this._r8b2f2fafe7a71a;
    }
  }
