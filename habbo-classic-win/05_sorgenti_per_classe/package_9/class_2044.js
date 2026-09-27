// Extracted from HabboAirLauncher.deobf.js, line 111740.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_2044.as
// Obfuscated name: _i02d0c810d7593c

class {
    static {
      n(this, "class_2044");
    }
    static {
      sst(this, "class_2044");
    }
    costInCredits;
    class_2912 = [];
    class_2482 = [];
    constructor(e) {
      this.costInCredits = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        this.class_2912.push(new class_2912(e.readInteger(), e.readString(), e.readBoolean()));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_2482.push(new class_2482(e));
    }
    get exists() {
      return !1;
    }
    get isOwner() {
      return !0;
    }
    get groupId() {
      return 0;
    }
    get groupName() {
      return "";
    }
    get _rc7d9c89cfbc1c4() {
      return "";
    }
    get baseRoomId() {
      return 0;
    }
    get _rd4fc3f07ad4d04() {
      return 0;
    }
    get _r95ee941642047f() {
      return 0;
    }
    get locked() {
      return !1;
    }
    get url() {
      return "";
    }
    get guildType() {
      return 0;
    }
    get guildRightsLevel() {
      return 0;
    }
    get _rc9fc89e7eb27a7() {
      return "";
    }
    get _r25bd5f5a9273b2() {
      return 0;
    }
  }
