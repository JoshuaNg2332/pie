import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'ArrowLongRightIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--arrowLongRight"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.75 14.8749H23.625L16.625 21.8749L17.8587 23.1087L25.7337 15.2337C25.8965 15.0712 26.0255 14.8782 26.1136 14.6657C26.2017 14.4533 26.247 14.2255 26.247 13.9956C26.247 13.7656 26.2017 13.5379 26.1136 13.3254C26.0255 13.113 25.8965 12.92 25.7337 12.7574L17.8587 4.88245L16.625 6.12495L23.625 13.1249H1.75V14.8749Z"
      }
    })]);
  }

};