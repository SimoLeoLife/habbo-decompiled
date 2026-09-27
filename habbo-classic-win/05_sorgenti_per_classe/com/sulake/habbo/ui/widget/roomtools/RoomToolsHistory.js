// Estratto da HabboAirLauncher.deobf.js, riga 325906.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomToolsHistory.as
// Nome offuscato: _i233b553f5aa215

class a {
  constructor(e, r, t) {
    this._windowManager = e;
    this._assets = r;
    this._handler = t;
    let i = this._assets?.getAssetByName("room_tools_history_xml")?.content;
    this._window = i != null ? this._windowManager?.buildFromXML(i) : null;
  }
  static {
    n(this, "RoomToolsHistory");
  }
  static PADDING = 5;
  static SPACING = 2;
  _window;
  _items = [];
  populate(e) {
    this.clearItems();
    let r = null;
    for (let t of e) {
      let i = this._assets?.getAssetByName("room_tools_history_item_xml")?.content,
        s = i != null ? this._windowManager?.buildFromXML(i) : null;
      s == null ||
        this._window == null ||
        (this._window.addChild(s),
        (s.findChildByName("room_name").caption = t.roomName),
        (s.y = r != null ? r.bottom + a.SPACING : a.PADDING),
        (s.x = a.PADDING),
        (s.id = t.flatId),
        (s.procedure = this.onClick),
        (r = s),
        this._items.push(s));
    }
    this._window != null &&
      (this._window.height = r != null ? r.bottom + 2 * a.PADDING : 2 * a.PADDING);
  }
  dispose() {
    (this.clearItems(),
      (this._items = []),
      (this._windowManager = null),
      (this._handler = null),
      (this._assets = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get window() {
    return this._window;
  }
  onClick = n((e, r) => {
    e.type === u.CLICK && this._handler?._r32d169e0ccf735(r.id);
  }, "onClick");
  clearItems() {
    for (let e of this._items) ((e.procedure = null), e.dispose());
    this._items.length = 0;
  }
}
