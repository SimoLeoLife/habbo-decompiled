// Extracted from HabboAirLauncher.deobf.js, line 98786.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_175/class_2875.as
// Obfuscated name: _i0a4daa28e48892

class a {
    static {
      n(this, "class_2875");
    }
    static {
      $Ur(this, "class_2875");
    }
    static var_5778 = 0;
    static var_5844 = 2;
    static var_4165 = 1;
    var_3074;
    var_2968;
    var_5723;
    var_4575;
    var_4870;
    var_5618;
    var_5715;
    var_3582;
    _status;
    var_3621;
    var_3905 = new Date();
    var_2771;
    constructor(e) {
      ((this.var_3074 = e.readLong()),
        (this.var_2968 = e.readString()),
        (this.var_5723 = e.readString()),
        (this.var_4575 = e.readBoolean()),
        (this.var_4870 = e.readString()),
        (this.var_5618 = e.readString()),
        (this.var_5715 = e.readInteger()),
        (this.var_3582 = e.readInteger()),
        (this._status = e.readByte()),
        (this.var_3621 = e.readInteger()),
        (this.var_2771 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2771.push(new class_4271(e));
    }
    get taskId() {
      return this.var_3074;
    }
    get _r3735e1e4dc6d84() {
      return this.var_2968;
    }
    get _r3712459c016438() {
      return this.var_5723;
    }
    get _rb5a86d311e998e() {
      return this.var_4575;
    }
    get _r3d49928e00246a() {
      return this.var_4870;
    }
    get _rff5517b975da79() {
      return this.var_5618;
    }
    get requiredRepeats() {
      return this.var_5715;
    }
    get repeats() {
      return this.var_3582;
    }
    set repeats(e) {
      this.var_3582 = e;
    }
    get status() {
      return this._status;
    }
    set status(e) {
      this._status = e;
    }
    get secondsLeft() {
      if (this.var_3621 <= 0) return 0;
      let e = Date.now(),
        r = Math.floor((e - this.var_3905.getTime()) / 1e3);
      return this.var_3621 - r;
    }
    get isExpired() {
      return this.var_3621 < 0 && this._status !== a.var_5778;
    }
    get rewards() {
      return this.var_2771;
    }
    get nameLocalizationKey() {
      return `dailytask.${this.var_2968}.name`;
    }
    get descriptionLocalizationKey() {
      return `dailytask.${this.var_2968}.desc`;
    }
    get hintLocalizationKey() {
      return `dailytask.${this.var_2968}.hint`;
    }
  }
