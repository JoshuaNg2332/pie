import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconFriedChickenLarge',
    props: {
        size: iconSize.large,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--friedChickenLarge', 'IconFriedChickenLarge');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 32 32',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.998 6.183a1.995 1.995 0 0 1 .936-1.995 2.808 2.808 0 0 0 .385 1.592c.218.341.612.656 1.058 1.225.26.33.444.712.543 1.12a2.3 2.3 0 0 1 0 .735 2.004 2.004 0 0 1-.236.63 2.818 2.818 0 0 1-1.75 1.242c.203-.569.358-1.154.464-1.75v-.27c0-.08-.053-.123-.07-.193a3.204 3.204 0 0 0-.342-.49 4.295 4.295 0 0 1-.989-1.846Zm5.538.385a.88.88 0 0 1 .07.13V6.9c-.046.501-.128.998-.245 1.487a2.231 2.231 0 0 0 1.54-1.032 1.83 1.83 0 0 0 .21-1.19c-.077-.36-.229-.7-.446-.997-.376-.5-.674-.736-.875-.99a2.537 2.537 0 0 1-.394-1.303 1.698 1.698 0 0 0-.875 1.689c.108.6.37 1.16.761 1.627.094.12.179.245.254.377Zm13.589 10.7a6.58 6.58 0 0 1-4.436 6.126c-.648 1.146-2.975 4.261-8.365 2.406-5.04-1.75-6.607-1.181-7.604.376-.884 1.339-1.47 2.127-2.345 2.127a1.995 1.995 0 0 1-1.032-.342l-.097-.061a2.012 2.012 0 0 1-.744-2.074c.057-.401.027-.81-.087-1.198a4.908 4.908 0 0 0-.875-1.4 2.144 2.144 0 0 1-.473-2.494c.692-1.593 1.925-1.103 2.52-.875a3.289 3.289 0 0 0 2.87 0c1.12-.455 1.83-1.882 2.573-3.387 1.041-2.1 2.214-4.47 4.926-4.82a8.138 8.138 0 0 1 5.25-2.346 6.335 6.335 0 0 1 4.629 2.214c.857.332 3.29 1.689 3.29 5.749Zm-1.75 0c0-3.42-2.161-4.138-2.249-4.164l-.227-.07-.149-.184a4.743 4.743 0 0 0-3.5-1.794 5.32 5.32 0 0 0-2.73.875 7 7 0 0 1 1.418.569l-.875 1.523a5.25 5.25 0 0 0-2.625-.674c-1.75.122-2.625 1.549-3.79 3.876-.874 1.75-1.75 3.5-3.5 4.226a5.021 5.021 0 0 1-4.173 0l-.254-.096v.044c-.114.262-.114.262.228.691a6.897 6.897 0 0 1 1.128 1.846c.219.63.29 1.3.21 1.96v.525c.351-.38.673-.787.963-1.216 1.934-3.01 5.127-2.625 9.625-1.094 4.935 1.706 6.309-1.645 6.37-1.75a2.564 2.564 0 0 0 .052-2.003l1.575-.858c.23.51.352 1.06.36 1.619a4.498 4.498 0 0 0 2.143-3.85Z',
            },
        })]);
    },
};
