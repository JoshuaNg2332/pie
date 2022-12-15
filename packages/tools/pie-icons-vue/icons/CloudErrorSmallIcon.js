import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'CloudErrorSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--cloudErrorSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M12.145 6.43126C12.0121 5.22243 11.4582 4.0989 10.5802 3.25746C9.70215 2.41602 8.55608 1.91032 7.34269 1.82894C6.12931 1.74756 4.92597 2.09569 3.94346 2.81235C2.96095 3.52901 2.26191 4.5685 1.96879 5.74876C1.37973 6.01431 0.88027 6.44491 0.530861 6.98844C0.181451 7.53197 -0.00292928 8.16512 3.51925e-05 8.81126C3.51925e-05 9.70703 0.355878 10.5661 0.989282 11.1995C1.62269 11.8329 2.48177 12.1888 3.37754 12.1888H11.0163C11.7073 12.1851 12.3758 11.9425 12.9083 11.5019C13.4407 11.0614 13.8043 10.4502 13.9373 9.77201C14.0702 9.09386 13.9643 8.39059 13.6377 7.78163C13.311 7.17266 12.7836 6.69553 12.145 6.43126ZM11.0163 10.8763H3.37754C2.82986 10.8763 2.30462 10.6587 1.91736 10.2714C1.5301 9.88417 1.31254 9.35893 1.31254 8.81126C1.30924 8.37494 1.44601 7.94908 1.70273 7.59627C1.95946 7.24346 2.32261 6.98233 2.73879 6.85126L3.12379 6.73751L3.18504 6.34376C3.34334 5.39015 3.85301 4.5304 4.61365 3.93387C5.37429 3.33734 6.33074 3.04728 7.29459 3.12083C8.25845 3.19438 9.15981 3.62621 9.82113 4.33125C10.4824 5.03629 10.8558 5.96342 10.8675 6.93001V7.44626L11.3663 7.56001C11.7662 7.65295 12.1182 7.88911 12.3559 8.22389C12.5935 8.55868 12.7004 8.9689 12.6562 9.37708C12.6121 9.78526 12.42 10.1631 12.1162 10.4394C11.8125 10.7156 11.4181 10.871 11.0075 10.8763H11.0163ZM9.21379 6.12501L7.92754 7.43751L9.21379 8.75001L8.28629 9.62501L7.00004 8.36501L5.71379 9.62501L4.78628 8.75001L6.07254 7.43751L4.78628 6.12501L5.71379 5.25001L7.00004 6.51001L8.28629 5.25001L9.21379 6.12501Z"
      }
    })]);
  }

};