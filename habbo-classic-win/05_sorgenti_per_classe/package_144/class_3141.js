// Extracted from HabboAirLauncher.deobf.js, line 97753.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_144/class_3141.as
// Obfuscated name: _i2bad0bc68951b9

class {
    static {
      n(this, "class_3141");
    }
    static {
      LVr(this, "class_3141");
    }
    var_3085 = null;
    var_3649 = -1;
    var_3156 = -1;
    _duration = -1;
    var_469 = null;
    get _r145756ee730438() {
      return this.var_3085;
    }
    get _r78eb984551f0ac() {
      return this.var_3649;
    }
    get _re812cd9299d86c() {
      return this.var_3156;
    }
    get duration() {
      return this._duration;
    }
    get question() {
      return this.var_469;
    }
    flush() {
      return (
        (this.var_3085 = null),
        (this.var_3649 = -1),
        (this.var_3156 = -1),
        (this._duration = -1),
        (this.var_469 = null),
        !0
      );
    }
    parse(e) {
      ((this.var_3085 = e.readString()),
        (this.var_3649 = e.readInteger()),
        (this.var_3156 = e.readInteger()),
        (this._duration = e.readInteger()),
        (this.var_469 = new Map()),
        this.var_469.set("id", e.readInteger()),
        this.var_469.set("number", e.readInteger()),
        this.var_469.set("type", e.readInteger()),
        this.var_469.set("content", e.readString()));
      let r = this.var_469.get("type");
      if (r === 1 || r === 2) {
        this.var_469.set("selection_min", e.readInteger());
        let t = e.readInteger(),
          i = [],
          s = [];
        (this.var_469.set("selections", i),
          this.var_469.set("selection_values", s),
          this.var_469.set("selection_count", t),
          this.var_469.set("selection_max", t));
        for (let o = 0; o < t; o++) (s.push(e.readString()), i.push(e.readString()));
      }
      return !0;
    }
  }
