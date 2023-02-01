import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKosherLarge',
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
            class: 'c-pieIcon c-pieIcon--kosherLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.63 16.105L27.4713 9.55125H19.85L16 2.875L12.15 9.55125H4.52875L8.37 16.105L4.625 22.5537H12.1325L16 29.125L19.8412 22.5713H27.375L23.63 16.105ZM24.4175 11.3013L22.6237 14.355L20.8737 11.3013H24.4175ZM21.6 16.0963L18.8438 20.8037H13.1562L10.4 16.0963L13.1562 11.3013H18.8438L21.6 16.0963ZM16 6.375L17.8287 9.55125H14.1712L16 6.375ZM7.5825 11.3013H11.135L9.385 14.355L7.5825 11.3013ZM7.67875 20.8037L9.42875 17.8375L11.1787 20.8037H7.67875ZM16 25.625L14.1887 22.5362H17.8112L16 25.625ZM22.6062 17.82L24.3562 20.7862H20.8737L22.6062 17.82Z',
                fill: '#242E30'
            }
        })]);
    }
};