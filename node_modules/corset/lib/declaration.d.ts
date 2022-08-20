/** @typedef {import('./rule').Rule} Rule */
/** @typedef {import('./property').PropertyDefinition} PropertyDefinition */
/** @typedef {import('./value').Value} Value */
/** @typedef {import('./template').ValueTemplate} ValueTemplate */
export class Declaration {
    /**
     *
     * @param {Rule} rule
     * @param {string} propertyName
     * @param {number} sourceOrder
     * @param {ValueTemplate} template
     */
    constructor(rule: Rule, propertyName: string, sourceOrder: number, template: ValueTemplate);
    /** @type {Rule} */
    rule: Rule;
    /** @type {string} */
    propertyName: string;
    /** @type {ValueTemplate | null} */
    keyTemplate: ValueTemplate | null;
    /** @type {number} */
    sourceOrder: number;
    /** @type {ValueTemplate} */
    template: ValueTemplate;
    /** @type {number} */
    flags: number;
    init(): void;
}
export namespace flags {
    const shorthand: number;
    const longhand: number;
    const multi: number;
    const behavior: number;
    const label: number;
}
export type Rule = import('./rule').Rule;
export type PropertyDefinition = import('./property').PropertyDefinition;
export type Value = import('./value').Value;
export type ValueTemplate = import('./template').ValueTemplate;
