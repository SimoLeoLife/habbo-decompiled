// Estratto da HabboAirLauncher.deobf.js, riga 126904.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_2548.as
// Nome offuscato: _i649d52355610a6

class {
    static {
      n(this, "class_2548");
    }
    static {
      IIt(this, "class_2548");
    }
    _id;
    _theme;
    _points;
    _hasPremiumConfig;
    var_5414 = NaN;
    var_4453 = 0;
    var_5146 = 0;
    var_5034 = 0;
    var_3477;
    _complete;
    var_3165;
    _tasks;
    _prizes;
    constructor(e) {
      ((this._id = e.readString()),
        (this._theme = e.readString()),
        (this._points = e.readInteger()),
        (this._hasPremiumConfig = e.readBoolean()),
        this._hasPremiumConfig &&
          ((this.var_5414 = e.readDouble()),
          (this.var_4453 = e.readInteger()),
          (this.var_5146 = e.readInteger()),
          (this.var_5034 = e.readInteger())),
        (this.var_3477 = e.readBoolean()),
        (this._complete = e.readBoolean()),
        (this.var_3165 = e.readBoolean()),
        (this._tasks = []));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this._tasks.push(new class_4147(e));
      this._prizes = [];
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._prizes.push(new class_4050(e));
    }
    get id() {
      return this._id;
    }
    get theme() {
      return this._theme;
    }
    get points() {
      return this._points;
    }
    get hasPremiumConfig() {
      return this._hasPremiumConfig;
    }
    get taskPointsBoost() {
      return this.var_5414;
    }
    get instantPoints() {
      return this.var_4453;
    }
    get costDiamonds() {
      return this.var_5146;
    }
    get costCredits() {
      return this.var_5034;
    }
    get premium() {
      return this.var_3477;
    }
    get complete() {
      return this._complete;
    }
    get premiumComplete() {
      return this.var_3165;
    }
    get tasks() {
      return this._tasks;
    }
    get prizes() {
      return this._prizes;
    }
  }
