import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHandCoins',
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
            class: 'c-pieIcon c-pieIcon--handCoins'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.7487 9.3125C13.3001 8.98128 12.7515 8.81367 12.1943 8.83755C11.6372 8.86143 11.1049 9.07536 10.6862 9.44375L9.42625 10.5725C9.22767 10.7466 8.97282 10.8429 8.70875 10.8438H8.39375C8.56675 10.5051 8.65672 10.1302 8.65625 9.75V8.21875H5.305C4.83165 8.21868 4.36888 8.35873 3.975 8.62125L1.95375 9.96875H1V11.2813H2.3475L4.70125 9.75C4.8789 9.62829 5.08967 9.56414 5.305 9.56625H7.34375V9.75C7.34375 10.0401 7.22852 10.3183 7.0234 10.5234C6.81828 10.7285 6.54008 10.8438 6.25 10.8438H5.27L4.605 12.1563H8.70875C9.291 12.1546 9.85319 11.9434 10.2925 11.5613L11.5612 10.4325C11.7535 10.2624 11.9983 10.1635 12.2548 10.1524C12.5112 10.1412 12.7637 10.2185 12.97 10.3713H13.0312L10.625 13.11C10.5214 13.2226 10.3956 13.3126 10.2556 13.3743C10.1156 13.4361 9.96428 13.4682 9.81125 13.4688H1V14.7813H9.84625C10.1851 14.7809 10.52 14.709 10.8291 14.5703C11.1382 14.4316 11.4145 14.2292 11.64 13.9763L15 10.205L13.7487 9.3125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8 6.90625C8.56244 6.90625 9.11225 6.73947 9.5799 6.42699C10.0476 6.11452 10.412 5.67038 10.6273 5.15076C10.8425 4.63113 10.8988 4.05935 10.7891 3.50771C10.6794 2.95608 10.4085 2.44937 10.0108 2.05167C9.61313 1.65396 9.10642 1.38312 8.55479 1.27339C8.00316 1.16367 7.43137 1.21998 6.91175 1.43522C6.39212 1.65046 5.94798 2.01495 5.63551 2.4826C5.32303 2.95025 5.15625 3.50006 5.15625 4.0625C5.15856 4.816 5.45891 5.53798 5.99172 6.07079C6.52452 6.60359 7.2465 6.90394 8 6.90625ZM8 2.53125C8.30285 2.53125 8.5989 2.62106 8.85072 2.78931C9.10253 2.95757 9.29879 3.19672 9.41469 3.47652C9.53059 3.75632 9.56091 4.0642 9.50183 4.36123C9.44275 4.65827 9.29691 4.93111 9.08276 5.14526C8.86861 5.35941 8.59577 5.50525 8.29873 5.56433C8.0017 5.62341 7.69382 5.59309 7.41402 5.47719C7.13422 5.3613 6.89507 5.16503 6.72681 4.91322C6.55856 4.66141 6.46875 4.36535 6.46875 4.0625C6.47105 3.6571 6.63311 3.26895 6.91978 2.98228C7.20645 2.69561 7.5946 2.53355 8 2.53125Z',
                fill: '#242E30'
            }
        })]);
    }
};