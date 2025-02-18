import { describe, it, expect } from 'vitest';

import { RSQLBuilderMongoDB } from './';

describe('RSQLBuilderMongoDB', () => {
    it("Test operator REGEX ('=regex=')", () => {
        expect(new RSQLBuilderMongoDB().regex('name', 'Filip').toString()).toBe('name=regex="Filip"');
    });

    it("Test operator NOT REGEX ('=notregex=')", () => {
        expect(new RSQLBuilderMongoDB().notRegex('name', 'Filip').toString()).toBe('name=notregex="Filip"');
    });

    it("Test operator LIKE ('=regex=')", () => {
        expect(new RSQLBuilderMongoDB().like('name', 'Fil*').toString()).toBe('name=regex="Fil*"');
    });

    it("Test operator LIKE ('=notregex=')", () => {
        expect(new RSQLBuilderMongoDB().notLike('name', 'Fil*').toString()).toBe('name=notregex="Fil*"');
    });

    it("Test operator EXISTS ('=exists=')", () => {
        expect(new RSQLBuilderMongoDB().exists('name').toString()).toBe('name=exists=true');
    });

    it("Test operator NOT EXISTS ('=exists=')", () => {
        expect(new RSQLBuilderMongoDB().notExists('name').toString()).toBe('name=exists=false');
    });
});
