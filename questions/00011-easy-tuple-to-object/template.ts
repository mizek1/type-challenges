type TupleToObject<T extends readonly (string | number)[]> = { [x in T[number]]: x }
