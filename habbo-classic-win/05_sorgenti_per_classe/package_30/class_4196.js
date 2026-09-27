// Extracted from HabboAirLauncher.deobf.js, line 86684.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_4196.as
// Obfuscated name: _i66b308de736921

class {
    static {
      n(this, "class_4196");
    }
    static {
      HEr(this, "class_4196");
    }
    var_4586 = "";
    var_4715 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_4586 = e.readString()),
        e.bytesAvailable && (this.var_4715 = e.readBoolean()),
        !0
      );
    }
    get encryptedPublicKey() {
      return this.var_4586;
    }
    get serverClientEncryption() {
      return this.var_4715;
    }
  }
