// Estratto da HabboAirLauncher.deobf.js, riga 111351.

class {
    static {
      n(this, "_i8a56acf458abaa");
    }
    static {
      Mnt(this, "_i8a56acf458abaa");
    }
    email = "";
    _rc18b0feae00674 = !1;
    _reeba4d1cb720d9 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.email = e.readString()),
        (this._rc18b0feae00674 = e.readBoolean()),
        (this._reeba4d1cb720d9 = e.readBoolean()),
        !0
      );
    }
  }
