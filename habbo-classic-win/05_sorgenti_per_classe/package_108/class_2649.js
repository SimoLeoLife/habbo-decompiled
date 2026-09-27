// Extracted from HabboAirLauncher.deobf.js, line 86150.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_2649.as
// Obfuscated name: _i228d2858063507

class {
    static {
      n(this, "class_2649");
    }
    static {
      sEr(this, "class_2649");
    }
    _listCode = 0;
    _totalAmount = 0;
    var_402 = 0;
    _amount = 0;
    _forums = null;
    get listCode() {
      return this._listCode;
    }
    get totalAmount() {
      return this._totalAmount;
    }
    get startIndex() {
      return this.var_402;
    }
    get amount() {
      return this._amount;
    }
    get forums() {
      return this._forums;
    }
    flush() {
      return ((this._forums = null), !0);
    }
    parse(e) {
      ((this._listCode = e.readInteger()),
        (this._totalAmount = e.readInteger()),
        (this.var_402 = e.readInteger()),
        (this._amount = e.readInteger()),
        (this._forums = []));
      for (let r = 0; r < this.amount; r++) this._forums.push(dw.readFromMessage(e));
      return !0;
    }
  }
