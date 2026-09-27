// Extracted from HabboAirLauncher.deobf.js, line 373269.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/subcontrollers/FurniChestSubController.as
// Obfuscated name: _i2b53b8ce57a08f

class extends AbstractChestSubController {
  static {
    n(this, "FurniChestSubController");
  }
  _view;
  _storages;
  constructor(e) {
    (super(e),
      (this._storages = []),
      this.addMessageEvent(new class_3246((r) => this._rff7700f727e5db(r))),
      this.addMessageEvent(new class_2585((r) => this._r7ec000a3b8f9a6(r))),
      (this._view = new XTe(this)));
  }
  _rff7700f727e5db(e) {
    let r = ClassUtils.getParser(e, class_4086);
    if (
      r == null ||
      this.getFloorItemData._r236c55808e31eb !== r.chestId ||
      this.getFloorItemData.status !== gY.STATUS_OPEN
    )
      return;
    let t = new Set();
    for (let c of r._r544afa0b9d595d ?? []) t.add(c);
    let i = [],
      s = [],
      o = [],
      d = new Set();
    for (let c of this._storages)
      t.has(c.inventoryId) ? s.push(c) : (i.push(c), d.add(c.inventoryId));
    for (let c of r._r5277aaa0e4e018 ?? [])
      d.has(c.inventoryId) || (o.push(c), i.push(c), d.add(c.inventoryId));
    ((this._storages = i), this._view.itemsUpdated(s, o));
  }
  _r7ec000a3b8f9a6(e) {
    let r = ClassUtils.getParser(e, class_4303);
    if (r == null) return;
    let t = r.chestId;
    if (r._rd646a5cabacc16 === 0) {
      if (this.getFloorItemData._rd69e246bd6e5cf !== t) return;
      (this._view.clear(), (this._storages = []), this.getFloorItemData._r0c225ccc784744(t));
    }
    for (let i of r._r751949b0bd4bde ?? []) this._storages.push(i);
    r._rd646a5cabacc16 === r._rec250fae6d7fc2 - 1 &&
      (this.getFloorItemData._rd408b13d550952(t, this), this._view.itemsInitialize(this._storages));
  }
  withdrawItemsWithType(e, r) {
    this.getFloorItemData.send(new class_2373(this._r154af520fc218d, e, r));
  }
  _rd542b9eb1bc2f5(e) {}
  get type() {
    return class_4148.TYPE_FURNI;
  }
  get title() {
    return this.localize("wiredchests.furni_chest");
  }
  get view() {
    return this._view.container;
  }
  get isEmpty() {
    return this._storages.length === 0;
  }
  get itemCount() {
    return this._storages.length;
  }
  clear() {
    ((this._storages = []), this._view.clear(), super.clear());
  }
  updateUI() {
    this._view.updateUI();
  }
  dispose() {
    this.disposed || (this._view?.dispose(), (this._view = null), super.dispose());
  }
}
