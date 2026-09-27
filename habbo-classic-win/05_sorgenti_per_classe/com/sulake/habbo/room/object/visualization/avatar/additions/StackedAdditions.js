// Estratto da HabboAirLauncher.deobf.js, riga 274394.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/StackedAdditions.as
// Nome offuscato: _i6db8f00fe5c2c7

class a {
  constructor(e, r) {
    this._id = e;
    this.var_204 = r;
  }
  static {
    n(this, "StackedAdditions");
  }
  static LAYER_VARIABLE_FX = 0;
  static LAYER_HABBICON = 100;
  static ROOM_LARGE_STACK_BOTTOM_Y = -86;
  static ROOM_SMALL_STACK_BOTTOM_Y = -45;
  _r43b3d604b57113 = new ig();
  var_371 = null;
  _scale = 64;
  _disposed = !1;
  get id() {
    return this._id;
  }
  get habbicon() {
    return this.var_371;
  }
  get isEmpty() {
    return this._r43b3d604b57113.isEmpty;
  }
  get disposed() {
    return this._disposed;
  }
  get stack() {
    return this._r43b3d604b57113;
  }
  _r47711d6e5422fd(e) {
    (this._r0e191030018184(), (this.var_371 = e), this.addStackedAddition(e, a.LAYER_HABBICON));
  }
  _r0e191030018184() {
    this.var_371 != null &&
      (this._r892589eb59d17d(this.var_371.id), (this.var_371 = null));
  }
  addStackedAddition(e, r, t = 0, i = 0, s = "") {
    this._r43b3d604b57113.add(e, r, t, i, s);
  }
  _r892589eb59d17d(e) {
    (this.var_371?.id === e && (this.var_371 = null), this._r43b3d604b57113.remove(e));
  }
  _rdb0d5f530aa804(e) {
    return this._r43b3d604b57113.get(e);
  }
  getVariableFxAddition(e, r) {
    for (let t of this._r43b3d604b57113.var_791())
      if (t instanceof w5 && t.configId === e && t.variableId === r) return t;
    return null;
  }
  getVariableFxAdditions() {
    return this._r43b3d604b57113.var_791().filter((e) => e instanceof w5);
  }
  update(e, r) {
    ((this._scale = r), this._r43b3d604b57113.update(e, r, this.resolveStackBottomY()));
  }
  animate(e) {
    let r = this._r43b3d604b57113.animate(e, this.resolveStackBottomY());
    return (
      this.var_371 != null &&
        this._r43b3d604b57113.get(this.var_371.id) == null &&
        (this.var_371 = null),
      r
    );
  }
  dispose() {
    (this._r43b3d604b57113.dispose(),
      (this.var_371 = null),
      (this.var_204 = null),
      (this._disposed = !0));
  }
  resolveStackBottomY() {
    let e = this._scale < 48 ? 32 : 64,
      r = this._scale < 48 ? a.ROOM_SMALL_STACK_BOTTOM_Y : a.ROOM_LARGE_STACK_BOTTOM_Y;
    return (
      this.var_204.posture === "sit"
        ? (r += e / 2)
        : this.var_204.posture === "lay" && (r += e),
      r
    );
  }
}
