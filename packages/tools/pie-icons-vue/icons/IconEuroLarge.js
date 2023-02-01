import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEuroLarge',
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
            class: 'c-pieIcon c-pieIcon--euroLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.8938 19.5L21.25 20.62C20.6999 21.2473 20.0195 21.7469 19.2562 22.0839C18.493 22.4209 17.6654 22.5872 16.8313 22.5713C15.5797 22.6019 14.3504 22.237 13.3182 21.5285C12.2861 20.82 11.5037 19.8039 11.0825 18.625H9.00001V16.875H10.6363C10.5984 16.5848 10.578 16.2926 10.575 16C10.578 15.7074 10.5984 15.4152 10.6363 15.125H9.00001V13.375H11.0563C11.4708 12.1952 12.2491 11.1774 13.279 10.4682C14.309 9.75907 15.5375 9.3951 16.7875 9.42875C17.6125 9.42542 18.4289 9.59679 19.183 9.93159C19.937 10.2664 20.6117 10.757 21.1625 11.3713L19.8675 12.5525C19.4783 12.1121 18.9983 11.7613 18.4606 11.5242C17.9229 11.287 17.3401 11.1692 16.7525 11.1788C15.9854 11.158 15.2278 11.3529 14.5658 11.7411C13.9038 12.1293 13.3639 12.6954 13.0075 13.375H16.875V15.125H12.4038C12.2987 15.7036 12.2987 16.2964 12.4038 16.875H16.875V18.625H13.0075C13.3666 19.3101 13.9119 19.8798 14.5807 20.2684C15.2495 20.657 16.0145 20.8486 16.7875 20.8213C17.3705 20.8426 17.9511 20.7353 18.4879 20.507C19.0248 20.2786 19.5048 19.9348 19.8938 19.5ZM28.25 16C28.25 18.4228 27.5316 20.7912 26.1855 22.8057C24.8395 24.8202 22.9263 26.3904 20.6879 27.3175C18.4495 28.2447 15.9864 28.4873 13.6101 28.0146C11.2339 27.542 9.05114 26.3752 7.33795 24.6621C5.62475 22.9489 4.45805 20.7661 3.98539 18.3899C3.51272 16.0136 3.75531 13.5505 4.68248 11.3121C5.60965 9.07373 7.17977 7.16054 9.19427 5.8145C11.2088 4.46845 13.5772 3.75 16 3.75C19.2489 3.75 22.3647 5.04062 24.6621 7.33794C26.9594 9.63526 28.25 12.7511 28.25 16ZM26.5 16C26.5 13.9233 25.8842 11.8932 24.7304 10.1665C23.5767 8.4398 21.9368 7.09398 20.0182 6.29926C18.0996 5.50454 15.9884 5.29661 13.9516 5.70175C11.9148 6.1069 10.0438 7.10693 8.57538 8.57538C7.10693 10.0438 6.1069 11.9148 5.70176 13.9516C5.29662 15.9884 5.50455 18.0996 6.29927 20.0182C7.09399 21.9368 8.4398 23.5767 10.1665 24.7304C11.8932 25.8842 13.9233 26.5 16 26.5C18.7848 26.5 21.4555 25.3938 23.4246 23.4246C25.3938 21.4555 26.5 18.7848 26.5 16Z',
                fill: '#242E30'
            }
        })]);
    }
};