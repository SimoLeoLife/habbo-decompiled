// Estratto da HabboAirLauncher.deobf.js, riga 374760.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/overview/TransactionTableObject.as
// Nome offuscato: _i030847fcef08d0

class {
  constructor(e, r) {
    this.var_63 = e;
    this._transactionInfo = r;
  }
  static {
    n(this, "TransactionTableObject");
  }
  get identifier() {
    return `${this._transactionInfo.transactionId}`;
  }
  getTableCell(e) {
    switch (e) {
      case F0.LOG_COLUMN_TYPE:
        return new TableCell(
          TableCell.name_2,
          this.localize(`wired_transactions.type.${this._transactionInfo._r3a0a691d948b48}`),
        );
      case F0.LOG_COLUMN_TIMESTAMP:
        return new TableCell(TableCell.name_2, this._transactionInfo._r7b6f1526b2d3b9);
      case F0.LOG_COLUMN_USERNAME:
        return new TableCell(
          TableCell.var_1800,
          this._transactionInfo.userName,
          !1,
          !0,
          null,
          this._r248add23a33123,
        );
      case F0.name_9:
        return new TableCell(
          TableCell.name_2,
          this.summarize(
            this._transactionInfo._r8e2adacf7fbd03,
            this._transactionInfo.depositFurniCount,
          ),
        );
      case F0.LOG_COLUMN_WITHDRAWS:
        return new TableCell(
          TableCell.name_2,
          this.summarize(
            this._transactionInfo._r18acd6f116ae77,
            this._transactionInfo.withdrawFurniCount,
          ),
        );
      case F0.const_995:
        return new TableCell(TableCell.name_2, `${this._transactionInfo._r2cac38193b0d1d}`);
      case F0.LOG_COLUMN_DETAILS:
        return new TableCell(
          TableCell.var_1800,
          this.localize("wiredchests.logs.details_text"),
          !1,
          !1,
          null,
          this._r82c8ea1b6a6622,
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
  _r248add23a33123 = n(() => {
    this.var_63.send(new class_2134(this._transactionInfo.userId, !0));
  }, "_r248add23a33123");
  _r82c8ea1b6a6622 = n(() => {
    this.var_63.send(new _i4640617aeeb3e0(this._transactionInfo.transactionId));
  }, "_r82c8ea1b6a6622");
  localize(e) {
    return this.localization.getLocalization(e);
  }
  summarize(e, r) {
    return e <= 0 && r <= 0
      ? "-"
      : e > 0 && r === 0
        ? this.localization.getLocalizationWithParams("wiredchests.logs.only_furni", "", "amount", `${e}`)
        : e === 0 && r > 0
          ? this.localization.getLocalizationWithParams("wiredchests.logs.only_coins", "", "amount", `${r}`)
          : this.localization.getLocalizationWithParams(
              "wiredchests.logs.furni_and_coins",
              "",
              "amount",
              `${e}`,
              "amount2",
              `${r}`,
            );
  }
  get localization() {
    return this.var_63.localizationManager;
  }
}
