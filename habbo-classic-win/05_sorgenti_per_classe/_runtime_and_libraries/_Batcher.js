// Extracted from HabboAirLauncher.deobf.js, line 12165.

class dje {
        static {
          n(this, "_Batcher");
        }
        constructor(e) {
          ((this.uid = uid_("batcher")),
            (this.dirty = !0),
            (this.batchIndex = 0),
            (this.batches = []),
            (this._elements = []),
            (e = { ...dje.defaultOptions, ...e }),
            e.maxTextures ||
              (Zr(
                "v8.8.0",
                "maxTextures is a required option for Batcher now, please pass it in the options",
              ),
              (e.maxTextures = getMaxTexturesPerBatch())));
          let { maxTextures: r, attributesInitialSize: t, indicesInitialSize: i } = e;
          ((this.attributeBuffer = new ViewableBuffer(t * 4)),
            (this.indexBuffer = new Uint16Array(i)),
            (this.maxTextures = r));
        }
        begin() {
          ((this.elementSize = 0), (this.elementStart = 0), (this.indexSize = 0), (this.attributeSize = 0));
          for (let e = 0; e < this.batchIndex; e++) returnBatchToPool(this.batches[e]);
          ((this.batchIndex = 0), (this._batchIndexStart = 0), (this._batchIndexSize = 0), (this.dirty = !0));
        }
        add(e) {
          ((this._elements[this.elementSize++] = e),
            (e._indexStart = this.indexSize),
            (e._attributeStart = this.attributeSize),
            (e._batcher = this),
            (this.indexSize += e.indexSize),
            (this.attributeSize += e.attributeSize * this.vertexSize));
        }
        checkAndUpdateTexture(e, r) {
          let t = e._batch.textures.ids[r._source.uid];
          return !t && t !== 0 ? !1 : ((e._textureId = t), (e.texture = r), !0);
        }
        updateElement(e) {
          this.dirty = !0;
          let r = this.attributeBuffer;
          e.packAsQuad
            ? this.packQuadAttributes(e, r.float32View, r.uint32View, e._attributeStart, e._textureId)
            : this.packAttributes(e, r.float32View, r.uint32View, e._attributeStart, e._textureId);
        }
        break(e) {
          let r = this._elements;
          if (!r[this.elementStart]) return;
          let t = getBatchFromPool(),
            i = t.textures;
          i.clear();
          let s = r[this.elementStart],
            o = getAdjustedBlendModeBlend(s.blendMode, s.texture._source),
            d = s.topology;
          (this.attributeSize * 4 > this.attributeBuffer.size &&
            this._resizeAttributeBuffer(this.attributeSize * 4),
            this.indexSize > this.indexBuffer.length && this._resizeIndexBuffer(this.indexSize));
          let c = this.attributeBuffer.float32View,
            f = this.attributeBuffer.uint32View,
            l = this.indexBuffer,
            b = this._batchIndexSize,
            _ = this._batchIndexStart,
            h = "startBatch",
            p = [],
            m = this.maxTextures;
          for (let v = this.elementStart; v < this.elementSize; ++v) {
            let w = r[v];
            r[v] = null;
            let C = w.texture._source,
              W = getAdjustedBlendModeBlend(w.blendMode, C),
              R = o !== W || d !== w.topology;
            if (C._batchTick === uK && !R) {
              ((w._textureId = C._textureBindLocation),
                (b += w.indexSize),
                w.packAsQuad
                  ? (this.packQuadAttributes(w, c, f, w._attributeStart, w._textureId),
                    this.packQuadIndex(l, w._indexStart, w._attributeStart / this.vertexSize))
                  : (this.packAttributes(w, c, f, w._attributeStart, w._textureId),
                    this.packIndex(w, l, w._indexStart, w._attributeStart / this.vertexSize)),
                (w._batch = t),
                p.push(w));
              continue;
            }
            ((C._batchTick = uK),
              (i.count >= m || R) &&
                (this._finishBatch(t, _, b - _, i, o, d, e, h, p),
                (h = "renderBatch"),
                (_ = b),
                (o = W),
                (d = w.topology),
                (t = getBatchFromPool()),
                (i = t.textures),
                i.clear(),
                (p = []),
                ++uK),
              (w._textureId = C._textureBindLocation = i.count),
              (i.ids[C.uid] = i.count),
              (i.textures[i.count++] = C),
              (w._batch = t),
              p.push(w),
              (b += w.indexSize),
              w.packAsQuad
                ? (this.packQuadAttributes(w, c, f, w._attributeStart, w._textureId),
                  this.packQuadIndex(l, w._indexStart, w._attributeStart / this.vertexSize))
                : (this.packAttributes(w, c, f, w._attributeStart, w._textureId),
                  this.packIndex(w, l, w._indexStart, w._attributeStart / this.vertexSize)));
          }
          (i.count > 0 && (this._finishBatch(t, _, b - _, i, o, d, e, h, p), (_ = b), ++uK),
            (this.elementStart = this.elementSize),
            (this._batchIndexStart = _),
            (this._batchIndexSize = b));
        }
        _finishBatch(e, r, t, i, s, o, d, c, f) {
          ((e.gpuBindGroup = null),
            (e.bindGroup = null),
            (e.action = c),
            (e.batcher = this),
            (e.textures = i),
            (e.blendMode = s),
            (e.topology = o),
            (e.start = r),
            (e.size = t),
            (e.elements = f),
            ++uK,
            (this.batches[this.batchIndex++] = e),
            d.add(e));
        }
        finish(e) {
          this.break(e);
        }
        ensureAttributeBuffer(e) {
          e * 4 <= this.attributeBuffer.size || this._resizeAttributeBuffer(e * 4);
        }
        ensureIndexBuffer(e) {
          e <= this.indexBuffer.length || this._resizeIndexBuffer(e);
        }
        _resizeAttributeBuffer(e) {
          let r = Math.max(e, this.attributeBuffer.size * 2),
            t = new ViewableBuffer(r);
          (fastCopy(this.attributeBuffer.rawBinaryData, t.rawBinaryData), (this.attributeBuffer = t));
        }
        _resizeIndexBuffer(e) {
          let r = this.indexBuffer,
            t = Math.max(e, r.length * 1.5);
          t += t % 2;
          let i = t > 65535 ? new Uint32Array(t) : new Uint16Array(t);
          if (i.BYTES_PER_ELEMENT !== r.BYTES_PER_ELEMENT) for (let s = 0; s < r.length; s++) i[s] = r[s];
          else fastCopy(r.buffer, i.buffer);
          this.indexBuffer = i;
        }
        packQuadIndex(e, r, t) {
          ((e[r] = t + 0),
            (e[r + 1] = t + 1),
            (e[r + 2] = t + 2),
            (e[r + 3] = t + 0),
            (e[r + 4] = t + 2),
            (e[r + 5] = t + 3));
        }
        packIndex(e, r, t, i) {
          let s = e.indices,
            o = e.indexSize,
            d = e.indexOffset,
            c = e.attributeOffset;
          for (let f = 0; f < o; f++) r[t++] = i + s[f + d] - c;
        }
        destroy(e = {}) {
          if (this.batches !== null) {
            for (let r = 0; r < this.batchIndex; r++) returnBatchToPool(this.batches[r]);
            ((this.batches = null),
              this.geometry.destroy(!0),
              (this.geometry = null),
              e.shader && (this.shader?.destroy(), (this.shader = null)));
            for (let r = 0; r < this._elements.length; r++)
              this._elements[r] && (this._elements[r]._batch = null);
            ((this._elements = null),
              (this.indexBuffer = null),
              this.attributeBuffer.destroy(),
              (this.attributeBuffer = null));
          }
        }
      }
