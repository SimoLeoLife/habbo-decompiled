// Estratto da HabboAirLauncher.deobf.js, riga 78404.

class {
    static {
      n(this, "_i7720fd48030002");
    }
    static {
      Nvr(this, "_i7720fd48030002");
    }
    _r964e3f778bd51b = [];
    _rb0a92339fcd89a = [];
    _r0eedb9713e3e31 = [];
    _r712e2341505c31 = [];
    get _r78d655af73c8d5() {
      return this._r964e3f778bd51b;
    }
    get _r4c37a8f59cd58b() {
      return this._rb0a92339fcd89a;
    }
    get _r4635d11ec0fc56() {
      return this._r0eedb9713e3e31;
    }
    get _rbefba214d28621() {
      return this._r712e2341505c31;
    }
    flush() {
      return (
        (this._r964e3f778bd51b = []),
        (this._rb0a92339fcd89a = []),
        (this._r0eedb9713e3e31 = []),
        (this._r712e2341505c31 = []),
        !0
      );
    }
    parse(e) {
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this._r964e3f778bd51b.push(new class_2832(e));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) {
        let s = e.readInteger();
        s === -1
          ? this._rb0a92339fcd89a.push(e.readInteger())
          : s === 0
            ? this._r712e2341505c31.push(new DummyFriend(e))
            : s === 1 && this._r0eedb9713e3e31.push(new DummyFriend(e));
      }
      return !0;
    }
  }
