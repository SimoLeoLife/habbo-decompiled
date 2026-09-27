// Extracted from HabboAirLauncher.deobf.js, line 137272.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/class_4347.as
// Obfuscated name: _ia535f98b302049

class {
  static {
    n(this, "class_4347");
  }
  _array = [];
  get numChildren() {
    return this._array.length;
  }
  getChildAt(e) {
    return this._array[e] ?? null;
  }
  getChildByID(e) {
    for (let r of this._array) if (r.id === e) return r;
    return null;
  }
  getChildByName(e) {
    for (let r of this._array) if (r.name === e) return r;
    return null;
  }
  getChildIndex(e) {
    return this._array.indexOf(e);
  }
  groupChildrenWithID(e, r) {
    let t = 0;
    for (let i of this._array) i.id === e && (r.push(i), t++);
    return t;
  }
}
