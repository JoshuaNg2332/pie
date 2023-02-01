import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChequeFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--chequeFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.8325 14.5387L16.0437 15.125L16.5863 11.3362L22.8162 5.06247C23.1383 4.74272 23.5473 4.5249 23.9924 4.4362C24.4374 4.3475 24.8988 4.39186 25.3188 4.56372L26.7537 3.12872L27.9963 4.37122L26.5612 5.80622C26.7331 6.22622 26.7775 6.68754 26.6888 7.13259C26.6001 7.57764 26.3823 7.98671 26.0625 8.30872L19.8325 14.5387ZM29.125 11.625V25.625H2.875V11.625H14.7663L13.9787 17.1462L20.655 16.1925L25.2138 11.625H29.125ZM17.75 19.5H7.25V21.25H17.75V19.5ZM24.75 19.5H21.25V21.25H24.75V19.5Z',
                fill: '#242E30'
            }
        })]);
    }
};