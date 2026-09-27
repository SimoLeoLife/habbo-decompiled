// Extracted from HabboAirLauncher.deobf.js, line 355662.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_chests/TransactionPreviewTableObject.as
// Obfuscated name: _i11e0babef7ba3c

class {
  constructor(e, r) {
    this._rff9b42021a0552 = e;
    this._transactionInfo = r;
  }
  static {
    n(this, "TransactionPreviewTableObject");
  }
  get identifier() {
    return `${this._transactionInfo.transactionId}`;
  }
  getTableCell(e) {
    switch (e) {
      case R5.LOG_COLUMN_TYPE:
        return new TableCell(
          TableCell.name_2,
          this.localize(`transaction.type.${this._transactionInfo._r3a0a691d948b48}`),
        );
      case R5.LOG_COLUMN_USERNAME:
        return new TableCell(
          TableCell.var_1800,
          this._transactionInfo.userName,
          !1,
          !0,
          null,
          this._r248add23a33123,
        );
      case R5.name_9:
        return new TableCell(
          TableCell.name_2,
          this.summarize(
            this._transactionInfo._r8e2adacf7fbd03,
            this._transactionInfo.depositFurniCount,
          ),
        );
      case R5.LOG_COLUMN_WITHDRAWS:
        return new TableCell(
          TableCell.name_2,
          this.summarize(
            this._transactionInfo._r18acd6f116ae77,
            this._transactionInfo.withdrawFurniCount,
          ),
        );
      default:
        return null;
    }
  }
  isPropertyUpdated(e, r) {
    return !1;
  }
  isUpdated(e) {
    return !1;
  }
  summarize(e, r) {
    return e <= 0 && r <= 0
      ? "-"
      : e > 0 && r === 0
        ? this.localization.getLocalizationWithParams("wiredmenu.chests.room_logs.only_furni", "", "amount", `${e}`)
        : e === 0 && r > 0
          ? this.localization.getLocalizationWithParams("wiredmenu.chests.room_logs.only_coins", "", "amount", `${r}`)
          : this.localization.getLocalizationWithParams(
              "wiredmenu.chests.room_logs.furni_and_coins",
              "",
              "amount",
              `${e}`,
              "amount2",
              `${r}`,
            );
  }
  _r248add23a33123 = n(() => {
    this._rff9b42021a0552.controller.send(new class_2134(this._transactionInfo.userId, !0));
  }, "_r248add23a33123");
  localize(e) {
    return this._rff9b42021a0552.controller.localizationManager.getLocalization(`wiredmenu.chests.${e}`);
  }
  get localization() {
    return this._rff9b42021a0552.controller.localizationManager;
  }
}
