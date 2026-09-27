// Extracted from HabboAirLauncher.deobf.js, line 232782.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/SanctionInfo.as
// Obfuscated name: _if25a784c1f6d60

class {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "SanctionInfo");
  }
  _disposed = !1;
  _window = null;
  dispose() {
    this._disposed ||
      (this._window?.dispose(), (this._window = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  openWindow(e) {
    if (
      (this.dispose(),
      (this._disposed = !1),
      (this._window = this._habboHelp?.getXmlWindow("sanction_info")),
      this._window == null)
    )
      return;
    (this._window.center(), (this._window.procedure = this._r4d2fcea4870df2));
    let r = ClassUtils.getParser(e, UnkMessageParser_ISBI_90029f);
    if (r == null) return;
    let t = this._window.findChildByName("main_contents_list"),
      i = this._window.findChildByName("sanction_info"),
      s = this._window.findChildByName("divider");
    if (t == null || i == null) return;
    let o = this._rdc3e9f1984c895(r?._r4f0e6354ed7278 ?? null);
    if ((t.removeListItems(), o.length === 0)) {
      let d = i.clone();
      ((d.text = this.localize("settings.help.sanction_information.description")),
        (d.height = d.textHeight + 10),
        t.addListItem(d));
    } else
      for (let d = 0; d < o.length; d += 1) {
        let c = i.clone(),
          f = o[d];
        (d > 0 &&
          (f = `
${f}
`),
          d < o.length - 1 &&
            (f += `
`),
          (c.text = f),
          (c.height = c.textHeight + 10),
          t.addListItem(c),
          d < o.length - 1 && s != null && t.addListItem(s.clone()));
      }
    t.arrangeListItems();
  }
  _rdc3e9f1984c895(e) {
    let r = [];
    if (e == null || e.length === 0) return r;
    for (let t of e) {
      let i = t?._r51fb25c3100aa2 ?? "";
      if (ua.isEmpty(i)) continue;
      let s = [i];
      (t._rcdf1b1da879fb4 && this.appendGradualSanctionDetails(s, t),
        r.push(
          s.join(`
`),
        ));
    }
    return r;
  }
  appendGradualSanctionDetails(e, r) {
    let t = r._r8eedd2ac0f49c3 > 0,
      i = r.var_4283?.name ?? "";
    (!t && ua.isEmpty(i)) ||
      (e.push(""),
      e.push(this.localize("help.sanction.probation.reminder")),
      t &&
        e.push(
          `${this.localize("help.sanction.probation.days.left")} ${Math.ceil(r._r8eedd2ac0f49c3 / 24)}`,
        ),
      ua.isEmpty(i) || (e.push(""), e.push(this.getNextSanctionDescription(r.var_4283)), e.push("")));
  }
  getNextSanctionDescription(e) {
    if (e == null || ua.isEmpty(e.name)) return "";
    switch (e.name) {
      case "ALERT":
        return this.localize("help.sanction.next.alert");
      case "MUTE":
        return (
          this._habboHelp?.localization?._r43eae9731f5b27(
            "help.sanction.next.mute",
            "hours",
            e._rcafd90e9559318.toString(),
          ) ?? ""
        );
      case "BAN_PERMANENT":
        return this.localize("help.sanction.next.permban");
      default:
        return e._rcafd90e9559318 > 24
          ? (this._habboHelp?.localization?._r43eae9731f5b27(
              "help.sanction.next.ban.days",
              "days",
              Math.trunc(e._rcafd90e9559318 / 24).toString(),
            ) ?? "")
          : (this._habboHelp?.localization?._r43eae9731f5b27(
              "help.sanction.next.ban",
              "hours",
              e._rcafd90e9559318.toString(),
            ) ?? "");
    }
  }
  localize(e, r) {
    return this._habboHelp?.localization?.getLocalization(e, r ?? e) ?? r ?? e;
  }
  _r4d2fcea4870df2 = n((e, r) => {
    if (!(this._disposed || this._window == null || e.type !== u.CLICK || r == null))
      switch (r.name) {
        case "faq_link":
          this._habboHelp?._r9ca83c8ade6879();
          break;
        case "header_button_close":
        case "ok_button":
          this.dispose();
          break;
      }
  }, "_r4d2fcea4870df2");
}
