export const Name: ConstantCreator;
export const Keyword: ConstantCreator;
export const KEYWORD_REVERT_SHEET: Constant;
export const KEYWORD_ALL: Constant;
export type Constant = {};
export type ConstantCreator = ((value: string) => Constant) & {
    map: Map<string, Constant>;
    for: (s: string) => Constant;
    base: Object;
    is: (value: any) => boolean;
};
