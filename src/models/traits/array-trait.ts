import { Trait, TraitOpts, TraitSchema } from './trait';

export class ArrayTrait<V> extends Trait {
  value: V[];

  constructor(schema: TraitSchema, value: V[], opts?: TraitOpts) {
    super(schema, opts);
    this.value = value;
  }
}

export class StringArrayTrait extends ArrayTrait<string> {}
export class NumberArrayTrait extends ArrayTrait<number> {}
export class TruthArrayTrait extends ArrayTrait<boolean> {}
