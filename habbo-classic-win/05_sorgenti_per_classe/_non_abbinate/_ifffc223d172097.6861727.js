// Estratto da HabboAirLauncher.deobf.js, riga 219794.

class {
    static {
      n(this, "_ifffc223d172097");
    }
    constructor(e) {
      this.var_22 = e;
      let r = this.var_22?.communication ?? null;
      (r?._r2e106e2349a0b6(new class_3574(this._rc74a32de8699c9)),
        r?._r2e106e2349a0b6(new class_2117(this.onRoomEnter)),
        r?._r2e106e2349a0b6(new Game2GameDirectoryStatusMessageEvent(this._r76efa2b307ded5)),
        r?._r2e106e2349a0b6(new _i2169e5513150a7(this._r34e0f0aa9ab1b7)),
        r?._r2e106e2349a0b6(new _i12fa1ee961f95a(this._r70d861f23938f3)),
        r?._r2e106e2349a0b6(new _ia7fb74965a267d(this._r354c660567a207)),
        r?._r2e106e2349a0b6(new _if9ccc82a9f2520(this._r3eddffb3d7f9d3)),
        r?._r2e106e2349a0b6(new _id2c042a647e995(this._r145ff6c08b633f)),
        r?._r2e106e2349a0b6(new _ic8b8a2e1aadb4d(this._rc4c20fa4943a77)),
        r?._r2e106e2349a0b6(new _i8df262159e97f4(this._r2ffc8630a53103)),
        r?._r2e106e2349a0b6(new _ifd7c367f3271fd(this._r03ab65e4a36447)),
        r?._r2e106e2349a0b6(new _i2ca0a0d4fe29c0(this._rd62d1a5c39b39b)),
        r?._r2e106e2349a0b6(new Game2AccountGameStatusMessageEvent(this._r8bcdd80cb0d64f)),
        r?._r2e106e2349a0b6(new Game2JoiningGameFailedMessageEvent(this._r9400ef03656b43)),
        r?._r2e106e2349a0b6(new Game2StartingGameFailedMessageEvent(this._r0356245fc25966)),
        r?._r2e106e2349a0b6(new _ib1141ecc6df028(this._r2c8152868b0d76)),
        r?._r2e106e2349a0b6(new class_2988(this._r26932665e8615b)),
        r?._r2e106e2349a0b6(new _i10ac993234f5bf(this._r39a4a045380d13)),
        r?._r2e106e2349a0b6(new class_2427(this._ra963243e42a9dc)),
        r?._r2e106e2349a0b6(new _i06c02bfc96c8fe(this._rdca1c1e4a6c090)),
        r?._r2e106e2349a0b6(new class_2220(this._r3b99ab6f3889ec)),
        r?._r2e106e2349a0b6(new _i60fd177d8ab95b(this._rb52fc3544f187e)),
        r?._r2e106e2349a0b6(new class_3424(this._ra939653af03e6e)),
        r?._r2e106e2349a0b6(new class_2717(this._r3d00f06f9af62e)),
        r?._r2e106e2349a0b6(new _i1ae15ab7df0120(this._rcf7394d9df7382)),
        r?._r2e106e2349a0b6(new _i85dfddeef9dd8d(this._r94d34911f79b27)),
        r?._r2e106e2349a0b6(new _id63a1a466ddf5e(this._rabe40bef78859b)),
        r?._r2e106e2349a0b6(new class_2906(this._r95259baaf51434)),
        r?._r2e106e2349a0b6(new class_2945(this._ra590aca326ca13)),
        r?._r2e106e2349a0b6(new _ifab2576440fce2(this._ra9f7eed0085165)),
        r?._r2e106e2349a0b6(new _i0fd38c6577b72b(this._rf19a09155837ec)),
        r?._r2e106e2349a0b6(new _iaf19f39f1dd36a(this._r51392f7ec3faa4)),
        r?._r2e106e2349a0b6(new Game2TotalGroupLeaderboardEvent(this._r9bd8b48b88d3f1)),
        r?._r2e106e2349a0b6(new _ia7fb80597504f6(this._rf2c426e85af42f)),
        r?._r2e106e2349a0b6(new _iff0f7fa469c474(this._r75bfeb5b762e6d)),
        r?._r2e106e2349a0b6(new Game2WeeklyGroupLeaderboardEvent(this._r4f8451e375dc59)),
        r?._r2e106e2349a0b6(new _i5a6a2d6313d369(this._r4532c291af65b6)));
    }
    static {
      ci(this, "_ifffc223d172097");
    }
    var_1271 = !1;
    dispose() {
      ((this.var_22 = null), (this.var_1271 = !0));
    }
    get disposed() {
      return this.var_1271;
    }
    _r26932665e8615b = ci((e) => {
      let r = e.getParser(),
        t = this.var_22;
      if (t == null) return;
      t._r7cfbe41b0ceb68(r.gameType, r.fieldType, r.levelName, r.players);
      let i = t._r0c148637e03364,
        s = i?._re20c98e536caa8();
      (s != null && r._r151537c48555ea != null && s.initialize(i, r._r151537c48555ea),
        t.mainView?.close(!1));
    }, "_r26932665e8615b");
    _ra590aca326ca13 = ci((e) => {
      let r = ClassUtils.getParser(e, class_4080);
      if (r == null) return;
      let t = "snowwar.error.generic";
      (r.reason === class_4080.const_1263 && (t = "snowwar.error.game_already_started"),
        this.var_22?.alert(`\${${t}}`));
    }, "_ra590aca326ca13");
    _r39a4a045380d13 = ci((e) => {}, "_r39a4a045380d13");
    _ra963243e42a9dc = ci((e) => {
      this.var_22?.initView();
    }, "_ra963243e42a9dc");
    _rdca1c1e4a6c090 = ci((e) => {
      let r = e.getParser();
      this.var_22?._r8b5341ded73b30(r.percentage, r._rb5f4cc78c550dd);
    }, "_rdca1c1e4a6c090");
    _r3b99ab6f3889ec = ci((e) => {
      let r = e.getParser();
      (this._r5e5fc59856eb7d(r.gameObjects),
        this.var_22?._r788d6c89a67c7f(r._rb18ff8fe8e394b));
    }, "_r3b99ab6f3889ec");
    _rb52fc3544f187e = ci((e) => {
      this.var_22?._r20df0136c4be07(e.getParser()._r94c19cee1f4a6d);
    }, "_rb52fc3544f187e");
    _ra939653af03e6e = ci((e) => {
      e.getParser().timeToNextState === 0 && this.var_22?._rd75f76fa5c0d05();
    }, "_ra939653af03e6e");
    _r3d00f06f9af62e = ci((e) => {
      let r = e.getParser();
      r._ra2334e6f766c56 != null &&
        r._r0b680584a2478b != null &&
        this.var_22?._r116d1b57fed766(
          r.timeToNextState,
          r._r8f616ae1b3bde2,
          r._ra2334e6f766c56,
          r._r0b680584a2478b,
        );
    }, "_r3d00f06f9af62e");
    _rcf7394d9df7382 = ci((e) => {}, "_rcf7394d9df7382");
    _r94d34911f79b27 = ci((e) => {
      this.var_22?._rf5fcb7e067b08c(e.getParser()._r2773a0a439d827);
    }, "_r94d34911f79b27");
    _rabe40bef78859b = ci((e) => {
      this.var_22?.playerRematches(e.getParser().userId);
    }, "_rabe40bef78859b");
    _r76efa2b307ded5 = ci((e) => {
      let r = e.getParser(),
        t = this.var_22;
      if (t != null) {
        if (r.status === Game2GameDirectoryStatusMessageParser.const_1259) {
          (t.mainView?._raf29e04469c30d(r._rf6b4aaae714322),
            (t._r8676c9bc2bbd5b = r._r8676c9bc2bbd5b),
            t._ra85d55742451f2(!0),
            t._r0cacbcc797d106(class_3666.SNOWWAR, r._r3da1b12a009155 === -1, r._r3da1b12a009155));
          return;
        }
        t._ra85d55742451f2(!1);
      }
    }, "_r76efa2b307ded5");
    _r8bcdd80cb0d64f = ci((e) => {
      let r = e.getParser();
      this.var_22?._r0cacbcc797d106(r._rf036dafd6acd66, r._rd31af608f83beb, r._r3da1b12a009155);
    }, "_r8bcdd80cb0d64f");
    _r34e0f0aa9ab1b7 = ci((e) => {
      let r = e.getParser()._rd4f20a47f71c93;
      r != null && this.var_22?._rdafd7bed9d5e14(r);
    }, "_r34e0f0aa9ab1b7");
    _r70d861f23938f3 = ci((e) => {
      let r = e.getParser()._rea76759b4434cc;
      r != null && this.var_22?._r946ab8c42c61a0(r);
    }, "_r70d861f23938f3");
    _r2ffc8630a53103 = ci((e) => {
      this.var_22?._r48b05233cfc8a8(e.getParser()._r4d6b3b61063524);
    }, "_r2ffc8630a53103");
    _r03ab65e4a36447 = ci((e) => {
      this.var_22?._rd6025312513aa1();
    }, "_r03ab65e4a36447");
    _r354c660567a207 = ci((e) => {
      this.var_22?._r79edc3fe766723(!1);
    }, "_r354c660567a207");
    _r3eddffb3d7f9d3 = ci((e) => {
      let r = this.var_22?._r44d07b4d5d75a3;
      r != null && (r._rc1ed5e57fab4b5 = e.getParser().position);
    }, "_r3eddffb3d7f9d3");
    _r145ff6c08b633f = ci((e) => {
      let r = e.getParser().user;
      r != null && this.var_22?._r8e184fb1cb7db8(r);
    }, "_r145ff6c08b633f");
    _rc4c20fa4943a77 = ci((e) => {
      this.var_22?._reb425c7ba00239(e.getParser().userId);
    }, "_rc4c20fa4943a77");
    _rd62d1a5c39b39b = ci((e) => {
      let r = e.getParser()._rd4f20a47f71c93;
      r != null && this.var_22?._rdafd7bed9d5e14(r);
    }, "_rd62d1a5c39b39b");
    _r9400ef03656b43 = ci((e) => {
      let r = ClassUtils.getParser(e, Game2JoiningGameFailedMessageParser);
      if (r == null) return;
      let t = "snowwar.error.generic";
      switch (r.reason) {
        case Game2JoiningGameFailedMessageParser.const_1395:
        case Game2JoiningGameFailedMessageParser.const_581:
          t = "snowwar.error.has_active_instance";
          break;
        case Game2JoiningGameFailedMessageParser.const_645:
          t = "snowwar.error.no_free_games_left";
          break;
        case Game2JoiningGameFailedMessageParser.const_895:
          t = "snowwar.error.duplicate_machineid";
          break;
      }
      this.var_22?.alert(`\${${t}}`);
    }, "_r9400ef03656b43");
    _r0356245fc25966 = ci((e) => {
      this.var_22?.alert("${snowwar.error.generic}");
    }, "_r0356245fc25966");
    _r2c8152868b0d76 = ci((e) => {
      this.var_22?.mainView?._raf29e04469c30d(e.getParser()._raf6bf81e4d8adf);
    }, "_r2c8152868b0d76");
    _ra9f7eed0085165 = ci((e) => {
      let r = this.var_22?._r0c148637e03364,
        t = e.getParser()._ra8ea0cef897bee;
      r == null ||
        t == null ||
        (r._re20c98e536caa8().resetTiles(),
        this._r5e5fc59856eb7d(t.gameObjects),
        this.handleGameStatus(t._rd9397344c8f6b1, !0));
    }, "_ra9f7eed0085165");
    _rf19a09155837ec = ci((e) => {
      this.handleGameStatus(e.getParser().status);
    }, "_rf19a09155837ec");
    _r5e5fc59856eb7d(e) {
      let r = this.var_22?._r0c148637e03364;
      if (r == null || e == null) return;
      let t = r._re20c98e536caa8();
      t._r127e2b5dd7c348();
      for (let i of e.gameObjects)
        switch (i.type) {
          case Xa._rd5551a032e5fdf: {
            let s = i,
              o = s.name === this.var_22?.sessionDataManager?.userName;
            o && (this.var_22.ownId = s.id);
            let d = new _l(t, s, !1, this.var_22);
            if (
              (t._r29463a5878c079(d._r8f79a04a0ab07b, d),
              (d.visualizationMode = ViewMode.DEFAULT),
              o &&
                this.var_22?._rc4cd77a3a014cd &&
                ((d.visualizationMode = this.var_22._re2e489d0d02499
                  ? ViewMode.GHOST
                  : ViewMode.INVISIBLE),
                this.var_22._r0c148637e03364
                  ?._re20c98e536caa8()
                  ._rec3357f35c151d(d._r206e239acb0d5c) == null))
            ) {
              let c = new _l(t, s, !0, this.var_22);
              ((c._r8f79a04a0ab07b = d._r206e239acb0d5c), t._r29463a5878c079(c._r8f79a04a0ab07b, c));
            }
            break;
          }
          case Xa._r8c8ac0804fdcce: {
            let s = i,
              o = new wf(s.id),
              d = t._rec3357f35c151d(s._r2b90cc10c41442);
            (o._r0304025195c332(s, d), t._r29463a5878c079(o._r8f79a04a0ab07b, o));
            break;
          }
          case Xa._rab39575fec3191: {
            let s = i,
              o = new Kz(s, t);
            t._r29463a5878c079(s.id, o);
            break;
          }
          case Xa._r192fa0a9c3bebe: {
            let s = i,
              o = new $z(s, t);
            t._r29463a5878c079(s.id, o);
            break;
          }
          case Xa._rda17b815462e6f: {
            let s = i,
              o = new Zz(s, t);
            t._r29463a5878c079(o._r8f79a04a0ab07b, o);
            break;
          }
        }
    }
    handleGameStatus(e, r = !1) {
      let t = this.var_22?._r0c148637e03364;
      if (t == null || e == null) return;
      let i = e.turn;
      for (let s of e.events.getKeys()) {
        let o = e.events.getValue(s) ?? [];
        for (let d of o) {
          let c = null,
            f = null;
          switch (d.id) {
            case Ma._rddd716383b144a:
              c = this._r245cbc2d85ab6c(d);
              break;
            case Ma._r7778fd31349205:
              c = this._rd26211d6cf4d32(d);
              break;
            case Ma._r5c369bfe66aaaf:
              ((c = this._rab44e95b92c32a(d)), (f = this._rf0bd75df2e8e5d(d)));
              break;
            case Ma._rc4bc4287b0621d:
              c = this._rd4cde67163cc2c(d);
              break;
            case Ma._r702889510560a3:
              c = this._r8d4a16def859fc(d);
              break;
            case Ma._rb4303d911e8e82:
              ((c = this._rdd0d8400d22cf4(d)), (f = this._r5da4c2658361ff(d)));
              break;
            case Ma._r643e8d9619d067:
              ((c = this._r373589147105c4(d)), (f = this._r95ddd35c86e213(d)));
              break;
            case Ma._rc5ded5a1a4d824:
              c = this._rd572103bb6a982(d);
              break;
          }
          (c != null && t.addGameEvent(i + 1, s, c), f != null && t.addGameEvent(i + 1, s, f));
        }
      }
      this.var_22?._r2a2909c25bbb2d(i, e.checksum, r);
    }
    _rd26211d6cf4d32(e) {
      let r = this.var_22?._r0c148637e03364?._re20c98e536caa8(),
        t = r?._rec3357f35c151d(e.humanGameObjectId),
        i = r?._rec3357f35c151d(e.snowBallMachineReference);
      return new _i2a10f01de2414e(t, i);
    }
    _rd4cde67163cc2c(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.snowBallMachineReference);
      return new _i55d1e66c8bd5e5(t);
    }
    _r373589147105c4(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.humanGameObjectId);
      return new _i1251b5128da168(t, e.targetX, e.targetY, e.trajectory);
    }
    _rdd0d8400d22cf4(e) {
      let r = this.var_22?._r0c148637e03364?._re20c98e536caa8(),
        t = r?._rec3357f35c151d(e.humanGameObjectId),
        i = r?._rec3357f35c151d(e._r30f54998be2fcb);
      return new _i4db150f736eaf5(t, i, e.trajectory);
    }
    _rab44e95b92c32a(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.humanGameObjectId);
      return new _ieb13346c2d4bc2(t);
    }
    _r245cbc2d85ab6c(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.humanGameObjectId);
      return new _if3fef88ffea2e2(e._r6ee92682068856, t, e.targetX, e.targetY, e.trajectory);
    }
    _r8d4a16def859fc(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.humanGameObjectId);
      return new _i1fdc4e34ee6db8(t, e.x, e.y);
    }
    _rd572103bb6a982(e) {
      let t = this.var_22?._r0c148637e03364
        ?._re20c98e536caa8()
        ?._rec3357f35c151d(e.humanGameObjectId);
      return new _i0021ecd8f808c7(t);
    }
    _r95ddd35c86e213(e) {
      return this.var_22?._rc4cd77a3a014cd === !0 &&
        e.humanGameObjectId === this.var_22.ownId
        ? new _i1251b5128da168(this.var_22._r2765c9b59a37df(), e.targetX, e.targetY, e.trajectory)
        : null;
    }
    _r5da4c2658361ff(e) {
      if (
        this.var_22?._rc4cd77a3a014cd === !0 &&
        e.humanGameObjectId === this.var_22.ownId
      ) {
        let r = this.var_22._r0c148637e03364
          ?._re20c98e536caa8()
          ._rec3357f35c151d(e._r30f54998be2fcb);
        return new _i4db150f736eaf5(this.var_22._r2765c9b59a37df(), r, e.trajectory);
      }
      return null;
    }
    _rf0bd75df2e8e5d(e) {
      return this.var_22?._rc4cd77a3a014cd === !0 &&
        e.humanGameObjectId === this.var_22.ownId
        ? new _ieb13346c2d4bc2(this.var_22._r2765c9b59a37df())
        : null;
    }
    _r95259baaf51434 = ci((e) => {
      let r = e.getParser();
      this.var_22?._rbda5cb55b7cbf2(r.userId, r.chatMessage);
    }, "_r95259baaf51434");
    _rc74a32de8699c9 = ci((e) => {
      let r = this.var_22;
      r != null &&
        (r.send(new _i5dd11c8c1c20f0(class_3666.SNOWWAR)),
        !r.mainView?._rd790a63081bcf0 &&
          (r._r00d4928d04a061 || r.mainView?._r9ac1f240d58a14(!1)));
    }, "_rc74a32de8699c9");
    onRoomEnter = ci((e) => {
      this.var_22?.promoteGame();
    }, "onRoomEnter");
    _rf2c426e85af42f = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?._r1daf0057d2e8d5(r.leaderboard, r._r27f871b645f5bf);
    }, "_rf2c426e85af42f");
    _r51392f7ec3faa4 = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?._r3c237aef72a35f(r.leaderboard, r._r27f871b645f5bf);
    }, "_r51392f7ec3faa4");
    _r9bd8b48b88d3f1 = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?._r8f66e928a4454d(
          r.leaderboard,
          r._r27f871b645f5bf,
          r.favouriteGroupId,
        );
    }, "_r9bd8b48b88d3f1");
    _r4f8451e375dc59 = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?.addWeeklyGroupData(
          r.year,
          r.week,
          r.leaderboard,
          r._r27f871b645f5bf,
          r.maxOffset,
          r._r722f12af9003b8,
          r.favouriteGroupId,
        );
    }, "_r4f8451e375dc59");
    _r75bfeb5b762e6d = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?._ra2ef81407e9189(
          r.year,
          r.week,
          r.leaderboard,
          r._r27f871b645f5bf,
          r.maxOffset,
          r._r722f12af9003b8,
        );
    }, "_r75bfeb5b762e6d");
    _r4532c291af65b6 = ci((e) => {
      let r = e.getParser();
      r.leaderboard != null &&
        this.var_22?.leaderboard?._r63a2b2889ef706(
          r.year,
          r.week,
          r.leaderboard,
          r._r27f871b645f5bf,
          r.maxOffset,
          r._r722f12af9003b8,
        );
    }, "_r4532c291af65b6");
  }
