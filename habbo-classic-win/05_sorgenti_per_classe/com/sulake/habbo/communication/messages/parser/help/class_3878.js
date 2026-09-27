// Extracted from HabboAirLauncher.deobf.js, line 88399.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3878.as
// Obfuscated name: _i708777db5454ce

class {
    static {
      n(this, "class_3878");
    }
    static {
      gBr(this, "class_3878");
    }
    _chatMessage = "";
    var_1250 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._chatMessage = e.readString()),
        (this.var_1250 = e.readInteger()),
        !0
      );
    }
    get chatMessage() {
      return this._chatMessage;
    }
    get senderId() {
      return this.var_1250;
    }
  }
