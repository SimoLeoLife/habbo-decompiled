// Extracted from HabboAirLauncher.deobf.js, line 110132.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_127/class_2512.as
// Obfuscated name: _i86e27439245508

class a {
    static {
      n(this, "class_2512");
    }
    static {
      Oat(this, "class_2512");
    }
    static _r952a28979bfe6f = 0;
    static _rc8a6b19aa3de85 = 1;
    static _r965c0c5de4f6f8 = 0;
    static const_902 = 2;
    static _rcf8d21c9b3a6bd = 1;
    var_3115 = 0;
    var_2436 = 0;
    var_2466 = null;
    var_4693 = null;
    var_3734 = 0;
    var_3310 = null;
    var_3195 = 0;
    var_3350 = null;
    var_3570 = !1;
    flush() {
      return (
        (this.var_3115 = 0),
        (this.var_2436 = 0),
        (this.var_2466 = null),
        (this.var_3734 = 0),
        (this.var_3310 = null),
        (this.var_4693 = null),
        (this.var_3195 = 0),
        (this.var_3570 = !1),
        (this.var_3350 = null),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3115 = e.readInteger()),
        (this.var_2436 = e.readShort()),
        (this.var_2466 = e0.readFromMessage(e)),
        this.var_2436 === a._r965c0c5de4f6f8 &&
          ((this.var_3734 = e.readShort()),
          (this.var_3310 = e.readString()),
          (this.var_4693 = e.readString())),
        this.var_2436 === a.const_902 &&
          ((this.var_3195 = e.readShort()),
          (this.var_3570 = e.readBoolean()),
          (this.var_3350 = e.readString())),
        !0
      );
    }
    get contractId() {
      return this.var_3115;
    }
    get _rfb746ff09ca5d8() {
      return this.var_2436;
    }
    get definition() {
      return this.var_2466;
    }
    get var_2410() {
      return this.var_3734;
    }
    get receiveText() {
      return this.var_3310;
    }
    get _rc4b0045dac224f() {
      return this.var_4693;
    }
    get rewardCategory() {
      return this.var_3195;
    }
    get _r4ca4d5562c4790() {
      return this.var_3570;
    }
    get rewardText() {
      return this.var_3350;
    }
  }
