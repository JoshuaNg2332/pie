import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--fire"><path fill-rule="evenodd" d="M8.24 2.56 5.082 5.72l-.002.002a4.477 4.477 0 0 0-.004 6.302 4.364 4.364 0 0 0 6.278.002 4.459 4.459 0 0 0-.003-6.304L8.24 2.56Zm-2.518 8.833-.11.107.109-.108.001.001Zm.666-.194a2.864 2.864 0 0 0 3.669-.013 256.57 256.57 0 0 0-1.833-1.817L6.388 11.2Zm4.366.24.064.061-.063-.062v.001Zm.197-1.481a256.172 256.172 0 0 0-2.208-2.18l-.53-.516-2.722 2.713a2.977 2.977 0 0 1 .652-3.196L8.233 4.69l2.05 2.086.006.005a2.961 2.961 0 0 1 .663 3.177Z" clip-rule="evenodd"></path></svg>';

export class IconFire extends HTMLElement {
    constructor () {
        super();
        const clone = template.content.cloneNode(true);
        this.root = this.attachShadow({ mode: 'open' });
        this.root.append(clone);
    }

    static get observedAttributes () {
        return ['size'];
    }

    get size () {
        return this.getAttribute('size');
    }

    set size (value) {
        this.setAttribute('size', value);
    }

    get class () {
        return this.getAttribute('class');
    }

    set class (value) {
        this.setAttribute('class', value);
    }

    connectedCallback () {
        const svg = this.root.querySelector('svg');

        if (svg.getAttribute('width') === null) {
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--fire', '', null, 'IconFire');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--fire');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--fire', '', newVal, 'IconFire');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-fire', IconFire);