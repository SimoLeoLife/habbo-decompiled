// Estratto da HabboAirLauncher.deobf.js, riga 21032.

class {
      static {
        n(this, "CanvasGraphicsAdaptor");
      }
      constructor() {
        this.shader = null;
      }
      contextChange(e) {}
      execute(e, r) {
        let t = e.renderer,
          i = t.canvasContext,
          s = i.activeContext,
          o = r.groupTransform,
          d = t.globalUniforms.globalUniformData?.worldColor ?? 4294967295,
          c = r.groupColorAlpha,
          f = ((d >>> 24) & 255) / 255,
          l = ((c >>> 24) & 255) / 255,
          b = t.filter?.alphaMultiplier ?? 1,
          _ = f * l * b;
        if (_ <= 0) return;
        let h = d & 16777215,
          p = c & 16777215,
          m = bgr2rgb(multiplyHexColors(p, h)),
          v = t._roundPixels | r._roundPixels;
        (s.save(), i.setContextTransform(o, v === 1), i.setBlendMode(r.groupBlendMode));
        let w = r.context.instructions;
        for (let I = 0; I < w.length; I++) {
          let C = w[I];
          if (C.action === "texture") {
            let Y = C.data,
              oe = Y.image,
              be = oe ? La.getCanvasSource(oe) : null;
            if (!be) continue;
            let ye = Y.alpha * _;
            if (ye <= 0) continue;
            let ir = multiplyHexColors(Y.style, m);
            s.globalAlpha = ye;
            let pe = be;
            ir !== 16777215 && (pe = La.getTintedCanvas({ texture: oe }, ir));
            let lr = oe.frame,
              wr = oe.source._resolution ?? oe.source.resolution ?? 1,
              q = lr.x * wr,
              de = lr.y * wr,
              Be = lr.width * wr,
              Ie = lr.height * wr;
            pe !== be && ((q = 0), (de = 0));
            let ge = Y.transform,
              rt = ge && !ge.isIdentity(),
              Kr = oe.rotate;
            (rt || Kr
              ? (Ste.copyFrom(o),
                rt && Ste.append(ge),
                Kr && Ua.matrixAppendRotationInv(Ste, Kr, Y.dx, Y.dy, Y.dw, Y.dh),
                i.setContextTransform(Ste, v === 1))
              : i.setContextTransform(o, v === 1),
              s.drawImage(
                pe,
                q,
                de,
                pe === be ? Be : pe.width,
                pe === be ? Ie : pe.height,
                Kr ? 0 : Y.dx,
                Kr ? 0 : Y.dy,
                Y.dw,
                Y.dh,
              ),
              (rt || Kr) && i.setContextTransform(o, v === 1));
            continue;
          }
          let W = C.data,
            R = W?.path?.shapePath;
          if (!R?.shapePrimitives?.length) continue;
          let T = W.style,
            S = multiplyHexColors(T.color, m),
            z = T.alpha * _;
          if (z <= 0) continue;
          let K = C.action === "stroke";
          if (((s.globalAlpha = z), K)) {
            let Y = T;
            ((s.lineWidth = Y.width),
              (s.lineCap = Y.cap),
              (s.lineJoin = Y.join),
              (s.miterLimit = Y.miterLimit));
          }
          let $ = R.shapePrimitives;
          if (!K && W.hole?.shapePath?.shapePrimitives?.length) {
            let Y = $[$.length - 1];
            Y.holes = W.hole.shapePath.shapePrimitives;
          }
          for (let Y = 0; Y < $.length; Y++) {
            let oe = $[Y];
            if (!oe?.shape) continue;
            let be = oe.transform,
              ye = be && !be.isIdentity(),
              ir = T.texture && T.texture !== Texture.WHITE,
              pe = T.textureSpace === "global" ? be : null,
              lr = ir ? generateTextureMatrix(Uor, T, oe.shape, pe) : null,
              wr = ye ? Gor.copyFrom(o).append(be) : o,
              q = getCanvasStyle(T, S, lr, wr);
            if ((ye && (s.save(), s.transform(be.a, be.b, be.c, be.d, be.tx, be.ty)), K)) {
              let de = T;
              if (de.alignment !== 0.5 && !de.pixelLine) {
                let Ie = [],
                  ge = [],
                  rt = [];
                if ($x[oe.shape.type]?.build(oe.shape, Ie)) {
                  let Ba = oe.shape.closePath ?? !0;
                  (buildLine(Ie, de, !1, Ba, ge, rt), (s.fillStyle = q), fillTriangles(s, ge, rt));
                } else ((s.strokeStyle = q), s.beginPath(), buildShapePath(s, oe.shape), s.stroke());
              } else ((s.strokeStyle = q), s.beginPath(), buildShapePath(s, oe.shape), s.stroke());
            } else
              ((s.fillStyle = q),
                s.beginPath(),
                buildShapePath(s, oe.shape),
                addHolePaths(s, oe.holes) ? s.fill("evenodd") : s.fill());
            ye && s.restore();
          }
        }
        s.restore();
      }
      destroy() {
        this.shader = null;
      }
    }
