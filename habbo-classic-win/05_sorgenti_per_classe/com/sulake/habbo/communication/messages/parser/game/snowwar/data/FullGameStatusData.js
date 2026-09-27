// Extracted from HabboAirLauncher.deobf.js, line 84577.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/FullGameStatusData.as
// Obfuscated name: _i9aad44b2a89b89

class {
    static {
      n(this, "FullGameStatusData");
    }
    static {
      wxr(this, "FullGameStatusData");
    }
    var_4987 = 0;
    var_5710 = 0;
    var_215 = null;
    _numberOfTeams = 0;
    _r7ac8664ed9137e = null;
    constructor(e) {
      this.parse(e);
    }
    get _r3967c0f259c9a2() {
      return this.var_4987;
    }
    get _rb0bbe4f31389cc() {
      return this.var_5710;
    }
    get gameObjects() {
      return this.var_215;
    }
    get levelName() {
      return this._numberOfTeams;
    }
    get _rd9397344c8f6b1() {
      return this._r7ac8664ed9137e;
    }
    parse(e) {
      (e.readInteger(),
        (this.var_4987 = e.readInteger()),
        (this.var_5710 = e.readInteger()),
        (this.var_215 = new GameObjectsData(e)),
        e.readInteger(),
        (this._numberOfTeams = e.readInteger()),
        (this._r7ac8664ed9137e = new GameStatusData(e)));
    }
  }
