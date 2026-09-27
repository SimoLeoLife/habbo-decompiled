// Estratto da HabboAirLauncher.deobf.js, riga 338636.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/trax/TraxChannel.as
// Nome offuscato: _i977f1dee8b8409

class {
  constructor(e) {
    this._id = e;
  }
  static {
    n(this, "TraxChannel");
  }
  _items = [];
  get id() {
    return this._id;
  }
  get itemCount() {
    return this._items.length;
  }
  addChannelItem(e) {
    this._items.push(e);
  }
  getItem(e) {
    return this._items[e] ?? null;
  }
}
