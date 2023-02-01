import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretRightLarge',
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
            class: 'c-pieIcon c-pieIcon--caretRightLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.875 14.425L9.87502 5.75375C9.61287 5.58891 9.3097 5.50099 9.00002 5.5C8.55365 5.49999 8.12543 5.67671 7.80898 5.99153C7.49253 6.30634 7.31359 6.73363 7.31127 7.18V24.82C7.30765 25.1271 7.38828 25.4293 7.54439 25.6938C7.7005 25.9583 7.92612 26.1749 8.19673 26.3201C8.46734 26.4653 8.77258 26.5336 9.07927 26.5175C9.38596 26.5014 9.68237 26.4015 9.93627 26.2288L23.875 17.2688C24.1154 17.1175 24.3136 16.9077 24.4509 16.659C24.5882 16.4104 24.6602 16.1309 24.6602 15.8469C24.6602 15.5628 24.5882 15.2834 24.4509 15.0347C24.3136 14.7861 24.1154 14.5763 23.875 14.425ZM9.06127 24.6888V7.31125L22.8688 15.86L9.06127 24.6888Z',
                fill: '#242E30'
            }
        })]);
    }
};