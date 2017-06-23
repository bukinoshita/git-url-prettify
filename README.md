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

### gitUrlPrettify(repo, { type })

returns a `string`.

#### repo

Type: `string`<br/>
Required

#### type

Type: `string`<br/>
Default: `https`<br/>
Options: `https` or `ssh`

## Related

- [is-github-repo](https://github.com/bukinoshita/is-github-repo) — Checks if string is a git repository
- [git-url-uglify](https://github.com/bukinoshita/git-url-uglify) — Uglify git url


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
