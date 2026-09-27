// Extracted from HabboAirLauncher.deobf.js, line 359330.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i578ed57463cf67

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this._element = r;
    this.var_1308 = t;
  }
  static {
    n(this, "UnkClass_578ed5");
  }
  get identifier() {
    return `${this._element._racdc611b14035d}-${this._element.entityId}`;
  }
  get element() {
    return this._element;
  }
  get variable() {
    return this.var_1308;
  }
  getTableCell(e) {
    switch (e) {
      case Nc.LOG_COLUMN_USERTYPE:
        return new TableCell(
          TableCell.name_2,
          this.localize(`wiredfurni.params.usertype.${this._element._racdc611b14035d}`),
        );
      case Nc.LOG_COLUMN_NAME:
        return this._element._racdc611b14035d === RoomObjectTypeEnum.OBJECT_TYPE_USER
          ? new TableCell(TableCell.var_1800, this._element.entityName, !1, !0, null, this._r248add23a33123)
          : new TableCell(TableCell.name_2, this._element.entityName, !1, !0);
      case Nc.LOG_COLUMN_CREATION_TIME:
        return new TableCell(TableCell.name_2, this._element.storage._r153022da84319c, !1, !0);
      case Nc.LOG_COLUMN_LAST_UPDATE_TIME:
        return new TableCell(TableCell.name_2, this._element.storage._rb4d446d8a2e50a, !1, !0);
      case Nc.const_765:
        return Og.createVariableValueCell(
          this.var_1308,
          this._element.storage.value,
          this.localization,
          !1,
          !1,
        );
      case Nc.LOG_COLUMN_MANAGE:
        return new TableCell(
          TableCell.var_1800,
          this.localize("wiredmenu.variable_management.manage"),
          !1,
          !1,
          null,
          this._r5a4502c7ad1856,
        );
      default:
        return new TableCell(TableCell.name_2, "");
    }
  }
  isPropertyUpdated(e, r) {
    let t = r;
    return e === Nc.LOG_COLUMN_CREATION_TIME
      ? this._element.storage.creationTime !== t.element.storage.creationTime
      : e === Nc.LOG_COLUMN_LAST_UPDATE_TIME
        ? this._element.storage._rd5b25ad4c3f288 !== t.element.storage._rd5b25ad4c3f288
        : e === Nc.const_765
          ? this._element.storage.value !== t.element.storage.value ||
            this.var_1308.hasValue !== t.variable.hasValue
          : !1;
  }
  isUpdated(e) {
    return (
      this.isPropertyUpdated(Nc.LOG_COLUMN_CREATION_TIME, e) ||
      this.isPropertyUpdated(Nc.LOG_COLUMN_LAST_UPDATE_TIME, e) ||
      this.isPropertyUpdated(Nc.const_765, e)
    );
  }
  _r248add23a33123 = n(() => {
    this.var_63.send(new class_2134(this._element.entityId, !0));
  }, "_r248add23a33123");
  _r5a4502c7ad1856 = n(() => {
    this.var_63.send(new UnkMessageComposer_2args_005f5c(this._element._racdc611b14035d, this._element.entityId));
  }, "_r5a4502c7ad1856");
  localize(e) {
    return this.localization.getLocalization(e);
  }
  get localization() {
    return this.var_63.localizationManager;
  }
}
