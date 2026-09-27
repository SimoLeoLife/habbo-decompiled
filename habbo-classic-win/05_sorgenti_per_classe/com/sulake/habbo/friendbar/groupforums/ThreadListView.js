// Estratto da HabboAirLauncher.deobf.js, riga 204999.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ThreadListView.as
// Nome offuscato: _i6fe544527af8bc

class a {
  static {
    n(this, "ThreadListView");
  }
  var_63;
  var_157;
  var_122;
  var_4246;
  var_95;
  var_877;
  constructor(e, r, t, i) {
    ((this.var_157 = e),
      (this.var_63 = this.var_157.controller),
      (this.var_122 = r),
      (this.var_4246 = this.var_63.windowManager.buildFromXML(
        this.var_63.assets.getAssetByName("groupforum_thread_list_item_xml")?.content,
      )),
      (this.var_95 = t),
      (this.var_877 = i));
  }
  update() {
    this.var_122.invalidate();
    for (let e = 0; e < this.var_877.size; e++) {
      let r = this.var_877.threads[e],
        t = this.var_4246.clone();
      ((t.name = "thread_" + r.threadId),
        this.updateListItem(t, r, e),
        this.var_122.addListItem(t));
    }
    this.updateItemWidths();
  }
  updateListItem(e, r, t) {
    let i = e,
      s = r.state,
      o = this.var_95.canPostMessage,
      d = this.var_95.canModerate,
      c = r._rcbe5e510ab363e,
      f = r._r7732642648cab6,
      l = r.nMessages - this.var_63._r664be10a84ff5c(r.threadId) - 1,
      b = i.findChildByName("texts_container");
    b != null && ((b.id = r.threadId), (b.color = a.getThreadColor(s, t)));
    let _ = i.findChildByName("header");
    if (_ != null) {
      _.bold = l > 0;
      let h = r.header;
      (r.header === "" && (h = "(No Subject)"),
        s > class_2751.RESTORED_BY_ADMIN && !o && !d && (h = this.getModerationMessage(r) ?? ""),
        (_.text = h));
    }
    ((b = i.findChildByName("header_region")),
      b != null &&
        ((b.id = r.threadId),
        b.removeEventListener(u.CLICK, this._r696462f54c6864),
        b.addEventListener(u.CLICK, this._r696462f54c6864)),
      (b = i.findChildByName("details")),
      b != null &&
        (b.caption = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.thread_details",
          "",
          "thread_author_id",
          String(r.threadAuthorId),
          "thread_author_name",
          r.threadAuthorName,
          "last_author_id",
          String(r.lastMessageAuthorId),
          "last_author_name",
          r.lastMessageAuthorName,
          "creation_time",
          this.var_157.getAsDaysHoursMinutes(r.creationTimeAsSecondsAgo),
          "update_time",
          this.var_157.getAsDaysHoursMinutes(r.lastMessageTimeAsSecondsAgo),
        )),
      (b = i.findChildByName("unread_texts_container")),
      b != null && ((b.id = r.threadId), (b.color = a.getThreadColor(s, t))),
      (b = i.findChildByName("unread_region")),
      b != null &&
        ((b.id = r.threadId),
        b.removeEventListener(u.CLICK, this._r696462f54c6864),
        b.addEventListener(u.CLICK, this._r696462f54c6864)),
      (_ = i.findChildByName("messages1")),
      _ != null &&
        ((_.bold = l > 0),
        (_.text = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.thread_details1",
          "",
          "total_messages",
          String(r.nMessages),
          "new_messages",
          String(l),
        ))),
      (_ = i.findChildByName("messages2")),
      _ != null &&
        ((_.bold = l > 0),
        (_.text = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.thread_details2",
          "",
          "total_messages",
          String(r.nMessages),
          "new_messages",
          String(l),
        ))),
      (b = i.findChildByName("button_container")),
      b != null &&
        ((b.id = r.threadId),
        (b.color = a.getThreadColor(s, t)),
        this.handleButtonVisibility(b, r, s),
        (b.color = a.getThreadColor(s, t))),
      (b = i.findChildByName("left_button_container")),
      b != null &&
        ((b.id = r.threadId),
        (b.color = a.getThreadColor(s, t)),
        this.handleLeftButtonsVisibility(b, r, f, c),
        (b.color = a.getThreadColor(s, t))));
  }
  updateItemWidths() {
    for (let e = 0; e < this.var_122.numListItems; e++)
      this.var_122.getListItemAt(e).width = this.var_122._rce8584c5e61b53.width - 2;
  }
  handleButtonVisibility(e, r, t) {
    let i = this.var_95.canPostMessage,
      s = this.var_95.canModerate,
      o = this.var_95.isStaff,
      d = e.findChildByName("mod_buttons"),
      c = d.getListItemAt(0);
    if (c != null)
      if (
        (c.removeEventListener(u.CLICK, this._r581a073227d603),
        c.removeEventListener(u.CLICK, this._r7bf741160d31d0),
        i || s)
      ) {
        c.id = r.threadId;
        let f = c.getChildByName("icon");
        switch (t) {
          case class_2751.DEFAULT_STATE:
          case class_2751.RESTORED_BY_ADMIN:
            (c.addEventListener(u.CLICK, this._r581a073227d603), (f.assetUri = "forum_forum_hide"));
            break;
          case class_2751.HIDDEN_BY_ADMIN:
            (c.addEventListener(u.CLICK, this._r7bf741160d31d0), (f.assetUri = "forum_forum_unhide"));
            break;
          case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
            s
              ? (c.addEventListener(u.CLICK, this._r7bf741160d31d0), (f.assetUri = "forum_forum_unhide"))
              : (c.visible = !1);
            break;
        }
      } else c.visible = !1;
    ((c = d.getListItemAt(1)),
      c != null &&
        (c.removeEventListener(u.CLICK, this._r9110de3529fe90),
        i || s || o
          ? ((c.id = r.threadId), c.addEventListener(u.CLICK, this._r9110de3529fe90))
          : (c.visible = !1)));
  }
  handleLeftButtonsVisibility(e, r, t, i) {
    let s = this.var_95.canPostMessage,
      o = this.var_95.canModerate,
      d = e.findChildByName("info_buttons"),
      c = d.getListItemByName("thread_lock");
    if (c != null) {
      c.removeEventListener(u.CLICK, this._r23d917a9939380);
      let l = c.getChildByName("icon");
      s || o
        ? ((c.id = r.threadId),
          c.addEventListener(u.CLICK, this._r23d917a9939380),
          (l.assetUri = t ? "forum_forum_locked" : "forum_forum_unlocked"),
          (c.visible = !0))
        : (t && (l.assetUri = "forum_forum_locked"), (c.visible = t), c.disable());
    }
    let f = d.getListItemByName("thread_pin");
    if (f != null) {
      f.removeEventListener(u.CLICK, this._rc67821f6088ef2);
      let l = f.getChildByName("icon");
      s || o
        ? ((f.id = r.threadId),
          f.addEventListener(u.CLICK, this._rc67821f6088ef2),
          (l.assetUri = i ? "forum_forum_pinned" : "forum_forum_unpinned"),
          (f.visible = !0))
        : (i && (l.assetUri = "forum_forum_pinned"), (f.visible = i), f.disable());
    }
  }
  static getThreadColor(e, r) {
    switch (e) {
      case class_2751.HIDDEN_BY_ADMIN:
        return 4289374890;
      case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
        return 4294946981;
      case class_2751.DEFAULT_STATE:
      case class_2751.RESTORED_BY_ADMIN:
      default:
        return (r + 1) % 2 ? 4293852927 : 4289914618;
    }
  }
  getModerationMessage(e) {
    let r = null;
    switch (e.state) {
      case class_2751.DEFAULT_STATE:
        break;
      case class_2751.RESTORED_BY_ADMIN:
        break;
      case class_2751.HIDDEN_BY_ADMIN:
        r = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.thread_hidden_by_admin",
          "",
          "admin_name",
          e.adminName,
        );
        break;
      case class_2751.PERMANENTLY_HIDDEN_BY_MOD:
        r = this.var_63.localizationManager.getLocalizationWithParams(
          "groupforum.view.thread_hidden_by_staff",
          "",
          "admin_name",
          e.adminName,
        );
        break;
    }
    return r;
  }
  updateElement(e) {
    let r = e.threadId,
      t = this.var_122.getListItemByName("thread_" + r),
      i = this.var_122.getListItemIndex(t);
    t != null && this.updateListItem(t, e, i);
  }
  _r23d917a9939380 = n((e) => {
    let r = e.target.id | 0,
      t = this.var_877._r336f760a46abc6.getValue(r);
    t != null &&
      this.var_63._r96c49a5cd47203(
        this.var_95,
        r,
        !t._r7732642648cab6,
        t._rcbe5e510ab363e,
      );
  }, "_r23d917a9939380");
  _rc67821f6088ef2 = n((e) => {
    let r = e.target.id | 0,
      t = this.var_877._r336f760a46abc6.getValue(r);
    t != null &&
      this.var_63._r1b67803b29b316(
        this.var_95,
        r,
        t._r7732642648cab6,
        !t._rcbe5e510ab363e,
      );
  }, "_rc67821f6088ef2");
  _r9110de3529fe90 = n((e) => {
    this.var_63._rb1c939952cd277(this.var_95, e.target.id | 0);
  }, "_r9110de3529fe90");
  _r581a073227d603 = n((e) => {
    this.var_63._r5bf545345a4f2a(this.var_95, e.target.id | 0);
  }, "_r581a073227d603");
  _r7bf741160d31d0 = n((e) => {
    this.var_63._r17f63c425d036f(this.var_95, e.target.id | 0);
  }, "_r7bf741160d31d0");
  _r696462f54c6864 = n((e) => {
    let r = e.target.id | 0,
      t = this.var_877._r336f760a46abc6.getValue(r);
    if (t) {
      let i = Math.min(this.var_63._r664be10a84ff5c(r) + 1, t.nMessages - 1);
      this.var_63._r5769194d7bf27e(this.var_95.groupId, r, i);
    }
  }, "_r696462f54c6864");
}
