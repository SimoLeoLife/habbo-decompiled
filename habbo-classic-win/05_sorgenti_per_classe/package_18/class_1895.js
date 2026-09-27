// Extracted from HabboAirLauncher.deobf.js, line 78869.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_1895.as
// Obfuscated name: _i7d6d9928e88355

class {
    static {
      n(this, "class_1895");
    }
    static {
      xwr(this, "class_1895");
    }
    var_4728 = 0;
    _content = null;
    _rb0330c0826fcca = 0;
    var_3514 = "";
    var_5799 = 0;
    var_1250 = 0;
    _senderName = "";
    _r39c9c0cc506f79 = "";
    get _r1d27619fc3477e() {
      return this.var_4728;
    }
    get messageText() {
      return this._content !== null ? this._content.messageText : "";
    }
    get messageType() {
      return this._content !== null ? this._content.messageType : r3.name_2;
    }
    get habbiconId() {
      return this._content !== null ? this._content.habbiconId : 0;
    }
    get content() {
      return this._content;
    }
    get _r672f7777815dd8() {
      return this._rb0330c0826fcca;
    }
    get messageId() {
      return this.var_3514;
    }
    get _r0009d45d5c9653() {
      return this.var_5799;
    }
    get senderId() {
      return this.var_1250;
    }
    get senderName() {
      return this._senderName;
    }
    get _rfafd7e4c8717e5() {
      return this._r39c9c0cc506f79;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_4728 = e.readInteger()),
        (this._content = r3.parse(e)),
        (this._rb0330c0826fcca = e.readInteger()),
        (this.var_3514 = e.readString()),
        (this.var_5799 = e.readInteger()),
        (this.var_1250 = e.readInteger()),
        (this._senderName = e.readString()),
        (this._r39c9c0cc506f79 = e.readString()),
        !0
      );
    }
  }
