// Estratto da HabboAirLauncher.deobf.js, riga 83120.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_4022.as
// Nome offuscato: _i8a6235debadc8a

class {
    static {
      n(this, "class_4022");
    }
    static {
      oyr(this, "class_4022");
    }
    _userId = -1;
    _chatMessage = null;
    flush() {
      return ((this._userId = -1), (this._chatMessage = null), !0);
    }
    parse(e) {
      return ((this._userId = e.readInteger()), (this._chatMessage = e.readString()), !0);
    }
    get userId() {
      return this._userId;
    }
    get chatMessage() {
      return this._chatMessage ?? "";
    }
  }
