// Extracted from HabboAirLauncher.deobf.js, line 105861.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_103/class_3579.as
// Obfuscated name: _i9d5632969c94b6

class {
    static {
      n(this, "class_3579");
    }
    static {
      UZr(this, "class_3579");
    }
    var_127 = null;
    parse(e) {
      ((this.var_127 = new Sd()),
        (this.var_127.roomId = e.readInteger()),
        (this.var_127.name = e.readString()),
        (this.var_127.description = e.readString()),
        (this.var_127._rf742cf771d167a = e.readInteger()),
        (this.var_127.categoryId = e.readInteger()),
        (this.var_127.maximumVisitors = e.readInteger()),
        (this.var_127._rda9bf1f83f26d4 = e.readInteger()),
        (this.var_127.tags = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_127.tags.push(e.readString());
      return (
        (this.var_127.tradeMode = e.readInteger()),
        (this.var_127._rf5545c5fca5ee0 = e.readInteger() === 1),
        (this.var_127._allowFoodConsumeCheckBox = e.readInteger() === 1),
        (this.var_127._allowWalkThroughCheckBox = e.readInteger() === 1),
        (this.var_127._hideWallsCheckBox = e.readInteger() === 1),
        (this.var_127._rdbce713bddeb2b = e.readInteger()),
        (this.var_127._r2cacaaa4b8c0dc = e.readInteger()),
        (this.var_127.chatSettings = at.fromFloodSensitivity(e.readInteger())),
        (this.var_127._re4bafec6ef50f1 = e.readBoolean()),
        (this.var_127._r02180e03cb59e4 = e.readBoolean()),
        (this.var_127.idleSleepTimeoutSeconds = e.readInteger()),
        (this.var_127._r1058fab0daff8c = e.readBoolean()),
        (this.var_127.idleAutokickTimeoutSeconds = e.readInteger()),
        (this.var_127._muteAllPetsCheckBox = e.readBoolean()),
        (this.var_127._r3d55e7f65e7db4 = new class_2849(e)),
        (this.var_127._r067cac897dfb7b = e.readBoolean()),
        !0
      );
    }
    flush() {
      return ((this.var_127 = null), !0);
    }
    get data() {
      return this.var_127;
    }
  }
