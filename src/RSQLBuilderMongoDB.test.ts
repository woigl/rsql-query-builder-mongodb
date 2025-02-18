import { describe, it, expect } from 'vitest';

import { MongoRegexOptions, RSQLBuilderMongoDB } from './';

describe('RSQLBuilderMongoDB', () => {
    it("Test operator REGEX ('=regex=')", () => {
        expect(new RSQLBuilderMongoDB().regex('name', 'Fil*').toString()).toBe('name=regex="Fil*"');
        expect(new RSQLBuilderMongoDB().regex('name', 'Fil*', 'si').toString()).toBe('name=regex="Fil*"=si');
        expect(
            new RSQLBuilderMongoDB()
                .regex('name', 'Fil*', [
                    MongoRegexOptions.DOTALL,
                    MongoRegexOptions.CASE_INSENSITIVE,
                    MongoRegexOptions.MULTILINE,
                    MongoRegexOptions.EXTENDED
                ])
                .toString()
        ).toBe('name=regex="Fil*"=simx');
    });

    it("Test operator NOT REGEX ('=notregex=')", () => {
        expect(new RSQLBuilderMongoDB().notRegex('name', 'Filip').toString()).toBe('name=notregex="Filip"');
        expect(new RSQLBuilderMongoDB().notRegex('name', 'Fil*', 'si').toString()).toBe('name=notregex="Fil*"=si');
        expect(
            new RSQLBuilderMongoDB()
                .notRegex('name', 'Fil*', [
                    MongoRegexOptions.DOTALL,
                    MongoRegexOptions.CASE_INSENSITIVE,
                    MongoRegexOptions.MULTILINE,
                    MongoRegexOptions.EXTENDED
                ])
                .toString()
        ).toBe('name=notregex="Fil*"=simx');
    });

    it("Test operator LIKE ('=regex=')", () => {
        expect(new RSQLBuilderMongoDB().like('name', 'Fil*').toString()).toBe('name=regex="Fil*"');
        expect(new RSQLBuilderMongoDB().like('name', 'Fil*', 'si').toString()).toBe('name=regex="Fil*"=si');
        expect(
            new RSQLBuilderMongoDB()
                .like('name', 'Fil*', [
                    MongoRegexOptions.DOTALL,
                    MongoRegexOptions.CASE_INSENSITIVE,
                    MongoRegexOptions.MULTILINE,
                    MongoRegexOptions.EXTENDED
                ])
                .toString()
        ).toBe('name=regex="Fil*"=simx');
    });

    it("Test operator LIKE ('=notregex=')", () => {
        expect(new RSQLBuilderMongoDB().notLike('name', 'Fil*').toString()).toBe('name=notregex="Fil*"');
        expect(new RSQLBuilderMongoDB().notLike('name', 'Fil*', 'si').toString()).toBe('name=notregex="Fil*"=si');
        expect(
            new RSQLBuilderMongoDB()
                .notLike('name', 'Fil*', [
                    MongoRegexOptions.DOTALL,
                    MongoRegexOptions.CASE_INSENSITIVE,
                    MongoRegexOptions.MULTILINE,
                    MongoRegexOptions.EXTENDED
                ])
                .toString()
        ).toBe('name=notregex="Fil*"=simx');
    });

    it("Test operator EXISTS ('=exists=')", () => {
        expect(new RSQLBuilderMongoDB().exists('name').toString()).toBe('name=exists=true');
    });

    it("Test operator NOT EXISTS ('=exists=')", () => {
        expect(new RSQLBuilderMongoDB().notExists('name').toString()).toBe('name=exists=false');
    });
});
