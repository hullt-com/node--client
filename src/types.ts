export interface Dict<T> {
  [key: string]: T;
}

export interface NestedDict<T> extends Dict<T | NestedDict<T>> {}

export type Tuple<T, U = T> = [T, U];
