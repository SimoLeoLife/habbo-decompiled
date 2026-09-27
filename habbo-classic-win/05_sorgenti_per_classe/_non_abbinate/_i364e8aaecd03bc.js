// Estratto da HabboAirLauncher.deobf.js, riga 76641.

class {
    static {
      n(this, "_i364e8aaecd03bc");
    }
    static {
      Fpr(this, "_i364e8aaecd03bc");
    }
    _r1ef0c1f3d79257 = [];
    get _r57eb0612ffa97a() {
      return this._r1ef0c1f3d79257;
    }
    flush() {
      return ((this._r1ef0c1f3d79257 = []), !0);
    }
    parse(e) {
      this._r1ef0c1f3d79257 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r1ef0c1f3d79257.push(new MM(e));
      return !0;
    }
  }
