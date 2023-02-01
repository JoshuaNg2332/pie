import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDashboard',
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
            class: 'c-pieIcon c-pieIcon--dashboard'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.7812 9.74999C14.7796 10.6509 14.6013 11.5428 14.2562 12.375H12.795C13.1779 11.6795 13.4037 10.9086 13.4567 10.1165C13.5096 9.32432 13.3883 8.5302 13.1012 7.78999L14.0462 6.70499C14.528 7.6478 14.7799 8.69122 14.7812 9.74999ZM8 4.28124C8.84477 4.28141 9.6778 4.47917 10.4325 4.85874L11.3075 3.84374C10.2768 3.26491 9.11258 2.96593 7.93053 2.97653C6.74848 2.98713 5.58979 3.30693 4.56965 3.90415C3.54951 4.50137 2.70345 5.3552 2.11559 6.38076C1.52773 7.40632 1.21854 8.56789 1.21875 9.74999C1.22035 10.6509 1.39872 11.5428 1.74375 12.375H3.205C2.74943 11.5424 2.51839 10.6055 2.53461 9.65653C2.55083 8.70755 2.81375 7.77914 3.29751 6.96256C3.78128 6.14599 4.46923 5.46938 5.29373 4.99926C6.11823 4.52913 7.05089 4.28168 8 4.28124ZM10.0125 9.31249C10.325 9.80165 10.4501 10.3873 10.3648 10.9614C10.2795 11.5355 9.98954 12.0595 9.54837 12.4367C9.10721 12.8139 8.54456 13.0189 7.96415 13.014C7.38373 13.009 6.82466 12.7944 6.38999 12.4098C5.95532 12.0251 5.67434 11.4963 5.59884 10.9208C5.52335 10.3453 5.65842 9.76188 5.97917 9.27812C6.29992 8.79435 6.78473 8.44284 7.34423 8.28835C7.90374 8.13387 8.50022 8.18684 9.02375 8.43749L13.25 3.66874L14.2388 4.54374L10.0125 9.31249ZM8.77 9.85499C8.66975 9.75233 8.54999 9.67076 8.41776 9.61507C8.28552 9.55937 8.14348 9.53068 8 9.53068C7.85652 9.53068 7.71448 9.55937 7.58224 9.61507C7.45001 9.67076 7.33025 9.75233 7.23 9.85499C7.07905 10.007 6.9765 10.2004 6.93527 10.4106C6.89405 10.6209 6.916 10.8386 6.99835 11.0364C7.0807 11.2342 7.21977 11.4032 7.39803 11.5221C7.57628 11.641 7.78574 11.7044 8 11.7044C8.21426 11.7044 8.42372 11.641 8.60197 11.5221C8.78023 11.4032 8.9193 11.2342 9.00165 11.0364C9.084 10.8386 9.10595 10.6209 9.06473 10.4106C9.0235 10.2004 8.92095 10.007 8.77 9.85499Z',
                fill: '#242E30'
            }
        })]);
    }
};