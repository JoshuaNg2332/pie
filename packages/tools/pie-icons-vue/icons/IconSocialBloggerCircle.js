import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialBloggerCircle',
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
            class: 'c-pieIcon c-pieIcon--bloggerCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#prefix__clip0_3633_3283)',
                fill: '#242E30'
            }
        }, [h('path', {
            attrs: {
                d: 'M8 1.175A6.781 6.781 0 1014.78 8 6.79 6.79 0 008 1.175zm0 12.25A5.468 5.468 0 118 2.488a5.468 5.468 0 010 10.937z'
            }
        }), h('path', {
            attrs: {
                d: 'M10.84 7.383a.364.364 0 00-.23-.079h-.336a.39.39 0 01-.398-.379c0-.17-.022-.338-.066-.502a1.942 1.942 0 00-.698-1.026A1.957 1.957 0 007.934 5h-.987a1.952 1.952 0 00-1.536.749A1.937 1.937 0 005 6.929v2.146c0 .148.016.296.049.44a1.944 1.944 0 001.177 1.344c.23.093.477.141.725.141h2.102c.169 0 .336-.021.5-.062A1.937 1.937 0 0011 9.061V7.688a.379.379 0 00-.16-.304zm-4.017-.801h1.173a.373.373 0 01.362.29.373.373 0 01-.34.44H6.81a.372.372 0 01-.291-.36.369.369 0 01.29-.362l.014-.008zm2.34 2.872H6.913a.355.355 0 01-.365-.298.35.35 0 01.285-.398.382.382 0 01.102 0H9.08a.369.369 0 01.12 0 .354.354 0 01.258.357.352.352 0 01-.294.33v.009z'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'prefix__clip0_3633_3283'
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