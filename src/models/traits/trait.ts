import { v5 as uuid_v5 } from 'uuid';

import { TraitType } from './types';
import { UUID_NAMESPACE } from '../../constants/uuid';

export interface TraitSchema {
  type?: TraitType;
  name: string;
  displayText: string;
}

export interface TraitOpts {
  notes?: string[];
}

export class Trait {
  id: string;
  type: TraitType;
  name: string;
  displayText: string;
  notes: string[];

  constructor(schema: TraitSchema, opts?: TraitOpts) {
    this.id = uuid_v5(schema.name, UUID_NAMESPACE);
    this.type = schema.type ?? 'simple';
    this.name = schema.name;
    this.displayText = schema.displayText;
    this.notes = opts?.notes ?? [];
  }
}
