/**
 * @typedef {import('./value').ValueType} ValueType
 */
/**
 *
 * @typedef {Object} ValueTemplate
 * @property {ValueType} Value
 * @property {ValueTemplate[]} deps
 * @property {Map<string, ValueTemplate> | null} [inputProperties]
 */
/**
 *
 * @param {ValueType} Value
 * @param {ValueTemplate[]} deps
 * @returns {ValueTemplate}
 */
export function createValueTemplate(Value: ValueType, deps?: ValueTemplate[]): ValueTemplate;
export type ValueType = import('./value').ValueType;
export type ValueTemplate = {
    Value: ValueType;
    deps: ValueTemplate[];
    inputProperties?: Map<string, ValueTemplate> | null | undefined;
};
