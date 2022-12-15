import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'EmailFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--emailFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M26.81 22.225C27.0133 21.8485 27.1214 21.4279 27.125 21V7.00001C27.1238 6.64535 27.0525 6.29444 26.915 5.96751L18.0775 14.1488L26.81 22.225Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.7912 15.3387L14.7 17.2637C14.5386 17.4148 14.3261 17.4992 14.105 17.5C13.8881 17.4994 13.6792 17.4184 13.5187 17.2725L11.375 15.33L2.47625 23.415C2.79997 23.5529 3.14812 23.6243 3.5 23.625H24.5C24.8494 23.6282 25.1955 23.5566 25.515 23.415L16.7912 15.3387Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.105 15.435L25.7163 4.69C25.3423 4.4881 24.925 4.38 24.5 4.375H3.50002C3.10128 4.37729 2.70865 4.4732 2.35377 4.655L14.105 15.435Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.12001 5.90625C0.957833 6.24801 0.874125 6.62171 0.875007 7V21C0.880008 21.4249 0.988104 21.8423 1.19001 22.2162L10.08 14.1488L1.12001 5.90625Z"
      }
    })]);
  }

};