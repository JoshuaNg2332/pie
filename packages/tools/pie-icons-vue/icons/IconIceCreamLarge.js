import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIceCreamLarge',
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
            class: 'c-pieIcon c-pieIcon--iceCreamLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.6975 15.6937C24.6273 15.5876 24.5347 15.498 24.4262 15.4313V14.25C24.4227 13.1811 24.045 12.1471 23.3587 11.3275C23.412 10.9918 23.4383 10.6524 23.4375 10.3125C23.4375 8.33995 22.6539 6.4482 21.2591 5.05339C19.8643 3.65859 17.9725 2.875 16 2.875C14.0274 2.875 12.1357 3.65859 10.7409 5.05339C9.34608 6.4482 8.56249 8.33995 8.56249 10.3125C8.56706 10.8672 8.63756 11.4194 8.77249 11.9575C8.4035 12.2901 8.10614 12.6944 7.89854 13.1457C7.69094 13.597 7.57745 14.0859 7.56499 14.5825V15.405C7.46631 15.4671 7.38022 15.5473 7.31124 15.6413C7.22078 15.7822 7.1727 15.9462 7.1727 16.1137C7.1727 16.2813 7.22078 16.4453 7.31124 16.5863C8.64999 18.7738 10.0062 20.7513 11.3187 22.7113C12.6312 24.6713 13.9437 26.57 15.2737 28.7138C15.351 28.8374 15.4578 28.9397 15.5847 29.0115C15.7115 29.0834 15.8543 29.1224 16 29.125V29.125C16.1441 29.1243 16.2858 29.0879 16.4125 29.0192C16.5392 28.9505 16.647 28.8516 16.7262 28.7312L24.6887 16.6475C24.7823 16.5064 24.8329 16.3412 24.8345 16.1719C24.836 16.0026 24.7885 15.8365 24.6975 15.6937V15.6937ZM16 4.625C17.4509 4.62711 18.8462 5.18368 19.9003 6.18079C20.9543 7.1779 21.5874 8.54016 21.67 9.98875C20.9911 9.66885 20.2504 9.50159 19.5 9.49875C19.0294 9.49638 18.561 9.5612 18.1087 9.69125L18.5812 11.3713C18.8667 11.2944 19.1606 11.2533 19.4562 11.2487C19.8655 11.2312 20.2742 11.2952 20.6585 11.4371C21.0427 11.579 21.395 11.7959 21.6946 12.0752C21.9943 12.3545 22.2354 12.6906 22.4039 13.064C22.5724 13.4373 22.665 13.8405 22.6762 14.25V15.475C20.9875 15.685 18.765 15.8863 18.5462 15.9038C17.9055 15.9157 17.2839 16.1244 16.7658 16.5017C16.2477 16.8789 15.8581 17.4064 15.65 18.0125C15.3525 18.6425 15.3 18.6425 15.125 18.6425C14.95 18.6425 14.8625 18.6425 14.5387 17.89C14.3774 17.3358 14.0551 16.842 13.6126 16.4712C13.1702 16.1004 12.6276 15.8694 12.0537 15.8075V15.8075C11.1787 15.7375 10.2512 15.6238 9.34124 15.4925V14.6175C9.34124 13.3925 10.61 12.4038 12.1675 12.4038C12.4141 12.405 12.6601 12.4284 12.9025 12.4738L13.2612 10.7238C12.3051 10.5227 11.312 10.5893 10.3912 10.9162C10.3533 10.7167 10.327 10.5151 10.3125 10.3125C10.3148 8.80479 10.9148 7.3595 11.9809 6.29339C13.047 5.22727 14.4923 4.62731 16 4.625V4.625ZM16 26.6312C14.9062 24.8812 13.795 23.2888 12.7275 21.7138C11.7562 20.2963 10.7587 18.8438 9.76999 17.3388C10.4262 17.4263 11.0912 17.4963 11.7737 17.5488H11.87C12.4125 17.5488 12.5787 17.855 12.9287 18.6162C13.0616 19.1041 13.3458 19.5372 13.7404 19.8533C14.1351 20.1693 14.6199 20.352 15.125 20.375C15.6044 20.3605 16.0669 20.1943 16.4458 19.9003C16.8247 19.6062 17.1006 19.1995 17.2337 18.7387C17.5575 18.0562 17.7412 17.6713 18.6512 17.6275C18.7562 17.6275 20.515 17.47 22.1512 17.2862L16 26.6312Z',
                fill: '#242E30'
            }
        })]);
    }
};