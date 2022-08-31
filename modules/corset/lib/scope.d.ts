/**
 *
 * @param {string | null} dataPropName
 * @param {string} dataSelector
 * @param {string} propName
 * @returns
 */
export function lookup(element: any, dataSelector: string, propName: string): any;
/**
 *
 * @param {HTMLElement} element
 * @param {symbol} listSym
 * @param {string} key
 * @param {symbol} keySym
 * @param {string} dataProp
 * @param {any} value
 */
export function addItemToScope(element: HTMLElement, listSym: symbol, key: string, keySym: symbol, dataProp: string, value: any): void;
/**
 *
 * @param {HTMLElement} element
 * @param {symbol} listSym
 * @param {string} key
 * @param {symbol} keySym
 * @param {string} dataProp
 */
export function removeItemFromScope(element: HTMLElement, listSym: symbol, key: string, keySym: symbol, dataProp: string): void;
