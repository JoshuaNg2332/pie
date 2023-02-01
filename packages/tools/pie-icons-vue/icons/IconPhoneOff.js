import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPhoneOff',
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
            class: 'c-pieIcon c-pieIcon--phoneOff'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.95375 9.74998L7.5275 11.675C7.07265 11.3913 6.64499 11.0662 6.25 10.7037L15 1.87498H13.1538L5.27875 9.74998C4.90062 9.31242 4.56377 8.84083 4.2725 8.34123L5.94375 7.05498C6.23542 6.82971 6.4383 6.5088 6.51673 6.1487C6.59515 5.78861 6.54408 5.41239 6.3725 5.08623L4.43 1.41998L3.065 2.15498C2.58437 2.40633 2.1934 2.80038 1.94584 3.28297C1.69828 3.76556 1.60628 4.31298 1.6825 4.84998C1.85785 6.11179 2.24852 7.33413 2.8375 8.46373C3.25964 9.27664 3.77977 10.0348 4.38625 10.7212L1 14.125H2.84625L5.305 11.6487C5.94085 12.2205 6.64294 12.714 7.39625 13.1187C8.54523 13.7454 9.79998 14.1548 11.0975 14.3262H11.4125C11.8814 14.3187 12.3397 14.1857 12.7398 13.941C13.1399 13.6963 13.4671 13.349 13.6875 12.935L14.5625 11.29L10.9487 9.30373C10.6201 9.11732 10.2339 9.05976 9.86522 9.14223C9.49651 9.22471 9.17164 9.44132 8.95375 9.74998ZM2.9775 4.67498C2.94354 4.40246 2.99312 4.12604 3.11968 3.8823C3.24623 3.63856 3.4438 3.43899 3.68625 3.30998L3.8875 3.20498L5.2175 5.70748C5.24357 5.75864 5.25084 5.81733 5.23804 5.8733C5.22525 5.92928 5.1932 5.97898 5.1475 6.01373L3.66875 7.12498C3.33537 6.34094 3.10308 5.51766 2.9775 4.67498ZM12.5325 12.375C12.4161 12.6033 12.2336 12.7913 12.0089 12.9146C11.7842 13.0379 11.5276 13.0907 11.2725 13.0662C10.3848 12.948 9.51851 12.7034 8.7 12.34L10.0125 10.59C10.0442 10.5456 10.0909 10.5142 10.1439 10.5013C10.1969 10.4885 10.2527 10.4951 10.3013 10.52L12.8038 11.9112L12.5325 12.375Z',
                fill: '#242E30'
            }
        })]);
    }
};