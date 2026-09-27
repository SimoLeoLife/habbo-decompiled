// Extracted from HabboAirLauncher.deobf.js, line 155949.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie7005e12dcc716

class a extends ue {
  static {
    n(this, "UnkClass_e7005e");
  }
  static {
    Fp(this, "UnkClass_e7005e");
  }
  static [Oa(274)] = 2;
  constructor(e, r = 0, t = null) {
    let i = _0x17c5;
    (super(e, r, t),
      (this[i(203)] ??= null),
      (this[i(207)] ??= new UnkClass_664930()),
      (this[i(127)] ??= ""),
      (this[i(199)] ??= []),
      (this[i(180)] ??= !0),
      (this[i(150)] ??= -1),
      (this[i(249)] ??= new UnkEventDispatcherWrapperSubclass_05394e(100, 1)),
      (this[i(198)] ??= 1),
      (this[i(235)] ??= ""),
      (this[i(170)] ??= !1),
      (this[i(140)] ??= !1),
      (this[i(148)] ??= [65191, 65178, 65178, 65177, 65185]),
      (this[i(137)] ??= []),
      (this[i(165)] ??= null),
      (this[i(211)] ??= null),
      (this[i(232)] ??= HabboConnectionType[i(195)]),
      (this[i(160)] ??= !0),
      (this[i(132)] ??= null),
      e[i(223)]?.[i(161)]?.(i(254), this[i(273)]),
      this[i(249)][i(161)](DeBouncer[i(171)], this[i(272)]));
  }
  get [Oa(224)]() {
    let e = _0x17c5;
    return super[e(224)][e(191)]([
      new ComponentDependency(new UnkInterface_7803ce(), (r) => {
        let t = _0x17c5;
        this[t(203)] = r;
      }),
      new ComponentDependency(
        new IIDHabboConfigurationManager(),
        (r) => {
          let t = _0x17c5;
          this[t(132)] = r;
        },
        !1,
        [{ type: M[e(139)], callback: Fp((r) => this[e(283)](r), "callback") }],
      ),
    ]);
  }
  get [Oa(152)]() {
    return this[_0x17c5(211)];
  }
  get [Oa(260)]() {
    return 0;
  }
  set [Oa(260)](e) {
    let r = _0x17c5;
    this[r(232)] = e;
  }
  get [Oa(135)]() {
    let e = _0x17c5;
    return this[e(199)][e(220)] === 0 || this[e(150)] < 0 || this[e(150)] >= this[e(199)][e(220)]
      ? 0
      : this[e(199)][this[e(150)]];
  }
  get [Oa(259)]() {
    return this[_0x17c5(137)];
  }
  set [Oa(259)](e) {
    let r = _0x17c5;
    this[r(137)] = e;
  }
  set [Oa(230)](e) {
    let r = _0x17c5;
    this[r(180)] = e;
  }
  [Oa(130)]() {
    let e = _0x17c5,
      r = {
        Ycdja: n(function (t, i) {
          return t != i;
        }, "Ycdja"),
      };
    (this[e(208)](),
      (this[e(244)] ??= (t) => this[e(173)](t)),
      this[e(149)][e(223)]?.[e(161)]?.(HabboCommunicationEvent[e(144)], this[e(244)]),
      (this[e(211)] = this[e(203)]?.[e(184)](this) ?? null),
      this[e(211)]?.[e(131)](this[e(207)]),
      this[e(211)]?.[e(231)](UnkErrorEventSubclass_207e02[e(247)], (t) => this[e(221)](t)),
      this[e(211)]?.[e(231)](UnkErrorEventSubclass_30cc54[e(151)], (t) => this[e(239)](t)),
      this[e(211)]?.[e(231)](M[e(206)], (t) => this[e(265)](t)),
      this[e(246)](),
      r[e(280)](this[e(132)], null) && !this[e(132)][e(275)] && this[e(211)]?.[e(142)]?.(),
      this[e(140)] && this[e(257)]());
  }
  [Oa(233)]() {
    let e = _0x17c5,
      r = e(187)[e(225)]("|"),
      t = 0;
    for (;;) {
      switch (r[t++]) {
        case "0":
          this[e(165)]?.[e(233)]();
          continue;
        case "1":
          if (this[e(133)]) return;
          continue;
        case "2":
          this[e(211)]?.[e(233)]?.();
          continue;
        case "3":
          this[e(249)][e(194)]();
          continue;
        case "4":
          this[e(165)] = null;
          continue;
        case "5":
          this[e(249)][e(156)](DeBouncer[e(171)], this[e(272)]);
          continue;
        case "6":
          this[e(211)] = null;
          continue;
        case "7":
          super[e(233)]();
          continue;
        case "8":
          this[e(149)][e(223)]?.[e(156)]?.(e(254), this[e(273)]);
          continue;
        case "9":
          this[e(149)][e(223)]?.[e(156)]?.(HabboCommunicationEvent[e(144)], this[e(244)]);
          continue;
      }
      break;
    }
  }
  [Oa(277)]() {
    let e = _0x17c5;
    this[e(211)]?.[e(241)]();
  }
  [Oa(246)]() {
    let e = _0x17c5,
      r = {
        WjtDw: e(217),
        XdUAn: e(153),
        AqRZw: n(function (f, l) {
          return f < l;
        }, "AqRZw"),
        VjHzk: n(function (f, l) {
          return f - l;
        }, "VjHzk"),
      };
    this[e(208)]();
    let t = [65162, 65162, 65158, 65155],
      i = [65234, 65174, 65168, 65175, 65165, 65229],
      s = [65170, 65162, 65157, 65155],
      o = [65186, 65168, 65178, 65171, 65171],
      d = "",
      c = this[e(210)](a[e(183)]([this[e(148)], o, i, s], 0), null);
    if (c == null) {
      class_14[e(270)](a[e(183)]([this[e(148)], o, i, s], 0), class_14[e(146)]);
      return;
    }
    if (c[e(268)](r[e(145)]) || c[e(268)](e(185)))
      (ErrorReportStorage[e(200)](r[e(169)], e(212)),
        ErrorReportStorage[e(200)](e(153), e(126)),
        (d = this[e(210)](a[e(183)]([this[e(148)], o, i, t], 0), null)));
    else {
      let f = [];
      for (let l = 1; r[e(188)](l, 5); l++)
        switch (((c = c[e(179)](0, r[e(197)](c[e(220)], l))), l)) {
          case 3:
            f[e(250)](i);
            break;
          case 2:
            f[e(250)](o);
            break;
          case 4:
            f[e(250)](t);
            break;
          case 1:
            f[e(250)](this[e(148)]);
            break;
        }
      d = this[e(210)](a[e(183)](f, 0), null);
    }
    if (d == null) {
      class_14[e(270)](a[e(183)]([this[e(148)], o, i, t], 0), class_14[e(146)]);
      return;
    }
    this[e(199)] = [];
    for (let f of d[e(225)](",")) this[e(199)][e(250)](Number[e(228)](f[e(186)](" ", ""), 10));
    this[e(127)] = c;
  }
  [Oa(222)]() {
    let e = _0x17c5;
    ((this[e(198)] = 1), (this[e(160)] = !0), this[e(211)]?.[e(181)]?.());
  }
  [Oa(242)](e) {
    let r = _0x17c5;
    switch (e) {
      case HabboConnectionType[r(236)]:
        if (this[r(211)] == null) {
          class_14[r(270)](r(201), class_14[r(146)]);
          return;
        }
        ((this[r(140)] = !0), this[r(162)] && this[r(257)]());
        break;
      default:
        break;
    }
  }
  [Oa(177)](e) {
    let r = _0x17c5;
    return (this[r(211)]?.[r(190)](e), e);
  }
  [Oa(174)](e) {
    let r = _0x17c5;
    this[r(211)]?.[r(136)](e);
  }
  [Oa(128)](e, r) {
    let t = _0x17c5;
    (ErrorReportStorage[t(147)](HabboErrorVariableEnum[t(141)], e), ErrorReportStorage[t(147)](HabboErrorVariableEnum[t(255)], String(r)));
  }
  [Oa(271)](e) {
    let r = _0x17c5;
    (ErrorReportStorage[r(147)](HabboErrorVariableEnum[r(263)], String(Date[r(157)]())), this[r(205)]("R:" + e));
  }
  [Oa(166)](e) {
    let r = _0x17c5;
    (ErrorReportStorage[r(147)](HabboErrorVariableEnum[r(189)], String(Date[r(157)]())), this[r(205)]("S:" + e));
  }
  [Oa(243)](e) {
    let r = _0x17c5;
    (ErrorReportStorage[r(147)](HabboErrorVariableEnum[r(227)], String(e)), ErrorReportStorage[r(200)](r(129), this[r(235)]));
  }
  [Oa(168)]() {
    let e = _0x17c5;
    ErrorReportStorage[e(200)](e(129), this[e(235)]);
  }
  [Oa(240)]() {
    return new ArcFour();
  }
  [Oa(266)](e, r) {
    return new Z3e(e, r);
  }
  [Oa(143)](e, r) {
    let t = _0x17c5;
    this[t(134)]();
    let i = new UnkClass_3b3366(r);
    return (i[t(231)](e), (this[t(165)] = i), this[t(223)][t(234)]?.(new M(HabboCommunicationEvent[t(204)])), i);
  }
  [Oa(261)]() {
    return this[_0x17c5(165)];
  }
  [Oa(134)]() {
    let e = _0x17c5;
    (this[e(165)]?.[e(233)](), (this[e(165)] = null));
  }
  [Oa(205)](e) {
    let r = _0x17c5,
      t = {
        cBNrF: n(function (i, s) {
          return i > s;
        }, "cBNrF"),
        bAoyt: n(function (i, s) {
          return i - s;
        }, "bAoyt"),
      };
    ((this[r(235)] = this[r(235)][r(220)] > 0 ? this[r(235)] + "," + e : e),
      t[r(164)](this[r(235)][r(220)], 150) &&
        (this[r(235)] = this[r(235)][r(179)](t[r(219)](this[r(235)][r(220)], 150))));
  }
  [Oa(208)]() {
    let e = _0x17c5;
    ((this[e(207)] ??= new UnkClass_664930()),
      (this[e(199)] ??= []),
      (this[e(148)] ??= [65191, 65178, 65178, 65177, 65185]),
      (this[e(137)] ??= []));
  }
  [Oa(257)]() {
    let e = _0x17c5,
      r = { WVDsE: e(185) };
    if (this[e(211)] != null && !this[e(211)][e(196)]) {
      if (((this[e(150)] += 1), this[e(150)] >= this[e(199)][e(220)])) {
        (ErrorReportStorage[e(200)](e(159), e(252) + this[e(198)]), (this[e(198)] += 1));
        let t = a[e(274)];
        if ((this[e(199)][e(220)] === 1 && (t += 1), this[e(198)] <= t)) this[e(150)] = 0;
        else {
          if (this[e(170)]) return;
          ((this[e(170)] = !0), class_14[e(167)](e(138), !0, class_14[e(146)]));
          return;
        }
      }
      ((this[e(211)][e(237)] = this[e(198)] * 1e4),
        this[e(127)][e(268)](e(217)) || this[e(127)][e(268)](r[e(155)])
          ? this[e(211)][e(281)](this[e(127)], this[e(199)][this[e(150)]], this[e(180)])
          : this[e(211)][e(281)](
              "" +
                this[e(127)] +
                a[e(183)](
                  [
                    [65244, 65185, 65191, 65189, 65188],
                    [65174, 65238, 65184],
                    [65171, 65172],
                  ],
                  0,
                ),
              this[e(199)][this[e(150)]],
              this[e(180)],
            ),
        this[e(160)] && ((this[e(150)] -= 1), (this[e(160)] = !1)));
    }
  }
  [Oa(269)]() {
    let e = _0x17c5;
    this[e(249)][e(262)]();
  }
  [Oa(273)] = Fp((e) => {
    let r = _0x17c5;
    this[r(211)]?.[r(213)](new UnkMessageComposer_0args_32db5b());
  }, "_r572eaaaef3837a");
  [Oa(221)] = Fp((e) => {
    let r = _0x17c5;
    (ErrorReportStorage[r(200)](r(226), r(158) + e[r(229)] + r(279) + e[r(154)] + r(163) + this[r(199)][this[r(150)]]),
      this[r(269)]());
  }, "_rc31b29a85d4ce8");
  [Oa(265)] = Fp((e) => {
    let r = _0x17c5,
      t = { ZCJgd: r(253) };
    ErrorReportStorage[r(200)](t[r(178)], r(248) + this[r(198)] + r(202));
  }, "_r2b4cb5586dc485");
  [Oa(272)] = Fp((e) => {
    this[_0x17c5(257)]();
  }, "_rb973f6e66b130a");
  [Oa(239)] = Fp((e) => {
    let r = _0x17c5;
    (ErrorReportStorage[r(200)](r(264), r(276) + e[r(154)] + r(163) + this[r(199)][this[r(150)]]), this[r(269)]());
  }, "_rf687aa43fea090");
  [Oa(173)](e) {
    let r = _0x17c5;
    this[r(211)]?.[r(218)]?.();
  }
  [Oa(282)] = Fp((e) => {
    let r = _0x17c5,
      t = { MHkKP: r(278) },
      i = e[r(176)]()[r(216)];
    ErrorReportStorage[r(200)](t[r(172)], String(i));
  }, "_rbb86f7f11dd765");
  [Oa(283)](e) {
    let r = _0x17c5;
    this[r(211)]?.[r(142)]?.();
  }
  static [Oa(183)](e, r) {
    let t = _0x17c5,
      i = {
        FLijT: n(function (d, c) {
          return d + c;
        }, "FLijT"),
      },
      s = "",
      o = r;
    for (let d of e) for (let c of d) ((s += String[t(256)](i[t(251)](65290 - c, o))), (o -= 1));
    return s;
  }
}
