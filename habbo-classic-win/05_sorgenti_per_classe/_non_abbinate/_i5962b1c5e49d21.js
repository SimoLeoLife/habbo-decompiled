// Estratto da HabboAirLauncher.deobf.js, riga 45644.

class a {
  static {
    n(this, "_i5962b1c5e49d21");
  }
  static _re72e96941ad33b() {
    return {
      bold: null,
      italic: null,
      underline: null,
      color: null,
      href: null,
      cssClass: null,
      selectors: [],
    };
  }
  static _r5bb1bc535599ec(e) {
    let r = [],
      t = [],
      i = "",
      s = [],
      o = { ...a._re72e96941ad33b() },
      d = !1;
    for (let c of e.match(/<[^>]+>|[^<]+/g) ?? []) {
      if (c.startsWith("<")) {
        let b = /^<\s*(\/)?\s*([a-z0-9]+)([^>]*)>$/i.exec(c);
        if (b == null) continue;
        let _ = b[1] === "/",
          h = b[2].toLowerCase(),
          p = b[3] ?? "",
          m = /\bclass\s*=\s*['"]([^'"]+)['"]/i.exec(p),
          v = [h],
          w = m?.[1] ?? null;
        if ((w != null && (v.push(`.${w}`), v.push(`${h}.${w}`)), !_ && h === "br")) {
          d = !0;
          let I = i.length;
          ((i += `
`),
            s.push(a._rb56a56d0fe560f(o, I)));
          continue;
        }
        if (!_ && h === "p") {
          d = !0;
          let I = { ...o, cssClass: w ?? o.cssClass, selectors: v },
            C = i.length;
          ((i += `
`),
            s.push(a._rb56a56d0fe560f(I, C)),
            r.push({ tag: h, state: { ...o } }),
            (o = I));
          continue;
        }
        if (_) {
          for (let I = r.length - 1; I >= 0; I--)
            if (r[I].tag === h) {
              ((o = { ...r[I].state }), r.splice(I, 1));
              break;
            }
          continue;
        }
        switch (
          ((w != null || h === "span" || h === "h1" || h === "h2" || h === "h3") && (d = !0),
          r.push({ tag: h, state: { ...o } }),
          h)
        ) {
          case "b":
          case "strong":
            ((d = !0), (o.bold = !0));
            break;
          case "i":
          case "em":
            ((d = !0), (o.italic = !0));
            break;
          case "u":
            ((d = !0), (o.underline = !0));
            break;
          case "font": {
            let I = /\bcolor\s*=\s*['"]?([^'"\s>]+)['"]?/i.exec(p);
            I != null && ((d = !0), (o.color = a._r3cccf25f58f6b5(I[1])));
            break;
          }
          case "a": {
            let I = /\bhref\s*=\s*['"]([^'"]+)['"]/i.exec(p);
            ((d = !0), (o.href = I == null ? null : I[1].startsWith("event:") ? I[1].slice(6) : I[1]));
            break;
          }
        }
        (w != null && (o.cssClass = w), (o.selectors = v));
        continue;
      }
      let f = a._rcfc442965af878(c);
      if (f.length === 0) continue;
      let l = i.length;
      ((i += f),
        s.push({
          text: f,
          start: l,
          end: l + f.length,
          bold: o.bold,
          italic: o.italic,
          underline: o.underline,
          color: o.color,
          href: o.href,
          cssClass: o.cssClass,
          selectors: [...o.selectors],
        }),
        o.href != null && t.push({ start: l, end: l + f.length, href: o.href }));
    }
    return { text: i, _r4192ed2fd4b240: t, runs: s, _r62680cf370763a: d };
  }
  static _r8e8a370033abe0(e, r, t, i) {
    return e == null || e.length === 0
      ? [{ text: r, start: 0, end: r.length, style: t }]
      : e.map((s) => {
          let o = a._r042cab134ba8e7(s, "color", i),
            d = a._r042cab134ba8e7(s, "textDecoration", i),
            c = a._r042cab134ba8e7(s, "fontWeight", i),
            f = a._r042cab134ba8e7(s, "fontStyle", i),
            l = a._r042cab134ba8e7(s, "fontSize", i),
            b = a._r042cab134ba8e7(s, "fontFamily", i),
            _ = a._r042cab134ba8e7(s, "leading", i);
          return {
            text: s.text,
            start: s.start,
            end: s.end,
            style: {
              bold: s.bold ?? a._r2344f60e705d5e(c) ?? t.bold,
              italic: s.italic ?? a._r8003c548c0c1ae(f) ?? t.italic,
              underline: s.underline ?? (d === "underline" ? !0 : t.underline),
              color: s.color ?? (o != null ? (a._r3cccf25f58f6b5(o) ?? t.color) : t.color),
              href: s.href,
              cssClass: s.cssClass,
              fontFamily: a._r5a6ca8a25910ed(b) ?? t.fontFamily,
              fontSize: a._r226e00d7853a58(l) ?? t.fontSize,
              leading: a._r226e00d7853a58(_) ?? t.leading,
            },
          };
        });
  }
  static _rcfc442965af878(e) {
    return e
      .replace(/&nbsp;/gi, " ")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;|&apos;/gi, "'")
      .replace(/&amp;/gi, "&");
  }
  static _rb56a56d0fe560f(e, r) {
    return {
      text: `
`,
      start: r,
      end: r + 1,
      bold: e.bold,
      italic: e.italic,
      underline: e.underline,
      color: e.color,
      href: e.href,
      cssClass: e.cssClass,
      selectors: [...e.selectors],
    };
  }
  static _r042cab134ba8e7(e, r, t) {
    if (t == null) return null;
    let i = e.selectors.find((c) => !c.startsWith(".") && !c.includes(":") && !c.includes(".")) ?? null,
      s = e.cssClass == null ? null : `.${e.cssClass}`,
      o = i == null || e.cssClass == null ? null : `${i}.${e.cssClass}`,
      d = e.href == null ? null : i == null ? "a:link" : `${i}:link`;
    return (
      (o == null ? null : (t._r22c9347ecec607(o)?.[r] ?? null)) ??
      (s == null ? null : (t._r22c9347ecec607(s)?.[r] ?? null)) ??
      (d == null ? null : (t._r22c9347ecec607(d)?.[r] ?? null)) ??
      (e.href == null ? null : (t._r22c9347ecec607("a:link")?.[r] ?? null)) ??
      (i == null ? null : (t._r22c9347ecec607(i)?.[r] ?? null)) ??
      null
    );
  }
  static _r226e00d7853a58(e) {
    if (e == null) return null;
    let r = /^\s*(-?\d+(?:\.\d+)?)\s*(px)?\s*$/i.exec(e);
    if (r == null) return null;
    let t = Number(r[1]);
    return Number.isFinite(t) ? t : null;
  }
  static _r2344f60e705d5e(e) {
    if (e == null) return null;
    let r = e.trim().toLowerCase();
    if (r === "bold" || r === "bolder") return !0;
    if (r === "normal" || r === "lighter") return !1;
    let t = Number(r);
    return Number.isFinite(t) ? t >= 600 : null;
  }
  static _r8003c548c0c1ae(e) {
    if (e == null) return null;
    let r = e.trim().toLowerCase();
    return r === "italic" || r === "oblique" ? !0 : r === "normal" ? !1 : null;
  }
  static _r5a6ca8a25910ed(e) {
    if (e == null) return null;
    let r =
      e
        .split(",")[0]
        ?.trim()
        .replace(/^['"]|['"]$/g, "") ?? "";
    return r.length > 0 ? r : null;
  }
  static _r3cccf25f58f6b5(e) {
    let r = e.trim();
    return /^#?[0-9a-f]{6}$/i.test(r) ? Number.parseInt(r.replace(/^#/, ""), 16) : null;
  }
}
