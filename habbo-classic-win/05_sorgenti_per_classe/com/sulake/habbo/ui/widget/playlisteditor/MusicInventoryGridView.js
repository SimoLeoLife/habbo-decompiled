// Extracted from HabboAirLauncher.deobf.js, line 324287.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/playlisteditor/MusicInventoryGridView.as
// Obfuscated name: _ie1bbcfedb4dfd3

class {
  constructor(e, r, t) {
    this.var_17 = e;
    this._r1bfb2fe1ce8631 = r;
    this._r8976fb174e3935 = t;
    this._r8976fb174e3935?.events.addEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent);
  }
  static {
    n(this, "MusicInventoryGridView");
  }
  _items = new B();
  var_154 = null;
  get itemCount() {
    return this._items.length;
  }
  destroy() {
    (this._r1bfb2fe1ce8631?._rbb4c26d068856f(),
      (this._r1bfb2fe1ce8631 = null),
      this._r8976fb174e3935?.events.removeEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent),
      (this._r8976fb174e3935 = null),
      this._items.reset(),
      (this.var_154 = null),
      (this.var_17 = null));
  }
  refresh() {
    if (this._r1bfb2fe1ce8631 == null || this._r8976fb174e3935 == null) return;
    this._r1bfb2fe1ce8631.removeGridItems();
    let e = this._items,
      r = e.getKeys();
    this._items = new B();
    let t = this._r8976fb174e3935._r7cff41fce75721();
    for (let i = 0; i < t; i++) {
      let s = this._r8976fb174e3935._r24d7f71c73747b(i),
        o = this._r8976fb174e3935._rb42dbfb1fa5f77(i),
        d = this._r8976fb174e3935._r716cd8f1931469(o),
        c = null,
        f = null;
      d != null && ((c = d.name), (f = this.var_17._rbc4755f50a3273(d._race451481abd84)));
      let l = null;
      (r.indexOf(s) === -1
        ? (l = new Bg(this.var_17, s, o, c, f))
        : ((l = e.getValue(s) ?? null), r.splice(r.indexOf(s), 1)),
        l?.window != null &&
          ((l.window.procedure = this._r23c0ad184a5223),
          l.gridItemEventProc && (l.gridItemEventProc.procedure = this._r23c0ad184a5223),
          this._r1bfb2fe1ce8631.addGridItem(l.window),
          this._items.add(s, l)));
    }
    for (let i of r) ((e.getValue(i) ?? null)?.destroy(), e.remove(i));
  }
  _r858e723740b683() {
    this.var_154 != null && (this.var_154.playButtonState = Bg.const_348);
  }
  _r0edf0270c9d949() {
    this.var_154 != null && (this.var_154.playButtonState = Bg.const_1252);
  }
  _rb1c699246ae043() {
    this.var_154 != null &&
      (this.var_154.deselect(), (this.var_154 = null));
  }
  _r23c0ad184a5223 = n((e, r) => {
    let t = e.type === u.DOUBLE_CLICK;
    if (e.type !== u.CLICK && !t) return;
    if (r.name === "button_to_playlist" || t) {
      this.var_154 != null &&
        (this.var_154.deselect(),
        this._re894548d12cf1c(),
        this.var_17._r9dda2f0a86966c(this.var_154._r398f5a77bf5446),
        (this.var_154 = null));
      return;
    }
    if (r.name === "button_play_pause") {
      this.var_154?.playButtonState === Bg.const_1252
        ? ((this.var_154.playButtonState = Bg.BUTTON_STATE_DOWNLOAD),
          this.var_17._r436bff01c15f8f(this.var_154.songId))
        : this._re894548d12cf1c();
      return;
    }
    let i = this._r1bfb2fe1ce8631?._r76bcf89cad2fb2(e.window) ?? -1;
    if (i === -1) return;
    let s = this._items.getWithIndex(i);
    (s !== this.var_154 &&
      (this.var_154?.deselect(),
      (this.var_154 = s),
      this.var_154?.select(),
      this._re894548d12cf1c()),
      this.var_17.mainWindowHandler?._rc10b3de056a064?._rb1c699246ae043());
  }, "_r23c0ad184a5223");
  _re894548d12cf1c() {
    (this.var_17._rb2da6120579a49(), this._r0edf0270c9d949());
  }
  onSongInfoReceivedEvent = n((e) => {
    let r = this._r8976fb174e3935?._r716cd8f1931469(e.id);
    if (r == null) return;
    let t = this._items.getValue(e.id) ?? null,
      i = this.var_17._rbc4755f50a3273(r._race451481abd84);
    t?.update(e.id, r.name, i);
  }, "onSongInfoReceivedEvent");
}
