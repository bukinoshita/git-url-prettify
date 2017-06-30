# git-url-prettify [![Build Status](https://travis-ci.org/bukinoshita/git-url-prettify.svg?branch=master)](https://travis-ci.org/bukinoshita/git-url-prettify)

> Prettify git url

## Install

```
$ npm install --save git-url-prettify
```

## Usage
```js
const gitUrlPrettify = require('git-url-prettify')

gitUrlPrettify('bukinoshita/git-url-prettify')
// => https://github.com/bukinoshita/git-url-prettify.git
```

## API

### gitUrlPrettify(repo, [options])

returns a `string`.

#### repo

Type: `string`<br/>
Required

#### options

Type: `object`


##### type

Type: `string`<br/>
Default: `https`<br/>
Options: `https` or `ssh`

## Related

- [git-synced](https://github.com/bukinoshita/git-synced) — 🎐 Keep a fork up to date
- [del-git-index](https://github.com/bukinoshita/del-git-index) — Safely delete index.lock of the current project
- [repo-exist](https://github.com/bukinoshita/repo-exist) — Checks if GitHub repository exist
- [gopn](https://github.com/bukinoshita/gopn) — Open GitHub repositories
- [is-github-repo](https://github.com/bukinoshita/is-github-repo) — Checks if string is a git repository
- [git-url-uglify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
