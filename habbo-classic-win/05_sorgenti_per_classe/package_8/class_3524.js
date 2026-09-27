// Extracted from HabboAirLauncher.deobf.js, line 115731.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_8/class_3524.as
// Obfuscated name: _ida3a00c54d0b9a

class {
    static {
      n(this, "class_3524");
    }
    static {
      Hbt(this, "class_3524");
    }
    var_2343 = [];
    _msg;
    constructor(e) {
      this._msg = e;
    }
    get disposed() {
      return !1;
    }
    addInvitedFriend(e) {
      this.var_2343.push(e);
    }
    dispose() {
      this.var_2343 = [];
    }
    getMessageArray() {
      let e = [this.var_2343.length];
      for (let r of this.var_2343) e.push(r);
      return (e.push(this._msg), e);
    }
  }
