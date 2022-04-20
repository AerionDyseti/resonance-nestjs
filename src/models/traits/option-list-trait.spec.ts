import { validate as uuid_validate } from 'uuid';

import { OptionListTrait, OptionListTraitSchema } from './option-list-trait';

describe('Option List Trait', () => {
  const schema: OptionListTraitSchema<string> = {
    displayText: 'Test Trait',
    name: 'test-trait',
    type: 'resource',
    options: ['Option A', 'Option B', 'Option C'],
  };

  it('generates a number trait with values matching schema', () => {
    const result = new OptionListTrait(schema, 'Option A');
    expect(result.name).toBe('test-trait');
    expect(result.displayText).toBe('Test Trait');
    expect(result.type).toBe('resource');
    expect(result.value).toEqual('Option A');
  });

  it('generates a valid UUID as id', () => {
    const result = new OptionListTrait(schema, 'Option A');
    const isValidUuid = uuid_validate(result.id);
    expect(isValidUuid).toBe(true);
  });

  it('defaults to an empty notes array', () => {
    const result = new OptionListTrait(schema, 'Option A');
    expect(result.notes).toEqual([]);
  });

  it('populates notes array if provided', () => {
    const opts = {
      notes: ['Test Note 1', 'Test Note 2'],
    };
    const result = new OptionListTrait(schema, 'Option A', opts);
    expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
  });

  it('does not change the selected value if an invalid value is chosen', () => {
    const result = new OptionListTrait(schema, 'Option A');
    result.value = 'Option Z';
    expect(result.value).toEqual('Option A');
  });

  it('changes the selected value if a valid value is chosen', () => {
    const result = new OptionListTrait(schema, 'Option A');
    result.value = 'Option B';
    expect(result.value).toEqual('Option B');
  });
});
