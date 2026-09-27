// Estratto da HabboAirLauncher.deobf.js, riga 84036.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_234/Game2GameDirectoryStatusMessageParser.as
// Nome offuscato: _ib7d7c1bebc73bf

class {
    static {
      n(this, "Game2GameDirectoryStatusMessageParser");
    }
    static {
      IIr(this, "Game2GameDirectoryStatusMessageParser");
    }
    static const_744 = 2;
    static const_1347 = 3;
    static const_915 = 1;
    static const_1259 = 0;
    _status = 0;
    var_4623 = 0;
    var_4423 = 0;
    var_4138 = 0;
    get status() {
      return this._status;
    }
    get _rf6b4aaae714322() {
      return this.var_4623;
    }
    get _r8676c9bc2bbd5b() {
      return this.var_4423;
    }
    get _r3da1b12a009155() {
      return this.var_4138;
    }
    get _rd31af608f83beb() {
      return this.var_4138 === -1;
    }
    flush() {
      return !1;
    }
    parse(e) {
      return (
        (this._status = e.readInteger()),
        (this.var_4623 = e.readInteger()),
        (this.var_4423 = e.readInteger()),
        (this.var_4138 = e.readInteger()),
        !0
      );
    }
  }
