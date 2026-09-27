// Extracted from HabboAirLauncher.deobf.js, line 58670.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/profiler/ProfilerViewer.as
// Obfuscated name: _i5e761c6c8ad1c5

class a extends Pt {
  static {
    n(this, "ProfilerViewer");
  }
  _disposed = !1;
  var_577 = null;
  constructor(e) {
    super();
    let r = new _i("Courier New", 8);
    ((this.defaultTextFormat = r),
      this._rf728d1a4d87da8(r),
      (this.textColor = 16777215),
      (this.width = 10),
      (this.height = 10),
      (this.autoSize = "left"),
      (this.mouseEnabled = !1),
      (this.selectable = !1),
      e != null && (this.profiler = e));
  }
  get disposed() {
    return this._disposed;
  }
  set profiler(e) {
    this.var_577 == null &&
      e != null &&
      ((this.var_577 = e), this.var_577._rf330ad10263e15(this.refresh));
  }
  get profiler() {
    return this.var_577;
  }
  dispose() {
    this._disposed ||
      (this.parent != null && this.parent.removeChild(this),
      this.var_577?._rbd0344f80c4576(this.refresh),
      (this.var_577 = null),
      (this._disposed = !0),
      super.dispose());
  }
  refresh = n(() => {
    if (this.var_577 == null) return;
    this.text = `${a.padAlign("task", 30)}|${a.padAlign("#rounds", 10, " ", !0)}|${a.padAlign("latest ms", 10, " ", !0)}|${a.padAlign("average ms", 10, " ", !0)}|${a.padAlign("total ms", 10, " ", !0)}|\r${a.padAlign("", 30, "-")}|${a.padAlign("", 10, "-")}|${a.padAlign("", 10, "-")}|${a.padAlign("", 10, "-")}|${a.padAlign("", 10, "-")}|\r`;
    let e = this.var_577.getProfilerAgentsInArray();
    for (; e.length > 0;) this.recursiveUpdate(e.pop(), 0);
    this.parent != null &&
      this.parent.swapChildren(this, this.parent.getChildAt(this.parent.numChildren - 1));
  }, "refresh");
  recursiveUpdate(e, r) {
    this.text += `${a.padAlign(String(e.name), 30)}|${a.padAlign(String(e.rounds), 10)}|${a.padAlign(String(e.latest), 10)}|${a.padAlign(String(e.average), 10)}|${a.padAlign(String(e.total), 10)}|\r`;
    for (let t = 0; t < e.numSubTasks; t++) this.recursiveUpdate(e.getSubTaskAt(t), r + 1);
  }
  static padAlign(e, r, t = " ", i = !1) {
    let s = r - e.length;
    if (s <= 0) return e.slice(0, r);
    let o = t.repeat(s);
    return i ? `${o}${e}` : `${e}${o}`;
  }
}
