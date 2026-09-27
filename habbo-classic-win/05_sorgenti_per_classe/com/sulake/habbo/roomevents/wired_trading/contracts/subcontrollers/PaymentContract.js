// Extracted from HabboAirLauncher.deobf.js, line 373717.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/subcontrollers/PaymentContract.as
// Obfuscated name: _ieee2f725146cd0

class a extends AbstractContract {
  static {
    n(this, "PaymentContract");
  }
  static LAYOUT_TYPES = ["generic", "games"];
  paymentMode;
  _r4bc87ceaea7bb6;
  var_1852;
  _rf7365a41cdbf0b;
  var_3880;
  constructor(e, r) {
    (super(e, r),
      (this.paymentMode = r.createRadioGroup(
        [
          new RadioButtonParam(0, "${wiredcontracts.payment_contract.mode.0}"),
          new RadioButtonParam(1, "${wiredcontracts.payment_contract.mode.1}"),
        ],
        this._r103f27b4995ae2,
      )));
    let t = r.createSection("${wiredcontracts.payment_contract.mode}", this.paymentMode);
    this._r4bc87ceaea7bb6 = r._r178edc7e663bd7(new it("", 60));
    let i = r.createSection("${wiredcontracts.payment_contract.receive_text}", this._r4bc87ceaea7bb6);
    ((this.var_1852 = r._rda46c8d1dccbc7(
      e.addEditContractElement.onEdit,
      e.addEditContractElement.onAdd,
    )),
      (this._rf7365a41cdbf0b = r.createSection(
        "${wiredcontracts.payment_requirements}",
        this.var_1852,
      )));
    let s = [
      new ExpandableDropdownOption(0, "${wiredcontracts.payment_contract.layout_type.0}"),
      new ExpandableDropdownOption(1, "${wiredcontracts.payment_contract.layout_type.1}"),
    ];
    this.var_3880 = r.createDropdown(new DropdownParam("${wiredcontracts.payment_contract.layout_type}", s));
    let o = r.createSection(
      "${wiredcontracts.payment_contract.layout_type}",
      this.var_3880,
      Hr.COLLAPSED,
    );
    ((this.framePreset = r._r2c9ac233cf1a70(
      [t, i, this._rf7365a41cdbf0b, o, this._r43e1962e8d351e],
      this._rf4d9b06810c6a7,
    )),
      this.framePreset.resizeToWidth(262),
      (this.framePreset.title = "${wiredcontracts.payment_contract.title}"));
  }
  _r103f27b4995ae2 = n((e) => {
    this._rf7365a41cdbf0b.disabled = e !== Gf._rc8a6b19aa3de85;
  }, "_r103f27b4995ae2");
  _r5219b66c580835() {
    return new e0(this.var_1852._r14b03f12f49678(), null);
  }
  show(e) {
    e._rfb746ff09ca5d8 !== this._rfb746ff09ca5d8() ||
      e.definition?._r6f70d655857f72 == null ||
      (super.show(e),
      (this.paymentMode.selected = e.var_2410),
      (this._r4bc87ceaea7bb6.text = e.receiveText ?? ""),
      (this.var_3880.selectedId = a.LAYOUT_TYPES.indexOf(e._rc4b0045dac224f ?? "")),
      (this.var_1852.rules = e.definition._r6f70d655857f72),
      this._r103f27b4995ae2(e.var_2410),
      this._rf7365a41cdbf0b.var_982(),
      this.showFrame());
  }
  addContentsToComposer(e) {
    (super.addContentsToComposer(e),
      e.push(new Short(this.paymentMode.selected)),
      e.push(this._r4bc87ceaea7bb6.text));
    let r = this.var_3880.selectedId;
    ((r < 0 || r >= a.LAYOUT_TYPES.length) && (r = 0), e.push(a.LAYOUT_TYPES[r]));
  }
  _rfb746ff09ca5d8() {
    return Gf._r965c0c5de4f6f8;
  }
  dispose() {
    this.disposed ||
      ((this.paymentMode = null),
      (this._r4bc87ceaea7bb6 = null),
      (this.var_1852 = null),
      (this._rf7365a41cdbf0b = null),
      (this.var_3880 = null),
      super.dispose());
  }
}
