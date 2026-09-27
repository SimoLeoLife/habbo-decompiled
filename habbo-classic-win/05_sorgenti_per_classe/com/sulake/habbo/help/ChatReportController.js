// Estratto da HabboAirLauncher.deobf.js, riga 228933.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/ChatReportController.as
// Nome offuscato: _i5844b03221b5d3

class a {
  constructor(e, r) {
    this._habboHelp = e;
    this.var_4448 = r;
  }
  static {
    n(this, "ChatReportController");
  }
  static COLOR_ITEM_SELECTED = 4282169599;
  static COLOR_ITEM_NORMAL = 4293848814;
  _window = null;
  var_399 = -1;
  var_138 = -1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get reportedRoomId() {
    return this.var_399;
  }
  dispose() {
    this._disposed ||
      (this.closeWindow(),
      (this._habboHelp = null),
      (this.var_4448 = null),
      (this._disposed = !0));
  }
  show(e, r, t) {
    let i = this._habboHelp;
    if (((this._window = i?.getXmlWindow("chat_report")), this._window != null)) {
      if (
        ((this._window.procedure = this.var_4448),
        this._window.center(),
        (this.var_138 = r),
        (this.var_399 = -1),
        t === 3)
      ) {
        (this.deselectInstantMessageEntries(), this.populateInstantMessageList(e, r));
        return;
      }
      (this.deselectChatEntries(), this.populateChatMessageList(e, r));
    }
  }
  closeWindow() {
    (this._habboHelp?._rac50ce9cc85d8c &&
      (this._habboHelp._rac50ce9cc85d8c._r57d695ff15edb9 = !1),
      this._habboHelp?._r86d4afd9e4a8a4 &&
        (this._habboHelp._r86d4afd9e4a8a4._r57d695ff15edb9 = !1),
      this._window?.dispose(),
      (this._window = null));
  }
  collectSelectedEntries(e, r) {
    let t = [],
      i = this._habboHelp;
    if (i == null) return t;
    if (e === 3) {
      let s = r > 0 ? r : this.var_138,
        o = i._r86d4afd9e4a8a4._r84e188e8801478(s) ?? [];
      for (let d of o)
        d.selected &&
          (d.userId < 0
            ? (t.push(Number(d.userName.split(":")[0] ?? 0)), t.push(d.text))
            : (t.push(d.userId), t.push(d.text)));
      return t;
    }
    for (let s of i._rac50ce9cc85d8c._rc33dd608d2ddc4()) s.selected && (t.push(s.userId), t.push(s.text));
    return t;
  }
  populateInstantMessageList(e, r) {
    let t = this._window?.findChildByName("room_items"),
      i = t?.getListItemAt(0),
      s = this._habboHelp?.getXmlWindow("chat_report_item");
    if (t == null || i == null || s == null || this._habboHelp == null) return;
    t.removeListItems();
    let o = i.clone();
    t.addListItemAt(o, 0);
    let d = o.findChildByName("chat_items");
    if (d == null) return;
    (d.removeListItems(), (this._habboHelp._r86d4afd9e4a8a4._r57d695ff15edb9 = !0));
    let c = this._habboHelp._r86d4afd9e4a8a4._r84e188e8801478(r) ?? [];
    for (let f of c) {
      let l = s.clone(),
        b = l.getChildByName("text");
      (b != null &&
        (f.userId < 0
          ? (b.caption = `${f.userName.split(":")[1] ?? ""}: ${f.text}`)
          : (b.caption = `${f.userName}: ${f.text}`)),
        (l.id = f.index),
        (l.procedure = this.onInstantMessageEntryEvent),
        (l.color = a.COLOR_ITEM_NORMAL),
        d.addListItem(l));
    }
  }
  populateChatMessageList(e, r) {
    let t = this._window?.findChildByName("room_items"),
      i = t?.getListItemAt(0),
      s = this._habboHelp?.getXmlWindow("chat_report_item");
    if (t == null || i == null || s == null || this._habboHelp == null) return;
    t.removeListItems();
    let o = 0,
      d = null,
      c = null;
    this._habboHelp._rac50ce9cc85d8c._r57d695ff15edb9 = !0;
    let f =
      r > 0
        ? this._habboHelp._rac50ce9cc85d8c._r84e188e8801478(r)
        : this._habboHelp._rac50ce9cc85d8c._rc33dd608d2ddc4();
    for (let l of f) {
      if (
        l.userId === e ||
        (l.roomId !== o &&
          ((o = l.roomId),
          (d = i.clone()),
          (d.findChildByName("room_name").caption = `Room: ${l.roomName}`),
          t.addListItemAt(d, 0),
          (c = d.findChildByName("chat_items")),
          c?.removeListItems()),
        c == null)
      )
        continue;
      let b = s.clone(),
        _ = b.getChildByName("text");
      (_ != null && (_.caption = `${l.userName}: ${l.text}`),
        (b.id = l.index),
        (b.procedure = this.onChatEntryEvent),
        (b.color = a.COLOR_ITEM_NORMAL),
        c.addListItem(b));
    }
  }
  onChatEntryEvent = n((e, r) => {
    if (e.type !== u.CLICK) return;
    let t = this._habboHelp?._rac50ce9cc85d8c.getItem(r.id);
    t != null &&
      (!t.selected &&
        t.roomId !== this.var_399 &&
        ((this.var_399 = t.roomId), this.deselectChatEntries()),
      (t.selected = !t.selected),
      (r.color = t.selected ? a.COLOR_ITEM_SELECTED : a.COLOR_ITEM_NORMAL));
  }, "onChatEntryEvent");
  onInstantMessageEntryEvent = n((e, r) => {
    if (e.type !== u.CLICK) return;
    let t = this._habboHelp?._r86d4afd9e4a8a4.getItem(this.var_138, r.id);
    t != null &&
      ((t.selected = !t.selected), (r.color = t.selected ? a.COLOR_ITEM_SELECTED : a.COLOR_ITEM_NORMAL));
  }, "onInstantMessageEntryEvent");
  deselectInstantMessageEntries() {
    (this._r60aaf00f11a4d8(), this._ref42d00dc2230c());
  }
  deselectChatEntries() {
    (this._r60aaf00f11a4d8(), this._r84ea953eb2578c());
  }
  _r60aaf00f11a4d8() {
    let e = this._habboHelp;
    if (e != null) {
      for (let r of e._r86d4afd9e4a8a4._rc33dd608d2ddc4().getKeys())
        for (let t of e._r86d4afd9e4a8a4._rc33dd608d2ddc4().getValue(r) ?? []) t.selected = !1;
      for (let r of e._rac50ce9cc85d8c._rc33dd608d2ddc4()) r.selected = !1;
    }
  }
  _r84ea953eb2578c() {
    let e = this._window?.findChildByName("room_items");
    if (!(e == null || this._habboHelp == null))
      for (let r = 0; r < e.numListItems; r++) {
        let i = e.getListItemAt(r)?.findChildByName("chat_items");
        if (i != null)
          for (let s = 0; s < i.numListItems; s++) {
            let o = i.getListItemAt(s),
              d = o != null ? this._habboHelp._rac50ce9cc85d8c.getItem(o.id) : null;
            o != null && d != null && (o.color = d.selected ? a.COLOR_ITEM_SELECTED : a.COLOR_ITEM_NORMAL);
          }
      }
  }
  _ref42d00dc2230c() {
    let e = this._window?.findChildByName("room_items");
    if (!(e == null || this._habboHelp == null))
      for (let r = 0; r < e.numListItems; r++) {
        let i = e.getListItemAt(r)?.findChildByName("chat_items");
        if (i != null)
          for (let s = 0; s < i.numListItems; s++) {
            let o = i.getListItemAt(s),
              d =
                o != null
                  ? this._habboHelp._r86d4afd9e4a8a4.getItem(this.var_138, o.id)
                  : null;
            o != null && d != null && (o.color = d.selected ? a.COLOR_ITEM_SELECTED : a.COLOR_ITEM_NORMAL);
          }
      }
  }
}
