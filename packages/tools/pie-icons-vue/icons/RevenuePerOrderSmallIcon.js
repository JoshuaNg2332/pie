import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'RevenuePerOrderSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--revenuePerOrderSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.7487 8.3125C12.3001 7.98128 11.7515 7.81367 11.1943 7.83755C10.6372 7.86143 10.1049 8.07536 9.68625 8.44375L8.42625 9.5725C8.22767 9.74657 7.97282 9.84291 7.70875 9.84375H7.39375C7.56675 9.50514 7.65672 9.13024 7.65625 8.75V7.21875H4.305C3.83165 7.21868 3.36888 7.35873 2.975 7.62125L0.95375 8.96875H0V10.2813H1.3475L3.70125 8.75C3.8789 8.62829 4.08967 8.56414 4.305 8.56625H6.34375V8.75C6.34375 9.04008 6.22852 9.31828 6.0234 9.5234C5.81828 9.72852 5.54008 9.84375 5.25 9.84375H4.27L3.605 11.1563H7.70875C8.291 11.1546 8.85319 10.9434 9.2925 10.5613L10.5612 9.4325C10.7535 9.2624 10.9983 9.1635 11.2548 9.15235C11.5112 9.1412 11.7637 9.21848 11.97 9.37125H12.0312L9.625 12.11C9.52137 12.2226 9.39561 12.3126 9.25558 12.3743C9.11555 12.4361 8.96428 12.4682 8.81125 12.4688H0V13.7813H8.84625C9.18506 13.7809 9.51998 13.709 9.82909 13.5703C10.1382 13.4316 10.4145 13.2292 10.64 12.9763L14 9.205L12.7487 8.3125Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M7 5.90625C7.56244 5.90625 8.11225 5.73947 8.5799 5.42699C9.04755 5.11452 9.41205 4.67038 9.62728 4.15076C9.84252 3.63113 9.89884 3.05935 9.78911 2.50771C9.67938 1.95608 9.40854 1.44937 9.01084 1.05167C8.61313 0.653961 8.10642 0.38312 7.55479 0.273393C7.00316 0.163666 6.43137 0.219982 5.91175 0.435219C5.39212 0.650456 4.94798 1.01495 4.63551 1.4826C4.32303 1.95025 4.15625 2.50006 4.15625 3.0625C4.15856 3.816 4.45891 4.53798 4.99172 5.07079C5.52452 5.60359 6.2465 5.90394 7 5.90625ZM7 1.53125C7.30285 1.53125 7.5989 1.62106 7.85072 1.78931C8.10253 1.95757 8.29879 2.19672 8.41469 2.47652C8.53059 2.75632 8.56091 3.0642 8.50183 3.36123C8.44275 3.65827 8.29691 3.93111 8.08276 4.14526C7.86861 4.35941 7.59577 4.50525 7.29873 4.56433C7.0017 4.62341 6.69382 4.59309 6.41402 4.47719C6.13422 4.3613 5.89507 4.16503 5.72681 3.91322C5.55856 3.66141 5.46875 3.36535 5.46875 3.0625C5.47105 2.6571 5.63311 2.26895 5.91978 1.98228C6.20645 1.69561 6.5946 1.53355 7 1.53125Z"
      }
    })]);
  }

};