// Extracted from HabboAirLauncher.deobf.js, line 324580.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i073931f2f0bba2

class {
  constructor(e, r) {
    this.var_17 = e;
    this.var_1619 = r;
  }
  static {
    n(this, "UnkClass_073931");
  }
  _items = [];
  var_154 = null;
  _ra3cf95ab451c3c = -1;
  _ra3da063775b64f = -1;
  get getAt() {
    return this._ra3cf95ab451c3c;
  }
  destroy() {
    this.var_1619?.destroyListItems();
  }
  refresh(e, r) {
    if (!(this.var_1619 == null || e == null)) {
      ((this._ra3da063775b64f = -1), (this._items = []), this.var_1619.destroyListItems());
      for (let t of e) {
        let i = new ZI(
          this.var_17,
          t.name,
          t.creator,
          this.var_17._rbc4755f50a3273(t._race451481abd84),
        );
        i.window != null &&
          ((i.window.procedure = this._r3e15584731b5d1),
          i.removeButton && (i.removeButton.procedure = this._r3e15584731b5d1),
          this.var_1619.addListItem(i.window),
          this._items.push(i));
      }
      this._r1958af931fc4c2(r);
    }
  }
  _r1958af931fc4c2(e) {
    if (e < 0) {
      for (let r of this._items) r.setIconState(ZI.ICON_STATE_NORMAL);
      return;
    }
    e >= this._items.length ||
      (this._ra3da063775b64f >= 0 &&
        this._ra3da063775b64f < this._items.length &&
        this._items[this._ra3da063775b64f]?.setIconState(ZI.ICON_STATE_NORMAL),
      this._items[e]?.setIconState(ZI.ICON_STATE_PLAYING),
      (this._ra3da063775b64f = e));
  }
  _rb1c699246ae043() {
    this.var_154 != null &&
      (this.var_154.deselect(),
      (this.var_154 = null),
      (this._ra3cf95ab451c3c = -1));
  }
  _r3e15584731b5d1 = n((e, r) => {
    let t = e.type === u.DOUBLE_CLICK;
    if (e.type !== u.CLICK && !t) return;
    if (r.name === "button_remove_from_playlist" || t) {
      (this.var_154?.deselect(),
        this._ra3cf95ab451c3c > -1 && this.var_17._re207617a61b687(this._ra3cf95ab451c3c),
        (this.var_154 = null),
        (this._ra3cf95ab451c3c = -1));
      return;
    }
    this.var_154?.deselect();
    let i = this.var_1619?.getListItemIndex(e.window) ?? -1;
    i !== -1 &&
      ((this._ra3cf95ab451c3c = i),
      (this.var_154 = this._items[i] ?? null),
      this.var_154?.select(),
      this.var_17.mainWindowHandler?._re30bf34771d639?._rb1c699246ae043());
  }, "_r3e15584731b5d1");
}
