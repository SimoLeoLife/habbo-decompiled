// Extracted from HabboAirLauncher.deobf.js, line 112037.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_2081.as
// Obfuscated name: _i5530b87bb70671

class a {
    static {
      n(this, "class_2081");
    }
    static {
      Bst(this, "class_2081");
    }
    groupId;
    groupName;
    baseRoomId;
    _rc9fc89e7eb27a7;
    totalEntries;
    entries = [];
    _r7339cb7606ad34;
    var_4080;
    _r4462e1d7892a93;
    var_941;
    var_878;
    _ra03dcab3986cb0 = new Map();
    constructor(e) {
      ((this.groupId = e.readInteger()),
        (this.groupName = e.readString()),
        (this.baseRoomId = e.readInteger()),
        (this._rc9fc89e7eb27a7 = e.readString()),
        (this.totalEntries = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new M7(e);
        (this.entries.push(i), this._ra03dcab3986cb0.set(i.userId, i));
      }
      ((this._r7339cb7606ad34 = e.readBoolean()),
        (this.var_4080 = e.readInteger()),
        (this._r4462e1d7892a93 = e.readInteger()),
        (this.var_941 = e.readInteger()),
        (this.var_878 = e.readString()));
    }
    get totalPages() {
      return Math.max(1, Math.ceil(this.totalEntries / this.var_4080));
    }
    update(e) {
      this._ra03dcab3986cb0.set(e.userId, e);
      for (let r = 0; r < this.entries.length; r++)
        if (this.entries[r].userId === e.userId) {
          this.entries[r] = e;
          return;
        }
      this.entries.push(e);
    }
    remove(e) {
      (a.removeFromArray(e, this.entries), this._ra03dcab3986cb0.delete(e));
    }
    getUser(e) {
      return this._ra03dcab3986cb0.get(e) ?? null;
    }
    static removeFromArray(e, r) {
      for (let t = 0; t < r.length;) r[t].userId === e ? r.splice(t, 1) : t++;
    }
  }
