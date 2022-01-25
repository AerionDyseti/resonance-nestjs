/**
 * The default 'kinds' of character properties.
 */
export type PropertyType =
  | 'number'
  | 'string'
  | 'tag'
  | 'option-list'
  | 'resource'
  | 'track';

/**
 * The default implementation of a property on an entity.
 */
export interface Property {
  Name: string;
  DisplayText: string;
  Type: PropertyType;
  CreatedDate: Date;
  DeletedDate: Date | null;
}
