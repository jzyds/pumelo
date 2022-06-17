//https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type
export type TypeArrayItem<A> = A extends readonly (infer T)[] ? T : never;
