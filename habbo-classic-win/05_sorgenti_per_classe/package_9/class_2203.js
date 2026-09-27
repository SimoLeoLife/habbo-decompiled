// Estratto da HabboAirLauncher.deobf.js, riga 111452.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_2203.as
// Nome offuscato: _ie08067aa5c82c0

class a {
    static {
      n(this, "class_2203");
    }
    static {
      Lnt(this, "class_2203");
    }
    static const_1187 = 0;
    static const_582 = 1;
    static const_444 = 2;
    userId;
    userName;
    figure;
    motto;
    creationDate;
    achievementScore;
    _r67f7b689f227b4;
    isFriend;
    var_3816;
    var_5251;
    guilds = [];
    var_5623;
    var_4773;
    var_5648;
    var_4789;
    var_5790;
    var_4436;
    var_5825;
    banned;
    var_5597;
    var_5690;
    _r82ac4f475b7930 = [];
    var_4441;
    constructor(e) {
      ((this.userId = e.readInteger()),
        (this.userName = e.readString()),
        (this.figure = e.readString()),
        (this.motto = e.readString()),
        (this.creationDate = e.readString()),
        (this.achievementScore = e.readInteger()),
        (this._r67f7b689f227b4 = e.readInteger()),
        (this.isFriend = e.readBoolean()),
        (this.var_3816 = e.readBoolean()),
        (this.var_5251 = e.readByte()));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.guilds.push(new class_3487(e));
      ((this.var_5623 = e.readInteger()),
        (this.var_4773 = e.readBoolean()),
        (this.var_5648 = e.readBoolean()),
        (this.var_4789 = e.readInteger()),
        (this.var_5790 = e.readInteger()),
        (this.var_4436 = e.readInteger()),
        (this.var_5825 = e.readBoolean()),
        (this.banned = e.readBoolean()),
        (this.var_5597 = e.readInteger()),
        (this.var_5690 = e.readInteger()));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._r82ac4f475b7930.push(new class_2915(e.readByte(), e.readInteger()));
      this.var_4441 = e.readInteger();
    }
    get _rb8a84b9008aefe() {
      return this.var_5251 === a.const_582;
    }
    getBadgeCountByRarityId(e) {
      for (let r of this._r82ac4f475b7930) if (r._rb8066ee9a2705a === e) return r.count;
      return 0;
    }
  }
