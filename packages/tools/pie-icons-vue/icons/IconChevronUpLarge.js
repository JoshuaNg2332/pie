import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronUpLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronUpLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.1237 22.125L16 11.625H15.9038L5.87625 22.125L4.625 20.8913L14.6875 10.3913C15.0429 10.0572 15.5123 9.87122 16 9.87122C16.4877 9.87122 16.9571 10.0572 17.3125 10.3913L27.375 20.9088L26.1237 22.125Z',
                fill: '#242E30'
            }
        })]);
    }
};