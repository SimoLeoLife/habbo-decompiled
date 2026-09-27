// Extracted from HabboAirLauncher.deobf.js, line 107864.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/class_3391.as
// Obfuscated name: _iba0fdd1889b1d7

class extends class_2396 {
    static {
      n(this, "class_3391");
    }
    static {
      met(this, "class_3391");
    }
    _delayInPulses = 0;
    constructor(e) {
      super(e);
    }
    readDefinitionSpecifics(e) {
      this._delayInPulses = e.readInteger();
    }
    get delayInPulses() {
      return this._delayInPulses;
    }
    set delayInPulses(e) {
      this._delayInPulses = e;
    }
  }
