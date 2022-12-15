import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandLogoSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--brandLogoSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.405 6.57998C12.972 5.75115 12.4561 4.96839 11.865 4.24373C11.7513 3.05373 11.585 2.14373 11.5763 2.09998C11.5385 1.88942 11.4322 1.69724 11.274 1.55326C11.1158 1.40928 10.9145 1.32157 10.7013 1.30373L9.70379 1.18123C9.56512 1.16445 9.42445 1.18111 9.29353 1.22983C9.16262 1.27854 9.04527 1.35788 8.95129 1.46123C8.57424 1.09467 8.16417 0.763686 7.72629 0.472481C7.47074 0.316289 7.17705 0.233643 6.87754 0.233643C6.57804 0.233643 6.28435 0.316289 6.02879 0.472481C3.67388 1.98875 1.72936 4.0625 0.367545 6.50998C0.289893 6.66118 0.253666 6.83024 0.262545 6.99998C0.265462 7.22817 0.345859 7.4486 0.490543 7.62508C0.635228 7.80156 0.835606 7.92362 1.05879 7.97123L1.75004 8.06748C1.79929 9.72833 1.94537 11.3849 2.18754 13.0287C2.24083 13.2453 2.36578 13.4375 2.5421 13.5742C2.71842 13.7108 2.93576 13.7837 3.15879 13.7812H10.5175C10.741 13.7802 10.9577 13.7048 11.1336 13.567C11.3094 13.4291 11.4344 13.2367 11.4888 13.02C11.7228 11.3783 11.8659 9.72495 11.9175 8.06748L12.7225 7.87498C12.9369 7.82066 13.1272 7.69664 13.2634 7.52242C13.3996 7.34819 13.4741 7.13363 13.475 6.91248C13.4692 6.79868 13.4456 6.68649 13.405 6.57998ZM11.375 6.81623C11.1805 6.87291 11.0073 6.98654 10.8779 7.14248C10.7484 7.29843 10.6687 7.48955 10.6488 7.69123V7.80498C10.5263 10.0625 10.395 11.725 10.2813 12.4337H9.46754C9.46754 11.9787 9.52004 11.2875 9.55504 10.4825C9.60754 8.82873 9.66004 6.71123 9.55504 5.46873C9.55772 5.4367 9.55772 5.40451 9.55504 5.37248C9.5428 5.33776 9.5204 5.30751 9.49076 5.28567C9.46111 5.26382 9.42559 5.25139 9.38879 5.24998C9.35454 5.23977 9.31805 5.23977 9.28379 5.24998L9.23129 5.30248C9.23129 5.30248 8.11129 6.67623 7.87504 10.64C7.87251 10.6749 7.87251 10.71 7.87504 10.745C7.88405 10.7856 7.90448 10.8229 7.93393 10.8523C7.96339 10.8818 8.00063 10.9022 8.04129 10.9112L8.62754 11.0075C8.65298 11.0135 8.67556 11.0281 8.6915 11.0488C8.70743 11.0695 8.71575 11.0951 8.71504 11.1212C8.71504 11.1212 8.71504 11.5937 8.62754 12.4512H6.45754C6.45754 12.3462 6.45754 12.2325 6.45754 12.11C6.39492 11.7224 6.36565 11.3301 6.37004 10.9375C6.37478 10.9051 6.38771 10.8744 6.40761 10.8483C6.42752 10.8223 6.45374 10.8018 6.48379 10.7887C6.64567 10.7057 6.78224 10.5806 6.87922 10.4267C6.97619 10.2728 7.03001 10.0956 7.03504 9.91373H7.00004C6.92876 8.57593 6.92876 7.23528 7.00004 5.89748C6.99136 5.84025 6.96119 5.78847 6.91567 5.75271C6.87015 5.71694 6.81271 5.69987 6.75504 5.70498C6.7001 5.70186 6.64589 5.71875 6.60245 5.75254C6.55901 5.78632 6.52929 5.83471 6.51879 5.88873C6.46629 6.70248 6.45754 7.63873 6.51879 8.60998C6.51214 8.67577 6.48006 8.73636 6.4294 8.77885C6.37873 8.82134 6.31349 8.84238 6.24754 8.83748C6.09004 8.83748 5.95004 8.74123 5.95004 8.60998C5.95004 7.67373 5.95004 6.71998 5.95004 5.91498C5.95004 5.80998 5.84504 5.73123 5.70504 5.73123C5.65068 5.72628 5.59652 5.7427 5.55405 5.777C5.51159 5.8113 5.48414 5.86079 5.47754 5.91498C5.4163 6.71998 5.4163 7.66498 5.47754 8.63623C5.47088 8.70434 5.43787 8.76715 5.38557 8.81128C5.33327 8.85541 5.2658 8.87737 5.19754 8.87248C5.16352 8.87737 5.12885 8.8753 5.09565 8.86639C5.06245 8.85747 5.0314 8.84191 5.0044 8.82063C4.9774 8.79936 4.955 8.77282 4.93856 8.74262C4.92213 8.71243 4.912 8.67921 4.90879 8.64498C4.90879 7.70873 4.90879 6.74623 4.95254 5.94123C4.94182 5.88527 4.91193 5.83479 4.86802 5.79849C4.8241 5.76219 4.7689 5.74232 4.71192 5.74232C4.65494 5.74232 4.59974 5.76219 4.55582 5.79849C4.51191 5.83479 4.48201 5.88527 4.47129 5.94123C4.39701 7.31106 4.39701 8.6839 4.47129 10.0537C4.48659 10.242 4.55236 10.4226 4.6617 10.5766C4.77103 10.7306 4.91987 10.8522 5.09255 10.9287C5.12608 10.9428 5.15517 10.9657 5.17674 10.9949C5.19831 11.0242 5.21155 11.0588 5.21504 11.095C5.21929 11.1152 5.21929 11.136 5.21504 11.1562C5.21504 11.6812 5.28504 12.1712 5.3113 12.5475H3.44754C3.36879 12.0487 3.23754 10.7975 3.08879 7.93623V7.76998C3.06839 7.56182 2.98307 7.36534 2.84489 7.20832C2.70671 7.0513 2.52267 6.94169 2.31879 6.89498L1.75004 6.71998C3.0091 4.65293 4.71288 2.89237 6.73754 1.56623C6.77812 1.53638 6.82717 1.52028 6.87754 1.52028C6.92792 1.52028 6.97697 1.53638 7.01754 1.56623C7.52085 1.90454 7.98976 2.29139 8.41754 2.72123L8.94254 3.21123C9.03591 3.29481 9.15125 3.34991 9.27493 3.37002C9.39861 3.39013 9.52547 3.37441 9.6405 3.32471C9.75554 3.27502 9.85394 3.19343 9.92407 3.08959C9.99421 2.98575 10.0332 2.864 10.0363 2.73873V2.54623H10.325C10.3775 2.89623 10.4913 3.61373 10.5613 4.40998C10.5657 4.5973 10.6301 4.77826 10.745 4.92623C11.195 5.47927 11.6044 6.06413 11.97 6.67623L11.375 6.81623Z"
      }
    })]);
  }

};