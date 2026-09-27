// Extracted from HabboAirLauncher.deobf.js, line 90283.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_3364.as
// Obfuscated name: _i94682c1c1e1d57

class {
    static {
      n(this, "class_3364");
    }
    static {
      gTr(this, "class_3364");
    }
    var_3305 = 0;
    _pet1 = null;
    _pet2 = null;
    _rarityCategories = [];
    var_4896 = 0;
    flush() {
      ((this.var_3305 = 0),
        this._pet1 && (this._pet1.dispose(), (this._pet1 = null)),
        this._pet2 && (this._pet2.dispose(), (this._pet2 = null)));
      for (let e of this._rarityCategories) e.dispose();
      return ((this._rarityCategories = []), !0);
    }
    parse(e) {
      ((this.var_3305 = e.readInteger()),
        (this._pet1 = new class_4010(e)),
        (this._pet2 = new class_4010(e)));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rarityCategories.push(new class_3926(e));
      return ((this.var_4896 = e.readInteger()), !0);
    }
    get _reb3874e706dbb7() {
      return this.var_3305;
    }
    get pet1() {
      return this._pet1;
    }
    get pet2() {
      return this._pet2;
    }
    get _r8e1bcb37bcabfb() {
      return this._rarityCategories;
    }
    get _r080a825c3e590d() {
      return this.var_4896;
    }
  }
