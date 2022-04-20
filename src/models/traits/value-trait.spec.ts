import { validate as uuid_validate } from 'uuid';

import { TraitSchema } from './trait';
import { Resource } from './types';
import {
  NumberTrait,
  ResourceTrait,
  StringTrait,
  TruthTrait,
} from './value-trait';

describe('Value Traits', () => {
  describe('Number Trait', () => {
    it('generates a number trait with values matching schema', () => {
      const schema: TraitSchema = {
        displayText: 'Test Trait',
        name: 'test-trait',
        type: 'number',
      };

      const result = new NumberTrait(schema, 123);
      expect(result.name).toBe('test-trait');
      expect(result.displayText).toBe('Test Trait');
      expect(result.type).toBe('number');
      expect(result.value).toEqual(123);
    });

    it('generates a valid UUID as id', () => {
      const schema: TraitSchema = {
        name: 'test',
        displayText: 'Test',
        type: 'number',
      };

      const result = new NumberTrait(schema, 123);
      const isValidUuid = uuid_validate(result.id);
      expect(isValidUuid).toBe(true);
    });

    it('defaults to an empty notes array', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'number',
      };

      const result = new NumberTrait(schema, 123);
      expect(result.notes).toEqual([]);
    });

    it('populates notes array if provided', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'number',
      };

      const notes = ['Test Note 1', 'Test Note 2'];
      const result = new NumberTrait(schema, 123, { notes });
      expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
    });
  });

  describe('String Trait', () => {
    it('generates a string trait with values matching schema', () => {
      const schema: TraitSchema = {
        displayText: 'Test Trait',
        name: 'test-trait',
        type: 'string',
      };

      const result = new StringTrait(schema, 'Test Value');
      expect(result.name).toBe('test-trait');
      expect(result.displayText).toBe('Test Trait');
      expect(result.type).toBe('string');
      expect(result.value).toEqual('Test Value');
    });

    it('generates a valid UUID as id', () => {
      const schema: TraitSchema = {
        name: 'test',
        displayText: 'Test',
        type: 'string',
      };

      const result = new StringTrait(schema, 'Test Value');
      const isValidUuid = uuid_validate(result.id);
      expect(isValidUuid).toBe(true);
    });

    it('defaults to an empty notes array', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'string',
      };

      const result = new StringTrait(schema, 'Test Value');
      expect(result.notes).toEqual([]);
    });

    it('populates notes array if provided', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'string',
      };

      const notes = ['Test Note 1', 'Test Note 2'];
      const result = new StringTrait(schema, 'Test Value', { notes });
      expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
    });
  });

  describe('Truth Trait', () => {
    it('generates a truth trait with values matching schema', () => {
      const schema: TraitSchema = {
        displayText: 'Test Trait',
        name: 'test-trait',
        type: 'truth',
      };

      const result = new TruthTrait(schema, false);
      expect(result.name).toBe('test-trait');
      expect(result.displayText).toBe('Test Trait');
      expect(result.type).toBe('truth');
      expect(result.value).toEqual(false);
    });

    it('generates a valid UUID as id', () => {
      const schema: TraitSchema = {
        name: 'test',
        displayText: 'Test',
        type: 'truth',
      };

      const result = new TruthTrait(schema, false);
      const isValidUuid = uuid_validate(result.id);
      expect(isValidUuid).toBe(true);
    });

    it('defaults to an empty notes array', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'truth',
      };

      const result = new TruthTrait(schema, false);
      expect(result.notes).toEqual([]);
    });

    it('populates notes array if provided', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'truth',
      };

      const notes = ['Test Note 1', 'Test Note 2'];
      const result = new TruthTrait(schema, false, { notes });
      expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
    });
  });

  describe('Resource Trait', () => {
    it('generates a resource trait with values matching schema', () => {
      const schema: TraitSchema = {
        displayText: 'Test Trait',
        name: 'test-trait',
        type: 'resource',
      };

      const value: Resource = { max: 100, current: 0 };
      const result = new ResourceTrait(schema, value);
      expect(result.name).toBe('test-trait');
      expect(result.displayText).toBe('Test Trait');
      expect(result.type).toBe('resource');
      expect(result.value.max).toEqual(100);
      expect(result.value.current).toEqual(0);
    });

    it('generates a valid UUID as id', () => {
      const schema: TraitSchema = {
        name: 'test',
        displayText: 'Test',
        type: 'truth',
      };

      const value: Resource = { max: 100, current: 0 };
      const result = new ResourceTrait(schema, value);
      const isValidUuid = uuid_validate(result.id);
      expect(isValidUuid).toBe(true);
    });

    it('defaults to an empty notes array', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'truth',
      };

      const value: Resource = { max: 100, current: 0 };
      const result = new ResourceTrait(schema, value);
      expect(result.notes).toEqual([]);
    });

    it('populates notes array if provided', () => {
      const schema: TraitSchema = {
        displayText: 'Test',
        name: 'test',
        type: 'truth',
      };

      const value: Resource = { max: 100, current: 0 };
      const notes = ['Test Note 1', 'Test Note 2'];
      const result = new ResourceTrait(schema, value, { notes });
      expect(result.notes).toEqual(['Test Note 1', 'Test Note 2']);
    });
  });
});
