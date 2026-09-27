// Estratto da HabboAirLauncher.deobf.js, riga 226491.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/class_3162.as
// Nome offuscato: _i800b5d9a834fb5

class a {
  static {
    n(this, "class_3162");
  }
  static _r0c2f6e840546db = 0;
  static _r9d4bf4a4d75660 = 1;
  static const_104 = 2;
  static TYPE_LARGE = 3;
  static const_96 = 4;
  static _rb533843460cf8e = 0;
  static _rf28a828a634ee8 = 1;
  _data = null;
  var_2184 = null;
  var_3903 = null;
  _r9b27646803641e = null;
  _rd0b69a9f97ee22 = null;
  var_3900 = null;
  prepare(e) {
    let r = e.findChildByName("step_cont_5");
    r != null &&
      ((this.var_2184 = r.findChildByName("group_type_selector")),
      (this.var_3903 = r.findChildByName("rb_type_regular")),
      (this._r9b27646803641e = r.findChildByName("rb_type_exclusive")),
      (this._rd0b69a9f97ee22 = r.findChildByName("rb_type_private")),
      (this.var_3900 = r.findChildByName("cb_member_rights")),
      this.var_3903 != null && (this.var_3903.procedure = this._r2ea62375b2d97a),
      this._r9b27646803641e != null && (this._r9b27646803641e.procedure = this._r9a971497c56385),
      this._rd0b69a9f97ee22 != null && (this._rd0b69a9f97ee22.procedure = this._r651c36d2e85a98),
      this.var_3900 != null && (this.var_3900.procedure = this._rdc2633e477622e));
  }
  refresh(e) {
    switch (((this._data = new i7e(e)), this._data.guildType)) {
      case a._r0c2f6e840546db:
        this.var_2184 != null &&
          this.var_3903 != null &&
          this.var_2184.setSelected(this.var_3903);
        break;
      case a._r9d4bf4a4d75660:
        this.var_2184 != null &&
          this._r9b27646803641e != null &&
          this.var_2184.setSelected(this._r9b27646803641e);
        break;
      case a.const_104:
        this.var_2184 != null &&
          this._rd0b69a9f97ee22 != null &&
          this.var_2184.setSelected(this._rd0b69a9f97ee22);
        break;
      default:
        this.var_2184 != null &&
          this.var_3903 != null &&
          this.var_2184.setSelected(this.var_3903);
        break;
    }
    (this._data._r40e0656765dad1 === a._rb533843460cf8e
      ? this.var_3900?.select()
      : this.var_3900?.unselect(),
      this.var_2184?.invalidate());
  }
  resetModified() {
    this._data?._r0ccd2949feccee && this._data.resetModified();
  }
  get guildType() {
    return this._data?.guildType ?? a._r0c2f6e840546db;
  }
  get _r40e0656765dad1() {
    return this._data?._r40e0656765dad1 ?? a._rf28a828a634ee8;
  }
  get isInitialized() {
    return this._data != null;
  }
  _r2ea62375b2d97a = n((e, r) => {
    e.type === y.const_587 && this._data != null && (this._data.guildType = a._r0c2f6e840546db);
  }, "_r2ea62375b2d97a");
  _r9a971497c56385 = n((e, r) => {
    e.type === y.const_587 && this._data != null && (this._data.guildType = a._r9d4bf4a4d75660);
  }, "_r9a971497c56385");
  _r651c36d2e85a98 = n((e, r) => {
    e.type === y.const_587 && this._data != null && (this._data.guildType = a.const_104);
  }, "_r651c36d2e85a98");
  _rdc2633e477622e = n((e, r) => {
    this._data != null &&
      (e.type === y.const_587 && (this._data._r40e0656765dad1 = a._rb533843460cf8e),
      e.type === y.const_774 && (this._data._r40e0656765dad1 = a._rf28a828a634ee8));
  }, "_rdc2633e477622e");
}
