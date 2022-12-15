import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrialDayIcon',
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
      "class": "c-pieIcon c-pieIcon--trialDay"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M20.125 4.375V2.625H18.375V4.375H9.625V2.625H7.875V4.375H2.625V25.375H21C22.1603 25.375 23.2731 24.9141 24.0936 24.0936C24.9141 23.2731 25.375 22.1603 25.375 21V4.375H20.125ZM23.625 21C23.625 21.6962 23.3484 22.3639 22.8562 22.8562C22.3639 23.3484 21.6962 23.625 21 23.625H4.375V6.125H7.875V7H9.625V6.125H18.375V7H20.125V6.125H23.625V21ZM14 17.5H21V10.5H14V17.5ZM15.75 12.25H19.25V15.75H15.75V12.25Z"
      }
    })]);
  }

};