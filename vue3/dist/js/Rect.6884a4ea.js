let e = class {
  constructor(h = 0, t = 0, i = 0, s = 0) {
    (this.x = h), (this.y = t), (this.width = i), (this.height = s);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(h) {
    (this.x = Math.min(this.x, h.x)),
      (this.y = Math.min(this.y, h.y)),
      (this.width = Math.max(this.width, h.width)),
      (this.height = Math.max(this.height, h.height));
  }
};
export { e as t };
