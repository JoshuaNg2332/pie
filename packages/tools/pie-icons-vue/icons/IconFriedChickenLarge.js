import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFriedChickenLarge',
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
            class: 'c-pieIcon c-pieIcon--friedChickenLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.9975 6.1825C9.94035 5.79477 9.99866 5.39879 10.1652 5.04399C10.3317 4.6892 10.599 4.3913 10.9338 4.1875C10.901 4.7448 11.035 5.29922 11.3188 5.78C11.5375 6.12125 11.9313 6.43625 12.3775 7.005C12.6364 7.3352 12.8214 7.71714 12.92 8.125C12.9594 8.36842 12.9594 8.61658 12.92 8.86C12.8773 9.08182 12.7975 9.29482 12.6838 9.49C12.2872 10.1188 11.6582 10.5654 10.9338 10.7325C11.1366 10.163 11.2917 9.57769 11.3975 8.9825C11.3975 8.86875 11.3975 8.79 11.3975 8.71125C11.3975 8.6325 11.345 8.58875 11.3275 8.51875C11.2293 8.34515 11.115 8.1811 10.9863 8.02875C10.5094 7.50432 10.1697 6.87006 9.9975 6.1825V6.1825ZM15.5363 6.5675C15.5633 6.60918 15.5867 6.65309 15.6063 6.69875C15.6063 6.75125 15.6063 6.8125 15.6063 6.9C15.5597 7.40098 15.4778 7.89805 15.3613 8.3875C15.677 8.33586 15.9779 8.21693 16.2436 8.03878C16.5093 7.86064 16.7336 7.62744 16.9013 7.355C17.1041 6.99359 17.1781 6.574 17.1113 6.165C17.0341 5.80488 16.8821 5.46501 16.665 5.1675C16.2888 4.66875 15.9913 4.4325 15.79 4.17875C15.5424 3.78817 15.4063 3.33734 15.3963 2.875C15.0985 3.03695 14.856 3.28434 14.7 3.58532C14.5441 3.8863 14.4818 4.22707 14.5213 4.56375C14.6291 5.16325 14.8915 5.72423 15.2825 6.19125C15.3761 6.31031 15.461 6.43606 15.5363 6.5675V6.5675ZM29.125 17.2688C29.1052 18.622 28.6686 19.9362 27.8748 21.0323C27.0809 22.1283 25.9683 22.953 24.6888 23.3938C24.0413 24.54 21.7138 27.655 16.3238 25.8C11.2838 24.05 9.7175 24.6187 8.72 26.1762C7.83625 27.515 7.25 28.3025 6.375 28.3025C6.00588 28.2866 5.64843 28.1684 5.3425 27.9613L5.24625 27.9C4.93411 27.6641 4.69751 27.3422 4.56542 26.9739C4.43332 26.6056 4.41146 26.2068 4.5025 25.8262C4.55908 25.425 4.52925 25.0163 4.415 24.6275C4.20447 24.1148 3.90862 23.6414 3.54 23.2275C3.20598 22.9163 2.98002 22.5066 2.89504 22.0581C2.81005 21.6095 2.87047 21.1456 3.0675 20.7337C3.75875 19.1412 4.9925 19.6312 5.5875 19.8587C6.03481 20.0756 6.52543 20.1882 7.0225 20.1882C7.51958 20.1882 8.0102 20.0756 8.4575 19.8587C9.5775 19.4037 10.2863 17.9775 11.03 16.4725C12.0713 14.3725 13.2438 12.0012 15.9563 11.6512C17.3626 10.2568 19.2292 9.423 21.2063 9.30625V9.30625C22.0895 9.33202 22.9576 9.54228 23.7548 9.92353C24.5519 10.3048 25.2605 10.8486 25.835 11.52C26.6925 11.8525 29.125 13.2088 29.125 17.2688ZM27.375 17.2688C27.375 13.8475 25.2138 13.13 25.1263 13.1037L24.8988 13.0337L24.75 12.85C24.3289 12.3181 23.7985 11.8827 23.1947 11.5732C22.5909 11.2638 21.9278 11.0875 21.25 11.0563V11.0563C20.2771 11.0926 19.3328 11.3953 18.52 11.9313C19.0118 12.0686 19.4872 12.2593 19.9375 12.5L19.0625 14.0225C18.2615 13.5721 17.3564 13.3397 16.4375 13.3488C14.6875 13.4713 13.8125 14.8975 12.6488 17.225C11.7738 18.975 10.8988 20.725 9.14875 21.4512C8.49373 21.7505 7.78201 21.9053 7.06188 21.9053C6.34175 21.9053 5.63003 21.7505 4.975 21.4512L4.72125 21.355V21.3988C4.6075 21.6613 4.6075 21.6612 4.94875 22.09C5.41983 22.6422 5.80077 23.2653 6.0775 23.9362C6.29569 24.5651 6.36752 25.2354 6.2875 25.8962C6.2875 26.0625 6.2875 26.29 6.2875 26.4212C6.63828 26.0405 6.96001 25.6339 7.25 25.205C9.18375 22.195 12.3775 22.58 16.875 24.1113C21.81 25.8175 23.1838 22.4663 23.245 22.3613C23.3879 22.0479 23.4662 21.709 23.4752 21.3647C23.4842 21.0205 23.4238 20.6779 23.2975 20.3575L24.8725 19.5C25.1019 20.0092 25.224 20.5603 25.2313 21.1188C25.8889 20.7149 26.4315 20.1486 26.807 19.4743C27.1824 18.8 27.378 18.0405 27.375 17.2688V17.2688Z',
                fill: '#242E30'
            }
        })]);
    }
};