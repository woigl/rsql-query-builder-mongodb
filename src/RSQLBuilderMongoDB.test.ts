import { describe, it, expect } from 'vitest';

import { RSQLBuilderMongoDB } from './';

describe('RSQLBuilderMongoDB', () => {
    it("Test operator Regex ('=regex=')", () => {
        expect(new RSQLBuilderMongoDB().regex('name', 'Filip').toString()).toBe('name=regex="Filip"');
    });

    it("Test operator Not Regex ('=notregex=')", () => {
        expect(new RSQLBuilderMongoDB().notRegex('name', 'Filip').toString()).toBe('name=notregex="Filip"');
    });
});
