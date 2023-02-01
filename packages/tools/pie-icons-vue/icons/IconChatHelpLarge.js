import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatHelpLarge',
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
            class: 'c-pieIcon c-pieIcon--chatHelpLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375C5.67881 4.625 5.01113 4.90156 4.51884 5.39384C4.02656 5.88613 3.75 6.55381 3.75 7.25V29.125H6.01625L11.0037 24.1287C11.1714 23.9689 11.3933 23.8782 11.625 23.875H25.625C26.3212 23.875 26.9889 23.5984 27.4812 23.1062C27.9734 22.6139 28.25 21.9462 28.25 21.25V7.25C28.25 6.55381 27.9734 5.88613 27.4812 5.39384C26.9889 4.90156 26.3212 4.625 25.625 4.625ZM26.5 21.25C26.5 21.4821 26.4078 21.7046 26.2437 21.8687C26.0796 22.0328 25.8571 22.125 25.625 22.125H11.625C10.929 22.1256 10.2618 22.4026 9.77 22.895L5.5 27.165V7.25C5.5 7.01794 5.59219 6.79538 5.75628 6.63128C5.92038 6.46719 6.14294 6.375 6.375 6.375H25.625C25.8571 6.375 26.0796 6.46719 26.2437 6.63128C26.4078 6.79538 26.5 7.01794 26.5 7.25V21.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.63 19.115C16.63 19.3642 16.5561 19.6078 16.4177 19.815C16.2792 20.0222 16.0824 20.1837 15.8522 20.2791C15.622 20.3745 15.3686 20.3994 15.1242 20.3508C14.8798 20.3022 14.6553 20.1822 14.479 20.006C14.3028 19.8297 14.1828 19.6052 14.1342 19.3608C14.0856 19.1164 14.1105 18.8631 14.2059 18.6328C14.3013 18.4026 14.4628 18.2058 14.67 18.0673C14.8772 17.9289 15.1208 17.855 15.37 17.855C15.5358 17.8538 15.7002 17.8856 15.8536 17.9485C16.007 18.0114 16.1463 18.1042 16.2636 18.2214C16.3808 18.3387 16.4736 18.478 16.5365 18.6314C16.5994 18.7848 16.6312 18.9492 16.63 19.115ZM15.5538 8.125C14.5354 8.10084 13.542 8.4423 12.7538 9.0875L12.6925 9.14L13.9 10.3475H13.9613C14.4103 10.0263 14.9492 9.85482 15.5013 9.8575C15.7291 9.83445 15.9592 9.85896 16.177 9.92947C16.3949 9.99999 16.5957 10.115 16.7668 10.2671C16.9379 10.4193 17.0755 10.6054 17.1709 10.8135C17.2664 11.0216 17.3176 11.2473 17.3213 11.4762C17.3213 12.6575 16.2975 13.5412 14.6438 13.8037H14.5738L14.74 16.2187H16.0788L16.2363 14.8712H16.3588C17.1653 14.6905 17.8904 14.2504 18.423 13.6182C18.9556 12.9861 19.2663 12.1968 19.3075 11.3712C19.3075 9.70875 18.1525 8.125 15.5538 8.125Z',
                fill: '#242E30'
            }
        })]);
    }
};