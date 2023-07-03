# tuxcare-documentation


## Install dependencies

```
$ yarn
```

## Start local server

```sh
$ yarn docs:dev
```

For some environments there could be an error:

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

For workaround you can use

```sh
$ export NODE_OPTIONS=--openssl-legacy-provider
```

before starting dev server.


## Static assets

```sh
$ yarn docs:build
```
