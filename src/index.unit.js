const tap = require('tap')

tap.test('Sym', t => {
  const Sym = require('..')

  // Basic existance checks
  t.ok(Sym)
  t.type(Sym, 'function')
  t.throws(function() { new Sym() }, /is not a constructor/)

  // Verify it has all the properties of Symbol
  t.test(`has Symbol's properties`, t => {
    const descriptors = Object.getOwnPropertyDescriptors(Symbol)

    for (let prop in descriptors) {
      t.equal(Sym[prop], Symbol[prop], `same .${prop}`)
    }

    t.end()
  })

  // New features!
  t.test('.registry', t => {
    t.type(Sym.registry, 'function')

    t.equal(Sym.registry('reg'), Sym.registry('reg'), 'requesting the same name gives the same registry')
    t.notEqual(Sym.registry(1), Sym.registry('1'), 'we don\'t cast names to strings')


    t.test('.for', t => {
      t.equal(Sym.registry('reg').for('demo'), Sym.registry('reg').for('demo'), 'same name in registry gives same symbol')
      t.notEqual(Sym.registry('reg').for('demo'), Sym.registry('miss').for('demo'), 'same name in different registry gives different symbol')

      t.end()
    })

    t.test('.toString', t => {
      const reg = Sym.registry('toString-reg')
      t.equal(reg.toString(), 'SymbolRegistry(toString-reg)[0]')

      reg.for('first')
      reg.for('second')
      t.equal(reg.toString(), 'SymbolRegistry(toString-reg)[2]')

      t.end()
    })

    t.end()
  })

  t.end()
})
