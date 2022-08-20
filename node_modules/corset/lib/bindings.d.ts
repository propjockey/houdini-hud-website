/**
 * @typedef {import('./types').MountedBehaviorType} MountedBehaviorType
 * @typedef {import('./declaration').Declaration} Declaration
 * @typedef {import('./property').MultiPropertyDefinition} MultiPropertyDefinition
 * @typedef {import('./property').PropertyDefinition} PropertyDefinition
 * @typedef {import('./property').SimplePropertyDefinition} SimplePropertyDefinition
 * @typedef {import('./property').ShorthandPropertyDefinition} ShorthandPropertyDefinition
 * @typedef {import('./property').BehaviorMultiPropertyDefinition} BehaviorMultiPropertyDefinition
 * @typedef {import('./property').LonghandPropertyDefinition} LonghandPropertyDefinition
 * @typedef {import('./sheet').Root} Root
 * @typedef {import('./types').RootElement} RootElement
 */
export class Bindings {
    /**
     * Create bindings for a specific element.
     * @param {Root} root
     * @param {RootElement} element
     */
    constructor(root: Root, element: RootElement);
    root: import("./sheet").Root;
    /** @type {RootElement} */
    element: RootElement;
    /** @type {WeakSet<Declaration>} */
    seen: WeakSet<Declaration>;
    /** @type {Binding | null} */
    attachTemplate: Binding | null;
    /** @type {MultiBinding<MountedBehaviorType> | null} */
    behavior: MultiBinding<MountedBehaviorType> | null;
    /** @type {Binding | null} */
    text: Binding | null;
    /** @type {MultiBinding<string> | null} */
    data: MultiBinding<string> | null;
    /** @type {MultiBinding<any[]> | null} */
    each: MultiBinding<any[]> | null;
    /** @type {MultiBinding<string> | null} */
    event: MultiBinding<string> | null;
    /** @type {MultiBinding<string> | null} */
    attr: MultiBinding<string> | null;
    /** @type {MultiBinding<string> | null} */
    classToggle: MultiBinding<string> | null;
    /** @type {Binding | null} */
    mount: Binding | null;
    /** @type {MultiBinding<string> | null} */
    prop: MultiBinding<string> | null;
    /** @type {Binding | null} */
    storeRoot: Binding | null;
    /** @type {Binding | null} */
    storeSet: Binding | null;
    /** @type {Map<string, Binding>} */
    custom: Map<string, Binding>;
    /** @type {number} */
    flags: number;
    /**
     * Add a declaration to the binding map
     * @param {Declaration} declaration
     * @returns
     */
    add(declaration: Declaration): void;
    #private;
}
export type MountedBehaviorType = import('./types').MountedBehaviorType;
export type Declaration = import('./declaration').Declaration;
export type MultiPropertyDefinition = import('./property').MultiPropertyDefinition;
export type PropertyDefinition = import('./property').PropertyDefinition;
export type SimplePropertyDefinition = import('./property').SimplePropertyDefinition;
export type ShorthandPropertyDefinition = import('./property').ShorthandPropertyDefinition;
export type BehaviorMultiPropertyDefinition = import('./property').BehaviorMultiPropertyDefinition;
export type LonghandPropertyDefinition = import('./property').LonghandPropertyDefinition;
export type Root = import('./sheet').Root;
export type RootElement = import('./types').RootElement;
import { Binding } from "./binding.js";
import { MultiBinding } from "./multi-binding.js";
