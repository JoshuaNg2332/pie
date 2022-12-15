import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MoreHorizontalIcon',
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
      "class": "c-pieIcon c-pieIcon--moreHorizontal"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.6875 12.0312C6.07688 12.0312 6.45752 12.1467 6.78128 12.363C7.10504 12.5794 7.35738 12.8868 7.50639 13.2466C7.6554 13.6063 7.69439 14.0022 7.61842 14.3841C7.54246 14.766 7.35495 15.1168 7.07962 15.3921C6.80428 15.6674 6.45348 15.855 6.07158 15.9309C5.68968 16.0069 5.29383 15.9679 4.93409 15.8189C4.57435 15.6699 4.26687 15.4175 4.05054 15.0938C3.83422 14.77 3.71875 14.3894 3.71875 14C3.71875 13.4779 3.92617 12.9771 4.29538 12.6079C4.6646 12.2387 5.16535 12.0312 5.6875 12.0312ZM12.0312 14C12.0312 14.3894 12.1467 14.77 12.363 15.0938C12.5794 15.4175 12.8869 15.6699 13.2466 15.8189C13.6063 15.9679 14.0022 16.0069 14.3841 15.9309C14.766 15.855 15.1168 15.6674 15.3921 15.3921C15.6675 15.1168 15.855 14.766 15.9309 14.3841C16.0069 14.0022 15.9679 13.6063 15.8189 13.2466C15.6699 12.8868 15.4175 12.5794 15.0938 12.363C14.77 12.1467 14.3894 12.0312 14 12.0312C13.4779 12.0312 12.9771 12.2387 12.6079 12.6079C12.2387 12.9771 12.0312 13.4779 12.0312 14ZM20.3437 14C20.3437 14.3894 20.4592 14.77 20.6755 15.0938C20.8919 15.4175 21.1994 15.6699 21.5591 15.8189C21.9188 15.9679 22.3147 16.0069 22.6966 15.9309C23.0785 15.855 23.4293 15.6674 23.7046 15.3921C23.98 15.1168 24.1675 14.766 24.2434 14.3841C24.3194 14.0022 24.2804 13.6063 24.1314 13.2466C23.9824 12.8868 23.73 12.5794 23.4063 12.363C23.0825 12.1467 22.7019 12.0312 22.3125 12.0312C21.7904 12.0312 21.2896 12.2387 20.9204 12.6079C20.5512 12.9771 20.3437 13.4779 20.3437 14Z"
      }
    })]);
  }

};