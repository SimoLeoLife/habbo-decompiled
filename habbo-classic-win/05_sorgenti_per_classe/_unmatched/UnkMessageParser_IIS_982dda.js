// Extracted from HabboAirLauncher.deobf.js, line 77502.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i982ddaea4464b8

class {
    static {
      n(this, "UnkMessageParser_IIS_982dda");
    }
    static {
      cgr(this, "UnkMessageParser_IIS_982dda");
    }
    _r8d14a40cfcbfb1 = [];
    _ra104cbf4181b5c = [];
    flush() {
      return ((this._r8d14a40cfcbfb1 = []), (this._ra104cbf4181b5c = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r8d14a40cfcbfb1.push(new class_3380(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this._ra104cbf4181b5c.push(e.readString());
      return !0;
    }
    get _r99dbde3898bd93() {
      return this._r8d14a40cfcbfb1;
    }
    get _r8c8b3c921da433() {
      return this._ra104cbf4181b5c;
    }
    _r7e512aa496c54d() {
      return this._r8d14a40cfcbfb1.length > 0 || this._ra104cbf4181b5c.length > 0;
    }
  }
