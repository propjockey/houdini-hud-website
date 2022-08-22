export class Changeset {
    /**
     *
     * @param {any[]} values
     */
    constructor(values: any[]);
    /** @type {any[]} */
    values: any[];
    /** @type {boolean} */
    selectors: boolean;
    /** @type {number} */
    flags: number;
}
