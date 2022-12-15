import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'RibbonHeartIcon',
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
      "class": "c-pieIcon c-pieIcon--ribbonHeart"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.0162 22.4C23.6943 21.1743 22.6062 19.7186 21.8049 18.1038C22.034 17.4738 22.1352 16.8045 22.1024 16.135C22.0931 15.7101 22.1432 15.286 22.2512 14.875C22.4632 14.5134 22.7287 14.1859 23.0387 13.9037C23.4265 13.5961 23.7487 13.2138 23.9862 12.7795C24.2236 12.3451 24.3715 11.8675 24.4212 11.375C24.3659 10.8901 24.2154 10.4209 23.9781 9.99443C23.7408 9.56795 23.4216 9.19261 23.0387 8.89C22.7287 8.60781 22.4632 8.28036 22.2512 7.91875C22.1391 7.49359 22.089 7.05448 22.1024 6.615C22.1983 5.67442 21.9254 4.73333 21.3412 3.99C20.5957 3.40984 19.6563 3.13741 18.7162 3.22875C18.2735 3.25083 17.8302 3.20059 17.4037 3.08C17.045 2.87104 16.7204 2.60841 16.4412 2.30125C16.1379 1.90708 15.7585 1.57776 15.3257 1.33278C14.8928 1.08779 14.4152 0.932132 13.9212 0.875C13.4363 0.930228 12.9671 1.08081 12.5406 1.31807C12.1141 1.55534 11.7388 1.87461 11.4362 2.2575C11.1646 2.5623 10.8491 2.82478 10.4999 3.03625C10.0764 3.15697 9.63597 3.20723 9.19617 3.185C8.24177 3.08579 7.28586 3.35846 6.52742 3.94625C5.93547 4.70258 5.66232 5.66019 5.76617 6.615C5.7884 7.0548 5.73814 7.49526 5.61742 7.91875C5.40885 8.2803 5.14624 8.60783 4.83867 8.89C4.44933 9.18944 4.12349 9.56337 3.88012 9.99001C3.63676 10.4166 3.48074 10.8875 3.42117 11.375C3.4764 11.8599 3.62698 12.3291 3.86425 12.7556C4.10151 13.182 4.42078 13.5574 4.80367 13.86C5.11483 14.1554 5.37762 14.498 5.58242 14.875C5.70314 15.2985 5.7534 15.7389 5.73117 16.1787C5.70721 16.8478 5.8081 17.5154 6.02867 18.1475C5.22955 19.7485 4.14417 21.1897 2.82617 22.4L1.51367 23.625L6.43117 24.4387L8.81992 27.5975L9.52867 26.8712C10.9693 25.3322 12.1805 23.5934 13.1249 21.7087C13.3881 21.8192 13.6708 21.8757 13.9562 21.875C14.2415 21.8748 14.524 21.8183 14.7874 21.7087C15.7169 23.5889 16.9135 25.3248 18.3399 26.8625L19.0487 27.5887L21.4374 24.43L26.3199 23.625L25.0162 22.4ZM8.95992 24.8675L7.40242 22.82L5.24992 22.4525C6.07813 21.501 6.79177 20.4555 7.37617 19.3375C7.94559 19.4968 8.53495 19.5734 9.12617 19.565C9.56597 19.5428 10.0064 19.593 10.4299 19.7137C10.7915 19.9223 11.119 20.1849 11.4012 20.4925C11.4639 20.5611 11.5311 20.6254 11.6024 20.685C10.8843 22.1756 9.9977 23.5789 8.95992 24.8675ZM12.6524 19.25C12.2247 18.7758 11.7111 18.3868 11.1387 18.1038C10.5145 17.8891 9.85552 17.7942 9.19617 17.8237C8.61867 17.8237 7.95367 17.8237 7.73492 17.57C7.51617 17.3162 7.49867 16.695 7.48117 16.1087C7.51077 15.4494 7.41578 14.7904 7.20117 14.1662C6.91808 13.5938 6.52915 13.0802 6.05492 12.6525C5.64367 12.2237 5.17992 11.7775 5.17992 11.3837C5.17992 10.99 5.65242 10.5087 6.05492 10.115C6.53003 9.68472 6.91902 9.16805 7.20117 8.5925C7.41578 7.96836 7.51077 7.30934 7.48117 6.65C7.48117 6.0725 7.48117 5.41625 7.73492 5.18875C7.98867 4.96125 8.60992 4.9525 9.19617 4.935C9.85552 4.9646 10.5145 4.86961 11.1387 4.655C11.7118 4.36931 12.2255 3.97737 12.6524 3.5C13.0812 3.08875 13.5274 2.625 13.9212 2.625C14.3149 2.625 14.7524 3.0975 15.1812 3.5C15.6145 3.97177 16.1305 4.36025 16.7037 4.64625C17.3278 4.86085 17.9868 4.95585 18.6462 4.92625C19.2237 4.92625 19.8799 4.92625 20.1074 5.18C20.3349 5.43375 20.3437 6.055 20.3524 6.64125C20.3291 7.30096 20.427 7.95935 20.6412 8.58375C20.9213 9.15801 21.3106 9.67217 21.7874 10.0975C22.1987 10.5262 22.6624 10.9725 22.6624 11.3662C22.6624 11.76 22.1899 12.2412 21.7874 12.635C21.3106 13.0603 20.9213 13.5745 20.6412 14.1487C20.427 14.7732 20.3291 15.4315 20.3524 16.0912C20.3524 16.6687 20.3524 17.325 20.1074 17.5525C19.8624 17.78 19.2324 17.7887 18.6462 17.8062C17.9868 17.7767 17.3278 17.8716 16.7037 18.0862C16.1291 18.3775 15.613 18.772 15.1812 19.25C14.7524 19.6612 14.3062 20.125 13.9212 20.125C13.5362 20.125 13.1249 19.6525 12.6524 19.25ZM20.4312 22.8287L18.8824 24.8762C17.8294 23.5916 16.9308 22.1878 16.2049 20.6937L16.4062 20.5012C16.6854 20.1941 17.01 19.9315 17.3687 19.7225C17.7951 19.6013 18.2385 19.551 18.6812 19.5737C19.2726 19.5857 19.8625 19.509 20.4312 19.3462C21.0265 20.4639 21.7488 21.5091 22.5837 22.4612L20.4312 22.8287Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.9211 17.2987L9.54615 12.7837C8.94166 12.1492 8.60448 11.3064 8.60448 10.43C8.60448 9.5536 8.94166 8.7108 9.54615 8.07625C10.1259 7.51358 10.8929 7.18459 11.7002 7.1523C12.5075 7.12001 13.2983 7.38669 13.9211 7.90125C14.5365 7.3687 15.332 7.09116 16.1451 7.12531C16.9582 7.15946 17.7276 7.50273 18.2961 8.085C18.9021 8.71707 19.2403 9.55879 19.2403 10.4344C19.2403 11.31 18.9021 12.1517 18.2961 12.7837L13.9211 17.2987ZM11.8124 8.86375C11.6178 8.86458 11.4253 8.90452 11.2465 8.98118C11.0676 9.05783 10.906 9.16966 10.7711 9.31C10.4932 9.61855 10.3394 10.0191 10.3394 10.4344C10.3394 10.8496 10.4932 11.2502 10.7711 11.5587L13.9211 14.7875L17.0624 11.5587C17.344 11.252 17.5003 10.8508 17.5003 10.4344C17.5003 10.018 17.344 9.61673 17.0624 9.31C16.784 9.03481 16.4083 8.88048 16.0168 8.88048C15.6253 8.88048 15.2496 9.03481 14.9711 9.31L13.8861 10.3512L12.8624 9.31C12.7266 9.1686 12.5635 9.05616 12.383 8.97947C12.2026 8.90277 12.0085 8.86341 11.8124 8.86375Z"
      }
    })]);
  }

};