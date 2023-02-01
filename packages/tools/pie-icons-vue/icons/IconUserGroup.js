import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserGroup',
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
            class: 'c-pieIcon c-pieIcon--userGroup'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.5275 10.1263C14.3089 9.43953 13.8277 8.86708 13.1888 8.53376C13.6462 8.06613 13.9024 7.43795 13.9024 6.78376C13.9024 6.12957 13.6462 5.50139 13.1888 5.03376C12.7108 4.57237 12.0724 4.31451 11.4081 4.31451C10.7438 4.31451 10.1054 4.57237 9.6275 5.03376C9.48536 5.17819 9.3619 5.33986 9.26 5.51501C8.88083 5.33145 8.46502 5.23609 8.04375 5.23609C7.62248 5.23609 7.20667 5.33145 6.8275 5.51501C6.72842 5.3456 6.60784 5.18972 6.46875 5.05126C5.98146 4.59099 5.33655 4.33456 4.66625 4.33456C3.99595 4.33456 3.35104 4.59099 2.86375 5.05126C2.39563 5.52746 2.13331 6.1685 2.13331 6.83626C2.13331 7.50402 2.39563 8.14506 2.86375 8.62126C2.23704 8.92832 1.75171 9.46374 1.5075 10.1175L1 11.5H2.4175L2.75 10.5375C2.85206 10.2431 3.04351 9.98781 3.29763 9.80742C3.55175 9.62702 3.85586 9.53048 4.1675 9.53126H5.9175C5.97414 9.61586 6.03859 9.69496 6.11 9.76751L6.285 9.91626C5.8557 10.0906 5.47353 10.3637 5.16948 10.7134C4.86543 11.063 4.64806 11.4794 4.535 11.9288L4.115 13.25H5.48L5.75125 12.2875C5.81947 11.9642 5.98985 11.6715 6.23722 11.4525C6.48459 11.2335 6.79584 11.0998 7.125 11.0713H8.875C9.20726 11.0962 9.52247 11.2282 9.77332 11.4475C10.0242 11.6668 10.1971 11.9616 10.2663 12.2875L10.5375 13.25H11.9025L11.5 11.92C11.3851 11.4725 11.1669 11.0582 10.863 10.7103C10.5591 10.3623 10.1779 10.0904 9.75 9.91626L9.925 9.76751C9.99641 9.69496 10.0609 9.61586 10.1175 9.53126H11.9375C12.2327 9.54556 12.5164 9.64955 12.7509 9.82935C12.9855 10.0091 13.1596 10.2562 13.25 10.5375L13.6 11.5H15L14.5275 10.1263ZM12.235 5.92626C12.4438 6.14104 12.5653 6.42577 12.5759 6.72513C12.5866 7.02449 12.4855 7.31711 12.2925 7.54615C12.0994 7.77519 11.8281 7.9243 11.5313 7.96452C11.2345 8.00473 10.9333 7.93318 10.6862 7.76376C10.6786 7.27139 10.5298 6.79156 10.2575 6.38126C10.3134 6.21151 10.406 6.05616 10.5288 5.92626C10.7573 5.70443 11.0633 5.58035 11.3819 5.58035C11.7004 5.58035 12.0064 5.70443 12.235 5.92626ZM8.98 6.87126C9.17563 7.06541 9.30919 7.31328 9.36373 7.58345C9.41828 7.85361 9.39135 8.13389 9.28636 8.38873C9.18137 8.64356 9.00306 8.86147 8.77404 9.01482C8.54502 9.16816 8.27562 9.25002 8 9.25002C7.72438 9.25002 7.45498 9.16816 7.22596 9.01482C6.99694 8.86147 6.81863 8.64356 6.71364 8.38873C6.60865 8.13389 6.58172 7.85361 6.63627 7.58345C6.69081 7.31328 6.82437 7.06541 7.02 6.87126C7.28581 6.62275 7.63611 6.48451 8 6.48451C8.36389 6.48451 8.71419 6.62275 8.98 6.87126ZM3.73 5.92626C3.96591 5.70158 4.27921 5.57626 4.605 5.57626C4.93079 5.57626 5.24409 5.70158 5.48 5.92626C5.59466 6.04234 5.68143 6.18297 5.73375 6.33751C5.43277 6.78182 5.27129 7.30586 5.27 7.84251C5.02961 7.98617 4.74868 8.04685 4.47043 8.01523C4.19218 7.98362 3.93203 7.86144 3.73 7.66751C3.61465 7.55285 3.52311 7.41652 3.46065 7.26635C3.39819 7.11619 3.36603 6.95515 3.36603 6.79251C3.36603 6.62987 3.39819 6.46884 3.46065 6.31867C3.52311 6.16851 3.61465 6.03217 3.73 5.91751V5.92626Z',
                fill: '#242E30'
            }
        })]);
    }
};