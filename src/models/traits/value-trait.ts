import { Trait, TraitOpts, TraitSchema } from './trait';
import { Resource } from './types';

class ValueTrait<V> extends Trait {
  value: V;

  constructor(schema: TraitSchema, value: V, opts?: TraitOpts) {
    super(schema, opts);
    this.value = value;
  }
}

export class StringTrait extends ValueTrait<string> {}
export class NumberTrait extends ValueTrait<number> {}
export class TruthTrait extends ValueTrait<boolean> {}
export class ResourceTrait extends ValueTrait<Resource> {}
