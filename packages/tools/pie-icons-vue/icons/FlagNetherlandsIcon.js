import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagNetherlandsIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 14 14"
      },
      "class": "c-pieIcon c-pieIcon--flagNetherlands"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z",
        "fill": "#EEEEEE"
      }
    }), h("path", {
      "attrs": {
        "d": "M7 0C5.57078 0.000174458 4.17586 0.437831 3.0027 1.25415C1.82955 2.07047 0.934378 3.22634 0.4375 4.56641H13.5625C13.0656 3.22634 12.1705 2.07047 10.9973 1.25415C9.82414 0.437831 8.42922 0.000174458 7 0Z",
        "fill": "#A2001D"
      }
    }), h("path", {
      "attrs": {
        "d": "M7 14C8.42922 13.9998 9.82414 13.5622 10.9973 12.7458C12.1705 11.9295 13.0656 10.7737 13.5625 9.43359H0.4375C0.934378 10.7737 1.82955 11.9295 3.0027 12.7458C4.17586 13.5622 5.57078 13.9998 7 14Z",
        "fill": "#0052B4"
      }
    })]);
  }

};