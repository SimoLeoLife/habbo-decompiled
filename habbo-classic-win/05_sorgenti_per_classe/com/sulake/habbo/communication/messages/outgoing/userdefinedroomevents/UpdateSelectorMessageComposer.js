// Extracted from HabboAirLauncher.deobf.js, line 123538.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/userdefinedroomevents/UpdateSelectorMessageComposer.as
// Obfuscated name: _i01e9ff4bf7194f

class {
    static {
      n(this, "UpdateSelectorMessageComposer");
    }
    static {
      smt(this, "UpdateSelectorMessageComposer");
    }
    _data = [];
    constructor(e, r, t, i, s, o, d, c, f, l) {
      (this._data.push(e), this._data.push(r.length));
      for (let b of r) this._data.push(b);
      (this._data.push(i), this._data.push(s.length));
      for (let b of s) this._data.push(b);
      (this._data.push(d), this._data.push(c), this._data.push(f.length));
      for (let b of f) this._data.push(b);
      this._data.push(l.length);
      for (let b of l) this._data.push(b);
      this._data.push(t.length);
      for (let b of t) this._data.push(b);
      this._data.push(o.length);
      for (let b of o) this._data.push(b);
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
