// Extracted from HabboAirLauncher.deobf.js, line 76105.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/collectibles/class_4154.as
// Obfuscated name: _ifd3fed104d894b

class {
    static {
      n(this, "class_4154");
    }
    static {
      opr(this, "class_4154");
    }
    var_2186 = null;
    _walletAddresses = [];
    get _rc3b66f9fcdb46a() {
      return this._walletAddresses;
    }
    get _r336fb6fe624be3() {
      return this.var_2186;
    }
    flush() {
      return ((this.var_2186 = null), (this._walletAddresses = []), !0);
    }
    parse(e) {
      ((this.var_2186 = e.readString()),
        (this._walletAddresses = []),
        this.var_2186 !== "" && this._walletAddresses.push(this.var_2186));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._walletAddresses.push(e.readString());
      return !0;
    }
  }
