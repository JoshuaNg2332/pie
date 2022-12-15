import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AlertCircleIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 32 32"
      },
      "class": "c-pieIcon c-pieIcon--alertCircle"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M16 30C13.2311 30 10.5243 29.1789 8.22201 27.6406C5.91973 26.1022 4.12531 23.9157 3.06569 21.3576C2.00606 18.7994 1.72881 15.9845 2.269 13.2687C2.8092 10.553 4.14257 8.05845 6.1005 6.10051C8.05844 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3065 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91344 11.4078C4.00519 13.6005 3.76755 16.0133 4.23058 18.3411C4.6936 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3311 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2348 5.26429 19.1826 4.00001 16 4.00001Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.34 9.27001C15.4174 8.91015 16.5826 8.91015 17.66 9.27001L16.81 18H15.19L14.34 9.27001ZM17.5 21.5C17.5 21.7967 17.412 22.0867 17.2472 22.3334C17.0824 22.58 16.8481 22.7723 16.574 22.8858C16.2999 22.9994 15.9983 23.0291 15.7074 22.9712C15.4164 22.9133 15.1491 22.7704 14.9393 22.5607C14.7296 22.3509 14.5867 22.0836 14.5288 21.7926C14.4709 21.5017 14.5006 21.2001 14.6142 20.926C14.7277 20.6519 14.92 20.4176 15.1666 20.2528C15.4133 20.088 15.7033 20 16 20C16.3978 20 16.7794 20.158 17.0607 20.4393C17.342 20.7206 17.5 21.1022 17.5 21.5Z"
      }
    })]);
  }

};