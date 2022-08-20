/**
 * @typedef {import('./property').PropertyDefinition} PropertyDefinition
 * @typedef {import('./property').SimplePropertyDefinition} SimplePropertyDefinition
 * @typedef {import('./sheet').Root} Root
 */
export class SimpleBinding extends Binding {
    /**
     *
     * @param {SimplePropertyDefinition} defn
     * @param {string} propName
     * @param {[Root, Element | ShadowRoot | Document]} args
     */
    constructor(defn: SimplePropertyDefinition, propName: string, args_0: import("./sheet").Root, args_1: Element | Document | ShadowRoot);
    /** @type {SimplePropertyDefinition} */
    defn: SimplePropertyDefinition;
    #private;
}
export type PropertyDefinition = import('./property').PropertyDefinition;
export type SimplePropertyDefinition = import('./property').SimplePropertyDefinition;
export type Root = import('./sheet').Root;
import { Binding } from "./binding.js";
