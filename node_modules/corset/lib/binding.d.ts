export class Binding {
    /**
     *
     * @param {string} propertyName
     * @param {Root} root
     * @param {Element | ShadowRoot | Document} element
     */
    constructor(propertyName: string, root: Root, element: Element | ShadowRoot | Document);
    root: import("./sheet").Root;
    /** @type {string} */
    propertyName: string;
    /** @type {RootElement} */
    rootElement: RootElement;
    /** @type {Element | ShadowRoot | Document} */
    element: Element | ShadowRoot | Document;
    /** @type {Declaration[]} */
    declarations: Declaration[];
    /** @type {Map<Declaration, ComputedValue>} */
    computedValues: Map<Declaration, ComputedValue>;
    /** @type {ComputedValue | null} */
    compute: ComputedValue | null;
    /** @type {any} */
    value: any;
    /** @type {any} */
    initial: any;
    /**
     *
     * @param {Declaration} declaration
     * @returns {ComputedValue}
     */
    add(declaration: Declaration): ComputedValue;
    /**
     *
     * @param {Declaration} declaration
     */
    push(declaration: Declaration): void;
    /**
     *
     * @param {Declaration} declaration
     * @param {ValueTemplate} template
     * @param {number} [index]
     * @returns {ComputedValue}
     */
    addTemplate(declaration: Declaration, template: ValueTemplate, index?: number | undefined): ComputedValue;
    /**
     *
     * @param {Changeset} changeset
     * @returns
     */
    dirty(changeset: Changeset): boolean;
    /**
     *
     * @param {Changeset} changeset
     */
    update(changeset: Changeset): any;
    /**
     *
     * @returns {any[]}
     */
    getList(): any[];
    /**
     * Whether this binding has received a value yet or not.
     * @returns {boolean}
     */
    hasValue(): boolean;
    walk(): Generator<import("./declaration").Declaration, void, unknown>;
    /**
     *
     * @param {string} selector
     * @returns {boolean}
     */
    matches(selector: string): boolean;
    #private;
}
export type Changeset = import('./changeset').Changeset;
export type Declaration = import('./declaration').Declaration;
export type ValueTemplate = import('./template').ValueTemplate;
export type PropertyDefinition = import('./property').PropertyDefinition;
export type ShorthandPropertyDefinition = import('./property').ShorthandPropertyDefinition;
export type LonghandPropertyDefinition = import('./property').LonghandPropertyDefinition;
export type PropertyPropName = import('./pinfo').PropertyPropName;
export type Root = import('./sheet').Root;
export type RootElement = import('./types').RootElement;
import { ComputedValue } from "./compute.js";
