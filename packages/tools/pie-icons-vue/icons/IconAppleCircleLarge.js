import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAppleCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--appleCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 28.25C13.5772 28.25 11.2088 27.5316 9.19427 26.1855C7.17977 24.8395 5.60965 22.9263 4.68248 20.6879C3.75531 18.4495 3.51272 15.9864 3.98539 13.6101C4.45805 11.2339 5.62475 9.05114 7.33795 7.33795C9.05114 5.62475 11.2339 4.45805 13.6101 3.98539C15.9864 3.51272 18.4495 3.75531 20.6879 4.68248C22.9263 5.60965 24.8395 7.17977 26.1855 9.19427C27.5316 11.2088 28.25 13.5772 28.25 16C28.25 19.2489 26.9594 22.3647 24.6621 24.6621C22.3647 26.9594 19.2489 28.25 16 28.25ZM16 5.50001C13.9233 5.50001 11.8932 6.11582 10.1665 7.26957C8.4398 8.42333 7.09399 10.0632 6.29927 11.9818C5.50455 13.9005 5.29662 16.0117 5.70176 18.0485C6.1069 20.0853 7.10693 21.9562 8.57538 23.4246C10.0438 24.8931 11.9148 25.8931 13.9516 26.2983C15.9884 26.7034 18.0996 26.4955 20.0182 25.7007C21.9368 24.906 23.5767 23.5602 24.7304 21.8335C25.8842 20.1068 26.5 18.0767 26.5 16C26.5 13.2152 25.3938 10.5445 23.4246 8.57538C21.4555 6.60625 18.7848 5.50001 16 5.50001Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.1251 19.5C22.0886 19.5637 22.0593 19.6312 22.0376 19.7013C21.6244 20.8723 20.9684 21.9428 20.1126 22.8425C19.7945 23.169 19.3769 23.3806 18.9255 23.4439C18.4741 23.5073 18.0145 23.4189 17.6188 23.1925C17.2198 22.9622 16.7671 22.8409 16.3063 22.8409C15.8455 22.8409 15.3929 22.9622 14.9938 23.1925C14.6065 23.3972 14.1713 23.4939 13.7338 23.4725C13.4726 23.4487 13.2196 23.3692 12.9917 23.2394C12.7638 23.1096 12.5663 22.9325 12.4126 22.72C10.7761 21.0074 9.8667 18.7275 9.87506 16.3588C9.87982 15.693 10.0197 15.0351 10.2863 14.425C10.4632 13.9691 10.7336 13.5553 11.0802 13.2103C11.4268 12.8654 11.8418 12.5968 12.2985 12.422C12.7552 12.2473 13.2435 12.1701 13.7318 12.1956C14.2202 12.2211 14.6978 12.3487 15.1338 12.57C15.4171 12.7336 15.7385 12.8197 16.0657 12.8197C16.3928 12.8197 16.7142 12.7336 16.9976 12.57C17.2987 12.4145 17.6155 12.2914 17.9426 12.2025C18.7284 12.0506 19.5416 12.1359 20.2788 12.4475C20.8511 12.6764 21.3312 13.0888 21.6438 13.62C21.4338 13.8038 21.2326 13.97 21.0401 14.1625C20.8105 14.3508 20.61 14.572 20.4451 14.8188C20.1039 15.4282 19.965 16.1303 20.0483 16.8237C20.1317 17.5172 20.433 18.1663 20.9088 18.6775C21.225 19.0648 21.6479 19.3508 22.1251 19.5Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.9577 8.52753C19.0288 9.06036 18.9405 9.60232 18.7039 10.085C18.5268 10.5449 18.2381 10.9536 17.8639 11.2743C17.4898 11.595 17.0418 11.8178 16.5602 11.9225C15.8777 12.0713 15.8952 12.08 15.9652 11.3888C16.0637 10.7002 16.3719 10.0588 16.8478 9.55154C17.3238 9.04431 17.9443 8.69593 18.6252 8.55378C18.7477 8.53628 18.8527 8.53628 18.9577 8.52753Z',
                fill: '#242E30'
            }
        })]);
    }
};