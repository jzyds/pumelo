export type TypeArrayItem<A> = A extends readonly (infer T)[] ? T : never;
