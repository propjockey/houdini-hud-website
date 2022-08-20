/**
 *
 * @param {Mountpoint} mp
 */
export function BehaviorContext(mp: Mountpoint): void;
export class BehaviorContext {
    /**
     *
     * @param {Mountpoint} mp
     */
    constructor(mp: Mountpoint);
    /** @type {Element | Document | ShadowRoot} */
    element: Element | Document | ShadowRoot;
    /** @type {() => void} */
    rebind: () => void;
    /** @type {Map<string, Map<string, any>>} */
    stores: Map<string, Map<string, any>>;
}
/**
 *
 * @param {HTMLElement | Document | ShadowRoot} element
 * @param {MountedBehaviorType} behavior
 * @param {Map<string, any>} [props]
 * @returns {Mountpoint}
 */
export function mount(element: HTMLElement | Document | ShadowRoot, behavior: MountedBehaviorType, props?: Map<string, any> | undefined): Mountpoint;
/**
 *
 * @param {string} name
 * @param {MountedBehaviorType} behavior
 * @returns {void}
 */
export function registerBehavior(name: string, behavior: MountedBehaviorType): void;
/**
 * @typedef {import('./sheet').SheetWithValues} SheetWithValues
 * @typedef {Record<string, any>} State
 * @typedef {import('./types').MountedBehavior} MountedBehavior
 * @typedef {import('./types').MountedBehaviorType} MountedBehaviorType
*/
/** @type {Map<string, MountedBehaviorType>} */
export let registry: Map<string, MountedBehaviorType>;
export class Mountpoint {
    /**
     *
     * @param {HTMLElement | Document | ShadowRoot} rootElement
     * @param {MountedBehaviorType} Behavior
     * @param {Map<string, any> | undefined} props
     */
    constructor(rootElement: HTMLElement | Document | ShadowRoot, Behavior: MountedBehaviorType, props: Map<string, any> | undefined);
    /** @type {HTMLElement | Document | ShadowRoot} */
    rootElement: HTMLElement | Document | ShadowRoot;
    /** @type {Map<string, any> | null} */
    props: Map<string, any> | null;
    /** @type {BehaviorContext} */
    context: BehaviorContext;
    /** @type {MountedBehavior} */
    behavior: MountedBehavior;
    /** @type {SheetWithValues | null} */
    bindings: SheetWithValues | null;
    /** @type {WeakMap<CallbackFunction, CallbackFunction>} */
    callbacks: WeakMap<CallbackFunction, CallbackFunction>;
    /** @type {Mountpoint | null} */
    parent: Mountpoint | null;
    /**
     *
     * @param {(...args: any[]) => any} callbackFn
     * @returns {CallbackFunction}
     */
    getCallback(callbackFn: (...args: any[]) => any): CallbackFunction;
    /**
     * @returns {boolean}
     */
    update(): boolean;
    unmount(): void;
}
export type CallbackFunction = (...args: any[]) => any;
export type AsyncCallbackFunction = (...args: any[]) => Promise<any>;
export type SheetWithValues = import('./sheet').SheetWithValues;
export type State = Record<string, any>;
export type MountedBehavior = import('./types').MountedBehavior;
export type MountedBehaviorType = import('./types').MountedBehaviorType;
