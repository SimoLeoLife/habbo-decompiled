// Extracted from HabboAirLauncher.deobf.js, line 120324.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if09c5ad91a1823

class {
    static {
      n(this, "UnkMessageComposer_3args_f09c5a");
    }
    static {
      t5t(this, "UnkMessageComposer_3args_f09c5a");
    }
    _array = [];
    constructor(e, r, t) {
      if ((this._array.push(!1), typeof e == "boolean")) {
        (this._array.push(e ? at._rcc85521bbb9163 : at._rea4a9248715b7b),
          this._array.push(at._r95dc862ed837a8),
          this._array.push(at._rdac9c2703bca2d));
        return;
      }
      (this._array.push(e),
        this._array.push(r ?? at._r95dc862ed837a8),
        this._array.push(t ?? at._rdac9c2703bca2d));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array == null;
    }
  }
