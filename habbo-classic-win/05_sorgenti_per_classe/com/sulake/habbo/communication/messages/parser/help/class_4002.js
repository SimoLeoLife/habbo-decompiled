// Extracted from HabboAirLauncher.deobf.js, line 88358.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4002.as
// Obfuscated name: _ib5e6eb23d170c3

class {
    static {
      n(this, "class_4002");
    }
    static {
      uBr(this, "class_4002");
    }
    var_2440 = 0;
    _roomName = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_2440 = e.readInteger()),
        (this._roomName = e.readString()),
        !0
      );
    }
    _r9bf502fda037f6() {
      return this.var_2440;
    }
    _rf6169a8ce00356() {
      return this._roomName;
    }
  }
