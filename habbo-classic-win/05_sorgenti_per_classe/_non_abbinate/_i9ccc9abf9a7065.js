// Estratto da HabboAirLauncher.deobf.js, riga 169092.

class {
  static {
    n(this, "_i9ccc9abf9a7065");
  }
  _assets;
  var_346 = new Map();
  _r45c95f8cc0a732 = null;
  ActiveActionData = null;
  constructor(e, r) {
    ((this._assets = e), this._r449b626ad44655(r));
  }
  _r449b626ad44655(e) {
    let r = _ib5ee1bd09422e6(e, "action");
    for (let t of r) {
      let i = _ifdbe20062cc5b0(t, "state");
      i !== "" && this.var_346.set(i, new Gj(t));
    }
    this._r230be7acbdb675();
  }
  _r230be7acbdb675() {
    for (let e of this.var_346.values()) {
      let r = e.state;
      if (!this._assets.hasAsset(`action_offset_${r}`)) continue;
      let t = this._assets.getAssetByName(`action_offset_${r}`)?.content;
      if (t != null)
        for (let i of _ib5ee1bd09422e6(t, "offset")) {
          let s = _ifdbe20062cc5b0(i, "size"),
            o = _i897b98cdeac318(i, "direction"),
            d = _i897b98cdeac318(i, "x"),
            c = _i897b98cdeac318(i, "y"),
            f = Number.parseFloat(_ifdbe20062cc5b0(i, "z", "0"));
          e.setOffsets(s, o, [d, c, Number.isNaN(f) ? 0 : f]);
        }
    }
  }
  _r0f956505679c69(e) {
    for (let r of this.var_346.values()) if (r.id === e) return r;
    return null;
  }
  _r69ec619b8d88e9(e) {
    return this.var_346.get(e) ?? null;
  }
  _ra5d8add229f4fa() {
    if (this._r45c95f8cc0a732 != null) return this._r45c95f8cc0a732;
    for (let e of this.var_346.values()) if (e.isDefault) return ((this._r45c95f8cc0a732 = e), e);
    return null;
  }
  _r540d0ec15d9bc6() {
    if (this.ActiveActionData != null) return this.ActiveActionData;
    let e = this._ra5d8add229f4fa();
    return e == null
      ? null
      : ((this.ActiveActionData = e.copy()),
        this.ActiveActionData._r3ad7c069fb8e13("swhorizontal"),
        this.ActiveActionData.setState("lay"),
        this.ActiveActionData._r206a2a3042835d("lay"),
        this.ActiveActionData);
  }
  _ra5a790118f7d32(e, r, t) {
    let i = null;
    for (let s of e) {
      let o = this.var_346.get(s.actionType);
      o?.getOffsets(r, t) != null && (i = o.getOffsets(r, t));
    }
    return i;
  }
  _r0ed60cceb9843a(e) {
    let r = this._r37938cc5e7ec1d(e),
      t = [];
    for (let i of r) {
      let s = this.var_346.get(i.actionType);
      s != null && ((i.definition = s), t.push(i));
    }
    return (
      t.sort((i, s) => {
        let o = i.definition?.precedence ?? 0,
          d = s.definition?.precedence ?? 0;
        return o < d ? 1 : o > d ? -1 : 0;
      }),
      t
    );
  }
  _r37938cc5e7ec1d(e) {
    let r = [],
      t = [];
    for (let i of e) {
      let s = this.var_346.get(i.actionType);
      s != null && (t = t.concat(s.getPrevents(i.actionParameter)));
    }
    for (let i of e) {
      let s = i.actionType;
      (i.actionType === "fx" && (s += `.${i.actionParameter}`), t.includes(s) || r.push(i));
    }
    return r;
  }
}
