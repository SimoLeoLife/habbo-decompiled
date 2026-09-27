// Extracted from HabboAirLauncher.deobf.js, line 86092.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_2677.as
// Obfuscated name: _i972a742a87e87e

class {
    static {
      n(this, "class_2677");
    }
    static {
      tEr(this, "class_2677");
    }
    _groupId = -1;
    var_402 = -1;
    _amount = -1;
    _rd3ef9b65ca2df6 = [];
    get groupId() {
      return this._groupId;
    }
    get startIndex() {
      return this.var_402;
    }
    get amount() {
      return this._amount;
    }
    get threads() {
      return this._rd3ef9b65ca2df6;
    }
    flush() {
      return (
        (this._groupId = -1),
        (this.var_402 = -1),
        (this._amount = -1),
        (this._rd3ef9b65ca2df6 = []),
        !0
      );
    }
    parse(e) {
      ((this._groupId = e.readInteger()),
        (this.var_402 = e.readInteger()),
        (this._amount = e.readInteger()));
      for (let r = 0; r < this.amount; r++) this._rd3ef9b65ca2df6.push(y9.readFromMessage(e));
      return !0;
    }
  }
