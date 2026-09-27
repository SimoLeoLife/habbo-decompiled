// Estratto da HabboAirLauncher.deobf.js, riga 332766.

class {
  static {
    n(this, "_i33a474905b06d5");
  }
  _disposed = !1;
  _container = null;
  var_36 = null;
  _r0dd47e0c3c9938 = null;
  _rda7f6997240722 = null;
  _r72c3d5ea2e6046 = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.PLAYLIST_EDITOR_WIDGET;
  }
  set container(e) {
    (this._container?.musicController?.events != null &&
      (this._container.musicController.events.removeEventListener?.(
        SongDiskInventoryReceivedEvent.SONG_DISK_INVENTORY_RECEIVED,
        this._rbe8ac36f521018,
      ),
      this._container.musicController.events.removeEventListener?.(
        PlayListStatusEvent.PLAY_LIST_UPDATED,
        this._rbe8ac36f521018,
      ),
      this._container.musicController.events.removeEventListener?.(
        PlayListStatusEvent.PLAY_LIST_FULL,
        this._rbe8ac36f521018,
      ),
      this._container.musicController.events.removeEventListener?.(
        NowPlayingEvent.NOW_PLAYING_SONG_CHANGED,
        this._rbe8ac36f521018,
      ),
      this._container.musicController.events.removeEventListener?.(
        NowPlayingEvent.USER_PLAY_SONG,
        this._rbe8ac36f521018,
      ),
      this._container.musicController.events.removeEventListener?.(
        NowPlayingEvent.USER_STOP_SONG,
        this._rbe8ac36f521018,
      )),
      this.var_36 != null &&
        (this._r0dd47e0c3c9938 != null && this.var_36.removeMessageEvent(this._r0dd47e0c3c9938),
        this._rda7f6997240722 != null && this.var_36.removeMessageEvent(this._rda7f6997240722),
        this._r72c3d5ea2e6046 != null && this.var_36.removeMessageEvent(this._r72c3d5ea2e6046)),
      (this._container = e),
      (this.var_36 = e?.connection ?? null),
      (this._r0dd47e0c3c9938 = new _i2a67f7caf53350(this._r9479258a9511e5)),
      (this._rda7f6997240722 = new class_3365(this._r9479258a9511e5)),
      (this._r72c3d5ea2e6046 = new class_3175(this._r9479258a9511e5)),
      this.var_36 != null &&
        (this.var_36.addMessageEvent(this._r0dd47e0c3c9938),
        this.var_36.addMessageEvent(this._rda7f6997240722),
        this.var_36.addMessageEvent(this._r72c3d5ea2e6046)),
      this._container?.musicController?.events != null &&
        (this._container.musicController.events.addEventListener?.(
          SongDiskInventoryReceivedEvent.SONG_DISK_INVENTORY_RECEIVED,
          this._rbe8ac36f521018,
        ),
        this._container.musicController.events.addEventListener?.(
          PlayListStatusEvent.PLAY_LIST_UPDATED,
          this._rbe8ac36f521018,
        ),
        this._container.musicController.events.addEventListener?.(
          PlayListStatusEvent.PLAY_LIST_FULL,
          this._rbe8ac36f521018,
        ),
        this._container.musicController.events.addEventListener?.(
          NowPlayingEvent.NOW_PLAYING_SONG_CHANGED,
          this._rbe8ac36f521018,
        ),
        this._container.musicController.events.addEventListener?.(
          NowPlayingEvent.USER_PLAY_SONG,
          this._rbe8ac36f521018,
        ),
        this._container.musicController.events.addEventListener?.(
          NowPlayingEvent.USER_STOP_SONG,
          this._rbe8ac36f521018,
        )));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this.container = null),
      (this.var_36 = null),
      (this._r0dd47e0c3c9938 = null),
      (this._rda7f6997240722 = null),
      (this._r72c3d5ea2e6046 = null),
      (this._container = null));
  }
  _rc3479181526e34() {
    return [
      RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PLAYLIST_EDITOR_WIDGET,
      RoomWidgetPlayListModificationMessage.ADD_TO_PLAYLIST,
      RoomWidgetPlayListModificationMessage.REMOVE_FROM_PLAYLIST,
      RoomWidgetPlayListPlayStateMessage.TOGGLE_PLAY_PAUSE,
      RoomWidgetPlayListUserActionMessage.const_464,
    ];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PLAYLIST_EDITOR_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category);
        if (t != null && this._container?._r2eac8239a09fe7 != null) {
          let i = this._container._rc2337883ff003a(t),
            s =
              this._container._r2eac8239a09fe7.isRoomOwner ||
              this._container._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
              this._container.sessionDataManager?.isAnyRoomController === !0;
          i
            ? this._container.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.SHOW_PLAYLIST_EDITOR, r.id))
            : s && this.var_36?.send(new class_3808(t.getId(), -2));
        }
        break;
      }
      case RoomWidgetPlayListModificationMessage.ADD_TO_PLAYLIST: {
        if (!(e instanceof RoomWidgetPlayListModificationMessage)) break;
        let r = e;
        this.var_36?.send(new _ia82291dd3a385b(r._r398f5a77bf5446, r._slotNumber));
        break;
      }
      case RoomWidgetPlayListModificationMessage.REMOVE_FROM_PLAYLIST: {
        if (!(e instanceof RoomWidgetPlayListModificationMessage)) break;
        let r = e;
        this.var_36?.send(new _i258b76dd182e43(r._slotNumber));
        break;
      }
      case RoomWidgetPlayListPlayStateMessage.TOGGLE_PLAY_PAUSE: {
        if (!(e instanceof RoomWidgetPlayListPlayStateMessage)) break;
        let r = e;
        this.var_36?.send(new class_3808(r.furniId, r.position));
        break;
      }
      case RoomWidgetPlayListUserActionMessage.const_464:
        this._container?._r697386a8fb5bf8?.trackGoogle("playlistEditorPanelOpenCatalogue", "click");
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineSoundMachineEvent.const_73];
  }
  _r9b1b0209eb1b5a(e) {
    if (e.type === RoomEngineSoundMachineEvent.const_73) {
      let r = e;
      this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.const_1104, r.objectId));
    }
  }
  update() {}
  _r9479258a9511e5 = n((e) => {
    e?.getParser()._rd646a5cabacc16 === 0 &&
      this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.INVENTORY_UPDATED, -1));
  }, "_r9479258a9511e5");
  _rbe8ac36f521018 = n((e) => {
    switch (e.type) {
      case SongDiskInventoryReceivedEvent.SONG_DISK_INVENTORY_RECEIVED:
        this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.SONG_DISK_INVENTORY_UPDATED));
        break;
      case PlayListStatusEvent.PLAY_LIST_UPDATED:
        this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.PLAY_LIST_UPDATED));
        break;
      case PlayListStatusEvent.PLAY_LIST_FULL:
        this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorEvent(RoomWidgetPlayListEditorEvent.PLAY_LIST_FULL));
        break;
      case NowPlayingEvent.NOW_PLAYING_SONG_CHANGED:
      case NowPlayingEvent.USER_PLAY_SONG:
      case NowPlayingEvent.USER_STOP_SONG: {
        let r = e;
        this._container?.events?.dispatchEvent?.(new RoomWidgetPlayListEditorNowPlayingEvent(e.type, r.id, r.position, r.priority));
        break;
      }
    }
  }, "_rbe8ac36f521018");
}
