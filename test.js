'use strict'

import test from 'ava'
import m from './'

test(t => {
  const error = t.throws(() => { m(2) }, TypeError)

  t.is(m('bukinoshita/git-url-prettify'), 'https://github.com/bukinoshita/git-url-prettify.git')
  t.is(m('bukinoshita/git-url-prettify', { type: 'ssh' }), 'git@github.com:bukinoshita/git-url-prettify.git')
  t.is(error.message, '`repo` should be a string.')
})
