import { Trait, TraitOpts, TraitSchema } from './trait';

export interface OptionListTraitSchema<V> extends TraitSchema {
  options: V[];
}

export interface OptionListTraitOpts<V> extends TraitOpts {
  /** lamda that determines whether value is a valid member of options */
  matcher?: (options: V[], value: V) => boolean;
}

export class OptionListTrait<V> extends Trait {
  private matcher: (options: V[], value: V) => boolean;
  private _value: V;
  options: V[];

  constructor(
    schema: OptionListTraitSchema<V>,
    value: V,
    opts?: OptionListTraitOpts<V>,
  ) {
    super(schema, opts);
    this.matcher = opts?.matcher ?? ((o, v) => o.includes(v));
    this.options = schema.options;
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(v: V) {
    if (this.matcher(this.options, v)) {
      this._value = v;
    }
  }
}
