// Extracted from HabboAirLauncher.deobf.js, line 347452.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SectionPreset.as
// Obfuscated name: _i38643a4c1cbb4c

class extends WiredUIPreset {
  static {
    n(this, "SectionPreset");
  }
  _container;
  var_1045;
  _headerContainer;
  _headerOptionsRightList;
  _headerLeft;
  _reb620f4740a362 = 0;
  _splitter;
  var_606;
  _rbfbf740119d1d6;
  _child;
  _headerOptionLeft = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = null) {
    (t == null && (t = Hr.DEFAULT),
      (this._container = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this.var_1045 = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this._container.spacing = this.var_40.sectionSpacing),
      (this.var_1045.spacing = this.var_40.sectionSpacing),
      (this.var_1045.x = this.var_40._r7e371558824804),
      (this._rbfbf740119d1d6 = []),
      (this._headerContainer = this.var_102._rd65848eed931f7("container_view")),
      (this._headerLeft = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this._headerLeft.spacing = this.var_40._r7ac8f2f1de8d9e),
      (this._headerOptionsRightList = this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this._headerOptionsRightList.spacing = this.var_40._r7ac8f2f1de8d9e),
      (this._splitter = this.var_102._ra6e545ffa959b0()),
      (this._child = r),
      (this._headerOptionLeft = t._r5dcacbb0f4a4c3));
    let i = new Se(this._headerOptionLeft == null ? Se.MODE_MULTILINE : Se.MODE_STRETCH, !0);
    ((this.var_606 = this.var_102.createText(e, i)),
      t._r176ecc19700a82 > 0 && (this.var_606.window.y = t._r176ecc19700a82),
      this._headerLeft.addListItem(this.var_606.window),
      this._headerOptionLeft != null && this._headerLeft.addListItem(this._headerOptionLeft.window),
      this._headerContainer.addChild(this._headerLeft),
      this._headerContainer.addChild(this._headerOptionsRightList),
      this._container.addListItem(this._splitter.window),
      this.var_1045.addListItem(this._headerContainer),
      t._r1bf56750ab0d62 !== Hr.var_5917 && this.var_1045.addListItem(this._child.window),
      this._container.addListItem(this.var_1045));
    for (let s of t._r2bc8c0f354a757) this.addHeaderOption(s);
    if (t._r6f75bfc8fee8c5 != null) {
      let s = this.var_102.createSourceTypeSelector(t._r6f75bfc8fee8c5);
      this.addHeaderOption(s);
    }
    if (t._r1bf56750ab0d62 !== Hr.var_5868) {
      let s = this.var_102._rbdc5201760defe(
        this._r0ffdedce0d3949,
        t._r1bf56750ab0d62 === Hr.var_5914,
      );
      this.addHeaderOption(s);
    }
  }
  addHeaderOption(e) {
    (this._headerOptionsRightList.addListItem(e.window), this._rbfbf740119d1d6.push(e));
  }
  _r0ffdedce0d3949 = n((e) => {
    e
      ? this.var_1045.addListItem(this._child.window)
      : this.var_1045.removeListItem(this._child.window);
  }, "_r0ffdedce0d3949");
  sourceType() {
    for (let e of this._rbfbf740119d1d6) if (e instanceof SourceTypeSelectorPreset) return e;
    return null;
  }
  _r632bce74bd6863() {
    this.resizeToWidth(this._reb620f4740a362);
  }
  resizeToWidth(e) {
    if (this.disposed || this._container == null) return;
    (super.resizeToWidth(e), (this._reb620f4740a362 = e));
    let r = e - 2 * this.var_40._r7e371558824804;
    (this._splitter.resizeToWidth(e), this._child.resizeToWidth(r));
    let t = 0;
    for (let s of this._rbfbf740119d1d6)
      (s.resizeToWidth(s.staticWidth), s.window.bottom > t && (t = s.window.bottom));
    ((this._headerOptionsRightList.x = r - this._headerOptionsRightList.width), (this._headerOptionsRightList.height = t));
    let i = this.var_606.window.height;
    if (this._headerOptionLeft != null) {
      if (this._headerOptionLeft.hasStaticWidth())
        this._headerOptionLeft.resizeToWidth(this._headerOptionLeft.staticWidth);
      else {
        let s =
          r -
          this.var_606.staticWidth -
          this._headerOptionsRightList.width -
          this.var_40._r7ac8f2f1de8d9e;
        (this._headerOptionsRightList.numListItems > 0 && (s -= this.var_40._r7ac8f2f1de8d9e),
          this._headerOptionLeft.resizeToWidth(s));
      }
      (this.var_606.resizeToWidth(this.var_606.staticWidth),
        this._headerOptionLeft.window.height > i && (i = this._headerOptionLeft.window.height));
    } else
      (this.var_606.resizeToWidth(
        r - this._headerOptionsRightList.width - this.var_40._r7ac8f2f1de8d9e,
      ),
        (i = this.var_606.window.height));
    ((this._headerLeft.height = i),
      (this._headerContainer.width = r),
      (this._headerContainer.height = Math.max(t, i)),
      (this._container.width = e));
  }
  set titleText(e) {
    this.var_606.text = e;
  }
  get titleText() {
    return this.var_606.text;
  }
  get window() {
    return this._container;
  }
  get childPresets() {
    let e = [this._splitter, this.var_606, this._child];
    return (this._headerOptionLeft != null && e.push(this._headerOptionLeft), e.concat(this._rbfbf740119d1d6));
  }
  set splitterVisible(e) {
    this._splitter.visible = e;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_1045 = null),
      (this._headerContainer = null),
      (this._headerOptionsRightList = null),
      (this._splitter = null),
      (this.var_606 = null),
      (this._child = null),
      (this._headerLeft = null),
      (this._headerOptionLeft = null));
  }
}
