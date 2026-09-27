// Estratto da HabboAirLauncher.deobf.js, riga 76804.

class {
    static {
      n(this, "_i71abedfbf79802");
    }
    static {
      Jpr(this, "_i71abedfbf79802");
    }
    _re77c9a4427ec93 = [];
    get _r8ada5d04f55bc7() {
      return this._re77c9a4427ec93;
    }
    flush() {
      return ((this._re77c9a4427ec93 = []), !0);
    }
    parse(e) {
      this._re77c9a4427ec93 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._re77c9a4427ec93.push(new _i4e740e053ae611(e));
      return !0;
    }
  }
