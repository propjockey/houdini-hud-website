/**
 * @typedef {import('./binding').Binding} Binding
 * @typedef {import('./changeset').Changeset} Changeset
 * @typedef {import('./compute').ComputedValue} ComputedValue
 * @typedef {import('./function').FunctionContext} FunctionContext
 * @typedef {import('./types').Value} Value
 * @typedef {import('./types').ValueType} ValueType
 * @typedef {import('./function').ICorsetFunctionClass} ICorsetFunctionClass
 * @typedef {import('./function').ICorsetFunction} ICorsetFunction
 */
export const NO_VALUE: unique symbol;
export function anyValue(value: any): ValueType;
/** @implements {Value} */
export class InsertionValue implements Value {
    /** @type {number} */
    current: number;
    /** @type {any} */
    value: any;
    /**
     *
     * @param {[number]} args
     * @param {Binding} _binding
     * @param {Map<string, any>} _props
     * @param {Changeset} changeset
     * @returns {boolean}
     */
    check([index]: [number], _binding: Binding, _props: Map<string, any>, { values }: Changeset): boolean;
    get(): any;
}
/** @implements {Value} */
export class SpaceSeparatedListValue implements Value {
    /**
     *
     * @param {any[]} values
     * @returns
     */
    get(values?: any[]): any[];
}
export class CommaSeparatedListValue extends SpaceSeparatedListValue {
}
/** @implements {Value} */
export class PlaceholderValue implements Value {
    current: number;
    /** @type {NO_VALUE | ComputedValue} */
    compute: typeof NO_VALUE | ComputedValue;
    /** @type {any} */
    value: any;
    /**
     *
     * @param {[string, any]} args
     * @param {Binding} binding
     * @param {Map<string, any>} _props
     * @param {Changeset} changeset
     * @returns {boolean}
     */
    check(args: [string, any], binding: Binding, _props: Map<string, any>, changeset: Changeset): boolean;
    get(): any;
    #private;
}
export function functionValue(CorsetFunction: ICorsetFunctionClass): ValueType;
export type Binding = import('./binding').Binding;
export type Changeset = import('./changeset').Changeset;
export type ComputedValue = import('./compute').ComputedValue;
export type FunctionContext = import('./function').FunctionContext;
export type Value = import('./types').Value;
export type ValueType = import('./types').ValueType;
export type ICorsetFunctionClass = import('./function').ICorsetFunctionClass;
export type ICorsetFunction = import('./function').ICorsetFunction;
