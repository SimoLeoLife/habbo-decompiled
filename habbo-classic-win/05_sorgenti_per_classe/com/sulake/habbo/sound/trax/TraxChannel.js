// Extracted from HabboAirLauncher.deobf.js, line 338636.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/trax/TraxChannel.as
// Obfuscated name: _i977f1dee8b8409

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
