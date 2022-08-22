/**
 * @typedef {import('./rule').Rule} Rule
 */
export class Root {
    /**
     * @param {RootElement | Mountpoint} rootElement
     * @param {BindingSheet} sheet
     */
    constructor(rootElement: RootElement | Mountpoint, sheet: BindingSheet);
    /** @type {Mountpoint | null} */
    mount: Mountpoint | null;
    /** @type {RootElement} */
    rootElement: RootElement;
    /** @type {Rule[]} */
    rules: Rule[];
    /** @type {Map<HostElement, Bindings>} */
    bindingMap: Map<HostElement, Bindings>;
    /** @type {(a: () => any) => any} */
    getCallback: (a: () => any) => any;
    /** @type {any[]} */
    values: any[];
    /** @type {number} */
    queue: number;
    /**
     * @param {any[]} values
     * @returns {boolean}
     */
    update(values?: any[]): boolean;
    /**
     * Collect all of the bindings
     */
    collect(): void;
    unmount(): void;
}
export class BindingSheet {
    /** @type {Rule[]} */
    rules: Rule[];
    /**
     * Add a rule to this sheet
     * @param {Rule} rule
     */
    addRule(rule: Rule): void;
}
export class SheetWithValues {
    /**
     * @param {BindingSheet} sheet
     * @param {any[]} values
     */
    constructor(sheet: BindingSheet, values: any[]);
    /** @type {WeakMap<Element | Mountpoint, Root>} */
    roots: WeakMap<Element | Mountpoint, Root>;
    sheet: BindingSheet;
    values: any[];
    /**
     * @param {HTMLElement | Mountpoint} rootElement
     * @returns {boolean}
     */
    update(rootElement: HTMLElement | Mountpoint): boolean;
    /**
     *
     * @param {Element | Mountpoint} rootElement
     */
    unmount(rootElement: Element | Mountpoint): void;
}
export type HostElement = import('./types').HostElement;
export type RootElement = import('./types').RootElement;
export type Rule = import('./rule').Rule;
import { Mountpoint } from "./mount.js";
import { Bindings } from "./bindings.js";
