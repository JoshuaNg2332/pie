import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCirclLarge',
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
            class: 'c-pieIcon c-pieIcon--checkCirclLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.3752 11.38L26.0364 12.8062C26.833 15.2512 26.7126 17.9025 25.6976 20.2651C24.6826 22.6277 22.8424 24.5402 20.5207 25.6455C18.1989 26.7508 15.5542 26.9734 13.0804 26.2716C10.6066 25.5699 8.4727 23.9918 7.07714 21.832C5.68159 19.6722 5.11975 17.0783 5.49653 14.5347C5.87331 11.991 7.16295 9.67137 9.12468 8.00888C11.0864 6.34638 13.5861 5.45465 16.1572 5.50017C18.7282 5.54568 21.1948 6.52534 23.0964 8.25623L24.2952 6.97873C22.0694 4.96092 19.1777 3.83482 16.1735 3.81598C13.1692 3.79713 10.2636 4.88687 8.01269 6.8766C5.76178 8.86633 4.32371 11.6163 3.97375 14.6001C3.62379 17.5839 4.38652 20.592 6.11595 23.0486C7.84537 25.5051 10.42 27.2376 13.3471 27.9145C16.2741 28.5913 19.3479 28.1648 21.9802 26.7168C24.6125 25.2688 26.6183 22.9009 27.6137 20.0663C28.6091 17.2317 28.5242 14.1296 27.3752 11.3537V11.38Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9414 19.5H14.8452L11.1177 15.3L9.8052 16.4637L13.5502 20.6812C13.7208 20.8631 13.9268 21.0081 14.1555 21.1074C14.3842 21.2067 14.6308 21.2582 14.8802 21.2587C15.1304 21.2587 15.3779 21.2065 15.6069 21.1056C15.8359 21.0047 16.0413 20.8572 16.2102 20.6725L25.2402 11.0475L26.5002 9.71748L27.4364 8.71998L26.1414 7.52998L25.4764 8.24748L24.2602 9.54248L14.9414 19.5Z',
                fill: '#242E30'
            }
        })]);
    }
};