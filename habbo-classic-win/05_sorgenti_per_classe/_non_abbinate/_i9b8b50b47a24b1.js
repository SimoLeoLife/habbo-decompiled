// Estratto da HabboAirLauncher.deobf.js, riga 122824.

class {
    static {
      n(this, "_i9b8b50b47a24b1");
    }
    static {
      ept(this, "_i9b8b50b47a24b1");
    }
    _array = [];
    constructor(e) {
      if (
        (this._array.push(e.roomId),
        this._array.push(e.name),
        this._array.push(e.description),
        this._array.push(e._rf742cf771d167a),
        this._array.push(e.password !== null ? e.password : ""),
        this._array.push(e.maximumVisitors),
        this._array.push(e.categoryId),
        e.tags)
      ) {
        let r = e.tags.filter((t) => !!t && t !== "");
        this._array.push(r.length);
        for (let t of r) this._array.push(t);
      } else this._array.push(0);
      (this._array.push(e.tradeMode),
        this._array.push(e._rf5545c5fca5ee0),
        this._array.push(e._allowFoodConsumeCheckBox),
        this._array.push(e._allowWalkThroughCheckBox),
        this._array.push(e._hideWallsCheckBox),
        this._array.push(e._rdbce713bddeb2b),
        this._array.push(e._r2cacaaa4b8c0dc),
        this._array.push(e._rcf6814a48ba121),
        this._array.push(e._ra46bd2f1badd5f),
        this._array.push(e._rce5b4a16158543),
        this._array.push(e._r13279fe91a886d),
        this._array.push(e._re4bafec6ef50f1),
        this._array.push(e._r02180e03cb59e4),
        this._array.push(e.idleSleepTimeoutSeconds),
        this._array.push(e._r1058fab0daff8c),
        this._array.push(e.idleAutokickTimeoutSeconds),
        this._array.push(e._muteAllPetsCheckBox));
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }
