export namespace flags {
    const text: number;
    const classToggle: number;
    const event: number;
    const custom: number;
    const each: number;
    const prop: number;
    const attr: number;
    const data: number;
    const attach: number;
    const behavior: number;
    const storeRoot: number;
    const storeSet: number;
}
export namespace features {
    export const shorthand: number;
    export const longhand: number;
    export const keyed: number;
    export const multi: number;
    export const oldValues: number;
    const behavior_1: number;
    export { behavior_1 as behavior };
    export const labeled: number;
}
/** @type {Record<string, PropertyDefinition>} */
export const properties: Record<string, PropertyDefinition>;
export type PropertyDefinition = import('./pinfo').PropertyDefinition;
export type SimplePropertyDefinition = import('./pinfo').SimplePropertyDefinition;
export type ShorthandPropertyDefinition = import('./pinfo').ShorthandPropertyDefinition;
export type LonghandPropertyDefinition = import('./pinfo').LonghandPropertyDefinition;
export type MultiPropertyDefinition = import('./pinfo').MultiPropertyDefinition;
export type BehaviorMultiPropertyDefinition = import('./pinfo').BehaviorMultiPropertyDefinition;
