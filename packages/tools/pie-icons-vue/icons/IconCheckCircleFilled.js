import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--checkCircleFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.9848 4.81501L8.94484 10.24C8.83387 10.3616 8.69871 10.4587 8.54803 10.525C8.39735 10.5913 8.23447 10.6254 8.06984 10.625C7.90555 10.6233 7.74332 10.5883 7.59293 10.5221C7.44255 10.4559 7.30713 10.36 7.19484 10.24L4.98984 7.78126L5.96984 6.90626L8.08734 9.28627L13.2498 3.69501C12.1471 2.36407 10.575 1.50783 8.85875 1.30337C7.14246 1.09891 5.41323 1.56186 4.02868 2.5965C2.64413 3.63113 1.71016 5.1583 1.41991 6.86218C1.12967 8.56606 1.50536 10.3163 2.46928 11.751C3.43321 13.1857 4.91164 14.195 6.59882 14.5703C8.28601 14.9456 10.0529 14.6581 11.5341 13.7674C13.0153 12.8766 14.0975 11.4506 14.5569 9.78434C15.0163 8.11809 14.8178 6.339 14.0023 4.81501H13.9848Z',
                fill: '#242E30'
            }
        })]);
    }
};