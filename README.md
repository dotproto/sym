For some reason I recently found myself wanting to use something like `Symbol.for()`, but within a well-defined namespace or symbol registry. Probably to load multiple versions of a library on a single page.

Anyway, this lib extends Symbol to add support for registries. To create a new registry, call `var myRegistry = Sym.registry('REGISTRY-NAME')`.


# Examples

## Working with a registry

```js
// You can assign your registry to a var to ``use`` Symbols
const registry = Sym.registry('collection');
const s1 = registry.for('name');

// Or using a fluent API
const s2 = Sym.registry('collection').for('name');

s1 === s2 // true
```

NOTE: Sym registries ***are not*** cross-realm. Practically speaking, this means you can't share a registry across windows or frames in a browser.


## `Sym` as a `Symbol` replacement

```js
const s1 = Sym.for('foobar')
const s2 = Symbol.for('foobar')

s1 === s2 // true

const s3 = Sym('test')
typeof s3 === 'symbol' // true
```
