// Extracted from HabboAirLauncher.deobf.js, line 108476.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_3191.as
// Obfuscated name: _i3982bc84c6517b

class {
    static {
      n(this, "class_3191");
    }
    static {
      Brt(this, "class_3191");
    }
    _localizationKey = null;
    _parameters = null;
    flush() {
      return ((this._localizationKey = null), (this._parameters = null), !0);
    }
    parse(e) {
      ((this._localizationKey = e.readString()), (this._parameters = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._parameters.push(new class_3079(e));
      return !0;
    }
    get localizationKey() {
      return this._localizationKey;
    }
    get parameters() {
      return this._parameters;
    }
  }
