const n=new WeakMap,t=new WeakMap;function a(e){t.set(e,new Promise(s=>n.set(e,s)))}function o(e){n.get(e)()}function c(e){return t.get(e)}export{o as a,c,a as s};
