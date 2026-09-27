// Extracted from HabboAirLauncher.deobf.js, line 87414.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_2133.as
// Obfuscated name: _ied527e414d6fc1

class {
    static {
      n(this, "class_2133");
    }
    static {
      UMr(this, "class_2133");
    }
    var_1604 = [];
    flush() {
      return ((this.var_1604 = []), !0);
    }
    parse(e) {
      this.var_1604 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        this.var_1604.push({
          var_4513: e.readString(),
          timeStamp: e.readString(),
          message: e.readString(),
        });
      return !0;
    }
    get callArray() {
      return this.var_1604;
    }
    get callCount() {
      return this.var_1604.length;
    }
  }
