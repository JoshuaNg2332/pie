import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialFacebookCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--facebookCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_1595_1533)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.14 1.411A6.615 6.615 0 1014.755 8 6.624 6.624 0 008.14 1.411zm1.942 4.165h-.577a.656.656 0 00-.735.718v.831h1.26l-.201 1.313h-1.06v3.167a3.88 3.88 0 01-.708.061 3.743 3.743 0 01-.709-.061v-3.15H6.197v-1.33h1.155v-.98a1.601 1.601 0 011.75-1.75c.34.005.68.034 1.015.088l-.035 1.093z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_1595_1533'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: '#fff',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};