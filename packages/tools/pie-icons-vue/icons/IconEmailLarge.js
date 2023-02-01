import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEmailLarge',
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
            class: 'c-pieIcon c-pieIcon--emailLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.5 6.375H5.5C4.80381 6.375 4.13613 6.65156 3.64384 7.14384C3.15156 7.63613 2.875 8.30381 2.875 9V23C2.875 23.6962 3.15156 24.3639 3.64384 24.8562C4.13613 25.3484 4.80381 25.625 5.5 25.625H26.5C27.1962 25.625 27.8639 25.3484 28.3562 24.8562C28.8484 24.3639 29.125 23.6962 29.125 23V9C29.125 8.30381 28.8484 7.63613 28.3562 7.14384C27.8639 6.65156 27.1962 6.375 26.5 6.375ZM27.375 9.385V22.9037L20.0775 16.1488L27.375 9.385ZM15.5188 19.2725C15.6792 19.4184 15.8881 19.4994 16.105 19.5C16.3261 19.4992 16.5386 19.4148 16.7 19.2638L18.7913 17.3388L25.8525 23.875H6.165L13.375 17.33L15.5188 19.2725ZM26.1675 8.125L16.105 17.435L5.85 8.125H26.1675ZM12.08 16.1488L4.625 22.9125V9.37625L12.08 16.1488Z',
                fill: '#242E30'
            }
        })]);
    }
};