/**
 * Parses sources from a tagged template
 * @param {RawStringTemplate} source
 * @param {any[]} values
 * @returns {void}
 */
export function parse(source: RawStringTemplate, values: any[]): void;
export const mem8: Uint8Array;
export const mem32: Uint32Array;
/** @type {Uint8Array} The array of the heap */
export let heap8: Uint8Array;
/** @type {Uint32Array} */
export let heap32: Uint32Array;
/** @type {Uint8Array} */
export let data8: Uint8Array;
export function next(): 0 | 1;
export function readString(start: number, end: number): string;
export function readProperty(): string;
export function readNumberOfValues(): number;
export function readFirstValuePointer(): number;
export type WasmParserInterface = {
    get_tag: () => number;
    parse: (n: number) => 1 | 0;
    reset: (n: number) => number;
    memory: {
        buffer: ArrayBuffer;
    };
};
export type RawStringTemplate = {
    raw: readonly string[] | ArrayLike<string>;
};
export type WasmParser = WebAssembly.Exports & WasmParserInterface;
