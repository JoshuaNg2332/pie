import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDirections',
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
            class: 'c-pieIcon c-pieIcon--directions'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.0725 6.2325L11.1937 2.96875H6.24996V1.65625H4.92871V2.96875H1.42871V11.7188H4.92871V14.3438H6.24996V11.7188H11.2025L14.0725 8.455C14.2318 8.31701 14.3596 8.14635 14.4472 7.95462C14.5348 7.76288 14.5802 7.55455 14.5802 7.34375C14.5802 7.13295 14.5348 6.92462 14.4472 6.73288C14.3596 6.54115 14.2318 6.37049 14.0725 6.2325ZM13.1887 7.4925L10.625 10.4062H6.24996V8H7.38746V9.14625L9.95996 7.34375L7.38746 5.69V6.6875H4.92871V10.4062H2.74996V4.28125H10.625L13.1012 7.125L13.18 7.20375C13.2037 7.21644 13.2236 7.23535 13.2375 7.25847C13.2514 7.28159 13.2587 7.30804 13.2587 7.335C13.2587 7.36196 13.2514 7.38841 13.2375 7.41153C13.2236 7.43465 13.2037 7.45356 13.18 7.46625L13.1887 7.4925Z',
                fill: '#242E30'
            }
        })]);
    }
};