/**
 * @typedef {string | Constant | null | MountedBehaviorType} MultiBindingKey
 */
/**
 * @template {string | Constant | Array<any> | MountedBehaviorType} K
 */
export class MultiBinding<K extends string | any[] | typeof import("./types").MountedBehavior | import("./constants.js").Constant> extends Binding {
    /**
     * @param {ShorthandPropertyDefinition | MultiPropertyDefinition | BehaviorMultiPropertyDefinition} defn
     * @param {ConstructorParameters<typeof Binding>} args
     */
    constructor(defn: ShorthandPropertyDefinition | MultiPropertyDefinition | BehaviorMultiPropertyDefinition, propertyName: string, root: import("./sheet.js").Root, element: Element | Document | ShadowRoot);
    /** @type {ShorthandPropertyDefinition | MultiPropertyDefinition | BehaviorMultiPropertyDefinition} */
    defn: ShorthandPropertyDefinition | MultiPropertyDefinition | BehaviorMultiPropertyDefinition;
    /** @type {number} */
    numberOfValues: number;
    /** @type {number} */
    numberOfValuesWithKey: number;
    /** @type {Set<MultiBindingKey>} */
    active: Set<MultiBindingKey>;
    /** @type {Map<MultiBindingKey, any[]> | null} */
    oldValues: Map<MultiBindingKey, any[]> | null;
    /**
    *
    * @param {Changeset} changeset
    * @returns {Generator<[[K, ...any[]], boolean], void, unknown>}
    */
    calculate(changeset: Changeset): Generator<[[K, ...any[]], boolean], void, unknown>;
    /**
     *
     * @param {Changeset} changeset
     * @returns {Generator<any[], void, unknown>}
     */
    values(changeset: Changeset): Generator<any[], void, unknown>;
    /**
     *
     * @returns {Generator<any[], void, unknown>}
     */
    current(): Generator<any[], void, unknown>;
    /**
     *
     * @param {Changeset} changeset
     */
    changes(changeset: Changeset): Generator<[K, ...any[]], void, unknown>;
    #private;
}
export type MountedBehaviorType = import('./types').MountedBehaviorType;
export type Changeset = import('./changeset').Changeset;
export type Constant = import('./constants').Constant;
export type Declaration = import('./declaration').Declaration;
export type ValueTemplate = import('./template').ValueTemplate;
export type PropertyDefinition = import('./property').PropertyDefinition;
export type MultiPropertyDefinition = import('./pinfo').MultiPropertyDefinition;
export type ShorthandPropertyDefinition = import('./property').ShorthandPropertyDefinition;
export type LonghandPropertyDefinition = import('./property').LonghandPropertyDefinition;
export type BehaviorMultiPropertyDefinition = import('./property').BehaviorMultiPropertyDefinition;
export type MultiBindingKey = string | Constant | null | MountedBehaviorType;
import { Binding } from "./binding.js";
