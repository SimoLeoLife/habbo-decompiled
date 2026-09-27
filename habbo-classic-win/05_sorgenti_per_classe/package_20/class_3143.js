// Estratto da HabboAirLauncher.deobf.js, riga 78148.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_20/class_3143.as
// Nome offuscato: _i364f3762f4932b

class {
    static {
      n(this, "class_3143");
    }
    static {
      hvr(this, "class_3143");
    }
    senderId;
    senderName;
    _rfafd7e4c8717e5;
    _content;
    _r672f7777815dd8;
    messageId;
    constructor(e) {
      ((this.senderId = e.readInteger()),
        (this.senderName = e.readString()),
        (this._rfafd7e4c8717e5 = e.readString()),
        (this._content = r3.parse(e)),
        (this._r672f7777815dd8 = e.readInteger()),
        (this.messageId = e.readString()));
    }
    get message() {
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
  }
