import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppUsers',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--appUsers'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.42624 12.375L2.91624 10.7738C3.00295 10.429 3.19901 10.1216 3.47505 9.89763C3.7511 9.67364 4.09227 9.5451 4.44749 9.53126H6.24999C6.56871 9.54316 6.87528 9.65659 7.12499 9.85501C7.02523 10.0454 6.94321 10.2446 6.87999 10.45L6.37249 12.375H7.73749L8.20124 10.8175C8.2832 10.4632 8.47905 10.1456 8.75878 9.9133C9.03851 9.68098 9.3867 9.54678 9.74999 9.53126H11.5875C11.9462 9.55234 12.2884 9.68905 12.5629 9.92093C12.8373 10.1528 13.0293 10.4674 13.11 10.8175L13.5387 12.375H14.9037L14.3437 10.45C14.2068 9.9474 13.9436 9.48818 13.5791 9.11601C13.2145 8.74385 12.7609 8.47112 12.2612 8.32376C12.4455 8.22425 12.6137 8.09739 12.76 7.94751C12.9845 7.72545 13.1627 7.46109 13.2843 7.16972C13.406 6.87835 13.4687 6.56575 13.4687 6.25001C13.4701 5.93404 13.4081 5.62101 13.2864 5.32944C13.1646 5.03787 12.9856 4.77368 12.76 4.55251C12.3037 4.11403 11.6953 3.86914 11.0625 3.86914C10.4296 3.86914 9.82133 4.11403 9.36499 4.55251C9.13934 4.77368 8.96035 5.03787 8.83861 5.32944C8.71688 5.62101 8.65486 5.93404 8.65624 6.25001C8.65633 6.56575 8.71901 6.87835 8.84066 7.16972C8.96232 7.46109 9.14053 7.72545 9.36499 7.94751C9.46248 8.04968 9.57107 8.14066 9.68874 8.21876C9.06796 8.24096 8.47287 8.47221 7.99999 8.87501C7.52127 8.48798 6.92676 8.27236 6.31124 8.26251C6.42891 8.18441 6.5375 8.09343 6.63499 7.99126C6.86476 7.76405 7.04604 7.49258 7.16786 7.19329C7.28969 6.89399 7.34952 6.57309 7.34374 6.25001C7.34512 5.93404 7.28311 5.62101 7.16137 5.32944C7.03963 5.03787 6.86064 4.77368 6.63499 4.55251C6.17865 4.11403 5.57035 3.86914 4.93749 3.86914C4.30463 3.86914 3.69633 4.11403 3.23999 4.55251C3.01434 4.77368 2.83535 5.03787 2.71361 5.32944C2.59188 5.62101 2.52986 5.93404 2.53124 6.25001C2.53133 6.56575 2.59401 6.87835 2.71566 7.16972C2.83732 7.46109 3.01553 7.72545 3.23999 7.94751C3.38493 8.09521 3.54987 8.22186 3.72999 8.32376C3.23683 8.46237 2.78736 8.7249 2.42436 9.08637C2.06137 9.44783 1.79694 9.89619 1.65624 10.3888L1.05249 12.375H2.42624ZM10.3012 5.48001C10.5072 5.27905 10.7835 5.16656 11.0712 5.16656C11.359 5.16656 11.6353 5.27905 11.8412 5.48001C11.9439 5.58026 12.0255 5.70002 12.0812 5.83225C12.1369 5.96449 12.1656 6.10652 12.1656 6.25001C12.1656 6.39349 12.1369 6.53553 12.0812 6.66776C12.0255 6.8 11.9439 6.91976 11.8412 7.02001C11.7404 7.1216 11.6204 7.20223 11.4883 7.25725C11.3561 7.31227 11.2144 7.3406 11.0712 7.3406C10.9281 7.3406 10.7864 7.31227 10.6542 7.25725C10.5221 7.20223 10.4021 7.1216 10.3012 7.02001C10.1986 6.91976 10.117 6.8 10.0613 6.66776C10.0056 6.53553 9.97693 6.39349 9.97693 6.25001C9.97693 6.10652 10.0056 5.96449 10.0613 5.83225C10.117 5.70002 10.1986 5.58026 10.3012 5.48001ZM4.17624 5.48001C4.38217 5.27905 4.65851 5.16656 4.94624 5.16656C5.23398 5.16656 5.51031 5.27905 5.71624 5.48001C5.8189 5.58026 5.90047 5.70002 5.95616 5.83225C6.01186 5.96449 6.04055 6.10652 6.04055 6.25001C6.04055 6.39349 6.01186 6.53553 5.95616 6.66776C5.90047 6.8 5.8189 6.91976 5.71624 7.02001C5.61539 7.1216 5.49543 7.20223 5.36328 7.25725C5.23112 7.31227 5.08939 7.3406 4.94624 7.3406C4.80309 7.3406 4.66136 7.31227 4.5292 7.25725C4.39705 7.20223 4.27709 7.1216 4.17624 7.02001C4.07359 6.91976 3.99201 6.8 3.93632 6.66776C3.88062 6.53553 3.85193 6.39349 3.85193 6.25001C3.85193 6.10652 3.88062 5.96449 3.93632 5.83225C3.99201 5.70002 4.07359 5.58026 4.17624 5.48001Z',
                fill: '#242E30'
            }
        })]);
    }
};