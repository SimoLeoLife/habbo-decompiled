// Estratto da HabboAirLauncher.deobf.js, riga 77001.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_2528.as
// Nome offuscato: _i7d2f0e9dac4ed1

class {
    static {
      n(this, "class_2528");
    }
    static {
      vmr(this, "class_2528");
    }
    _state = -1;
    var_3540 = -1;
    var_2027 = null;
    get start() {
      return this._state === 0;
    }
    get finish() {
      return this._state === 1;
    }
    get state() {
      return this._state;
    }
    get openerAvatarId() {
      return this.var_3540;
    }
    get reward() {
      return this.var_2027;
    }
    flush() {
      return ((this._state = -1), (this.var_3540 = -1), (this.var_2027 = null), !0);
    }
    parse(e) {
      return (
        (this._state = e.readShort()),
        (this.var_3540 = e.readInteger()),
        (this.var_2027 = new class_2508(e)),
        !0
      );
    }
  }
