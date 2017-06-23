'use strict'

module.exports = (
  repo,
  { type = 'https' } = {}
) => {
  if (typeof repo !== 'string') {
    throw new TypeError('`repo` should be a string.')
  }

  const git = repo.split('/')
  const owner = git[0]
  const repository = git[1]

  if (type === 'ssh') {
    return `git@github.com:${owner}/${repository}.git`
  }

  return `https://github.com/${owner}/${repository}.git`
}
