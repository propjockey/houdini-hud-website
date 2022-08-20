/**
 * @typedef {object} FragData
 * @property {any} item
 * @property {number} index
 *
 * @typedef {DocumentFragment & { nodes: Array<ChildNode>; data: FragData }} EachFragment
 * @typedef {import('./types').HostElement} HostElement
 */
export class EachInstance {
    /**
     * @param {HostElement} host
     * @param {HTMLTemplateElement} template
     * @param {string} key
     */
    constructor(host: HostElement, template: HTMLTemplateElement, key: string);
    /** @type {Map<any, EachFragment>} */
    keyMap: Map<any, EachFragment>;
    /** @type {HostElement} */
    host: HostElement;
    /** @type {HTMLTemplateElement} */
    template: HTMLTemplateElement;
    /** @type {string} */
    key: string;
    /** @type {(item: any, index: number) => any} */
    keyFn: (item: any, index: number) => any;
    /** @type {Comment} */
    start: Comment;
    /** @type {Comment} */
    end: Comment;
    /** @type {EachFragment[]} */
    frags: EachFragment[];
    /** @type {any[]} */
    keys: any[];
    /**
     *
     * @param {any[]} values
     */
    set(values: any[]): boolean;
    /**
     *
     * @param {EachFragment} frag
     * @param {*} value
     * @param {*} index
     */
    setData(frag: EachFragment, value: any, index: any): void;
    /**
     *
     * @param {number} index
     * @param {any} value
     * @returns
     */
    render(index: number, value: any): EachFragment;
    /**
     *
     * @param {any} _
     * @param {number} index
     * @returns {any}
     */
    keyNonKeyed(_: any, index: number): any;
    /**
     *
     * @param {any} value
     * @returns
     */
    keyKeyed(value: any): any;
    /**
     *
     * @param {EachFragment} frag
     * @returns
     */
    refrag(frag: EachFragment): EachFragment;
    /**
     * @param {EachFragment} frag
     * @param {EachFragment} ref
     */
    append(frag: EachFragment, ref: EachFragment): void;
    /**
     *
     * @param {EachFragment} frag
     * @param {EachFragment} ref
     */
    before(frag: EachFragment, ref: EachFragment): void;
    /**
     *
     * @param {EachFragment} frag
     */
    remove(frag: EachFragment): void;
    clear(startNode?: ChildNode | null, end?: Comment): void;
    /**
     *
     * @param {EachFragment} frag
     * @param {number} index
     * @param {any} value
     * @returns
     */
    updateFrag(frag: EachFragment, index: number, value: any): EachFragment;
    /**
     *
     * @param {any[]} values
     */
    updateValues(values?: any[]): boolean;
}
export type FragData = {
    item: any;
    index: number;
};
export type EachFragment = DocumentFragment & {
    nodes: Array<ChildNode>;
    data: FragData;
};
export type HostElement = import('./types').HostElement;
