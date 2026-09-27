// Estratto da HabboAirLauncher.deobf.js, riga 75894.

class {
    static {
      n(this, "_i81aa8987d4c146");
    }
    static {
      F7r(this, "_i81aa8987d4c146");
    }
    _rdbbf3a43de3aa8 = [];
    get _rd0d7bda27edc47() {
      return this._rdbbf3a43de3aa8;
    }
    flush() {
      return ((this._rdbbf3a43de3aa8 = []), !1);
    }
    _r7e512aa496c54d() {
      return this._rdbbf3a43de3aa8.length > 0;
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rdbbf3a43de3aa8.push(new _ica11629ad86c26(e));
      return !0;
    }
  }
