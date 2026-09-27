// Estratto da HabboAirLauncher.deobf.js, riga 78314.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/DummyFriend.as
// Nome offuscato: _i65de13d55eb5af

class {
    static {
      n(this, "DummyFriend");
    }
    static {
      Tvr(this, "DummyFriend");
    }
    id;
    name;
    gender;
    online;
    followingAllowed;
    figure;
    categoryId;
    motto;
    _r1939eac45a5e21 = "";
    realName;
    _rc11aab4197b57a;
    _r311b9378b916ee;
    _r9f93287e7a0957;
    _r2978d441b4844d;
    _r13d8beafe06ba1;
    constructor(e) {
      ((this.id = e.readInteger()),
        (this.name = e.readString()),
        (this.gender = e.readInteger()),
        (this.online = e.readBoolean()),
        (this.followingAllowed = e.readBoolean()),
        (this.figure = e.readString()),
        (this.categoryId = e.readInteger()),
        (this.motto = e.readString()),
        (this.realName = e.readString()),
        (this._rc11aab4197b57a = e.readString()),
        (this._r311b9378b916ee = e.readBoolean()),
        (this._r9f93287e7a0957 = e.readBoolean()),
        (this._r2978d441b4844d = e.readBoolean()),
        (this._r13d8beafe06ba1 = e.readShort()));
    }
  }
