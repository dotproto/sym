const SymRegistry = new Map()

function Sym(key) {
    if (this instanceof Sym) {
        throw new TypeError('Sym is not a constructor')
    }
    return Symbol(key)
}
// Sym is a Symbol replacement -- as such it needs to have all of Symbol's
// properties and it's prototype chain.
Object.defineProperties(Sym, Object.getOwnPropertyDescriptors(Symbol))

Sym.registry = function registry(key) {
  if (SymRegistry.has(key)) {
    return SymRegistry.get(key)
  }

  const reg = new SymbolRegistry(key)
  SymRegistry.set(key, reg)
  return reg
}


class SymbolRegistry {
  constructor(name) {
    this._name = name
    this._map = new Map()
  }

  for(key) {
    if (this._map.has(key)) {
      return this._map.get(key)
    }
    const sym = Sym(key)
    this._map.set(key, sym)
    return sym
  }

  toString() {
    const length = [...this._map.keys()].length
    return `SymbolRegistry(${this._name})[${length}]`
  }
}

export default Sym
