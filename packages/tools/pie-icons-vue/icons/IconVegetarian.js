import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconVegetarian',
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
            class: 'c-pieIcon c-pieIcon--vegetarian'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M10.8438 1.0437L11.1675 1.61245C11.1751 1.62756 11.1926 1.6602 11.2188 1.70893C11.6479 2.50689 14.3969 7.61903 13.5475 10.695C13.2478 11.7847 12.5998 12.7466 11.7025 13.4338C10.8052 14.121 9.70773 14.4958 8.5775 14.5012C8.11283 14.5017 7.65039 14.4369 7.20375 14.3087C6.83558 14.2107 6.48022 14.0697 6.145 13.8887C5.21938 14.3662 4.19399 14.618 3.1525 14.6237C2.76557 14.6203 2.37984 14.5819 2 14.509L2 13.1753C2.97507 13.3997 3.9952 13.338 4.9375 12.9962C4.30069 12.3511 3.84432 11.5501 3.614 10.6734C3.38368 9.79661 3.38747 8.87477 3.625 7.99995C4.48182 4.76973 9.81062 1.6402 10.2535 1.3801C10.2629 1.37459 10.2701 1.37036 10.275 1.36745L10.8438 1.0437ZM10.4773 12.6878C11.3646 12.1827 12.0155 11.3465 12.2875 10.3625V10.3537C12.8387 8.3237 11.29 4.67495 10.345 2.85495C8.60375 3.93995 5.375 6.24995 4.85875 8.34995C4.66029 9.07571 4.67883 9.84372 4.91209 10.5591C5.14535 11.2744 5.58311 11.9057 6.17125 12.375C7.18483 11.657 7.90557 10.5976 8.20125 9.3912L9.47 9.74995C9.13544 11.0184 8.42099 12.1542 7.4225 13.005L7.55375 13.0575C8.53881 13.3259 9.59009 13.1929 10.4773 12.6878Z',
                fill: '#242E30'
            }
        })]);
    }
};