import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'FlagBelgiumIcon',
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
      "class": "c-pieIcon c-pieIcon--flagBelgium"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M9.43306 0.437548C7.86315 -0.145849 6.13589 -0.145849 4.56597 0.437548L3.95621 6.99991L4.56597 13.5623C6.13584 14.1459 7.86319 14.1459 9.43306 13.5623L10.0428 6.99991L9.43306 0.437548Z",
        "fill": "#FFDA44"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.9997 6.99991C13.9995 5.57071 13.5619 4.17582 12.7456 3.00269C11.9293 1.82956 10.7731 0.934415 9.43306 0.437548V13.5623C10.7731 13.0654 11.9293 12.1702 12.7456 10.9971C13.5619 9.82399 13.9995 8.4291 13.9997 6.99991Z",
        "fill": "#D80027"
      }
    }), h("path", {
      "attrs": {
        "d": "M0 6.99991C0.000174454 8.4291 0.437822 9.82399 1.25412 10.9971C2.07043 12.1702 3.22593 13.0654 4.56597 13.5623V0.437548C3.22593 0.934415 2.07043 1.82956 1.25412 3.00269C0.437822 4.17582 0.000174454 5.57071 0 6.99991Z",
        "fill": "#333333"
      }
    })]);
  }

};