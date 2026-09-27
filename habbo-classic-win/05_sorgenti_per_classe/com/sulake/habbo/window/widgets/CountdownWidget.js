// Estratto da HabboAirLauncher.deobf.js, riga 148589.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/CountdownWidget.as
// Nome offuscato: _i91e7df017c9907

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("clock_base_xml")?.content,
    )),
      (this._rf522f03b2068a9 = this._rf8f9fc25599fa4?.getListItemByName("counter")),
      (this._r4926dae5d7ad44 = this._rf8f9fc25599fa4?.getListItemByName("separator")),
      (this.digits = Number(a._rad6ac0902ba8e7.value)),
      this._windowManager?.registerUpdateReceiver(this, 10),
      this.var_220?.setParamFlag(N._r22d1ec858797ca),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4));
  }
  static {
    n(this, "CountdownWidget");
  }
  static TYPE = "countdown";
  static _rb6706a83c9d4bf = `${a.TYPE}:running`;
  static _rb3d961b7bb64de = `${a.TYPE}:digits`;
  static _r6d777baa68221b = `${a.TYPE}:seconds`;
  static _r3569af744562d5 = `${a.TYPE}:color_style`;
  static _r299b877fdaf832 = new ne(a._rb6706a83c9d4bf, !1, ne.BOOLEAN);
  static _rad6ac0902ba8e7 = new ne(a._rb3d961b7bb64de, 3, ne.const_77);
  static _r155d9127127fea = new ne(a._r6d777baa68221b, 0, ne.INT);
  static _rd97219d07346d6 = new ne(a._r3569af744562d5, 0, ne.INT);
  static UNIT_KEY_PREFIX = "countdown_clock_unit_";
  static _rac1092a3f0c902 = ["weeks", "days", "hours", "minutes", "seconds"];
  static _r286b6d73323023 = [604800, 86400, 3600, 60, 1];
  static _r49df15e32eda10 = [100, 7, 24, 60, 60];
  static _r43e17af9e5bacd = [0, 16777215];
  static _r3aa72877dc9c43 = [3003121663, 0];
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _rf522f03b2068a9 = null;
  _r4926dae5d7ad44 = null;
  var_894 = !!a._r299b877fdaf832.value;
  _r361c11cf89b484 = Number(a._r155d9127127fea.value);
  _startTime = _ia411d8d8194a3a();
  var_3133 = Number(a._rd97219d07346d6.value);
  _re8639a8ea19849 = -1;
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this._rf522f03b2068a9?.dispose(),
      (this._rf522f03b2068a9 = null),
      this._r4926dae5d7ad44?.dispose(),
      (this._r4926dae5d7ad44 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._windowManager?.removeUpdateReceiver(this),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  update(e) {
    this.updateTime();
  }
  get properties() {
    return this._disposed
      ? []
      : [
          a._r299b877fdaf832.withValue(this.var_894),
          a._rad6ac0902ba8e7.withValue(this.digits),
          a._r155d9127127fea.withValue(this.seconds),
          a._rd97219d07346d6.withValue(this.colorStyle),
        ];
  }
  set properties(e) {
    if (!this._disposed)
      for (let r of e)
        switch (r.key) {
          case a._rb6706a83c9d4bf:
            this.running = !!r.value;
            break;
          case a._rb3d961b7bb64de:
            this.digits = Number(r.value);
            break;
          case a._r6d777baa68221b:
            this.seconds = Number(r.value);
            break;
          case a._r3569af744562d5:
            this.colorStyle = Number(r.value);
            break;
        }
  }
  get colorStyle() {
    return this.var_3133;
  }
  set colorStyle(e) {
    this.var_3133 = Math.trunc(e);
    let r = this._rf8f9fc25599fa4?.numListItems ?? 0;
    for (let t = 0; t < r; t++) {
      let s = this._rf8f9fc25599fa4?.getListItemAt(t)?.getChildByName("unit");
      if (s == null) continue;
      let o = s.textColor,
        d = s.etchingColor;
      (this.var_3133 >= 0 &&
        this.var_3133 < a._r43e17af9e5bacd.length &&
        ((o = a._r43e17af9e5bacd[this.var_3133]), (d = a._r3aa72877dc9c43[this.var_3133])),
        (s.textColor = o),
        (s.etchingColor = d));
    }
  }
  get running() {
    return this.var_894;
  }
  set running(e) {
    (this.var_894 && !e && (this._r361c11cf89b484 = this.seconds),
      !this.var_894 && e && (this._startTime = _ia411d8d8194a3a()),
      (this.var_894 = e));
  }
  get digits() {
    return ((this._rf8f9fc25599fa4?.numListItems ?? 0) + 1) / 2;
  }
  set digits(e) {
    let r = Math.max(2, Math.min(4, Math.trunc(e)));
    if (!(
      r === this.digits ||
      this._rf8f9fc25599fa4 == null ||
      this._rf522f03b2068a9 == null ||
      this._r4926dae5d7ad44 == null
    )) {
      this._rf8f9fc25599fa4.removeListItems();
      for (let t = 0; t < r; t++)
        (t !== 0 && this._rf8f9fc25599fa4.addListItem(this._r4926dae5d7ad44.clone()),
          this._rf8f9fc25599fa4.addListItem(this._rf522f03b2068a9.clone()));
      this.updateTime(!0);
    }
  }
  get seconds() {
    return this.var_894
      ? Math.max(0, this._r361c11cf89b484 - Math.trunc((_ia411d8d8194a3a() - this._startTime) / 1e3))
      : this._r361c11cf89b484;
  }
  set seconds(e) {
    ((this._r361c11cf89b484 = Math.trunc(e)), (this._startTime = _ia411d8d8194a3a()), this.updateTime());
  }
  updateTime(e = !1) {
    let r = this.seconds;
    if (r === this._re8639a8ea19849 && !e) return;
    let t = this.digits,
      i = a.getMaxUnitIndex(t, r);
    for (let s = 0; s < t; s++) {
      let o = i + s,
        d = this._rf8f9fc25599fa4?.getListItemAt(s * 2);
      if (d == null) continue;
      let c = Math.trunc(r / a._r286b6d73323023[o]) % a._r49df15e32eda10[o],
        f = d.getChildByName("value"),
        l = d.getChildByName("unit");
      (f != null && (f.caption = `${c < 10 ? "0" : ""}${c}`),
        l != null && (l.caption = `\${${a.UNIT_KEY_PREFIX}${a._rac1092a3f0c902[o]}}`));
    }
    this._re8639a8ea19849 = r;
  }
  static getMaxUnitIndex(e, r) {
    let t = 0;
    for (; t < a._r286b6d73323023.length - e; t++) if (r >= a._r286b6d73323023[t]) return t;
    return t;
  }
}
