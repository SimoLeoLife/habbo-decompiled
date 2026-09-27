// Estratto da HabboAirLauncher.deobf.js, riga 351412.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/InputSourceSection.as
// Nome offuscato: _ib87e26bb9d6800

class extends AbstractSectionPreset {
  static {
    n(this, "InputSourceSection");
  }
  var_3691;
  var_295;
  var_179;
  _picker;
  _r20bd3b9baa9400;
  _rf78276b27dec72;
  _rc0b3c2c925f2a0 = null;
  _r869e80646e8527 = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s = !1, o = !1) {
    ((this._picker = new Ve(this._roomEvents, r, t)),
      (this._r20bd3b9baa9400 = this.var_102._rd2781d694b92e9("left", () => {
        (this._picker.onChangeInputSource(!1), this.updateUI());
      })),
      (this.var_179 = this.var_102.createText(
        "",
        new Se(Se.MODE_MULTILINE, !1, 0, !1, nr.CENTER),
      )),
      (this._rf78276b27dec72 = this.var_102._rd2781d694b92e9("right", () => {
        (this._picker.onChangeInputSource(!0), this.updateUI());
      })),
      (this.var_295 = this.var_102.createSimpleListView(
        !1,
        [this._r20bd3b9baa9400, this.var_179, this._rf78276b27dec72],
        !0,
      )),
      (this.var_295.minHeight = this.var_40._r0aeae51937870c),
      (this.var_295.spacing = this.var_40._r5996c272a01c79),
      (this.var_3691 = this.var_102._r5ce8ba4791791e(
        this.var_295,
        this.var_40._ra3ba1f0505ab21,
        this.var_40._re06eb3065bb85c,
        this.var_40._ra3ba1f0505ab21,
        this.var_40._re06eb3065bb85c,
      )));
    let d = null;
    (r === Ve.MERGED_SOURCE && !s && (d = new Hr(new SourceTypeSelectorParam(i, this))),
      o &&
        (d == null && (d = new Hr()),
        (this._rc0b3c2c925f2a0 = this.var_102._r3ab83a89e25169(
          "furni_picks_1",
          "${wiredfurni.params.furni_picking.tooltip}",
          this._r90ce1ed04efb3c,
        )),
        (this._r869e80646e8527 = this.var_102._r3ab83a89e25169(
          "furni_picks_2",
          "${wiredfurni.params.furni_picking.tooltip}",
          this._rdb11dd8cf7d24b,
        )),
        d.addHeaderOption(this._rc0b3c2c925f2a0),
        d.addHeaderOption(this._r869e80646e8527)),
      this.initializeSection(e, this.var_3691, d));
  }
  _r90ce1ed04efb3c = n(() => {
    this._roomEvents.presetManager.activeFurniPicks = 1;
  }, "_r90ce1ed04efb3c");
  _rdb11dd8cf7d24b = n(() => {
    this._roomEvents.presetManager.activeFurniPicks = 2;
  }, "_rdb11dd8cf7d24b");
  activeFurniPicksChanged() {
    this._rc0b3c2c925f2a0 != null && this._rc0b3c2c925f2a0.visible
      ? (this._rc0b3c2c925f2a0.selected = this._roomEvents.presetManager.activeFurniPicks === 1)
      : this._r869e80646e8527 != null &&
        this._r869e80646e8527.visible &&
        (this._r869e80646e8527.selected = this._roomEvents.presetManager.activeFurniPicks === 2);
  }
  refresh(e, r) {
    (this._picker.refreshContainer(e, r), this.updateUI());
  }
  updateUI() {
    if (
      ((this.disabled = this._picker.disabled),
      (this._r20bd3b9baa9400.disabled = this._picker._rb79aad30ae67c4),
      (this._rf78276b27dec72.disabled = this._picker._rb79aad30ae67c4),
      (this.var_179.text = this._picker._r12788e38c39058),
      this._rc0b3c2c925f2a0 != null && this._r869e80646e8527 != null)
    )
      switch (this._picker._ra5134c003bbce3) {
        case Ve._rc3734c637e361f:
          ((this._rc0b3c2c925f2a0.visible = !0),
            (this._r869e80646e8527.visible = !1),
            (this._rc0b3c2c925f2a0.selected = this._roomEvents.presetManager.activeFurniPicks === 1));
          break;
        case Ve._r96bd8b32e45b91:
          ((this._rc0b3c2c925f2a0.visible = !1),
            (this._r869e80646e8527.visible = !0),
            (this._r869e80646e8527.selected = this._roomEvents.presetManager.activeFurniPicks === 2));
          break;
        default:
          ((this._rc0b3c2c925f2a0.visible = !1), (this._r869e80646e8527.visible = !1));
          break;
      }
    this.var_967._r632bce74bd6863();
  }
  get baseSourceType() {
    return this._picker.sourceType;
  }
  get id() {
    return this._picker.id;
  }
  set sourceType(e) {
    this._picker.sourceType = e;
    let r = this.var_967.sourceType();
    (r?.select(e), this.updateUI());
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_3691 = null),
      (this.var_295 = null),
      (this.var_179 = null),
      this._picker.dispose(),
      (this._picker = null),
      (this._r20bd3b9baa9400 = null),
      (this._rf78276b27dec72 = null),
      (this._rc0b3c2c925f2a0 = null),
      (this._r869e80646e8527 = null));
  }
}
