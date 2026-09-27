// Extracted from HabboAirLauncher.deobf.js, line 76436.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/CollectibleItemClaim.as
// Obfuscated name: _iefd06e177f01d5

class {
    static {
      n(this, "CollectibleItemClaim");
    }
    static {
      Dpr(this, "CollectibleItemClaim");
    }
    static var_5814 = 0;
    static var_5972 = 1;
    var_3213;
    var_3417;
    var_4794;
    _status;
    constructor(e) {
      ((this.var_3213 = e.readString()),
        (this.var_3417 = e.readInteger()),
        (this.var_4794 = e.readInteger()),
        (this._status = e.readShort()));
    }
    get claimId() {
      return this.var_3213;
    }
    get claimedAmount() {
      return this.var_3417;
    }
    set claimedAmount(e) {
      this.var_3417 = e;
    }
    get claimLimit() {
      return this.var_4794;
    }
    get status() {
      return this._status;
    }
  }
