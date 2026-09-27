// Estratto da HabboAirLauncher.deobf.js, riga 249067.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueBundle.as
// Nome offuscato: _idd60f52a54096e

class {
  constructor(e, r) {
    this._id = e;
    ((this._state = r.state),
      (this.var_4413 = r.pickerUserId),
      (this._pickerName = r.pickerUserName ?? ""),
      (this.var_138 = r.reportedUserId),
      (this.var_4038 = r.groupingId),
      this.addIssue(r));
  }
  static {
    n(this, "IssueBundle");
  }
  _issues = new B();
  var_2334 = 0;
  var_3941 = 0;
  _r7473644111735b = null;
  _rc32ee171c43eed = null;
  _state;
  var_4413;
  _pickerName;
  var_138;
  var_4038;
  get id() {
    return this._id;
  }
  get issues() {
    return this._issues.getValues();
  }
  get state() {
    return this._state;
  }
  get pickerUserId() {
    return this.var_4413;
  }
  get _r4d7308a2f50171() {
    return this._pickerName;
  }
  get reportedUserId() {
    return this.var_138;
  }
  get _rc0bca29f4c3bbd() {
    return this.var_3941;
  }
  matches(e, r = !1) {
    return !(
      this.var_4038 === 0 ||
      e.groupingId === 0 ||
      this.var_4038 !== e.groupingId ||
      this.var_138 !== e.reportedUserId ||
      (!r && (this.state !== e.state || this.pickerUserId !== e.pickerUserId))
    );
  }
  contains(e) {
    return this._issues.getKeys().includes(e);
  }
  updateIssue(e) {
    (this._r8637a9a49b851b(e.issueId), this.addIssue(e));
  }
  _r8637a9a49b851b(e) {
    let r = this._issues.remove(e) ?? null;
    return (
      r != null &&
        ((r.message ?? "") !== "" && this.var_2334--,
        this._r7473644111735b === r && (this._r7473644111735b = null),
        this._rc32ee171c43eed === r && (this._rc32ee171c43eed = null)),
      r
    );
  }
  get highestPriority() {
    return this.var_2416()?.priority ?? 0;
  }
  var_2416() {
    if (this._rc32ee171c43eed == null) {
      if (this._issues.length < 1) return null;
      let e = null,
        r = null;
      for (let t = 0; t < this._issues.length; t++) {
        let i = this._issues.getWithIndex(t);
        if (i == null) continue;
        i.reportedCategoryId > 0 && i.reportedCategoryId < 100
          ? (r == null || r.priority > i.priority) && (r = i)
          : (e == null || e.priority > i.priority) && (e = i);
      }
      this._rc32ee171c43eed = r ?? e;
    }
    return this._rc32ee171c43eed;
  }
  _r8c941abf51b0c4() {
    return this._issues.length;
  }
  _r5627d9a209015f() {
    return this._issues.getKeys();
  }
  _r651ca1f5060b71() {
    return this.var_2334;
  }
  getOpenTime(e) {
    let r = this._r7473644111735b;
    if (r == null) {
      for (let t of this._issues.getValues())
        (r == null || t._rc0bca29f4c3bbd > r._rc0bca29f4c3bbd) && (r = t);
      this._r7473644111735b = r;
    }
    return r?.getOpenTime(e) ?? "";
  }
  addIssue(e) {
    (this._issues.add(e.issueId, e),
      (this.var_3941 = e._rc0bca29f4c3bbd),
      (e.message ?? "") !== "" && this.var_2334++,
      (this._r7473644111735b == null || e._rc0bca29f4c3bbd > this._r7473644111735b._rc0bca29f4c3bbd) &&
        (this._r7473644111735b = e),
      (this._rc32ee171c43eed = null),
      this.var_2416());
  }
}
