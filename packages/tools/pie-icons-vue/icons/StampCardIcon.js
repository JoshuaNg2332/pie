import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'StampCardIcon',
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
      "class": "c-pieIcon c-pieIcon--stampCard"
    }, ctx.data]), [h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M12.2591 10.2503C12.388 10.6105 12.4416 10.9933 12.4164 11.375C12.4416 11.7567 12.388 12.1395 12.2591 12.4997C12.1301 12.8598 11.9285 13.1896 11.6668 13.4686C11.405 13.7476 11.0887 13.9698 10.7375 14.1214C10.3863 14.273 10.0077 14.3508 9.62514 14.35C9.23531 14.3631 8.84706 14.2943 8.48543 14.1482C8.12381 14.002 7.79683 13.7816 7.52559 13.5013C7.25435 13.221 7.04488 12.887 6.91067 12.5207C6.77646 12.1545 6.7205 11.7642 6.74639 11.375C6.7205 10.9858 6.77646 10.5955 6.91067 10.2293C7.04488 9.86304 7.25435 9.529 7.52559 9.24869C7.79683 8.96838 8.12381 8.74804 8.48543 8.60186C8.84706 8.45568 9.23531 8.38692 9.62514 8.40001C10.0077 8.39918 10.3863 8.47699 10.7375 8.62861C11.0887 8.78023 11.405 9.00243 11.6668 9.28141C11.9285 9.56038 12.1301 9.89018 12.2591 10.2503ZM8.53578 10.916C8.49022 11.0645 8.47679 11.221 8.49639 11.375C8.47679 11.5291 8.49022 11.6855 8.53578 11.834C8.58134 11.9824 8.65799 12.1195 8.76063 12.236C8.86327 12.3526 8.98955 12.4459 9.13107 12.5098C9.27259 12.5738 9.4261 12.6068 9.58139 12.6068C9.73668 12.6068 9.8902 12.5738 10.0317 12.5098C10.1732 12.4459 10.2995 12.3526 10.4022 12.236C10.5048 12.1195 10.5815 11.9824 10.627 11.834C10.6726 11.6855 10.686 11.5291 10.6664 11.375C10.686 11.221 10.6726 11.0645 10.627 10.916C10.5815 10.7676 10.5048 10.6305 10.4022 10.514C10.2995 10.3975 10.1732 10.3041 10.0317 10.2402C9.8902 10.1763 9.73668 10.1432 9.58139 10.1432C9.4261 10.1432 9.27259 10.1763 9.13107 10.2402C8.98955 10.3041 8.86327 10.3975 8.76063 10.514C8.65799 10.6305 8.58134 10.7676 8.53578 10.916Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.31006 19.25L16.5726 8.75H18.6988L11.4363 19.25H9.31006Z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M18.3751 13.65C17.9853 13.6369 17.5971 13.7057 17.2354 13.8519C16.8738 13.998 16.5468 14.2184 16.2756 14.4987C16.0044 14.779 15.7949 15.113 15.6607 15.4793C15.5265 15.8455 15.4705 16.2358 15.4964 16.625C15.4964 17.3769 15.7951 18.098 16.3267 18.6297C16.8584 19.1613 17.5795 19.46 18.3314 19.46C19.0833 19.46 19.8044 19.1613 20.336 18.6297C20.8677 18.098 21.1664 17.3769 21.1664 16.625C21.1916 16.2433 21.138 15.8605 21.0091 15.5003C20.8801 15.1402 20.6785 14.8104 20.4168 14.5314C20.155 14.2524 19.8387 14.0302 19.4875 13.8786C19.1363 13.727 18.7577 13.6492 18.3751 13.65ZM18.3751 17.85C18.2169 17.8562 18.0591 17.828 17.9128 17.7673C17.7665 17.7065 17.6351 17.6148 17.5278 17.4983C17.4204 17.3818 17.3397 17.2433 17.2911 17.0926C17.2425 16.9418 17.2273 16.7823 17.2464 16.625C17.2268 16.471 17.2402 16.3145 17.2858 16.166C17.3313 16.0176 17.408 15.8805 17.5106 15.764C17.6133 15.6475 17.7396 15.5541 17.8811 15.4902C18.0226 15.4263 18.1761 15.3932 18.3314 15.3932C18.4867 15.3932 18.6402 15.4263 18.7817 15.4902C18.9232 15.5541 19.0495 15.6475 19.1522 15.764C19.2548 15.8805 19.3315 16.0176 19.377 16.166C19.4226 16.3145 19.436 16.471 19.4164 16.625C19.4346 16.7749 19.4216 16.927 19.3782 17.0717C19.3348 17.2164 19.2619 17.3504 19.164 17.4655C19.0662 17.5806 18.9456 17.6742 18.8098 17.7404C18.6741 17.8065 18.5261 17.8439 18.3751 17.85Z"
      }
    }), h("path", {
      "attrs": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M24.7975 9.52875C25.076 10.1184 25.4225 10.6734 25.83 11.1825C26.5421 11.9655 26.9945 12.9497 27.125 14C26.9955 15.048 26.5429 16.0297 25.83 16.8088C25.4242 17.3222 25.0778 17.8799 24.7975 18.4713C24.5623 19.1094 24.4037 19.7732 24.325 20.4488C24.2706 21.4784 23.9044 22.4671 23.275 23.2838C22.4619 23.9062 21.48 24.2691 20.4575 24.325C19.7795 24.4058 19.113 24.5644 18.4713 24.7975C17.8847 25.0781 17.3302 25.4213 16.8175 25.8213C16.0372 26.539 15.0521 26.9948 14 27.125C12.952 26.9955 11.9703 26.5429 11.1912 25.83C10.6778 25.4242 10.1201 25.0778 9.52875 24.7975C8.89147 24.5694 8.23138 24.411 7.56 24.325C6.5292 24.2705 5.5385 23.9078 4.71625 23.2838C4.09381 22.468 3.73376 21.4824 3.68375 20.4575C3.59901 19.7793 3.43756 19.113 3.2025 18.4713C2.92503 17.8857 2.58155 17.3338 2.17875 16.8263C1.46231 16.0417 1.00681 15.0543 0.875 14C1.00447 12.952 1.45709 11.9703 2.17 11.1912C2.57525 10.6774 2.92158 10.1198 3.2025 9.52875C3.43771 8.89061 3.59632 8.22679 3.675 7.55125C3.73691 6.52466 4.09898 5.53886 4.71625 4.71625C5.53337 4.09501 6.51764 3.73238 7.5425 3.675C8.22033 3.59317 8.88668 3.43465 9.52875 3.2025C10.1163 2.92377 10.671 2.5804 11.1825 2.17875C11.9628 1.46102 12.9479 1.00517 14 0.875C15.048 1.00447 16.0297 1.45709 16.8088 2.17C17.3222 2.5758 17.8799 2.92217 18.4713 3.2025C19.1106 3.43366 19.774 3.59215 20.4488 3.675C21.4784 3.72941 22.4671 4.09561 23.2838 4.725C23.9075 5.53674 24.2678 6.51995 24.3162 7.5425C24.401 8.22066 24.5624 8.88701 24.7975 9.52875ZM23.1787 17.7712C23.5081 17.0508 23.9223 16.3723 24.4125 15.75C24.868 15.2515 25.198 14.6516 25.375 14C25.198 13.3484 24.868 12.7485 24.4125 12.25C23.9232 11.6334 23.509 10.9608 23.1787 10.2463C22.8951 9.48029 22.6985 8.68488 22.5925 7.875C22.548 7.1995 22.3473 6.54354 22.0063 5.95875C21.4316 5.63633 20.7915 5.44789 20.1338 5.4075C19.3263 5.30348 18.5336 5.10677 17.7712 4.82125C17.0519 4.49338 16.3735 4.08223 15.75 3.59625C15.2539 3.13564 14.6533 2.80235 14 2.625C13.3484 2.80204 12.7485 3.13201 12.25 3.5875C11.6289 4.07937 10.9501 4.49367 10.2287 4.82125C9.46906 5.10568 8.67935 5.30237 7.875 5.4075C7.20233 5.4413 6.54655 5.62995 5.95875 5.95875C5.63759 6.53081 5.44919 7.16778 5.4075 7.8225C5.30248 8.63256 5.1058 9.42807 4.82125 10.1937C4.49294 10.9055 4.08491 11.5777 3.605 12.1975C3.13641 12.7096 2.79999 13.3283 2.625 14C2.80204 14.6516 3.13201 15.2515 3.5875 15.75C4.09463 16.3783 4.5236 17.0658 4.865 17.7975C5.14757 18.5638 5.3442 19.3591 5.45125 20.1687C5.49164 20.8265 5.68008 21.4666 6.0025 22.0413C6.57719 22.3637 7.21728 22.5521 7.875 22.5925C8.68256 22.6957 9.47539 22.8924 10.2375 23.1787C10.9552 23.5047 11.6309 23.916 12.25 24.4037C12.7478 24.8621 13.3477 25.1951 14 25.375C14.6516 25.198 15.2515 24.868 15.75 24.4125C16.3801 23.9059 17.0709 23.4798 17.8062 23.1438C18.5659 22.8593 19.3556 22.6626 20.16 22.5575C20.8207 22.5184 21.4639 22.3299 22.0413 22.0063C22.3637 21.4316 22.5521 20.7915 22.5925 20.1338C22.6975 19.3265 22.8942 18.5339 23.1787 17.7712Z"
      }
    })]);
  }

};