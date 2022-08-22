/**
 * Takes a custom property name like --my-prop and makes it
 * PascalCase like MyProp for use with dataset.
 * @param {string} propertyName
 * @returns {string}
 */
export function pascalCase(propertyName: string): string;
/**
 * Creates a key for dataset for looking up a key
 * @param {string} keyName
 * @returns {string}
 */
export function datasetKey(propertyName: any): string;
/**
 * Creates a key for dataset for looking up custom properties
 * @param {string} propertyName
 * @returns {string}
 */
export function datasetPropKey(propertyName: string): string;
