/**
 *
 * @this {FunctionRegistry | void}
 * @param {string} name
 * @param {ICorsetFunctionClass} ctr
 */
export function registerCustomFunction(name: string, ctr: ICorsetFunctionClass): void;
/**
 *
 * @param {string} propName
 * @returns {ICorsetFunctionClass}
 */
export function createLocalsScopeFunction(propName: string): ICorsetFunctionClass;
export namespace registry {
    const fns: Map<string, ICorsetFunctionClass>;
}
export namespace localsRegistry { }
export type Binding = import('./binding').Binding;
export type Changeset = import('./changeset').Changeset;
export type ICorsetFunction = import('./fn').ICorsetFunction;
export type ICorsetFunctionClass = import('./fn').ICorsetFunctionClass;
export type FunctionContext = import('./fn').FunctionContext;
export type MountedBehaviorType = import('./types').MountedBehaviorType;
/**
 * - Some explanation of what this is.
 */
export type FunctionRegistry = {
    fns: Map<string, ICorsetFunctionClass>;
};
export type MountValue = readonly [typeof import("./types").MountedBehavior, Map<string, any> | null];
