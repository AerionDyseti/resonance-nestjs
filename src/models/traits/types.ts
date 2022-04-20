export type TraitType =
  | 'simple'
  | 'string'
  | 'number'
  | 'truth'
  | 'resource'
  | 'option-list'
  | 'track';

export type Resource = {
  current: number;
  max: number;
};
