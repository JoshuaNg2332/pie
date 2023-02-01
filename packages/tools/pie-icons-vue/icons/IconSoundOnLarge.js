import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOnLarge',
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
            class: 'c-pieIcon c-pieIcon--soundOnLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.625 3.995C17.3529 5.2135 16.0151 6.36146 14.6175 7.43375C13.0228 8.63793 11.3573 9.74533 9.63 10.75H6.375C5.67881 10.75 5.01113 11.0266 4.51884 11.5188C4.02656 12.0111 3.75 12.6788 3.75 13.375V18.625C3.75 19.3212 4.02656 19.9889 4.51884 20.4812C5.01113 20.9734 5.67881 21.25 6.375 21.25H9.63C11.3522 22.2494 13.0093 23.357 14.5913 24.5662C15.9978 25.6378 17.3444 26.7858 18.625 28.005L18.8788 28.25H21.25V3.75H18.8525L18.625 3.995ZM5.5 18.625V13.375C5.5 13.1429 5.59219 12.9204 5.75628 12.7563C5.92038 12.5922 6.14294 12.5 6.375 12.5H9V19.5H6.375C6.14294 19.5 5.92038 19.4078 5.75628 19.2437C5.59219 19.0796 5.5 18.8571 5.5 18.625ZM19.5 26.4475C18.277 25.2938 16.9949 24.2044 15.6587 23.1838C14.0911 21.9827 12.4519 20.8781 10.75 19.8763V12.1237C12.4532 11.124 14.0926 10.0193 15.6587 8.81625C16.9949 7.79562 18.277 6.70624 19.5 5.5525V26.4475ZM27.375 16C27.3753 17.3193 26.9497 18.6034 26.1614 19.6613C25.3731 20.7192 24.2643 21.4943 23 21.8713V20.0075C23.7789 19.6664 24.4415 19.1057 24.9068 18.3939C25.3721 17.6822 25.6198 16.8503 25.6198 16C25.6198 15.1497 25.3721 14.3178 24.9068 13.6061C24.4415 12.8943 23.7789 12.3336 23 11.9925V10.1287C24.2643 10.5057 25.3731 11.2808 26.1614 12.3387C26.9497 13.3966 27.3753 14.6807 27.375 16Z',
                fill: '#242E30'
            }
        })]);
    }
};