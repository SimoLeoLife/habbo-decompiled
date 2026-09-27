// Estratto da HabboAirLauncher.deobf.js, riga 50731.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/events/EventListenerStruct.as
// Nome offuscato: _i8c1cad61acb86a

class {
  static {
    n(this, "EventListenerStruct");
  }
  _callback;
  _r3b216ea6170230;
  priority;
  useWeakReference;
  constructor(e, r = !1, t = 0, i = !1) {
    ((this._callback = e), (this._r3b216ea6170230 = r), (this.priority = t), (this.useWeakReference = i));
  }
  get callback() {
    return this._callback;
  }
  set callback(e) {
    this._callback = e;
  }
}
