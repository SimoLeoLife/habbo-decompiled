// Extracted from HabboAirLauncher.deobf.js, line 250846.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_2457.as
// Obfuscated name: _i10e9241d87196a

class extends class_2456 {
  static {
    n(this, "class_2457");
  }
  constructor(e, r) {
    (super(e, r),
      this.plusButton.addEventListener(u.CLICK, this._r9f79a38d94bced),
      this.minusButton.addEventListener(u.CLICK, this._r704002311c7d56),
      this.donateFurniButton.addEventListener(u.CLICK, this.onDonateClick));
  }
  onOpen() {
    (super.onOpen(), (this.usernameInput.text = this.tool.sessionDataManager.userName));
  }
  onDonateClick = n(() => {
    this.tool.windowManager.alert(
      "${error.title}",
      "${moderation.give_furni.too_many_requests}",
      0,
      this._rf2446fe764dd10,
    );
  }, "onDonateClick");
  _rf2446fe764dd10 = n((e, r) => {
    (e.dispose(), this.tool._r43032a825e00cd(4));
  }, "_rf2446fe764dd10");
  _r9f79a38d94bced = n(() => {
    this.amount < 100 && (this.amount = this.amount + 1);
  }, "_r9f79a38d94bced");
  _r704002311c7d56 = n(() => {
    this.amount > 1 && (this.amount = this.amount - 1);
  }, "_r704002311c7d56");
  get amount() {
    return Number.parseInt(this.amountFurniInput.text, 10) || 0;
  }
  set amount(e) {
    this.amountFurniInput.text = `${e}`;
  }
  get usernameInput() {
    return this.window.findChildByName("give_furni_username_input");
  }
  get amountFurniInput() {
    return this.window.findChildByName("amount_furni_input");
  }
  get plusButton() {
    return this.window.findChildByName("plus_btn_furni");
  }
  get minusButton() {
    return this.window.findChildByName("minus_btn_furni");
  }
  get donateFurniButton() {
    return this.window.findChildByName("add_furni_btn");
  }
}
