// Extracted from HabboAirLauncher.deobf.js, line 59571.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib37ab1aa45cc9f

class {
  constructor(e, r = "") {
    this._name = e;
    this._caption = r;
  }
  static {
    n(this, "UnkClass_b37ab1");
  }
  _re3a029cf905e54 = 0;
  var_1679 = 0;
  _r05212bdac12d0e = 0;
  _r42882e6abd3c6a = 0;
  var_894 = !1;
  _disposed = !1;
  _children = [];
  _startTime = 0;
  _r32d7a6ba1dd4cd = !1;
  get name() {
    return this._name;
  }
  get rounds() {
    return this._re3a029cf905e54;
  }
  get total() {
    return this.var_1679;
  }
  get latest() {
    return this._r05212bdac12d0e;
  }
  get average() {
    return this._r42882e6abd3c6a;
  }
  get caption() {
    return this._caption;
  }
  set caption(e) {
    this._caption = e;
  }
  get running() {
    return this.var_894;
  }
  get disposed() {
    return this._disposed;
  }
  get paused() {
    return this._r32d7a6ba1dd4cd;
  }
  set paused(e) {
    this._r32d7a6ba1dd4cd = e;
  }
  get numSubTasks() {
    return this._children.length;
  }
  dispose() {
    this._disposed = !0;
  }
  start() {
    this.var_894 || ((this._startTime = _ia411d8d8194a3a()), (this.var_894 = !0));
  }
  stop() {
    this.var_894 &&
      ((this._r05212bdac12d0e = _ia411d8d8194a3a() - this._startTime),
      (this._re3a029cf905e54 += 1),
      (this.var_1679 += this._r05212bdac12d0e),
      (this._r42882e6abd3c6a = this.var_1679 / this._re3a029cf905e54),
      (this.var_894 = !1));
  }
  _r28e73916eb159a(e) {
    if (this._r0c02fd8729d61e(e.name) != null)
      throw new Error(`Component profiler task with name "${e.name}" already exists!`);
    this._children.push(e);
  }
  _r0197e2982eef44(e) {
    let r = this._children.indexOf(e);
    return (r >= 0 && this._children.splice(r, 1), e);
  }
  getSubTaskAt(e) {
    return this._children[e];
  }
  _r0c02fd8729d61e(e) {
    return this._children.find((r) => r.name === e) ?? null;
  }
}
