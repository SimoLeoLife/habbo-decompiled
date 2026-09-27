// Extracted from HabboAirLauncher.deobf.js, line 214937.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/FriendListTabsView.as
// Obfuscated name: _i13a68c8bca97be

class {
  static {
    n(this, "FriendListTabsView");
  }
  _friendList;
  _content = null;
  constructor(e) {
    this._friendList = e;
  }
  prepare(e) {
    ((this._content = e), this.refresh("prepare"));
  }
  refresh(e) {
    if (this._content == null) return;
    this._content.width = this._friendList.tabs._rd21db78adaafd6;
    let r = this._content.findChildByName("bg");
    r != null && (r.width = this._friendList.tabs._rd21db78adaafd6);
    let t = 1;
    for (let i of this._friendList.tabs._rb7860738b83231()) {
      let s = this._content.getChildByName(`flt_${i.id}`);
      if (s == null) continue;
      if (!this.isTabVisible(i.id)) {
        s.visible = !1;
        continue;
      }
      ((s.visible = !0), (s.width = this._friendList.tabs._rd21db78adaafd6), (s.y = t));
      let o = this.refreshHeader(i, s);
      (this.refreshTabContent(i, s),
        (s.height = o + (i.selected ? this._friendList.tabs._r801554b3cb243d : 0)),
        (t += s.height));
    }
    ((this._content.height = t + 1), r != null && (r.height = this._content.height));
  }
  isTabVisible(e) {
    return e !== UnkConstants_a4c171._rfadb4d8e33d276 ? !0 : this._friendList.friendRequests.requests.length > 0;
  }
  refreshTabContent(e, r) {
    e.selected
      ? (e.view == null && (e.view = this.getTabContent(e)),
        e.view != null && (this.refreshTabContentDims(e.view), this.refreshScrollBarVisibility(e.view), r.addChild(e.view)))
      : e.view != null && r.removeChild(e.view);
  }
  refreshHeader(e, r) {
    let t = r.getChildByName("header");
    if (t == null) return 0;
    ((t.width = this._friendList.tabs._rd21db78adaafd6),
      this.showBgImage(t, e.newMessageArrived, "hdr_hilite"),
      this.showBgImage(t, !e.newMessageArrived, e.headerPicName));
    let i = e.id === UnkConstants_a4c171._ra8c8b3cdc9c268 && !e.newMessageArrived;
    return (
      this.refreshArrowIcon(t, "arrow_down_black", e.selected && i, 12),
      this.refreshArrowIcon(t, "arrow_right_black", !e.selected && i, 15),
      this.refreshArrowIcon(t, "arrow_down_white", e.selected && !i, 12),
      this.refreshArrowIcon(t, "arrow_right_white", !e.selected && !i, 15),
      this.refreshTabText(e, t),
      t.height
    );
  }
  showBgImage(e, r, t) {
    let i = e.getChildByName(t);
    if (!r) {
      i != null && (i.visible = !1);
      return;
    }
    i != null &&
      (i.bitmap == null &&
        ((i.bitmap = this._friendList._r6bd8f6d6bfdbb5(t)),
        (i.height = i.bitmap.height),
        (e.height = i.bitmap.height),
        (i.procedure = this._rb4934a09f71c75.bind(this))),
      (i.width = this._friendList.tabs._rd21db78adaafd6),
      (i.visible = !0));
  }
  refreshArrowIcon(e, r, t, i) {
    if ((this._friendList.refreshButton(e, r, t, null, 0), !t)) return;
    let s = e.findChildByName("caption_text"),
      o = e.findChildByName(r);
    s != null && o != null && (o.x = s.textWidth + i);
  }
  refreshTabText(e, r) {
    let t = r.findChildByName("caption_text");
    t != null &&
      ((t.text = `${e.name} (${e._r547724a31de035._r3bccd06cf0fd7b()})`),
      (t.textColor = this._friendList._r6dce2f14add5ec._r4d2d4f5c20eed6(e.newMessageArrived, e.id)));
  }
  _rb4934a09f71c75(e, r) {
    if (
      (this._friendList.view._r8b0a1f4ed09a31(e, `\${friendlist.tip.tab.${r.id}}`), e.type !== u.CLICK)
    )
      return;
    let t = this._friendList.tabs.findTab(r.id);
    if (t != null) {
      for (let i of this._friendList.tabs._rb7860738b83231()) i._r547724a31de035._r8ea31888f115fd(t.id);
      if (
        (this._friendList.tabs.toggleSelected(t),
        this._friendList.view.refresh("tabClick"),
        t.selected)
      )
        switch (t.id) {
          case UnkConstants_a4c171._ra8c8b3cdc9c268:
            this._friendList._rb80d77cf35b167(HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_FRIENDS);
            break;
          case UnkConstants_a4c171.SearchView:
            this._friendList._rb80d77cf35b167(HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_SEARCH);
            break;
          case UnkConstants_a4c171._rfadb4d8e33d276:
            this._friendList._rb80d77cf35b167(HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_REQUEST);
            break;
        }
      else this._friendList._rb80d77cf35b167(HabboFriendListTrackingEvent.const_649);
    }
  }
  getTabContent(e) {
    let r = this._friendList.getXmlWindow("tab_content");
    if (r == null) return null;
    ((r.background = !0), (r.color = this._friendList._r6dce2f14add5ec._r366b3874b86b22(e.id)));
    let t = this._r1caa43a822a40d(e);
    t != null && r.addChild(t);
    let i = r.findChildByName("list_content");
    return (
      i != null &&
        ((i.color = this._friendList._r6dce2f14add5ec._r366b3874b86b22(e.id)),
        e._r547724a31de035._r8f8aa0d6774800(i)),
      r
    );
  }
  refreshTabContentDims(e) {
    let r = e.getChildByName("footer"),
      t = e.getChildByName("list");
    if (r == null || t == null) return;
    let i = t.getChildByName("scroller"),
      s = t.getChildByName("list_content"),
      o = t.parent;
    if (i == null || s == null || o == null) return;
    let d = this._friendList.tabs._rd21db78adaafd6,
      c = this._friendList.tabs._r801554b3cb243d;
    ((o.height = Math.max(0, c)), (o.width = d));
    let f = Math.max(c - t.y - r.height, 0);
    ((t.height = f),
      (i.height = f),
      (s.height = f),
      (t.width = d),
      (s.width = d),
      (i.x = d - 27),
      (r.y = c - r.height),
      (r.width = d));
  }
  refreshScrollBarVisibility(e) {
    let r = e.getChildByName("list");
    if (r == null) return;
    let t = r.getChildByName("scroller"),
      i = r.getChildByName("list_content");
    if (t == null || i == null) return;
    let s = i.visibleRegion.height > i.height,
      o = 22,
      d = this._friendList.tabs._rd21db78adaafd6 - 10,
      c = d - o,
      f = s ? c : d;
    ((t.visible = s), (i.width = f), this.change(i, f));
  }
  change(e, r) {
    for (let t = 0; t < e.numListItems; t++) {
      let i = e.getListItemAt(t);
      i != null && (i.width = r);
    }
  }
  _r1caa43a822a40d(e) {
    let r = this._friendList.getXmlWindow(e._r650d733de7dff3);
    return r == null ? null : (e._r547724a31de035.fillFooter(r), r);
  }
}
