import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTermsAndConditions',
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
            class: 'c-pieIcon c-pieIcon--termsAndConditions'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_941)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.74396 4.48248H4.49146V5.79498H8.74396V4.48248Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.32896 7.51876H4.49146V8.83126H6.32896V7.51876Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9475 9.085C14.9475 8.25375 14.4837 7.50125 13.7487 7.125L12.83 6.6525V1.21875H1.21875V13.8187H6.39C6.64375 13.8187 6.88875 13.8187 7.11625 13.8187C7.67625 13.8187 8.16625 13.8188 8.62125 13.8013C8.8225 13.9588 9.0325 14.1163 9.2775 14.2475L10.9575 14.9562L12.6637 14.265C13.3987 13.8887 14.0025 13.32 14.4225 12.6025C14.72 12.1038 14.895 11.5 14.9562 10.73V9.085H14.9475ZM6.95875 9.05875V10.66L7.01125 11.0713C7.09 11.605 7.2475 12.0775 7.475 12.5062C7.13375 12.5062 6.775 12.5062 6.38125 12.5062H2.53125V2.53125H11.5175V5.97875L11.0275 5.725L8.2275 7.06375C7.4575 7.43125 6.9675 8.21 6.9675 9.05875H6.95875ZM13.285 11.9375C12.9962 12.4362 12.5675 12.83 12.1125 13.0662L10.9575 13.53L10.905 13.5037L9.8375 13.0575C9.5575 12.9087 9.3125 12.6988 9.09375 12.4625C9.00625 12.3663 8.91 12.2788 8.83125 12.1738C8.56875 11.815 8.39375 11.3775 8.315 10.8613L8.28 10.5988V9.05C8.28 8.70875 8.48125 8.385 8.79625 8.23625L11.01 7.1775L11.5262 7.44L12.8387 8.11375L13.1538 8.28C13.4513 8.4375 13.6437 8.74375 13.6437 9.07625V10.6862C13.6087 11.1762 13.495 11.5962 13.2938 11.92L13.285 11.9375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.5987 10.4237L9.99493 9.75873L9.02368 10.6425L9.88118 11.5787C10.0649 11.78 10.3187 11.8937 10.5812 11.8937H10.5899C10.8524 11.8937 11.1062 11.7887 11.2899 11.5962L12.8824 9.91623L11.9287 9.01498L10.5899 10.4237H10.5987Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_941'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: 'white',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};