import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPie',
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
            class: 'c-pieIcon c-pieIcon--pie'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.05254 6.90626C8.15754 6.90626 8.26254 6.86251 8.34129 6.78376C8.42004 6.70501 8.46379 6.60001 8.46379 6.49501C8.46379 6.25001 8.28004 5.68126 8.05254 5.68126C7.82504 5.68126 7.64129 6.27626 7.64129 6.49501C7.64129 6.60001 7.68504 6.70501 7.76379 6.78376C7.84254 6.86251 7.94754 6.90626 8.05254 6.90626Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.97879 6.34626C5.97879 6.34626 6.07504 6.40751 6.12754 6.42501C6.17129 6.43376 6.20629 6.44251 6.25004 6.44251C6.26754 6.44251 6.28504 6.44251 6.29379 6.44251C6.34629 6.44251 6.40754 6.41626 6.45129 6.39001C6.49504 6.36376 6.53879 6.32001 6.57379 6.27626C6.72254 6.11001 6.98504 5.54126 6.81004 5.39251C6.77504 5.36626 6.74004 5.35751 6.68754 5.35751C6.46004 5.35751 6.09254 5.60251 5.96129 5.74251C5.91754 5.77751 5.89129 5.83001 5.86504 5.88251C5.83879 5.93501 5.83004 5.98751 5.83004 6.04876C5.83004 6.10126 5.84754 6.16251 5.86504 6.21501C5.89129 6.26751 5.92629 6.31126 5.97004 6.34626H5.97879Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.56629 6.38126C9.61004 6.40751 9.66254 6.41626 9.72379 6.42501H9.75004C9.75004 6.42501 9.83754 6.42501 9.88129 6.40751C9.93379 6.39001 9.97754 6.36376 10.0213 6.32876C10.065 6.29376 10.0913 6.25001 10.1175 6.20626C10.1438 6.16251 10.1525 6.11001 10.1613 6.04876C10.1613 5.99626 10.1613 5.94376 10.1438 5.89126C10.1263 5.83876 10.1 5.79501 10.065 5.75126C9.93379 5.61126 9.54879 5.37501 9.32129 5.37501C9.27754 5.37501 9.23379 5.38376 9.20754 5.41001C9.03254 5.55876 9.28629 6.12751 9.44379 6.29376C9.47879 6.33751 9.52254 6.36376 9.56629 6.39001V6.38126Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.7725 7.38751H14.5713L13.5475 5.41001C12.9963 4.55251 12.095 4.01001 11.0275 3.89626C10.6775 3.86126 10.3975 3.61626 10.2313 3.41501C9.89879 3.03001 9.26004 2.57501 8.06129 2.57501H7.94754C6.74879 2.57501 6.10129 3.03001 5.77754 3.41501C5.60254 3.61626 5.33129 3.86126 4.92879 3.89626C3.91379 4.00126 3.02129 4.55251 2.43504 5.46251L1.44629 7.38751H1.22754V8.70001H2.06754L3.10879 13.4338H12.935L13.9763 8.70001H14.7725V7.38751ZM3.56379 6.11876C3.89629 5.60251 4.43879 5.27001 5.11254 5.20001C5.73379 5.13876 6.30254 4.81501 6.77504 4.26376C7.04629 3.94876 7.56254 3.87876 7.94754 3.87876H8.06129C8.44629 3.87876 8.96254 3.94876 9.23379 4.26376C9.70629 4.80626 10.275 5.13001 10.9488 5.20001C11.5613 5.26126 12.1038 5.59376 12.41 6.05751L13.0925 7.37876H2.91629L3.56379 6.11001V6.11876ZM11.8763 12.1213H4.15879L3.40629 8.70001H12.6288L11.8763 12.1213Z',
                fill: '#242E30'
            }
        })]);
    }
};