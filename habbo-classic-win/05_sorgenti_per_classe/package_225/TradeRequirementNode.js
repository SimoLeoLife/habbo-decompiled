// Extracted from HabboAirLauncher.deobf.js, line 110009.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_225/TradeRequirementNode.as
// Obfuscated name: _id39db73c6b64c2

class a {
    static {
      n(this, "TradeRequirementNode");
    }
    static {
      Rat(this, "TradeRequirementNode");
    }
    static TYPE_COIN = 0;
    static TYPE_FURNI = 1;
    _amount;
    var_828;
    _type;
    constructor(e, r, t = null) {
      ((this._type = e),
        (this._amount = r),
        (this.var_828 = this._type === a.TYPE_FURNI ? t : null));
    }
    static readFromMessage(e) {
      let r = e.readByte(),
        t = e.readInteger(),
        i = r === a.TYPE_FURNI ? Vb.readFromMessage(e) : null;
      return new a(r, t, i);
    }
    get type() {
      return this._type;
    }
    get amount() {
      return this._amount;
    }
    get itemType() {
      return this.var_828;
    }
    addToComposer(e) {
      (e.push(new Byte(this._type)),
        e.push(this._amount),
        this._type === a.TYPE_FURNI && this.var_828?.addToComposer(e));
    }
    deepCopy() {
      return new a(this._type, this._amount, this.var_828);
    }
  }
