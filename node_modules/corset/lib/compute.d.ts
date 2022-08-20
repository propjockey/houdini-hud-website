/**
 * @typedef {import('./binding').Binding} Binding
 * @typedef {import('./changeset').Changeset} Changeset
 * @typedef {import('./value').Value} Value
 * @typedef {import('./types').CheckedValue} CheckedValue
 * @typedef {import('./template').ValueTemplate} ValueTemplate
 *
 * @typedef {(c: Changeset, v: number) => number} VersionCalculate
 */
export class ComputedValue {
    /**
     *
     * @param {ValueTemplate} template
     * @param {Binding} binding
     * @param {number} index
     */
    constructor(template: ValueTemplate, binding: Binding, index?: number);
    /** @type {Binding} */
    binding: Binding;
    /** @type {number} */
    index: number;
    /** @type {any[]} */
    args: any[];
    /** @type {ComputedValue[]} */
    argDeps: ComputedValue[];
    /** @type {Map<string, ComputedValue> | null} */
    inputDeps: Map<string, ComputedValue> | null;
    /** @type {Map<string, any> | null} */
    inputProps: Map<string, any> | null;
    /** @type {Value} */
    raw: Value;
    /** @type {() => any[]} */
    listValue: () => any[];
    /**
     *
     * @param {number} index
     * @param {ComputedValue} dep
     * @param {Changeset} changeset
     */
    set(index: number, dep: ComputedValue, changeset: Changeset): void;
    /**
     * @param {Changeset} changeset
     * @returns {boolean}
     */
    dirty(changeset: Changeset): boolean;
    /**
     *
     * @param {Changeset} changeset
     */
    compute(changeset: Changeset): void;
    /**
     *
     * @param {Changeset} changeset
     * @returns {any}
     */
    check(changeset: Changeset): any;
    /**
     *
     * @param {Changeset} changeset
     * @returns {boolean}
     */
    calculate(changeset: Changeset): boolean;
    #private;
}
export type Binding = import('./binding').Binding;
export type Changeset = import('./changeset').Changeset;
export type Value = import('./value').Value;
export type CheckedValue = import('./types').CheckedValue;
export type ValueTemplate = import('./template').ValueTemplate;
export type VersionCalculate = (c: Changeset, v: number) => number;
