// Extracted from HabboAirLauncher.deobf.js, line 195056.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/SongDiskProductViewCatalogWidget.as
// Obfuscated name: _ib653b920a76f68

class extends Om {
  constructor(r, t) {
    super(r, t);
    this._r400cfb2824387d = t;
    ((this.var_1064 = this._window?.findChildByName("listen")),
      (this._r043f2ed289cea2 = this._window?.findChildByName("ctlg_song_length") ?? null),
      this.var_1064 != null &&
        (this.var_1064.addEventListener(u.CLICK, this._r36ca3f8f0859a9),
        this.var_1064.disable()),
      (this._playPreviewContainer = this._window?.findChildByName("playPreviewContainer")),
      this._playPreviewContainer != null && (this._playPreviewContainer.visible = !1),
      this._r400cfb2824387d?.musicController?.events.addEventListener?.(
        SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED,
        this.onSongInfoReceivedEvent,
      ),
      this._r400cfb2824387d?.connection != null &&
        ((this._r7179cc95d853cf = new UnkMessageEvent_4415b3(this._ra9edcce961a3e0)),
        this._r400cfb2824387d.connection.addMessageEvent(this._r7179cc95d853cf)));
  }
  static {
    n(this, "SongDiskProductViewCatalogWidget");
  }
  _playPreviewContainer = null;
  var_1064 = null;
  _r043f2ed289cea2 = null;
  var_1046 = -1;
  _rebb6a81809bb2b = "";
  _r7179cc95d853cf = null;
  init() {
    return !super.init() || (this.page?.offers.length ?? 0) === 0
      ? !1
      : (this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413), !0);
  }
  dispose() {
    (this.var_1064 != null &&
      this.var_1064.removeEventListener(u.CLICK, this._r36ca3f8f0859a9),
      this._r400cfb2824387d?.musicController?.soundManager?.stop(UnkConstants_a57980._r12a36356ec1cd6),
      this._r400cfb2824387d?.musicController?.events.removeEventListener?.(
        SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED,
        this.onSongInfoReceivedEvent,
      ),
      this._r7179cc95d853cf != null &&
        (this._r400cfb2824387d?.connection?.removeMessageEvent(this._r7179cc95d853cf),
        (this._r7179cc95d853cf = null)),
      (this.var_1064 = null),
      (this._playPreviewContainer = null),
      (this._r043f2ed289cea2 = null),
      (this._r400cfb2824387d = null),
      super.dispose());
  }
  closed() {
    (super.closed(), this._r400cfb2824387d?.musicController?.soundManager?.stop(UnkConstants_a57980._r12a36356ec1cd6));
  }
  _r36ca3f8f0859a9 = n((r) => {
    let t = this._r400cfb2824387d?.musicController?.soundManager;
    t != null &&
      (this._rd6a41a4c205e28(UnkConstants_a57980._r91444358db0d2d),
      this._rd6a41a4c205e28(UnkConstants_a57980._r12a36356ec1cd6),
      t._r327803e778efff(this.var_1046, UnkConstants_a57980._r12a36356ec1cd6, 15, 40, 0.5, 2));
  }, "_r36ca3f8f0859a9");
  _rd6a41a4c205e28(r) {
    let t = this._r400cfb2824387d?.musicController?.soundManager,
      i = t?._r1e81274f76e6d5(r) ?? -1;
    if (i === -1) return;
    let s = t?._r716cd8f1931469(i);
    s?._r551c6e37b9b07d != null && (s._r551c6e37b9b07d._r754bf5401e8707 = 0);
  }
  _rae8e17ddaeb413 = n((r) => {
    if (r.offer == null) return;
    let t = r.offer.product;
    (t != null && t.extraParam.length > 0
      ? ((this.var_1046 = Number.parseInt(t.extraParam, 10)),
        this.var_1046 === 0 &&
          ((this._rebb6a81809bb2b = t.extraParam),
          this._r400cfb2824387d?.connection?.send(new class_2678(this._rebb6a81809bb2b))),
        this._playPreviewContainer != null && (this._playPreviewContainer.visible = !0))
      : (this.var_1046 = -1),
      this.updateView());
  }, "_rae8e17ddaeb413");
  updateView() {
    let r = !1,
      t = this.getSongLength();
    if (t >= 0) {
      let i = `${Math.floor(t / 60)}`,
        s = t % 60,
        o = s < 10 ? `0${s}` : `${s}`;
      this._r400cfb2824387d?.localization?._r43eae9731f5b27("catalog.song.length", "min", i);
      let d = this._r400cfb2824387d?.localization?._r43eae9731f5b27("catalog.song.length", "sec", o) ?? "";
      ((r = !0), this._r043f2ed289cea2 != null && (this._r043f2ed289cea2.caption = d));
    } else this._r043f2ed289cea2 != null && (this._r043f2ed289cea2.caption = "");
    this.var_1064 != null && (r ? this.var_1064.enable() : this.var_1064.disable());
  }
  getSongLength() {
    let r = this._r400cfb2824387d?.musicController?.soundManager,
      t = r?._r716cd8f1931469(this.var_1046);
    return t != null ? Math.floor(t.length / 1e3) : (r?._rbb1ae2f8cd13c9(this.var_1046), -1);
  }
  onSongInfoReceivedEvent = n((r) => {
    r.id === this.var_1046 && this.updateView();
  }, "onSongInfoReceivedEvent");
  _ra9edcce961a3e0 = n((r) => {
    let t = r.getParser();
    t._r083c961df341d7 === this._rebb6a81809bb2b &&
      ((this.var_1046 = t.songId), this.updateView());
  }, "_ra9edcce961a3e0");
}
