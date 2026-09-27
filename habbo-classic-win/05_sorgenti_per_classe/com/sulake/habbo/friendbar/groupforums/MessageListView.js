// Extracted from HabboAirLauncher.deobf.js, line 204469.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/MessageListView.as
// Obfuscated name: _i0fa8f46fa38595

class a {
  static {
    n(this, "MessageListView");
  }
  static UNREAD_MESSAGE_STATUS = -1;
  static const_1245 = 20;
  static _r86b164b5b5ee6e = new RegExp("\\\\?(?:(?:\\*([^*]+)\\*)|(?:_([^_]+)_)|(?:@\\S+))");
  static _r00042be57a216a = new RegExp("^>(?: ?|$)");
  static QUOTE_BG_COLOR = 4291611852;
  var_63;
  var_157;
  var_122;
  var_4246;
  var_95;
  var_1368;
  var_1653;
  var_1623 = !0;
  constructor(e, r, t, i, s) {
    ((this.var_157 = e),
      (this.var_63 = this.var_157.controller),
      (this.var_122 = r),
      (this.var_4246 = this.var_63.windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("groupforum_message_list_item_xml")?.content,
      )),
      (this.var_95 = t),
      (this.var_1368 = i),
      (this.var_1653 = s));
  }
  update() {
    (this.var_122.numListItems > 0 && this.var_122.destroyListItems(),
      this.var_122.invalidate());
    let e = this.var_63._r664be10a84ff5c(this.var_1653.threadId);
    ((this.var_1623 = !0), (this.var_122.autoArrangeItems = !1));
    for (let r of this.var_1653.messages) {
      let t = r.messageIndex > e;
      this.var_122.addListItem(this.createListItem(r, t));
    }
    ((this.var_1623 = !1), this.updateItemSizes());
  }
  updateItemSizes() {
    if (this.var_1623) return;
    let e = this.var_122._rce8584c5e61b53.width;
    (this.updateItemSizesInternal(), this.var_122._rce8584c5e61b53.width !== e && this.updateItemSizesInternal());
  }
  updateItemSizesInternal() {
    this.var_122.autoArrangeItems = !1;
    for (let e = 0; e < this.var_122.numListItems; e++) {
      let r = this.var_122.getListItemAt(e),
        t = r.findChildByName("texts_container"),
        i = r.findChildByName("message_text_container");
      r.width = this.var_122._rce8584c5e61b53.width - 2;
      let s = 2;
      for (let o = 0; o < i.numChildren; o++) {
        let d = i.getChildAt(o);
        ((d.y = s), (s = d.bottom | 0));
      }
      ((i.height = s), (r.height = t.height + i.bottom));
    }
    this.var_122.autoArrangeItems = !0;
  }
  createListItem(e, r = !1) {
    let t = this.var_4246.clone();
    t.name = "message_" + e.messageId;
    let i = e.state,
      s = this.var_95.canPostMessage,
      o = this.var_95.canModerate,
      d = t.findChildByName("texts_container");
    ((d.id = e.messageId),
      (d.findChildByName("date").caption = this.var_157.getAsDaysHoursMinutes(e.creationTimeAsSecondsAgo)),
      (d.findChildByName("reply_num").caption = "#" + (e.messageIndex + 1)));
    let c = t.findChildByName("message_text");
    (r && (i = a.UNREAD_MESSAGE_STATUS),
      i === class_2751.PERMANENTLY_HIDDEN_BY_MOD && !o
        ? (c.text = this.getModerationMessage(e) ?? "")
        : i > class_2751.RESTORED_BY_ADMIN && !s
          ? (c.text = this.getModerationMessage(e) ?? "")
          : a.initMessageText(c, e.messageText));
    let f = t.findChildByName("msg_container"),
      l = a.getMessageColor(i);
    f.color = l[0];
    let b = t.findChildByName("avatar_image"),
      _ = a.getMessageColor(i);
    return (
      (b.color = _[1]),
      (b.id = e.authorId),
      b.removeEventListener(u.CLICK, this._re7bd68774e6aba),
      b.addEventListener(u.CLICK, this._re7bd68774e6aba),
      (b.findChildByName("avatar_widget").widget.figure = e.authorFigure),
      (b.findChildByName("author").caption = e.authorName),
      (b.findChildByName("author_post_count").caption =
        e.authorPostCount +
        " " +
        this.var_63.localizationManager.getLocalization("messageboard.messages", "posts")),
      this.handleButtonVisibility(t, e, i),
      t
    );
  }
  updateElement(e) {
    let r = e.messageId,
      t = this.var_122.getListItemByName("message_" + r);
    if (t == null) return;
    let i = this.var_122.getListItemIndex(t);
    ((this.var_1623 = !0),
      (this.var_122.autoArrangeItems = !1),
      this.var_122.removeListItemAt(i),
      this.var_122.addListItemAt(this.createListItem(e), i),
      (this.var_1623 = !1),
      this.updateItemSizes());
  }
  handleButtonVisibility(e, r, t) {
    let i = this.var_95.canPostMessage,
      s = this.var_95.canModerate,
      o = this.var_95.isStaff,
      d = this.var_95.canReport,
      c = e.findChildByName("delete_message");
    if (
      (c.removeEventListener(u.CLICK, this._r581a073227d603),
      c.removeEventListener(u.CLICK, this._r7bf741160d31d0),
      i)
    ) {
      c.id = r.messageId;
      let f = c.getChildByName("icon");
      switch (t) {
        case class_2751.HIDDEN_BY_ADMIN:
          (c.addEventListener(u.CLICK, this._r7bf741160d31d0), (f.assetUri = "forum_forum_unhide"));
          break;
        case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
          s
            ? (c.addEventListener(u.CLICK, this._r7bf741160d31d0), (f.assetUri = "forum_forum_unhide"))
            : (c.visible = !1);
          break;
        case class_2751.DEFAULT_STATE:
        case class_2751.RESTORED_BY_ADMIN:
        default:
          (c.addEventListener(u.CLICK, this._r581a073227d603), (f.assetUri = "forum_forum_hide"));
          break;
      }
    } else c.visible = !1;
    ((c = e.findChildByName("report_message")),
      o
        ? ((c.id = r.messageId),
          c.removeEventListener(u.CLICK, this._r9110de3529fe90),
          c.addEventListener(u.CLICK, this._r9110de3529fe90))
        : (c.visible = !1),
      (c = e.findChildByName("reply_message")),
      d
        ? ((c.id = r.messageId),
          c.removeEventListener(u.CLICK, this._r6ef4642be9d64a),
          c.addEventListener(u.CLICK, this._r6ef4642be9d64a))
        : (c.visible = !1));
  }
  static getMessageColor(e) {
    switch (e) {
      case class_2751.HIDDEN_BY_ADMIN:
        return [4293519840, 4292335567];
      case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
        return [4294952634, 4294959058];
      case a.UNREAD_MESSAGE_STATUS:
        return [4294964441, 4291227641];
      case class_2751.DEFAULT_STATE:
      case class_2751.RESTORED_BY_ADMIN:
      default:
        return [4294967295, 4291227641];
    }
  }
  getModerationMessage(e) {
    switch (e.state) {
      case class_2751.HIDDEN_BY_ADMIN:
        return this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.message_hidden_by_admin",
          "",
          "admin_name",
          e.adminName,
        );
      case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
        return this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.message_hidden_by_staff",
          "",
          "admin_name",
          e.adminName,
        );
      default:
        return null;
    }
  }
  scrollToSpecificElement(e, r = !1) {
    let t;
    (r
      ? (t = this.var_122.getListItemAt(e - 1))
      : (t = this.var_122.getListItemByName("message_" + e)),
      t != null &&
        (this.var_122.var_46 = t.bottom / this.var_122._r5733287651adec));
  }
  _r9110de3529fe90 = n((e) => {
    this.var_63._r699ed42ce6865d(
      this.var_95,
      this.var_1368.threadId,
      e.target.id | 0,
    );
  }, "_r9110de3529fe90");
  _r7bf741160d31d0 = n((e) => {
    this.var_63._r2b2df88dfa92f8(
      this.var_95,
      this.var_1368.threadId,
      e.target.id | 0,
    );
  }, "_r7bf741160d31d0");
  _r581a073227d603 = n((e) => {
    this.var_63._r694108c92560f2(
      this.var_95,
      this.var_1368.threadId,
      e.target.id | 0,
    );
  }, "_r581a073227d603");
  _re7bd68774e6aba = n((e) => {
    this.var_63._rf85d291541d01d(e.target.id | 0);
  }, "_re7bd68774e6aba");
  _r6ef4642be9d64a = n((e) => {
    let r = e.target.id | 0,
      t = this.var_1653._raabad92eda9b39.getValue(r);
    t != null && this.var_157.openComposeMessageView(this.var_1368, t);
  }, "_r6ef4642be9d64a");
  static initMessageText(e, r) {
    let t = e.parent;
    t.removeChild(e);
    let i = r.split("\r"),
      s = new Rz(),
      o = 0;
    for (let d of i) {
      let c = d,
        f = 0,
        l = a._r00042be57a216a.exec(c);
      (l != null && ((f = 1), (c = c.substring(l[0].length))),
        f !== o ? (a.addTextBlock(t, e, s, o), (o = f)) : s.length > 0 && s.add("\r"),
        a.parseMessageChunk(s, c));
    }
    a.addTextBlock(t, e, s, o);
  }
  static parseMessageChunk(e, r) {
    for (;;) {
      let t = a._r86b164b5b5ee6e.exec(r);
      if (t == null) break;
      t.index > 0 && e.addEscaped(r.substring(0, t.index));
      let i = t[0].length;
      switch (r.charAt(t.index)) {
        case "*":
          (e.add(" <b>"), a.parseMessageChunk(e, r.substring(t.index + 1, t.index + i - 1)), e.add("</b> "));
          break;
        case "_":
          (e.add(" <i>"), a.parseMessageChunk(e, r.substring(t.index + 1, t.index + i - 1)), e.add("</i> "));
          break;
        case "@":
          if (t.index === 0 || (t.index > 0 && r.substring(t.index - 1, t.index) === " ")) {
            let s = r.substring(t.index + 1, t.index + i);
            e.add("<u>").addEscaped(s).add("</u>");
            break;
          } else e.add("@");
        default:
          (e.add(r.charAt(t.index + 1)), (r = r.substring(t.index + 2)));
          continue;
      }
      r = r.substring(t.index + i);
    }
    e.addEscaped(r);
  }
  static addTextBlock(e, r, t, i) {
    let s = t.toString(),
      o = r.clone();
    (e.addChild(o),
      (o.htmlText = s),
      i > 0 &&
        ((o.x += i * a.const_1245),
        (o.width -= (i + 1) * a.const_1245),
        (o.color = a.QUOTE_BG_COLOR),
        (o.background = !0)),
      t.reset());
  }
}
