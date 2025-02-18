/** @see: Reference https://www.npmjs.com/package/rsql-mongodb */

import { RSQLBuilderBase, RSQLBuilderOptions } from 'rsql-query-builder';

type ComparisonOperator = 'regex' | 'notRegex' | 'exists';

/** RSQL Query Builder for MongoDB.
 *
 * @template Selector - The type of the selector. It is used to define the selector names and is a list of strings.
 */
class RSQLBuilderMongoDB<TSelector extends string> extends RSQLBuilderBase<TSelector, ComparisonOperator> {
    constructor() {
        super({
            customComparisonOperators: {
                regex: { rsql: '=regex=' },
                notRegex: { rsql: '=notregex=' },
                exists: { rsql: '=exists=' }
            }
        });
    }

    /** Add a REGEX condition.
     *
     * @param selector - The selector name
     * @param regex - The regex pattern
     * @param options - The regex options
     * @returns The builder instance
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/regex/
     */
    public regex(selector: TSelector, regex: string, options?: string): RSQLBuilderMongoDB<TSelector> {
        super.addComparison(selector, 'regex', regex);
        return this;
    }

    /** Add a NOT REGEX condition.
     *
     * @param selector - The selector name
     * @param regex - The regex pattern
     * @param options - The regex options
     * @returns The builder instance
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/regex/
     */
    public notRegex(selector: TSelector, regex: string, options?: string): RSQLBuilderMongoDB<TSelector> {
        super.addComparison(selector, 'notRegex', regex);
        return this;
    }

    /** Add a LIKE condition.
     *
     * @param selector - The selector name
     * @param regex - The regex pattern
     * @param options - The regex options
     * @returns The builder instance
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/regex/
     */
    public like(selector: TSelector, regex: string, options?: string): RSQLBuilderMongoDB<TSelector> {
        return this.regex(selector, regex, options);
    }

    /** Add a NOT LIKE condition.
     *
     * @param selector - The selector name
     * @param regex - The regex pattern
     * @param options - The regex options
     * @returns The builder instance
     *
     * @see https://www.mongodb.com/docs/manual/reference/operator/query/regex/
     */
    public notLike(selector: TSelector, regex: string, options?: string): RSQLBuilderMongoDB<TSelector> {
        return this.notRegex(selector, regex, options);
    }

    /** Add a SELECTOR EXISTS condition.
     *
     * @param selector - The selector name
     * @returns The builder instance
     */
    public exists(selector: TSelector): RSQLBuilderMongoDB<TSelector> {
        super.addComparison(selector, 'exists', true);
        return this;
    }

    /** Add a SELECTOR NOT EXISTS condition.
     *
     * @param selector - The selector name
     * @returns The builder instance
     */
    public notExists(selector: TSelector): RSQLBuilderMongoDB<TSelector> {
        super.addComparison(selector, 'exists', false);
        return this;
    }
}

export default RSQLBuilderMongoDB;
