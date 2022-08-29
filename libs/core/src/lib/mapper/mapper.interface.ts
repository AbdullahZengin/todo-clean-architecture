export interface IMapper<I, O> {
  mapTo(input: I): O;
  mapFrom(output: O): I;
}
