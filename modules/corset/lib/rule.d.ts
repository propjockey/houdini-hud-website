export class Rule {
    /**
     * @param {string} selector
     */
    constructor(selector: string);
    /** @type {String} */
    selector: string;
    /** @type {Array<Declaration>} */
    declarations: Array<Declaration>;
    /** @type {number} */
    specificity: number;
    /** @type {(el: RootElement) => Iterable<Element | ShadowRoot | Document>} */
    querySelectorAll: (el: RootElement) => Iterable<Element | ShadowRoot | Document>;
    /** @param {Declaration} declaration */
    addDeclaration(declaration: Declaration): void;
}
export type Declaration = import('./declaration').Declaration;
export type RootElement = import('./types').RootElement;
