import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PaypalSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--paypalSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5.24984 13.3437H6.81609C6.92509 13.3433 7.03043 13.3044 7.11363 13.234C7.19684 13.1636 7.25259 13.0662 7.27109 12.9587C7.35859 12.4862 7.41984 12.0137 7.49859 11.5412C7.57734 11.0687 7.62109 10.7537 7.69109 10.36C7.70222 10.2384 7.76083 10.1262 7.85419 10.0475C7.94756 9.96892 8.06817 9.93027 8.18984 9.93999C8.46109 9.93999 8.73234 9.93999 9.00359 9.93999C9.38201 9.91623 9.75565 9.84268 10.1148 9.72124C10.5272 9.57717 10.9076 9.35429 11.2348 9.06499C11.5944 8.7262 11.8726 8.31039 12.0486 7.84875C12.1944 7.48573 12.2971 7.1069 12.3548 6.72C12.4204 6.35542 12.4204 5.98207 12.3548 5.6175C12.3086 5.33515 12.2011 5.06636 12.0398 4.83C11.9148 5.31081 11.7327 5.77494 11.4973 6.2125C11.1932 6.75051 10.7893 7.22565 10.3073 7.6125C9.71578 8.07268 9.03256 8.40086 8.30359 8.575C7.73015 8.71036 7.14279 8.77791 6.55359 8.77625H6.03734L5.99359 9.0475V9.16125L5.89734 9.8L5.58234 11.76L5.38109 12.8975"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.31986 7.46374H6.50986C7.00775 7.46951 7.50444 7.41367 7.98861 7.29749C8.53782 7.17446 9.05223 6.92921 9.49361 6.57999C9.84875 6.29508 10.1458 5.94455 10.3686 5.54749C10.6239 5.06741 10.8039 4.55097 10.9024 4.01624C10.9065 3.93463 10.9065 3.85286 10.9024 3.77124C10.9459 3.51996 10.9635 3.26487 10.9549 3.00999C10.9496 2.60366 10.8303 2.20697 10.6107 1.8651C10.391 1.52322 10.0798 1.2499 9.71236 1.07624C9.40841 0.923453 9.08436 0.814455 8.74986 0.752493C8.3453 0.68326 7.93527 0.651043 7.52486 0.656243H3.74486C3.60836 0.650522 3.4746 0.695691 3.36952 0.782993C3.26443 0.870295 3.19551 0.993508 3.17611 1.12874C3.17611 1.27749 3.17611 1.42624 3.10611 1.56624C3.00111 2.25749 2.89611 2.93999 2.78236 3.62249C2.66861 4.30499 2.62486 4.89999 2.48486 5.53874L2.19611 7.39374C2.09111 8.01499 1.99486 8.62749 1.89861 9.24874L1.60986 11.095V11.2525C1.62485 11.3338 1.67036 11.4062 1.73707 11.455C1.80377 11.5039 1.88661 11.5253 1.96861 11.515H4.26986C4.34861 11.0425 4.41861 10.5787 4.49736 10.1062L4.68111 8.91624L4.83861 7.91874C4.86127 7.80215 4.91987 7.69557 5.00618 7.61397C5.09249 7.53237 5.20218 7.47983 5.31986 7.46374Z"
      }
    })]);
  }

};