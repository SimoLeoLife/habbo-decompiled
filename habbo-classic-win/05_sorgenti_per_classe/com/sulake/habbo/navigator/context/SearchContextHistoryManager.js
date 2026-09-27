// Estratto da HabboAirLauncher.deobf.js, riga 259127.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/context/SearchContextHistoryManager.as
// Nome offuscato: _i81ccbd7640280c

class {
  static {
    n(this, "SearchContextHistoryManager");
  }
  var_763 = [];
  var_594 = -1;
  constructor(e) {}
  addSearchContextAtCurrentOffset(e) {
    return (
      this.var_763.length > this.var_594 + 1 &&
        this.var_763.splice(
          this.var_594 + 1,
          this.var_763.length - this.var_594,
        ),
      this.var_763.push(e),
      ++this.var_594
    );
  }
  _rb2179aadb46f5f() {
    return this._rb1bf6ae5a6032b ? this.var_763[--this.var_594] : null;
  }
  _rec87715fa571ba() {
    return this._rfb521283ea34aa ? this.var_763[++this.var_594] : null;
  }
  get _rfb521283ea34aa() {
    return this.var_594 + 1 < this.var_763.length;
  }
  get _rb1bf6ae5a6032b() {
    return this.var_594 > 0 && this.var_763.length > 0;
  }
  toString() {
    let e = "history: [";
    for (let r = 0; r < this.var_763.length; r++)
      ((e += this.var_763[r].toString()), r < this.var_763.length - 1 && (e += ","));
    return ((e += `] browsing offset: ${this.var_594}`), e);
  }
}
