import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconListLarge',
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
            class: 'c-pieIcon c-pieIcon--listLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.8561 8.12499H10.7498V9.87499H27.2436L27.8561 8.12499Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.4998 24.575C6.36965 24.575 7.07481 23.8698 7.07481 23C7.07481 22.1301 6.36965 21.425 5.4998 21.425C4.62996 21.425 3.9248 22.1301 3.9248 23C3.9248 23.8698 4.62996 24.575 5.4998 24.575Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.4061 15.125H10.7498V16.875H24.7936L25.4061 15.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.5061 22.125H10.7498V23.875H26.9723L27.5061 22.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.4998 17.575C6.36965 17.575 7.07481 16.8698 7.07481 16C7.07481 15.1301 6.36965 14.425 5.4998 14.425C4.62996 14.425 3.9248 15.1301 3.9248 16C3.9248 16.8698 4.62996 17.575 5.4998 17.575Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.4998 10.575C6.36965 10.575 7.07481 9.86984 7.07481 8.99999C7.07481 8.13014 6.36965 7.42499 5.4998 7.42499C4.62996 7.42499 3.9248 8.13014 3.9248 8.99999C3.9248 9.86984 4.62996 10.575 5.4998 10.575Z',
                fill: '#242E30'
            }
        })]);
    }
};