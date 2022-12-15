import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'LockerSmallIcon',
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
      "class": "c-pieIcon c-pieIcon--lockerSmall"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.7811 2.625V11.375C13.7788 11.7804 13.6168 12.1686 13.3301 12.4552C13.0434 12.7419 12.6553 12.904 12.2499 12.9062H7.87489C7.46949 12.904 7.08134 12.7419 6.79467 12.4552C6.50801 12.1686 6.34594 11.7804 6.34364 11.375V10.5H7.65614V11.375C7.65614 11.433 7.67919 11.4887 7.72021 11.5297C7.76124 11.5707 7.81688 11.5938 7.87489 11.5938H12.2499C12.3079 11.5938 12.3635 11.5707 12.4046 11.5297C12.4456 11.4887 12.4686 11.433 12.4686 11.375V2.625C12.4686 2.56698 12.4456 2.51134 12.4046 2.47032C12.3635 2.4293 12.3079 2.40625 12.2499 2.40625H7.87489C7.81688 2.40625 7.76124 2.4293 7.72021 2.47032C7.67919 2.51134 7.65614 2.56698 7.65614 2.625V3.5H6.34364V2.625C6.34594 2.2196 6.50801 1.83145 6.79467 1.54478C7.08134 1.25811 7.46949 1.09605 7.87489 1.09375H12.2499C12.6553 1.09605 13.0434 1.25811 13.3301 1.54478C13.6168 1.83145 13.7788 2.2196 13.7811 2.625ZM6.66739 9.38L6.22989 8.93375L6.05489 9.1525C5.69245 9.57431 5.22976 9.89819 4.70937 10.0944C4.18898 10.2905 3.62762 10.3527 3.07693 10.2751C2.52623 10.1975 2.0039 9.98262 1.55798 9.6503C1.11206 9.31797 0.756876 8.87885 0.525105 8.37331C0.293335 7.86778 0.192421 7.31207 0.23165 6.75733C0.270878 6.20258 0.448989 5.66661 0.749594 5.19872C1.0502 4.73083 1.46365 4.34605 1.95189 4.07979C2.44014 3.81353 2.98751 3.67433 3.54364 3.675C4.40237 3.67614 5.22605 4.01567 5.83614 4.62H9.04739L11.4274 7L9.04739 9.38H8.31239L7.87489 8.93375L7.42864 9.38H6.66739ZM6.23864 7.07L7.04364 7.875L7.87489 7.07875L8.67989 7.875L9.55489 7L8.50489 5.9325H5.24989L5.04864 5.705C4.86477 5.48348 4.63494 5.30458 4.37507 5.18069C4.11521 5.0568 3.83151 4.99088 3.54364 4.9875C3.0099 4.9875 2.49801 5.19953 2.12059 5.57695C1.74317 5.95436 1.53114 6.46625 1.53114 7C1.53114 7.53375 1.74317 8.04564 2.12059 8.42305C2.49801 8.80047 3.0099 9.0125 3.54364 9.0125C3.95588 9.01132 4.35715 8.8796 4.68989 8.63625L6.23864 7.07ZM3.26364 6.195C3.10653 6.19501 2.95294 6.2415 2.82219 6.32861C2.69145 6.41572 2.58939 6.53957 2.52888 6.68455C2.46836 6.82954 2.45209 6.98919 2.48211 7.1434C2.51213 7.29761 2.58711 7.4395 2.69759 7.5512C2.80807 7.6629 2.94913 7.73941 3.10301 7.77112C3.25688 7.80282 3.4167 7.7883 3.56234 7.72937C3.70798 7.67044 3.83293 7.56975 3.92147 7.43996C4.01 7.31018 4.05817 7.1571 4.05989 7C4.05989 6.78882 3.976 6.58629 3.82668 6.43697C3.67735 6.28764 3.47482 6.20375 3.26364 6.20375V6.195Z"
      }
    })]);
  }

};