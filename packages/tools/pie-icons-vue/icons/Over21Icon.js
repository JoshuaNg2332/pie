import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'Over21Icon',
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
      "class": "c-pieIcon c-pieIcon--over21"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.75 2.625H5.25C4.55381 2.625 3.88613 2.90156 3.39384 3.39384C2.90156 3.88613 2.625 4.55381 2.625 5.25V22.75C2.625 23.4462 2.90156 24.1139 3.39384 24.6062C3.88613 25.0984 4.55381 25.375 5.25 25.375H22.75C23.4462 25.375 24.1139 25.0984 24.6062 24.6062C25.0984 24.1139 25.375 23.4462 25.375 22.75V5.25C25.375 4.55381 25.0984 3.88613 24.6062 3.39384C24.1139 2.90156 23.4462 2.625 22.75 2.625ZM11.235 17.8938H5.25V16.7475C5.25 15.1462 6.1775 14.4725 7.5075 13.7638C8.8375 13.055 9.2575 12.7487 9.2575 12.0138C9.2575 11.2787 8.75 11.06 8.02375 11.06C7.69211 11.0546 7.36337 11.1224 7.06091 11.2585C6.75844 11.3947 6.48968 11.5957 6.27375 11.8475L5.31125 10.6662C5.67117 10.2743 6.11175 9.96491 6.60266 9.75948C7.09358 9.55405 7.62317 9.45742 8.155 9.47625C9.905 9.47625 11.0075 10.4212 11.0075 11.9613C11.0075 13.335 10.1325 14.175 8.70625 14.8663C7.42 15.5138 6.95625 15.8725 6.95625 16.31V16.3975H11.2L11.235 17.8938ZM15.9425 17.8938H14.28V11.6025L12.915 12.11L12.355 10.7013L14.7438 9.625H15.9425V17.8938ZM22.75 14.875H21V16.625H19.25V14.875H17.5V13.125H19.25V11.375H21V13.125H22.75V14.875Z"
      }
    })]);
  }

};