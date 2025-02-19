# rsql-query-builder-mongodb

Library for building RSQL query strings for MongoDB in TypeScript and JavaScript.

[![NPM Version][npm-version-image]][npm-url]
[![NPM License][npm-license-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

## Installation

```bash
$ npm install rsql-query-builder-mongodb
```

## RSQL Builder for MongoDB Methods

The `RSQLBuilderMongoDB` class provides many methods to build the desired RSQL string.

### Initialization

`constructor(options)` – Initializes a new `RSQLBuilderMongoDB` instance.

### Comparisons Operators (Defining Conditions)

`equal(selector, value)` - Appends a condition `selector == value`.
`notEqual(selector, value)` - Appends a condition `selector != value`.
`lessThan(selector, value)` - Appends a condition `selector =lt= value`.
`lessThanOrEqual(selector, value)` - Appends a condition `selector =le= value`.
`greaterThan(selector, value)` - Appends a condition `selector =gr= value`.
`greaterThanOrEqual(selector, value)` - Appends a condition `selector =ge= value`.
`in(selector, values)` - Appends a condition `selector =in= (values)`.
`notIn(selector, value)` - Appends a condition `selector =out= (values)`.
`like(selector, regex, options)` - Appends a condition `selector =regex= value = options`.
`notLike(selector, regex, options)` - Appends a condition `selector =notregex= value = options`.
`regex(selector, regex, options)` - Appends a condition `selector =regex= value = options`.
`notRegex(selector, regex, options)` - Appends a condition `selector =notregex= value = options`.

### Expression Grouping (Organizing Conditions)

`group(builder)` - Wraps the conditions from another RSQLBuilderMongoDB instance in parentheses for grouping.

### Logical Operators (Combining Conditions)

`and()` – Appends the logical **AND** operator `;`.
`or()` - Appends a logical **OR** operator `,`.

### RSQL Builder Composition (Combining Multiple RSQL Queries)

`concat(builder)` – Appends all expressions from another RSQLBuilderMongoDB instance to the current instance.
`merge(builders)` – Merges multiple RSQLBuilderMongoDB instances into grouped conditions.

### RSQL String Management (Finalizing the Query)

`toString()` - Returns the generated RSQL query string.
`isEmpty()` – Returns true if the RSQLBuilderMongoDB instance has no expressions; otherwise, returns false.
`reset()` – Clears all expressions, resetting the RSQLBuilder instance.

### Static Utilities

`merge(builders)` – Creates a new RSQLBuilderMongoDB instance and merges multiple RSQLBuilderMongoDB instances into grouped conditions.

## Compatibility

This RSQLBuilder for MongoDB is built to be compatible to the following RSQL query resolver: [RSQL MongoDB](https://www.npmjs.com/package/rsql-mongodb)

## License

[MIT](LICENSE)

[npm-version-image]: https://img.shields.io/npm/v/rsql-query-builder-mongodb
[npm-url]: https://npmjs.org/package/rsql-query-builder-mongodb
[npm-license-image]: https://img.shields.io/npm/l/rsql-query-builder-mongodb
[coveralls-image]: https://coveralls.io/repos/github/woigl/rsql-query-builder-mongodb/badge.svg?branch=main
[coveralls-url]: https://coveralls.io/github/woigl/rsql-query-builder-mongodb?branch=main
