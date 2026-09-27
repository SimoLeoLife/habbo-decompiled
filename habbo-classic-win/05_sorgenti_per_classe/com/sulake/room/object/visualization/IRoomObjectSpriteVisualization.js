// Estratto da HabboAirLauncher.deobf.js, riga 376460.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/IRoomObjectSpriteVisualization.as
// Nome offuscato: _i159f8de9b0c33b

class {
  static {
    n(this, "IRoomObjectSpriteVisualization");
  }
  _sprites = [];
  _r576876a3712830 = -1;
  _r03c3e2e0213662 = -1;
  _ra56d3c7afccc05 = !1;
  get _r07cfc8b3f013c3() {
    return this._sprites.length;
  }
  get isEmpty() {
    return this._ra56d3c7afccc05;
  }
  get sprites() {
    return this._sprites;
  }
  dispose() {
    this._r8caebd0b3a5ef6(0);
  }
  _r712af53e9bfc57(e) {
    this._sprites.push(e);
  }
  getSprite(e) {
    return this._sprites[e] ?? null;
  }
  needsUpdate(e, r) {
    return e !== this._r576876a3712830 || r !== this._r03c3e2e0213662
      ? ((this._r576876a3712830 = e), (this._r03c3e2e0213662 = r), !0)
      : !1;
  }
  _r8caebd0b3a5ef6(e) {
    if (e < this._sprites.length) {
      for (let r = e; r < this._sprites.length; r++) this._sprites[r]?.dispose();
      this._sprites.splice(e, this._sprites.length - e);
    }
    this._ra56d3c7afccc05 = this._sprites.length === 0;
  }
}
