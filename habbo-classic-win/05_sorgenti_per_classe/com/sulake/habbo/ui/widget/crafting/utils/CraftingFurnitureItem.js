// Extracted from HabboAirLauncher.deobf.js, line 313225.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/utils/CraftingFurnitureItem.as
// Obfuscated name: _i535c15d86e72c4

class extends EventDispatcherWrapper {
  constructor(r, t, i) {
    super();
    this._recipeCode = r;
    this._productCode = t;
    this.var_689 = i;
  }
  static {
    n(this, "CraftingFurnitureItem");
  }
  _r027512091a1900 = [];
  _r45b1c05721a069 = [];
  get _rdb4fd02ec6f839() {
    return this._recipeCode;
  }
  get furnitureData() {
    return this.var_689;
  }
  get _raeb033db5aa083() {
    return this._productCode;
  }
  get typeId() {
    return this.var_689?.id ?? -1;
  }
  get _reb7882866323fe() {
    return this._r027512091a1900.length;
  }
  set inventoryIds(r) {
    this._r027512091a1900 = [...r];
  }
  getItemToMixer() {
    if (this._reb7882866323fe === 0) return 0;
    let r = this._r027512091a1900.shift() ?? 0;
    return (this._r45b1c05721a069.push(r), r);
  }
  returnItemToInventory(r) {
    this._r027512091a1900.push(r);
    let t = this._r45b1c05721a069.indexOf(r);
    t >= 0 && this._r45b1c05721a069.splice(t, 1);
  }
}
