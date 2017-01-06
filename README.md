I don't remember why, but recently I found myself wanting to use `Symbol.for()`, but rather than have the Symbols stored in a global registry I wanted them grouped into smaller registries.



```js
const registry = Sym.registry('collection');
const symbol = registry.for('name');

const symbol = Sym.registry('collection').for('name');
```
