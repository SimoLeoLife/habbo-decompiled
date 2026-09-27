// Estratto da HabboAirLauncher.deobf.js, riga 246571.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/MainView.as
// Nome offuscato: _ic5ff0108d6ce3d

class a {
  constructor(e) {
    this._messenger = e;
    if (
      ((this.var_473 = this._messenger?.getXmlWindow("messenger")),
      (this._frame = this.var_473?.getChildByName("frame")),
      (this._rebd0803ab32db5 = this._frame?.findChildByName("conversation")),
      (this._rad157898217440 = this._frame?.findChildByName("avatar_list")),
      (this._r9bd0974dc88c24 = this._rad157898217440?.getChildAt(0)),
      (this._rd1a97c939c8851 = this._rebd0803ab32db5?.getListItemByName("msg_normal")),
      (this._r5a0296f27d6b3c = this._rebd0803ab32db5?.getListItemByName("msg_notification")),
      (this._r63839e1cddcce4 = this._rebd0803ab32db5?.getListItemByName("msg_invitation")),
      (this._ra099a987cb915f = this._rebd0803ab32db5?.getListItemByName("msg_info")),
      this._frame == null || this.var_473 == null)
    )
      return;
    ((this.var_473.visible = !1), (this.var_473.procedure = this._rea63bfd42eaf90));
    let r = this._frame.findChildByName("header_button_close");
    (r != null && (r.style = 102),
      this._rad157898217440 != null &&
        this._r9bd0974dc88c24 != null &&
        this._rad157898217440.removeChild(this._r9bd0974dc88c24),
      this._rebd0803ab32db5?.removeListItems());
    let t = this._frame.findChildByName("input_widget")?.widget;
    t != null && (t._r8b6f1399ef3de2 = this);
  }
  static {
    n(this, "MainView");
  }
  static HIDDEN = "HIDDEN";
  static _r43944bcc97b6ea = -1;
  static NOTIFICATION_ICON_WIDTH = 55;
  static SCROLL_TRIGGER_HEIGHT = 150;
  static _r33838dc7cb2c82 = 600 * 1e3;
  static const_370 = 4;
  static _r5e6fc103f00121 = 3;
  static CHAT_ITEM_RENDER_MAX_MESSAGES_SIZE = 7;
  static _ra360103f06eb24 = 3;
  static const_1334 = 40;
  static const_482 = 4e3;
  static _r04b52f7db8310b = new Map([
    [3, "${messenger.error.receivermuted}"],
    [4, "${messenger.error.sendermuted}"],
    [5, "${messenger.error.offline}"],
    [6, "${messenger.error.notfriend}"],
    [7, "${messenger.error.busy}"],
    [8, "${messenger.error.receiverhasnochat}"],
    [9, "${messenger.error.senderhasnochat}"],
    [10, "${messenger.error.offline_failed}"],
    [11, "${messenger.error.not_group_member}"],
    [12, "${messenger.error.not_group_admin}"],
    [13, "${messenger.error.sender_im_unavailable}"],
    [14, "${messenger.error.recipient_im_unavailable}"],
  ]);
  _frame;
  var_473;
  _r3690e21d96c516 = null;
  _rebd0803ab32db5;
  _rad157898217440;
  _r9bd0974dc88c24;
  _rd1a97c939c8851;
  _r5a0296f27d6b3c;
  _r63839e1cddcce4;
  _ra099a987cb915f;
  _rb507ab86a8e333 = 0;
  _rffb59ea2c819cc = !1;
  _r4ae6066593aa2e = new Map();
  _r90e8f4039357b6 = a._r43944bcc97b6ea;
  _r9fd37cc267009a = !1;
  _rd977b0dea77c55 = !1;
  var_1727 = 1;
  _re7a7fa95338c5a = new Map();
  _r79cfa7a4d76f45 = -1;
  _r0a085a45eff8e3 = new Map();
  _r92424657a18b86 = new Map();
  get disposed() {
    return this._messenger == null;
  }
  get isOpen() {
    return this.var_473?.visible ?? !1;
  }
  dispose() {
    this.disposed ||
      ((this._rebd0803ab32db5 = null),
      (this._rad157898217440 = null),
      this._r3690e21d96c516?.dispose(),
      (this._r3690e21d96c516 = null),
      this.var_473?.dispose(),
      (this.var_473 = null),
      (this._frame = null),
      this._rd1a97c939c8851?.dispose(),
      (this._rd1a97c939c8851 = null),
      this._r5a0296f27d6b3c?.dispose(),
      (this._r5a0296f27d6b3c = null),
      this._r63839e1cddcce4?.dispose(),
      (this._r63839e1cddcce4 = null),
      this._ra099a987cb915f?.dispose(),
      (this._ra099a987cb915f = null),
      this._r9bd0974dc88c24?.dispose(),
      (this._r9bd0974dc88c24 = null),
      this._r4ae6066593aa2e.clear(),
      this._re7a7fa95338c5a.clear(),
      this._r0a085a45eff8e3.clear(),
      this._r92424657a18b86.clear(),
      (this._messenger = null));
  }
  toggle() {
    if (this.isOpen) {
      this.hide();
      return;
    }
    this.show();
  }
  show(e = !1) {
    this.var_473 != null &&
      ((e || this._r95ac6185063bf2 > 0) &&
        ((this.var_473.visible = !0), this.var_473.activate()),
      this._r90e8f4039357b6 !== a._r43944bcc97b6ea && this._r5a5dfc514272e0(this._r90e8f4039357b6, !1));
  }
  hide() {
    (this._r4a59bce529f6f3(), this.var_473 != null && (this.var_473.visible = !1));
  }
  _r62becc0ea3c1d0() {
    this._r4a59bce529f6f3();
  }
  startConversation(e, r = !0, t = null) {
    if (!this._r4ae6066593aa2e.has(e)) {
      (this._r4ae6066593aa2e.set(e, []),
        this._rd977b0dea77c55 ||
          (this._r47662a2cdaaad2(e, "${messenger.moderationinfo}"), (this._rd977b0dea77c55 = !0)));
      let i = this._messenger?._rf51d9426e17752(e, t) ?? null;
      if (i == null) {
        (ErrorReportStorage.addDebugData(
          "Messenger Mainview",
          `User got start conversation request from nonexistent friend, id: ${e}`,
        ),
          this._r4ae6066593aa2e.delete(e));
        return;
      }
      i.online || this._r47662a2cdaaad2(e, "${messenger.notification.persisted_messages}");
      let s = this._r9bd0974dc88c24?.clone();
      if (s == null || this._rad157898217440 == null) return;
      (a._r202bb6ec4c9818(s, !0), (s.blend = 0), (s.id = e), e < 0 && (s.name = `${e}`));
      let o = s.findChildByName("avatar_image"),
        d = s.findChildByName("group_badge_image");
      if (i.id > 0) {
        let f = o?.widget;
        (f != null && (f.figure = i.figure), d != null && (d.visible = !1), o != null && (o.visible = !0));
      } else {
        let f = d?.widget;
        (f != null && ((f.badgeId = i.figure), (f.groupId = i.id)),
          d != null && (d.visible = !0),
          o != null && (o.visible = !1));
      }
      let c = s.findChildByName("avatar_click_region");
      (c != null && (c.caption = i.name), this._rad157898217440.addChild(s), this._r1b6b0115ee5186());
    }
    ((r || !this.isOpen) && this._ra96bb4646da3f0(e), this._ra98fd44bed2328(r));
  }
  _r302ec3de2caba1(e, r, t, i, s, o, d, c, f, l) {
    let b = this._r8bce5dc2d2071b(r, t, i);
    d > 0 ? this._r0c0259ad99efd4(o, b, d) : this._r80120980bee624(e, b, !0, s, c, f, l, o);
  }
  _rf476a46134dbef(e, r) {
    this._r08444b91424bf1(
      e,
      `${this._messenger?.getText("messenger.invitation") ?? "messenger.invitation"} ${r}`,
      !0,
    );
  }
  _r20348e9f5a1097(e, r) {
    e === this._r90e8f4039357b6 && this.refreshButtons();
  }
  _r76802383e47c42(e, r, t) {
    let i = a._r04b52f7db8310b.get(r);
    if (i != null) {
      if (t.length > 0) {
        let s = i.replace(/[${}]/g, "");
        this._r47662a2cdaaad2(e, `${this._messenger?.getText(s) ?? s}: ${t}`);
        return;
      }
      this._r47662a2cdaaad2(e, i);
    }
  }
  _r2e759163b29bb3(e, r) {
    this._r4ae6066593aa2e.has(e) &&
      this._r4917cff436e46d(e, r ? "${messenger.notification.online}" : "${messenger.notification.offline}");
  }
  _rdebd6438ec2833(e, r) {
    let t = this._messenger?.sessionDataManager?.userId ?? 0,
      i = [];
    for (let o of r) {
      if (this._r92424657a18b86.has(o.messageId)) continue;
      let d = o.senderId | 0;
      i.push(
        new _i24f5eb0f99123f(
          d === t ? _i24f5eb0f99123f._ra5a0fb67f250a1 : _i24f5eb0f99123f._rb11fd70417dcc4,
          e,
          this._r8bce5dc2d2071b(o.messageType, o.message, o.habbiconId),
          o._r672f7777815dd8,
          d,
          o.senderName,
          o._rfafd7e4c8717e5,
          o.messageId,
        ),
      );
    }
    if (i.length === 0) return;
    let s = this._r4ae6066593aa2e.get(e) ?? [];
    (this._r4ae6066593aa2e.set(e, i.concat(s)),
      e === this._r90e8f4039357b6 &&
        (this._r79cfa7a4d76f45 !== -1 && (this._r79cfa7a4d76f45 += i.length), this._rc654aa0c6edb98()));
  }
  _r64e450f8ad70fb(e, r) {
    if (r === "" || this._messenger == null) return;
    let t = this.var_1727++;
    this._messenger.send(new _i50dadeb8467fa3(this._r90e8f4039357b6, r, t));
    let i = e.widget;
    i != null && (i.message = "");
    let s = this._r4ae6066593aa2e.get(this._r90e8f4039357b6) ?? [];
    ((s.length === 0 || (s.length === 1 && s[0]?.type === _i24f5eb0f99123f._r0b67f3f4892a4a)) &&
      this._messenger._rbfd2dc01eae8da(),
      this._r80120980bee624(
        this._r90e8f4039357b6,
        no.text(a._r145ed4e4435ce8(r)),
        !1,
        0,
        this._messenger.sessionDataManager?.userId ?? 0,
        this._messenger.sessionDataManager?.userName ?? "",
        this._messenger.sessionDataManager?.figure ?? "",
        "",
        t,
      ));
  }
  _r5eb1bb4d638040(e) {
    if ((a._r202bb6ec4c9818(this._rce9e8242f35f3b(e), !1), this._r95ac6185063bf2 === 0))
      (this._ra96bb4646da3f0(a._r43944bcc97b6ea), this.hide());
    else if (this._rad157898217440 != null)
      for (let r = 0; r < this._rad157898217440.numChildren; r += 1) {
        let t = this._rad157898217440.getChildAt(r);
        if (a._r86d11ae97a6687(t)) {
          ((this._rb507ab86a8e333 = 0), this._ra96bb4646da3f0(t?.id ?? a._r43944bcc97b6ea));
          break;
        }
      }
    this._ra98fd44bed2328();
  }
  _ra96bb4646da3f0(e) {
    ((this._r90e8f4039357b6 = e),
      a._r202bb6ec4c9818(this._rce9e8242f35f3b(e), !0),
      this._r5a5dfc514272e0(e, !1),
      this._r6991a4eae77cf6(),
      this._r1b6b0115ee5186());
    let r = this._messenger?._rf51d9426e17752(this._r90e8f4039357b6) ?? null,
      t = r?.name ?? "",
      i = this._frame?.findChildByName("separator_label");
    (i != null && (i.visible = this._r90e8f4039357b6 < 0 || r != null),
      this._messenger?.localization?._r43eae9731f5b27("messenger.window.separator", "friend_name", t),
      this._messenger?.localization?._r43eae9731f5b27(
        "messenger.window.input.default",
        "friend_name",
        t,
      ),
      this._frame?.invalidate());
  }
  _ra98fd44bed2328(e = !1) {
    (this._messenger?.localization?._r43eae9731f5b27(
      "messenger.window.title",
      "open_chat_count",
      `${this._r95ac6185063bf2}`,
    ),
      this._messenger?._r7460570c1e058b(this._r95ac6185063bf2, this._raa49579db91a74 && !e));
  }
  _r8bce5dc2d2071b(e, r, t) {
    return e === r3.const_135 ? no.habbicon(t) : no.text(r);
  }
  _r80120980bee624(e, r, t, i, s, o, d, c = "", f = 0) {
    if (t) {
      this._r62c17d7b0523b8(e, new _i24f5eb0f99123f(_i24f5eb0f99123f._rb11fd70417dcc4, e, r, i, s, o, d, c), !0);
      return;
    }
    let l = new _i24f5eb0f99123f(_i24f5eb0f99123f._ra5a0fb67f250a1, e, r, i, s, o, d, c, f);
    (f > 0 && this._re7a7fa95338c5a.set(f, l), this._r62c17d7b0523b8(e, l));
  }
  _r0c0259ad99efd4(e, r, t) {
    let i = this._re7a7fa95338c5a.get(t);
    if (i == null) return;
    (i._r6339c846cff861(r, e), this._r92424657a18b86.set(e, !0));
    let s = this._rebd0803ab32db5?.numListItems ?? 0,
      o = !1;
    for (let d = 0; d < s && !o; d += 1) {
      let f = this._rebd0803ab32db5?.getListItemAt(d)?.widget;
      if (f != null) {
        for (let l = 0; l < f._r9b781d964bd067; l += 1)
          if (f._r58a61702a247b7(l) === t) {
            (f._rfd69ffb30ed13c(l), f._r29e781e2ff2575(l, r), (o = !0));
            break;
          }
      }
    }
    this._re7a7fa95338c5a.delete(t);
  }
  _r47662a2cdaaad2(e, r) {
    this._r62c17d7b0523b8(e, new _i24f5eb0f99123f(_i24f5eb0f99123f._r0b67f3f4892a4a, 0, no.text(r), 0));
  }
  _r4917cff436e46d(e, r, t = !1) {
    this._r62c17d7b0523b8(e, new _i24f5eb0f99123f(_i24f5eb0f99123f._r09781670a88dc4, 0, no.text(r), 0), t);
  }
  _r08444b91424bf1(e, r, t = !1) {
    this._r62c17d7b0523b8(e, new _i24f5eb0f99123f(_i24f5eb0f99123f._r50e18e0efc3142, 0, no.text(r), 0), t);
  }
  _r62c17d7b0523b8(e, r, t = !1) {
    if (this._messenger == null) return;
    if (r.messageId !== "") {
      if (this._r92424657a18b86.has(r.messageId)) return;
      this._r92424657a18b86.set(r.messageId, !0);
    }
    if (!this._r4ae6066593aa2e.has(e))
      if (e > 0) this.startConversation(e, !1, r.type === _i24f5eb0f99123f._rb11fd70417dcc4 ? r : null);
      else return;
    let i = this._r4ae6066593aa2e.get(e);
    if (i == null) return;
    let s = i.length > 0 ? (i[i.length - 1] ?? null) : null;
    i.push(r);
    let o = this._rce9e8242f35f3b(e);
    (o != null && (a._r202bb6ec4c9818(o, !0), this._r1b6b0115ee5186()),
      e === this._r90e8f4039357b6
        ? (this._r328c846c2bed57(r, s, !1),
          this._rebd0803ab32db5?.arrangeListItems(),
          this._rebd0803ab32db5 != null && (this._rebd0803ab32db5.var_46 = 1),
          !this.isOpen && t && this._r5a5dfc514272e0(e, !0))
        : (t && this._r5a5dfc514272e0(e, !0), this._r95ac6185063bf2 === 1 && this._ra96bb4646da3f0(e)),
      this._ra98fd44bed2328());
  }
  _r653226a5672938(e, r, t) {
    if (e > 0)
      return (
        r.type === t.type &&
        (r.type === _i24f5eb0f99123f._ra5a0fb67f250a1 || r.type === _i24f5eb0f99123f._rb11fd70417dcc4) &&
        r._r8d58063461d151() < t._r8d58063461d151() + a._r33838dc7cb2c82
      );
    let i = r.type === _i24f5eb0f99123f._rb11fd70417dcc4 && t.senderId === r.senderId;
    return (
      r.type === t.type &&
      (r.type === _i24f5eb0f99123f._ra5a0fb67f250a1 || i) &&
      r._r8d58063461d151() < t._r8d58063461d151() + a._r33838dc7cb2c82
    );
  }
  _rca42691fc43aab(e, r = !1) {
    switch (e.type) {
      case _i24f5eb0f99123f._r09781670a88dc4: {
        let t = this._ra099a987cb915f?.clone(),
          i = t?.findChildByName("content");
        return (
          i != null &&
            ((i.limits.minWidth = this._rcf8a9ba98c0413),
            (i.limits.maxWidth = this._rcf8a9ba98c0413),
            (i.caption = e.messageText)),
          t
        );
      }
      case _i24f5eb0f99123f._r0b67f3f4892a4a:
      case _i24f5eb0f99123f._r50e18e0efc3142: {
        let i = (e.type === _i24f5eb0f99123f._r0b67f3f4892a4a ? this._r5a0296f27d6b3c : this._r63839e1cddcce4)?.clone(),
          s = i?.findChildByName("content");
        return (
          s != null && ((s.width = this._rcf8a9ba98c0413 - a.NOTIFICATION_ICON_WIDTH), (s.caption = e.messageText)),
          i
        );
      }
      case _i24f5eb0f99123f._rb11fd70417dcc4:
      case _i24f5eb0f99123f._ra5a0fb67f250a1: {
        let t = this._rd1a97c939c8851?.clone();
        if (t == null) return null;
        t.width = this._rcf8a9ba98c0413;
        let i = t.widget;
        if (i == null) return t;
        if (e.type === _i24f5eb0f99123f._rb11fd70417dcc4)
          ((i.flipped = !0),
            i.appendMessage(e.message),
            (i.timeStamp = e._r8d58063461d151()),
            (i.figure = e._rfafd7e4c8717e5 ?? ""),
            (i.userId = e.senderId),
            (i.userName = e.senderName ?? ""));
        else {
          ((i.flipped = !1),
            i.appendMessage(e.message, !1, e._rb953ed8aae52e3),
            (i.timeStamp = e._r8d58063461d151()),
            (i.figure = this._messenger?.sessionDataManager?.figure ?? ""),
            (i.userName = this._messenger?.sessionDataManager?.userName ?? ""));
          let s = this._messenger?._rf51d9426e17752(this._r90e8f4039357b6) ?? null;
          !r &&
            s != null &&
            !s.online &&
            (s._r311b9378b916ee || s._r2978d441b4844d) &&
            (i._r40bd3df15f6cc1 = !1);
        }
        return t;
      }
      default:
        return null;
    }
  }
  _re1c9e8f250a6b4() {
    if (this._rebd0803ab32db5 != null) {
      for (let e = 0; e < this._rebd0803ab32db5.numListItems; e += 1) {
        let r = this._rebd0803ab32db5.getListItemAt(e);
        switch (r?.name) {
          case "msg_notification":
          case "msg_invitation": {
            let t = r.findChildByName("content");
            t != null && (t.width = this._rcf8a9ba98c0413 - a.NOTIFICATION_ICON_WIDTH);
            break;
          }
          case "msg_info": {
            let t = r.findChildByName("content");
            t != null &&
              ((t.limits.minWidth = this._rcf8a9ba98c0413), (t.limits.maxWidth = this._rcf8a9ba98c0413));
            break;
          }
        }
        r != null && (r.width = this._rcf8a9ba98c0413);
      }
      (this._rebd0803ab32db5.arrangeListItems(), this._frame?.invalidate());
    }
  }
  _r4bb4e327185b7c(e) {
    let r = this._r4ae6066593aa2e.get(e);
    if (r == null) return;
    let t = r.length > 0 ? (r[0]?.messageId ?? "") : "",
      i = _ia411d8d8194a3a(),
      s = this._r0a085a45eff8e3.get(e);
    (s != null && s.messageId === t && s.time + a.const_482 > i) ||
      (this._r0a085a45eff8e3.set(e, { messageId: t, time: i }), this._messenger?.send(new _i7654b6ff1d4042(e, t)));
  }
  _r6991a4eae77cf6() {
    ((this._r9fd37cc267009a = !0),
      this._rebd0803ab32db5?.destroyListItems(),
      (this._r79cfa7a4d76f45 = -1),
      this._ree371d6f521695(!0),
      this._rebd0803ab32db5?.arrangeListItems(),
      this._rebd0803ab32db5 != null && (this._rebd0803ab32db5.var_46 = 1),
      (this._r9fd37cc267009a = !1));
  }
  _r328c846c2bed57(e, r, t = !1) {
    let i = !1;
    if (r != null && this._r653226a5672938(this._r90e8f4039357b6, e, r)) {
      let s = t ? 0 : (this._rebd0803ab32db5?.numListItems ?? 1) - 1,
        d = (s >= 0 ? this._rebd0803ab32db5?.getListItemAt(s) : null)?.widget;
      d != null &&
        (d.appendMessage(e.message, t, e._rb953ed8aae52e3),
        t || (d.timeStamp = e._r8d58063461d151()),
        (i = !0));
    }
    if (!i) {
      let s = this._rca42691fc43aab(e, t);
      s != null &&
        (t ? this._rebd0803ab32db5?.addListItemAt(s, 0) : this._rebd0803ab32db5?.addListItem(s));
    }
    return i;
  }
  _rc654aa0c6edb98() {
    if (
      -(this._rebd0803ab32db5?.visibleRegion.y ?? 0) > a.SCROLL_TRIGGER_HEIGHT ||
      this._rebd0803ab32db5 == null
    )
      return;
    this._r9fd37cc267009a = !0;
    let e = this._rebd0803ab32db5.var_46,
      r = this._rebd0803ab32db5.visibleRegion.height;
    (this._ree371d6f521695(), this._rebd0803ab32db5.arrangeListItems());
    let t = this._rebd0803ab32db5.visibleRegion.height;
    (t > 0 &&
      (this._rebd0803ab32db5.var_46 =
        r <= this._rebd0803ab32db5.height ? 1 : 1 - (r * (1 - e)) / t),
      (this._r9fd37cc267009a = !1));
  }
  _ree371d6f521695(e = !1) {
    let r = this._r4ae6066593aa2e.get(this._r90e8f4039357b6);
    if (r == null) {
      this._r4bb4e327185b7c(this._r90e8f4039357b6);
      return;
    }
    let t = this._r79cfa7a4d76f45 === -1 ? r.length : this._r79cfa7a4d76f45,
      i = e ? a._ra360103f06eb24 : 1,
      s = 0,
      o = !1,
      d = 0,
      c = this._r79cfa7a4d76f45 === -1 ? null : (r[this._r79cfa7a4d76f45] ?? null);
    for (let f = t - 1; f >= 0; f -= 1) {
      let l = r[f];
      if (
        l != null &&
        ((o && (c == null || !this._r653226a5672938(this._r90e8f4039357b6, l, c))) ||
          (this._r328c846c2bed57(l, c, !0) || (s += 1),
          (c = l),
          (d += 1),
          (this._r79cfa7a4d76f45 = f),
          s >= a._r5e6fc103f00121 * i && (o = !0),
          d >= a.CHAT_ITEM_RENDER_MAX_MESSAGES_SIZE * i))
      )
        break;
    }
    this._r79cfa7a4d76f45 < a.const_1334 && this._r4bb4e327185b7c(this._r90e8f4039357b6);
  }
  _r1b6b0115ee5186() {
    if (this._rad157898217440 == null || this._frame == null) return;
    let e = 0,
      r = 0;
    this._rffb59ea2c819cc = !1;
    for (let s = 0; s < this._rad157898217440.numChildren; s += 1) {
      let o = this._rad157898217440.getChildAt(s);
      if (o == null) continue;
      let d = o.id === this._r90e8f4039357b6;
      (!d && o.name.length > 0 && (d = Number(o.name) === this._r90e8f4039357b6),
        d && a._r202bb6ec4c9818(o, !0));
      let c = a._r86d11ae97a6687(o);
      (r < this._rb507ab86a8e333 || !c || this._rffb59ea2c819cc
        ? (o.visible = !1)
        : e + o.width > this._rad157898217440.width
          ? ((o.visible = !1), (this._rffb59ea2c819cc = !0))
          : ((o.visible = !0), (o.blend = d ? 1 : 0), (o.x = e), (e += o.width)),
        c && (r += 1));
    }
    let t = this._frame.findChildByName("avatars_scroll_left");
    t != null && (t.visible = this._rb507ab86a8e333 > 0);
    let i = this._frame.findChildByName("avatars_scroll_right");
    i != null && (i.visible = this._rffb59ea2c819cc);
  }
  refreshButtons() {
    this._frame?.findChildByName("button_strip")?.arrangeListItems();
  }
  get _r95ac6185063bf2() {
    let e = 0;
    if (this._rad157898217440 == null) return e;
    for (let r = 0; r < this._rad157898217440.numChildren; r += 1) {
      let t = this._rad157898217440.getChildAt(r);
      a._r86d11ae97a6687(t) && (e += 1);
    }
    return e;
  }
  get _raa49579db91a74() {
    if (this._rad157898217440 == null) return !1;
    for (let e = 0; e < this._rad157898217440.numChildren; e += 1) {
      let r = this._rad157898217440.getChildAt(e);
      if (a._r86d11ae97a6687(r) && r?.findChildByName("chat_indicator")?.visible) return !0;
    }
    return !1;
  }
  get _rcf8a9ba98c0413() {
    return (this._frame?.width ?? 27) - 27;
  }
  _rce9e8242f35f3b(e) {
    return this._rad157898217440?.getChildByID(e);
  }
  _r5a5dfc514272e0(e, r) {
    let t = this._rce9e8242f35f3b(e)?.findChildByName("chat_indicator");
    t != null && (t.visible = r);
  }
  _rea63bfd42eaf90 = n((e, r) => {
    switch (e.type) {
      case y.const_1204:
        r === this._frame &&
          (this._re1c9e8f250a6b4(),
          this._r1b6b0115ee5186(),
          this._r3690e21d96c516?.visible && this._rce804d17053a2d());
        break;
      case y.const_475:
        r.name === "_CONTAINER" && !this._r9fd37cc267009a && this._rc654aa0c6edb98();
        break;
      case u.CLICK: {
        let t = !0;
        switch (r.name) {
          case "avatar_click_region":
            r.parent != null && this._ra96bb4646da3f0(r.parent.id);
            break;
          case "avatars_scroll_left":
            this._rb507ab86a8e333 > 0 && ((this._rb507ab86a8e333 -= 1), this._r1b6b0115ee5186());
            break;
          case "avatars_scroll_right":
            this._rffb59ea2c819cc && ((this._rb507ab86a8e333 += 1), this._r1b6b0115ee5186());
            break;
          case "close_conversation_button":
            this._r5eb1bb4d638040(this._r90e8f4039357b6);
            break;
          case "follow_button":
            this._r90e8f4039357b6 > 0
              ? (this._messenger?.send(new class_3066(this._r90e8f4039357b6)),
                this._messenger?.send(new class_2154("Navigation", "IM", "go.im")))
              : this._r90e8f4039357b6 < 0 &&
                (this._messenger != null && (this._messenger.followingToGroupRoom = !0),
                this._messenger?.send(new _i494540f04bf21d(Math.abs(this._r90e8f4039357b6), !1)));
            break;
          case "profile_button":
            this._r90e8f4039357b6 > 0
              ? (this._messenger?.send(new class_2134(this._r90e8f4039357b6)),
                this._messenger?.trackGoogle("extendedProfile", "messenger_conversation"))
              : this._r90e8f4039357b6 < 0 &&
                (this._messenger?.send(new _i494540f04bf21d(Math.abs(this._r90e8f4039357b6), !0)),
                this._messenger?.trackGoogle("extendedProfile", "messenger_conversation"));
            break;
          case "report_button":
            this._r90e8f4039357b6 > 0 && this._messenger?._r046ef1fd9b83b8(this._r90e8f4039357b6);
            break;
          case "header_button_close":
            this.hide();
            break;
          case "habbicon_button":
            (this._ref50d1fa87f7bc(), (t = !1));
            break;
        }
        t && this._r6c79704cea747b(r);
        break;
      }
      case u.CLICK_AWAY:
        this._r6c79704cea747b(e.related);
        break;
    }
  }, "_rea63bfd42eaf90");
  _ref50d1fa87f7bc() {
    if ((this._r12ae2fd762b40b(), this._r3690e21d96c516 != null)) {
      if (this._r3690e21d96c516.visible) {
        this._r3690e21d96c516.hide();
        return;
      }
      (this._r3690e21d96c516.show(), this._rce804d17053a2d());
    }
  }
  _r12ae2fd762b40b() {
    if (this._r3690e21d96c516 != null || this._messenger == null || this.var_473 == null)
      return;
    let e = this._messenger.getXmlWindow("messenger_habbicon_picker");
    (this.var_473.addChild(e),
      (this._r3690e21d96c516 = new ype(
        e,
        this._messenger._r95cd89d9fe7aac,
        this._messenger.localization,
        this._messenger.windowManager,
        this._r1897b8469d192f,
      )));
  }
  _rce804d17053a2d() {
    if (this._r3690e21d96c516 == null || this.var_473 == null) return;
    let e = new D(),
      r = new D(),
      t = new E();
    (this._ra359d566f5bbf6.getGlobalRectangle(e),
      this._rf2014f469435f3.getGlobalRectangle(r),
      this.var_473.getGlobalPosition(t),
      this._r3690e21d96c516.setPosition(
        e.x - t.x,
        r.y - t.y - this._r3690e21d96c516.window.height - a.const_370,
      ));
  }
  _r4a59bce529f6f3() {
    this._r3690e21d96c516?.hide();
  }
  _r6c79704cea747b(e) {
    this._r3690e21d96c516?.visible &&
      !a.isWindowInTree(e, this._ra359d566f5bbf6) &&
      !this._r3690e21d96c516._rba1cd323364faa(e) &&
      this._r3690e21d96c516.hide();
  }
  _r1897b8469d192f = n((e, r) => {
    if (this._r90e8f4039357b6 === a._r43944bcc97b6ea || e <= 0 || this._messenger == null) return;
    let t = this.var_1727++;
    this._messenger.send(new _ib8c93bf3254201(this._r90e8f4039357b6, e, t));
    let i = this._r4ae6066593aa2e.get(this._r90e8f4039357b6) ?? [];
    ((i.length === 0 || (i.length === 1 && i[0]?.type === _i24f5eb0f99123f._r0b67f3f4892a4a)) &&
      this._messenger._rbfd2dc01eae8da(),
      this._r80120980bee624(
        this._r90e8f4039357b6,
        no.habbicon(e),
        !1,
        0,
        this._messenger.sessionDataManager?.userId ?? 0,
        this._messenger.sessionDataManager?.userName ?? "",
        this._messenger.sessionDataManager?.figure ?? "",
        "",
        t,
      ),
      this._messenger._r95cd89d9fe7aac?._r59b8bf5acaaf2f(e));
  }, "_r1897b8469d192f");
  static isWindowInTree(e, r) {
    for (; e != null;) {
      if (e === r) return !0;
      e = e.parent;
    }
    return !1;
  }
  get _ra359d566f5bbf6() {
    return this._frame.findChildByName("habbicon_button");
  }
  get _rf2014f469435f3() {
    return this._frame.findChildByName("input_widget");
  }
  static _r86d11ae97a6687(e) {
    return e != null && !e.tags.includes(a.HIDDEN);
  }
  static _r202bb6ec4c9818(e, r) {
    if (e == null) return;
    let t = a._r86d11ae97a6687(e);
    if (t && !r) e.tags.push(a.HIDDEN);
    else if (!t && r) {
      let i = e.tags.indexOf(a.HIDDEN);
      i >= 0 && e.tags.splice(i, 1);
    }
  }
  static _r145ed4e4435ce8(e) {
    return e.search("\\${") === 0 ? ` ${e}` : e;
  }
}
