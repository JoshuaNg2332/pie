import { getSvgProps } from '@justeattakeaway/pie-icons-configs';

const template = document.createElement('template');
template.innerHTML = '<style>:host-context(pie-icon-button) svg { width: var(--btn-icon-size); height: var(--btn-icon-size); }</style><svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 32 32" class="c-pieIcon c-pieIcon--pieLarge"><path d="M16.271 13.375a.895.895 0 0 0 .893-.893c0-.533-.402-1.793-.893-1.793-.49 0-.892 1.295-.892 1.793a.895.895 0 0 0 .893.893Z"></path><path d="M11.73 12.159a.918.918 0 0 0 .586.228h.105a.97.97 0 0 0 .35-.114.911.911 0 0 0 .272-.245c.332-.368.892-1.61.507-1.934-.07-.061-.157-.079-.262-.079-.49 0-1.304.534-1.584.84a1.06 1.06 0 0 0-.21.306.867.867 0 0 0 .018.726c.052.114.13.21.218.298v-.026Z"></path><path d="M19.57 12.229a.904.904 0 0 0 .341.096h.07a.985.985 0 0 0 .28-.044.822.822 0 0 0 .307-.175.97.97 0 0 0 .218-.28.902.902 0 0 0 .097-.341c0-.114 0-.236-.044-.35a.823.823 0 0 0-.175-.306c-.28-.315-1.129-.832-1.628-.832-.096 0-.183.018-.245.07-.376.324.175 1.567.508 1.934a.97.97 0 0 0 .28.219l-.009.009Z"></path><path d="M17.05 18.354h-1.793v3.579h1.793v-3.58Z"></path><path d="m12.588 21.933-.884-3.58h-1.82l.893 3.58h1.81Z"></path><path d="M22.423 18.354h-1.811l-.875 3.579h1.802l.884-3.58Z"></path><path d="M29.186 14.661h-.638l-2.083-4.042a6.052 6.052 0 0 0-4.497-2.748h-.105c-.814-.096-1.435-.639-1.82-1.085-.849-.989-2.17-1.496-3.92-1.496h-.228c-1.75 0-3.071.499-3.92 1.496-.376.446-1.006.989-1.82 1.076h-.105a6.097 6.097 0 0 0-4.497 2.765l-2.065 4.034h-.674v1.75h1.96l2.03 9.214h18.471l2.03-9.214h1.881v-1.75ZM7.05 11.538a4.308 4.308 0 0 1 3.185-1.926h.105c1.102-.122 2.126-.7 2.966-1.688.499-.587 1.374-.884 2.59-.884h.228c1.216 0 2.091.297 2.59.884.84.988 1.872 1.566 2.966 1.671h.105c1.321.14 2.485.857 3.159 1.899l1.627 3.167H5.456l1.602-3.123h-.009Zm16.817 12.337H8.204l-1.645-7.464h18.953l-1.646 7.464Z"></path></svg>';

export class IconPieLarge extends HTMLElement {
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
            const svgSize = getSvgProps('c-pieIcon c-pieIcon--pieLarge', '', null, 'IconPieLarge');
            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
        }

        this.setAttribute('class', 'c-pieIcon c-pieIcon--pieLarge');
        this.root.append(svg);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        const svg = this.root.querySelector('svg');
        let svgSize;

        if (attr === 'size') {
            svgSize = getSvgProps('c-pieIcon c-pieIcon--pieLarge', '', newVal, 'IconPieLarge');

            svg.setAttribute('width', svgSize.width);
            svg.setAttribute('height', svgSize.height);
            this.root.append(svg);
        }
    }
}

customElements.define('icon-pie-large', IconPieLarge);