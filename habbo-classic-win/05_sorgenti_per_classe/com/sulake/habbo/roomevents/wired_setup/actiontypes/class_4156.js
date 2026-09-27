// Estratto da HabboAirLauncher.deobf.js, riga 363382.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4156.as
// Nome offuscato: _i2542ef4f8d9f5b

class a extends DefaultActionType {
  static {
    n(this, "class_4156");
  }
  static MAX_REWARDS = 20;
  static DEFAULT_REWARDS = 5;
  var_5863 = null;
  _rda524d0fc39920 = null;
  var_3744 = null;
  var_2984 = null;
  var_5368 = 0;
  _rca54d14593e6ca = null;
  onRewardIntervalChange = null;
  _uniquePrizeCheckbox = null;
  _r78400e62ebb68e = null;
  var_5279 = null;
  _displayedRewards = a.DEFAULT_REWARDS;
  get code() {
    return ActionTypeCodes.GIVE_REWARD;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  validate() {
    let e = 0,
      r = this._uniquePrizeCheckbox.get(0).selected;
    for (let t = 0; t < this._r78400e62ebb68e._r07dffc93c15831; t += 1) {
      let i = this._r78400e62ebb68e.getRow(t),
        s = this.validateReward(i, r);
      if (s != null) return s;
      !r && i.probabilityText !== "" && (e += Number.parseInt(i.probabilityText, 10));
    }
    return e > 100 ? `The sum of probabilities cannot exceed 100. You now have ${e}.` : null;
  }
  readIntParamsFromForm() {
    let e = [];
    (e.push(this._rca54d14593e6ca.selected),
      e.push(this._uniquePrizeCheckbox.get(0).selected ? 1 : 0),
      e.push(this._rda524d0fc39920.get(0).selected ? this.var_3744.value : 0));
    let r = Number.parseInt(this.onRewardIntervalChange.text, 10);
    return (e.push(r >= 1 ? r : 1), e);
  }
  readStringParamFromForm() {
    let e = "";
    for (let r = 0; r < this._r78400e62ebb68e._r07dffc93c15831; r += 1) {
      let t = this.getRewardData(this._r78400e62ebb68e.getRow(r));
      t != null && (e += (e === "" ? "" : ";") + t);
    }
    return e;
  }
  buildInputs(e, r, t) {
    this.var_3744 = e.createNumberInput(new NumberInputParam(1, 1, 1e3, 60));
    let i = new CheckboxOptionParam(
      this._r41f5cc7d3516ce.localization.getLocalizationWithParams("wiredfurni.params.prizelimit", "", "amount", ""),
      0,
    );
    ((i.extra1 = this.var_3744),
      (this._rda524d0fc39920 = e.createCheckboxGroup([i], this.onPrizeLimitToggle)),
      (this.var_5863 = this._rda524d0fc39920.get(0)));
    let s = new Se(Se.MODE_MULTILINE, !1);
    ((s.textColor = 13369344),
      (this.var_2984 = e.createText(
        "Reward limit not set. Make sure rewards are badges or non-tradeable items.",
        s,
      )),
      (this.var_5368 = this.var_2984.window.height));
    let o = e.createSimpleListView(!0, [this._rda524d0fc39920, this.var_2984]),
      d = e.createSection("Reward limit", o),
      c = [new RadioButtonParam(0, "Once"), new RadioButtonParam(1, "1 / n Days"), new RadioButtonParam(2, "1 / n Hours"), new RadioButtonParam(3, "1 / n Mins")];
    ((this._rca54d14593e6ca = e.createRadioGroup(c, this._rewardIntervalGroup, 2)),
      (this.onRewardIntervalChange = e.createNamedTextInput(new it("1", 4, null, 60, "0-9"), "n =")));
    let f = e.createSimpleListView(!0, [this._rca54d14593e6ca, this.onRewardIntervalChange]),
      l = e.createSection("How often can a user be rewarded", f),
      b = new CheckboxOptionParam("Unique Rewards?", 0),
      _ = e.createText(
        "If checked each reward will be given once to each user. Probabilities are not in use.",
        new Se(Se.MODE_MULTILINE, !1),
      );
    ((b.extra2 = _), (this._uniquePrizeCheckbox = e.createCheckboxGroup([b], this.onUniquePrizeToggle)));
    let h = e.createSection("Unique Rewards", this._uniquePrizeCheckbox);
    ((this._r78400e62ebb68e = e._r0a2fd322495b52(a.MAX_REWARDS, this._displayedRewards)),
      (this.var_5279 = e.createTextualButtonPreset("Add reward", this._r3878b6526a7ec2)));
    let p = new Hr();
    p.addHeaderOption(this.var_5279);
    let m = e.createSection("Rewards", this._r78400e62ebb68e, p);
    (t.addElements(d, l, h, m),
      this._rb2a733533786e6(),
      this._rewardIntervalGroup(this._rca54d14593e6ca.selected));
  }
  onEditStart(e) {
    ((this._rca54d14593e6ca.selected = e.intParams[0] ?? 0),
      this._rca54d14593e6ca.selected > 0 && e.intParams.length === 4
        ? (this.onRewardIntervalChange.text = String(e.intParams[3]))
        : (this.onRewardIntervalChange.text = "1"),
      this._rewardIntervalGroup(this._rca54d14593e6ca.selected));
    let r = e.intParams[1] === 1;
    ((this._uniquePrizeCheckbox.get(0).selected = r), this._r8c0839915eaa8f(!r));
    let t = e.intParams[2] ?? 0;
    (t > 0
      ? ((this.var_3744.value = t), (this._rda524d0fc39920.get(0).selected = !0))
      : (this._rda524d0fc39920.get(0).selected = !1),
      this._rb2a733533786e6(),
      (this._displayedRewards = a.DEFAULT_REWARDS));
    let i = e._r7e8836fc336e43 === "" ? [] : e._r7e8836fc336e43.split(";");
    for (let s = 0; s < a.MAX_REWARDS; s += 1) {
      let o = this._r78400e62ebb68e.getRow(s);
      i[s]
        ? (this.setRewardData(o, i[s]), (this._displayedRewards = Math.max(this._displayedRewards, s + 1)))
        : o.clear();
    }
    this._r78400e62ebb68e._rd77b27ff4725f9(this._displayedRewards);
  }
  onPrizeLimitToggle = n((e, r) => {
    e === 0 && this._rb2a733533786e6();
  }, "onPrizeLimitToggle");
  _rb2a733533786e6() {
    let e = this._rda524d0fc39920.get(0).selected;
    ((this.var_2984.visible = !e),
      (this.var_2984.window.height = e ? 0 : this.var_5368));
  }
  onUniquePrizeToggle = n((e, r) => {
    e === 0 && this._r8c0839915eaa8f(!r);
  }, "onUniquePrizeToggle");
  _r8c0839915eaa8f(e) {
    this._r78400e62ebb68e._rad5381f4487cc6(e);
  }
  _r3878b6526a7ec2 = n(() => {
    ((this._displayedRewards = Math.min(a.MAX_REWARDS, this._displayedRewards + 1)),
      this._r78400e62ebb68e._rd77b27ff4725f9(this._displayedRewards));
  }, "_r3878b6526a7ec2");
  _rewardIntervalGroup = n((e) => {
    this.onRewardIntervalChange.disabled = e === 0;
  }, "_rewardIntervalGroup");
  validateReward(e, r) {
    let t = e.code,
      i = e.probabilityText;
    if (t === "" && i === "") return null;
    if (t.indexOf(",") > 0) return "Product/badge codes must not contain ',' characters.";
    if (t.indexOf(";") > 0) return "Product/badge codes must not contain ';' characters.";
    let s = 100;
    if (t.length > s) return `Product/badge codes cannot contain more than ${s} characters.`;
    if (t === "")
      return "Remember to define product/badge codes for all rewards (fill all fields or leave all fields empty).";
    if (!r) {
      if (i === "")
        return "Remember to define probabilities for all rewards (fill all fields or leave all fields empty).";
      if (Number.isNaN(Number(i))) return "Make sure are probabilities are numbers.";
      let o = Number.parseInt(i, 10);
      if (o < 1 || o > 100) return "Make sure all probabilities are numbers between 1 and 100.";
    }
    return null;
  }
  getRewardData(e) {
    let r = e.code,
      t = e.probabilityText,
      i = e.isBadge;
    if (((r = this.replaceAll(r, ";", "")), (r = this.replaceAll(r, ",", "")), r === "")) return null;
    let s = Number(t),
      o = Number.isNaN(s) ? 0 : s | 0;
    return `${i ? "0" : "1"},${r},${o}`;
  }
  setRewardData(e, r) {
    let t = r == null ? [] : r.split(",");
    ((e.code = t[1] ?? ""), (e.probabilityText = t[2] ?? ""), (e.isBadge = t[0] === "0"));
  }
  replaceAll(e, r, t) {
    let i = 100;
    for (; e.indexOf(r) > -1 && ((e = e.replace(r, t)), (i -= 1), !(i < 1)););
    return e;
  }
}
