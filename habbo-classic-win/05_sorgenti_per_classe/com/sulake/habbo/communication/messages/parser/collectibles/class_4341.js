// Extracted from HabboAirLauncher.deobf.js, line 76473.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_4341.as
// Obfuscated name: _ica365915b7a56e

class a {
    static {
      n(this, "class_4341");
    }
    static {
      Npr(this, "class_4341");
    }
    static _r2778ce759963ff = 1;
    static _r912997882afa85 = 0;
    static _rbdd0dde30353aa = 1;
    static _rcadd9c329aa3f3 = 0;
    static var_5970 = 2;
    _items;
    var_4492;
    var_5119;
    var_4494;
    var_5232;
    var_4532;
    _r39d8b73f819316;
    _r5d02598bf931ae;
    _red6074fc3fb005;
    var_4339;
    _status;
    _rc16da8c458a949;
    _r31b026e5fd6449;
    var_2578;
    _r33ef48da007918 = a._r912997882afa85;
    _rc113f286b3fb63 = a._r912997882afa85;
    constructor(e) {
      let r = e.readInteger();
      ((this._items = []), (this.var_2578 = 0));
      for (let s = 0; s < r; s++) {
        let o = new class_4366(e);
        (this._items.push(o), o.amount > 0 && (this.var_2578 += 1));
      }
      ((this.var_4492 = e.readString()),
        (this.var_5119 = e.readString()),
        (this.var_4494 = e.readInteger()),
        (this.var_5232 = e.readInteger()),
        (this.var_4532 = e.readInteger()));
      let t = e.readBoolean();
      this._r39d8b73f819316 = t ? new class_4366(e) : null;
      let i = e.readBoolean();
      ((this._r5d02598bf931ae = i ? new class_4366(e) : null),
        (this._red6074fc3fb005 = e.readLong()),
        (this.var_4339 = e.readLong()),
        (this._status = e.readShort()),
        (this._rc16da8c458a949 = t ? new CollectibleItemClaim(e) : null),
        (this._r31b026e5fd6449 = i ? new CollectibleItemClaim(e) : null));
    }
    get items() {
      return this._items;
    }
    get collectionId() {
      return this.var_4492;
    }
    get collectionName() {
      return this.var_5119;
    }
    get _r3cbd2d77df46f7() {
      return this.var_4494;
    }
    get _r4a14459846740e() {
      return this.var_5232;
    }
    get _rab93b4377b8d93() {
      return this.var_4532;
    }
    get _ra933d24a1000b7() {
      return this._r39d8b73f819316;
    }
    get _r6e7c4e23e82084() {
      return this._r5d02598bf931ae;
    }
    get _r1a2d2587cdde99() {
      return this._red6074fc3fb005;
    }
    get _r7c9b52260772bb() {
      return this.var_4339;
    }
    get status() {
      return this._status;
    }
    get _rcf22026bcc1614() {
      return this._rc16da8c458a949;
    }
    get _r24e9a6a4021a3b() {
      return this._r31b026e5fd6449;
    }
    get _rc084fcd9702b88() {
      return this.var_2578;
    }
    get _rf1e0cb0f5d01d9() {
      return this._items.length;
    }
    get progressPercentage() {
      return (this._rc084fcd9702b88 * 100) / this._rf1e0cb0f5d01d9;
    }
    get _rb2a4e069133c15() {
      return this._r33ef48da007918;
    }
    get _raa06a886974683() {
      return this._rc113f286b3fb63;
    }
    _r342ef8f77cd3b9() {
      this._rc113f286b3fb63 = a._r2778ce759963ff;
    }
    _r64b9f0f252ae91() {
      this._r33ef48da007918 = a._r2778ce759963ff;
    }
    _r31c1c4b17d8827(e) {
      ((this._rc113f286b3fb63 = a._r912997882afa85),
        e && this._r24e9a6a4021a3b != null && (this._r24e9a6a4021a3b.claimedAmount += 1));
    }
    _r6a61b40f152322(e) {
      ((this._r33ef48da007918 = a._r912997882afa85),
        e && this._rcf22026bcc1614 != null && (this._rcf22026bcc1614.claimedAmount += 1));
    }
    get _r1d01b5e51f6fc6() {
      return this._r5d02598bf931ae != null;
    }
    get _r8d537e63595adf() {
      return this._r39d8b73f819316 != null;
    }
    get _r5371210fb0dedc() {
      return (
        this._r1d01b5e51f6fc6 &&
        this._r31b026e5fd6449 != null &&
        ((this._r31b026e5fd6449.claimedAmount > 0 &&
          this._r31b026e5fd6449.claimedAmount >= this._r31b026e5fd6449.claimLimit) ||
          this._rc113f286b3fb63 === a._r2778ce759963ff)
      );
    }
    get _r68a31923021ad7() {
      return (
        this._r8d537e63595adf &&
        this._rc16da8c458a949 != null &&
        ((this._rc16da8c458a949.claimedAmount > 0 &&
          this._rc16da8c458a949.claimedAmount >= this._rc16da8c458a949.claimLimit) ||
          this._r33ef48da007918 !== a._r912997882afa85)
      );
    }
    get _rf87788999b6261() {
      return (
        this._r1d01b5e51f6fc6 &&
        this._r31b026e5fd6449 != null &&
        this._r31b026e5fd6449.status === CollectibleItemClaim.var_5814 &&
        !this._r5371210fb0dedc &&
        this._r31b026e5fd6449.claimedAmount < this._r31b026e5fd6449.claimLimit &&
        this._rc113f286b3fb63 === a._r912997882afa85
      );
    }
    get _r607ec521dda587() {
      return (
        this._r8d537e63595adf &&
        this._rc16da8c458a949 != null &&
        this._rc16da8c458a949.status === CollectibleItemClaim.var_5814 &&
        !this._r68a31923021ad7 &&
        this._rc16da8c458a949.claimedAmount < this._rc16da8c458a949.claimLimit &&
        this._r33ef48da007918 === a._r912997882afa85
      );
    }
    _r9455211ba525ca() {
      return this.var_4339 < new Date().getTime();
    }
  }
