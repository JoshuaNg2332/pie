import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--cloudSuccessLarge"><path d="M24.137 25.625H8.65a6.388 6.388 0 0 1-6.388-6.387A6.309 6.309 0 0 1 6.2 13.375a10.045 10.045 0 0 1 19.819 1.383 5.679 5.679 0 0 1 3.719 5.267 5.61 5.61 0 0 1-5.6 5.6ZM8.65 14.6a4.14 4.14 0 0 0-1.4.228 4.585 4.585 0 0 0-3.246 4.375 4.646 4.646 0 0 0 4.646 4.672h15.487a3.85 3.85 0 0 0 3.85-3.85 3.894 3.894 0 0 0-3.01-3.771l-.673-.158v-.691a8.304 8.304 0 0 0-16.179-2.537c.8-.062 1.603.024 2.371.253l-.525 1.671A4.762 4.762 0 0 0 8.65 14.6Zm6.125 5.775a1.453 1.453 0 0 0 1.05-.455l5.512-5.95-1.286-1.19-5.25 5.688-1.925-2.17-1.312 1.155 2.196 2.467a1.417 1.417 0 0 0 1.041.455h-.026Z"></path></svg>';

export class IconCloudSuccessLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudSuccessLarge', '', null, 'IconCloudSuccessLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--cloudSuccessLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--cloudSuccessLarge', '', newVal, 'IconCloudSuccessLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-cloud-success-large', IconCloudSuccessLarge);