/**
 * The main DSL
 * @param {RawStringTemplate} strings
 * @param  {...any} values
 * @returns {SheetWithValues}
 */
export function sheet(strings: RawStringTemplate, ...values: any[]): SheetWithValues;
export type RawStringTemplate = import('./parser').RawStringTemplate;
export type PropertyDefinition = import('./property').PropertyDefinition;
export type ValueType = import('./types').ValueType;
export type Value = import('./types').Value;
export type ValueTemplate = import('./template').ValueTemplate;
export type ICorsetFunctionClass = import('./function').ICorsetFunctionClass;
import { SheetWithValues } from "./sheet.js";
