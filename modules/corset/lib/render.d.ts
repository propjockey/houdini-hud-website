/**
 * @param {Map<Element | ShadowRoot | Document, Bindings>} allBindings
 * @param {Root} root
 * @param {Changeset} changeset
 * @returns {boolean}
 */
export function renderRoot(allBindings: Map<Element | ShadowRoot | Document, Bindings>, root: Root, changeset: Changeset): boolean;
/**
 * @param {Map<HostElement, Bindings>} allBindings
 * @param {Root} root
 */
export function unmountRoot(allBindings: Map<HostElement, Bindings>, root: Root): void;
export type Binding = import('./binding').Binding;
export type Bindings = import('./bindings').Bindings;
export type MountedBehaviorType = import('./types').MountedBehaviorType;
export type Changeset = import('./changeset').Changeset;
export type KeyedMultiBinding = import('./multi-binding').MultiBinding<string>;
export type ArrayMultiBinding = import('./multi-binding').MultiBinding<any[]>;
export type BehaviorMultiBinding = import('./multi-binding').MultiBinding<MountedBehaviorType>;
export type Root = import('./sheet').Root;
export type HostElement = import('./types').HostElement;
