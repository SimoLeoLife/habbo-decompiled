// Estratto da HabboAirLauncher.deobf.js, riga 93009.

class {
    static {
      n(this, "_ib57d6c1db36681");
    }
    static {
      YSr(this, "_ib57d6c1db36681");
    }
    _data = null;
    get data() {
      return this._data;
    }
    flush() {
      return (this._data?.dispose(), (this._data = null), !0);
    }
    parse(e) {
      return ((this._data = new class_2205(e)), !0);
    }
  }
