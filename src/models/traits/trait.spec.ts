import { validate as uuid_validate } from 'uuid';
import { Trait, TraitSchema } from './trait';

describe('Trait', () => {
  it('generates a simple trait with values matching schema', () => {
    const schema: TraitSchema = {
      displayText: 'Test Trait',
      name: 'test-trait',
      type: 'simple',
    };

    const result = new Trait(schema);
    expect(result.name).toBe('test-trait');
    expect(result.displayText).toBe('Test Trait');
    expect(result.type).toBe('simple');
  });

  it('does not require a type property on schema', () => {
    const schema: TraitSchema = {
      displayText: 'Test Trait',
      name: 'test',
    };

    const result = new Trait(schema);
    expect(result.type).toBe('simple');
  });

  it('generates a valid UUID as id', () => {
    const schema: TraitSchema = {
      name: 'test',
      displayText: 'Test',
      type: 'simple',
    };

    const result = new Trait(schema);
    const isValidUuid = uuid_validate(result.id);
    expect(isValidUuid).toBe(true);
  });

  it('defaults to an empty notes array', () => {
    const schema: TraitSchema = {
      displayText: 'Test',
      name: 'test',
      type: 'simple',
    };

    const result = new Trait(schema);
    expect(result.notes).toEqual([]);
  });

  it('populates notes array if provided', () => {
    const schema: TraitSchema = {
      displayText: 'Test',
      name: 'test',
      type: 'simple',
    };

    const notes = ['Test Note 1', 'Test Note 2'];
    const result = new Trait(schema, { notes });
    expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
  });
});
