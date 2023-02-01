import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLeiLarge',
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
            class: 'c-pieIcon c-pieIcon--leiLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.77001 10.75H11.3625V19.395H9.77001V10.75ZM19.0713 16.35C19.0704 16.5354 19.0498 16.7202 19.01 16.9013H14.5738C14.65 17.2599 14.8511 17.5798 15.1411 17.8041C15.4311 18.0284 15.7912 18.1426 16.1575 18.1263C16.4326 18.1394 16.7075 18.0956 16.9649 17.9978C17.2223 17.8999 17.4568 17.75 17.6538 17.5575L18.625 18.4938C18.3042 18.8357 17.9123 19.1031 17.4768 19.277C17.0414 19.4508 16.5731 19.527 16.105 19.5C15.6866 19.515 15.2697 19.443 14.8805 19.2887C14.4914 19.1343 14.1384 18.901 13.8441 18.6033C13.5497 18.3056 13.3202 17.9501 13.1702 17.5593C13.0202 17.1684 12.9529 16.7507 12.9725 16.3325C12.9482 15.9233 13.009 15.5135 13.1511 15.1289C13.2931 14.7444 13.5133 14.3935 13.7978 14.0983C14.0822 13.8032 14.4248 13.5702 14.8039 13.414C15.1829 13.2579 15.5902 13.1821 16 13.1912C16.4157 13.1729 16.8307 13.2427 17.2175 13.3961C17.6043 13.5496 17.9543 13.7832 18.2444 14.0815C18.5345 14.3799 18.7581 14.7363 18.9006 15.1273C19.0431 15.5182 19.1013 15.9349 19.0713 16.35ZM17.4875 15.755C17.4436 15.3999 17.2645 15.0753 16.9874 14.8488C16.7104 14.6223 16.3568 14.5113 16 14.5387C15.6481 14.5163 15.301 14.63 15.0306 14.8565C14.7602 15.0829 14.5872 15.4046 14.5475 15.755H17.4875ZM21.4338 10.8288C21.3086 10.8173 21.1825 10.8328 21.0639 10.8745C20.9454 10.9161 20.8372 10.9827 20.7467 11.0699C20.6562 11.1571 20.5855 11.2627 20.5395 11.3796C20.4935 11.4966 20.4732 11.622 20.48 11.7475C20.48 12.0005 20.5805 12.243 20.7594 12.4219C20.9382 12.6008 21.1808 12.7013 21.4338 12.7013C21.6867 12.7013 21.9293 12.6008 22.1082 12.4219C22.287 12.243 22.3875 12.0005 22.3875 11.7475C22.3943 11.622 22.374 11.4966 22.328 11.3796C22.282 11.2627 22.2113 11.1571 22.1208 11.0699C22.0303 10.9827 21.9221 10.9161 21.8036 10.8745C21.685 10.8328 21.5589 10.8173 21.4338 10.8288ZM20.6375 19.395H22.23V13.375H20.6375V19.395ZM28.25 16C28.25 18.4228 27.5316 20.7912 26.1855 22.8057C24.8395 24.8202 22.9263 26.3904 20.6879 27.3175C18.4495 28.2447 15.9864 28.4873 13.6101 28.0146C11.2339 27.542 9.05114 26.3752 7.33795 24.6621C5.62475 22.9489 4.45805 20.7661 3.98539 18.3899C3.51272 16.0136 3.75531 13.5505 4.68248 11.3121C5.60965 9.07373 7.17977 7.16054 9.19427 5.8145C11.2088 4.46845 13.5772 3.75 16 3.75C19.2489 3.75 22.3647 5.04062 24.6621 7.33794C26.9594 9.63526 28.25 12.7511 28.25 16ZM26.5 16C26.5 13.9233 25.8842 11.8932 24.7304 10.1665C23.5767 8.4398 21.9368 7.09398 20.0182 6.29926C18.0996 5.50454 15.9884 5.29661 13.9516 5.70175C11.9148 6.1069 10.0438 7.10693 8.57538 8.57538C7.10693 10.0438 6.1069 11.9148 5.70176 13.9516C5.29662 15.9884 5.50455 18.0996 6.29927 20.0182C7.09399 21.9368 8.4398 23.5767 10.1665 24.7304C11.8932 25.8842 13.9233 26.5 16 26.5C18.7848 26.5 21.4555 25.3938 23.4246 23.4246C25.3938 21.4555 26.5 18.7848 26.5 16Z',
                fill: '#242E30'
            }
        })]);
    }
};