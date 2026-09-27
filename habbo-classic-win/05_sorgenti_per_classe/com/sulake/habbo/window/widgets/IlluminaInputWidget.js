// Extracted from HabboAirLauncher.deobf.js, line 149824.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/IlluminaInputWidget.as
// Obfuscated name: _i0624c5c3f065a4

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("illumina_input_xml")?.content,
    )),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        (this._rf8f9fc25599fa4.width = this.var_220.width),
      (this._r2959a89f914774 = this._rf8f9fc25599fa4?.findChildByName("submit")),
      (this.var_30 = this._rf8f9fc25599fa4?.findChildByName("input")),
      (this._r1f782f6debed77 = this._rf8f9fc25599fa4?.findChildByName("empty_message")),
      (this._ra2eb0e41ae3590 = String(a._r5a9e1f171753fe.value)),
      (this._rda4899eac6ad8b = String(a._r4bcf4b0850d23b.value)),
      (this.multiline = !!a._re1af8deace47ca.value),
      (this._r4c2336e24c69cc = Number(a._r1590becfdc405f.value)),
      this.refresh(),
      this._rf8f9fc25599fa4 != null && (this._rf8f9fc25599fa4.procedure = this._r20ea11924b9f0f),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4));
  }
  static {
    n(this, "IlluminaInputWidget");
  }
  static TYPE = "illumina_input";
  static _r4e8f77fcbb0b9f = `${a.TYPE}:button_caption`;
  static _r8a75b764f93c11 = `${a.TYPE}:empty_message`;
  static _r757a9248fe869b = `${a.TYPE}:multiline`;
  static _r02b064608a43da = `${a.TYPE}:max_chars`;
  static _r5a9e1f171753fe = new ne(a._r4e8f77fcbb0b9f, "${widgets.chatinput.say}", ne.STRING);
  static _r4bcf4b0850d23b = new ne(a._r8a75b764f93c11, "", ne.STRING);
  static _re1af8deace47ca = new ne(a._r757a9248fe869b, !1, ne.BOOLEAN);
  static _r1590becfdc405f = new ne(a._r02b064608a43da, 0, ne.INT);
  static SINGLE_LINE_HEIGHT = 28;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _r2959a89f914774 = null;
  var_30 = null;
  _r1f782f6debed77 = null;
  _r98ea2b011bb30f = null;
  dispose() {
    this._disposed ||
      ((this.var_30 = null),
      (this._r2959a89f914774 = null),
      (this._r1f782f6debed77 = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get properties() {
    return this._disposed
      ? []
      : [
          a._r5a9e1f171753fe.withValue(this._ra2eb0e41ae3590),
          a._r4bcf4b0850d23b.withValue(this._rda4899eac6ad8b),
          a._re1af8deace47ca.withValue(this.multiline),
          a._r1590becfdc405f.withValue(this._r4c2336e24c69cc),
        ];
  }
  set properties(e) {
    if (!this._disposed)
      for (let r of e)
        switch (r.key) {
          case a._r4e8f77fcbb0b9f:
            this._ra2eb0e41ae3590 = String(r.value);
            break;
          case a._r8a75b764f93c11:
            this._rda4899eac6ad8b = String(r.value);
            break;
          case a._r757a9248fe869b:
            this.multiline = !!r.value;
            break;
          case a._r02b064608a43da:
            this._r4c2336e24c69cc = Number(r.value);
            break;
        }
  }
  get _ra2eb0e41ae3590() {
    return this._r2959a89f914774?.caption ?? "";
  }
  set _ra2eb0e41ae3590(e) {
    this._r2959a89f914774 != null &&
      ((this._r2959a89f914774.caption = e),
      (this._r2959a89f914774.visible = e != null && e.length > 0),
      this.refresh());
  }
  get _rda4899eac6ad8b() {
    return this._r1f782f6debed77?.caption ?? "";
  }
  set _rda4899eac6ad8b(e) {
    this._r1f782f6debed77 != null && (this._r1f782f6debed77.caption = e);
  }
  get multiline() {
    return this.var_30?.multiline ?? !1;
  }
  set multiline(e) {
    this.var_30 == null ||
      this._rf8f9fc25599fa4 == null ||
      this.var_220 == null ||
      ((this.var_30.multiline = e),
      this._rf8f9fc25599fa4.setParamFlag(N._r46a9ac2e4c9863, e),
      (this._rf8f9fc25599fa4.height = e ? this.var_220.height : a.SINGLE_LINE_HEIGHT));
  }
  get _r4c2336e24c69cc() {
    return this.var_30?._r4c2336e24c69cc ?? 0;
  }
  set _r4c2336e24c69cc(e) {
    this.var_30 != null && (this.var_30._r4c2336e24c69cc = Math.trunc(e));
  }
  get message() {
    return this.var_30?.caption ?? "";
  }
  set message(e) {
    this.var_30 != null && ((this.var_30.caption = e), this.refresh());
  }
  get _r8b6f1399ef3de2() {
    return this._r98ea2b011bb30f;
  }
  set _r8b6f1399ef3de2(e) {
    this._r98ea2b011bb30f = e;
  }
  _r20ea11924b9f0f = n((e, r) => {
    switch (e.type) {
      case y.WINDOW_EVENT_CHANGE:
        r === this.var_30 && this.refresh();
        break;
      case sr.const_1081:
        r === this.var_30 &&
          e.charCode === 13 &&
          this._r2959a89f914774?.visible &&
          this.submitMessage();
        break;
      case u.CLICK:
        r === this._r2959a89f914774 && this.submitMessage();
        break;
    }
  }, "_r20ea11924b9f0f");
  submitMessage() {
    this._r98ea2b011bb30f != null &&
      this.var_220 != null &&
      this._r98ea2b011bb30f._r64e450f8ad70fb(this.var_220, this.message);
  }
  refresh() {
    this.var_30 == null ||
      this._r1f782f6debed77 == null ||
      this._rf8f9fc25599fa4 == null ||
      ((this._r1f782f6debed77.visible = this.var_30.length === 0),
      (this.var_30.width =
        (this._r2959a89f914774?.visible ? this._r2959a89f914774.x : this._rf8f9fc25599fa4.width) -
        this.var_30.x * 2));
  }
}
