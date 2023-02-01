import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconShare',
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
            class: 'c-pieIcon c-pieIcon--share'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.3225 9.07631C11.9514 9.0763 11.5855 9.16338 11.2542 9.33055C10.9229 9.49772 10.6354 9.74031 10.415 10.0388L6.03998 8.37631C6.04898 8.25105 6.04898 8.12531 6.03998 8.00006C6.04898 7.8748 6.04898 7.74906 6.03998 7.62381L10.415 5.96131C10.7551 6.41018 11.2439 6.72334 11.7938 6.84473C12.3438 6.96612 12.919 6.88781 13.4164 6.62382C13.9139 6.35984 14.3012 5.92741 14.5089 5.40395C14.7167 4.88049 14.7314 4.30018 14.5503 3.7669C14.3693 3.23361 14.0043 2.78218 13.5208 2.49341C13.0373 2.20464 12.4668 2.09738 11.9114 2.19085C11.356 2.28431 10.8521 2.57238 10.4897 3.0035C10.1274 3.43462 9.93026 3.98064 9.93373 4.54381C9.93005 4.60792 9.93005 4.6722 9.93373 4.73631L5.46248 6.43381C5.2453 6.18104 4.97709 5.97707 4.67548 5.83532C4.37388 5.69356 4.04569 5.61722 3.71248 5.61131C3.07894 5.61131 2.47136 5.86298 2.02338 6.31096C1.5754 6.75894 1.32373 7.36652 1.32373 8.00006C1.32373 8.6336 1.5754 9.24118 2.02338 9.68916C2.47136 10.1371 3.07894 10.3888 3.71248 10.3888C4.04569 10.3829 4.37388 10.3066 4.67548 10.1648C4.97709 10.023 5.2453 9.81908 5.46248 9.56631L9.95998 11.2638C9.9563 11.3279 9.9563 11.3922 9.95998 11.4563C9.95825 11.9291 10.0969 12.3918 10.3583 12.7858C10.6197 13.1798 10.9922 13.4873 11.4285 13.6695C11.8648 13.8516 12.3454 13.9002 12.8094 13.809C13.2733 13.7178 13.6998 13.491 14.0347 13.1573C14.3697 12.8235 14.598 12.3979 14.6909 11.9343C14.7838 11.4707 14.737 10.99 14.5565 10.553C14.3759 10.116 14.0698 9.74237 13.6768 9.4795C13.2837 9.21663 12.8216 9.07631 12.3487 9.07631H12.3225ZM12.3225 3.46756C12.5353 3.46756 12.7434 3.53068 12.9204 3.64894C13.0974 3.7672 13.2353 3.93529 13.3168 4.13195C13.3983 4.32861 13.4196 4.545 13.378 4.75378C13.3365 4.96255 13.234 5.15432 13.0835 5.30483C12.933 5.45535 12.7412 5.55785 12.5324 5.59938C12.3237 5.64091 12.1073 5.61959 11.9106 5.53813C11.714 5.45668 11.5459 5.31873 11.4276 5.14174C11.3094 4.96475 11.2462 4.75667 11.2462 4.54381C11.2462 4.40247 11.2741 4.26252 11.3282 4.13195C11.3822 4.00137 11.4615 3.88272 11.5615 3.78279C11.6614 3.68285 11.78 3.60357 11.9106 3.54948C12.0412 3.4954 12.1811 3.46756 12.3225 3.46756ZM3.67748 9.07631C3.46462 9.07631 3.25654 9.01319 3.07955 8.89493C2.90256 8.77667 2.76461 8.60858 2.68316 8.41192C2.6017 8.21526 2.58038 7.99887 2.62191 7.79009C2.66344 7.58132 2.76594 7.38955 2.91646 7.23904C3.06697 7.08852 3.25874 6.98602 3.46751 6.94449C3.67629 6.90296 3.89268 6.92428 4.08934 7.00573C4.286 7.08719 4.45409 7.22514 4.57235 7.40213C4.69061 7.57912 4.75373 7.7872 4.75373 8.00006C4.75373 8.2855 4.64034 8.55925 4.4385 8.76108C4.23667 8.96292 3.96292 9.07631 3.67748 9.07631ZM12.3225 12.5326C12.1078 12.5324 11.8981 12.468 11.7203 12.3477C11.5424 12.2274 11.4047 12.0566 11.3247 11.8574C11.2446 11.6582 11.226 11.4396 11.2712 11.2297C11.3164 11.0199 11.4234 10.8283 11.5783 10.6797C11.7332 10.531 11.9291 10.4321 12.1406 10.3957C12.3522 10.3592 12.5698 10.3869 12.7656 10.4751C12.9613 10.5633 13.1262 10.708 13.239 10.8907C13.3518 11.0733 13.4075 11.2855 13.3987 11.5001C13.3874 11.7778 13.2691 12.0405 13.0684 12.233C12.8678 12.4254 12.6005 12.5328 12.3225 12.5326Z',
                fill: '#242E30'
            }
        })]);
    }
};