# WissBell Blog

ENGLISH | [简体中文](./README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/Coke-Code/standard-readme)

A simple blog project.

This repository contains:

1. Custom error capture page
2. `yaml` parse article information
3. `markdown` parse.
4. `SEO` related auxiliary.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

A programmer wants to build a blog with Next.js and TailwindCSS.

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
git clone https://github.com/Coke-Code/Blog.git
```

## Usage

1. Configure [upstashRedis](https://console.upstash.com/) to store access volume data, configure `.env` to add variables `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
2. **Optional** Configure [beam](https://beamanalytics.io/) to count access volume. Configure `.env` to add variables `BEAM_TOKEN`.

npm:

```sh
# Development debugging
$ npm run dev
# Build package
$ npm run build
# Local start
$ npm run start
# Format code
$ npm run lint
```

yarn：

```sh
# Development debugging
$ yarn dev
# Build package
$ yarn build
# Local start
$ yarn start
# Format code
$ yarn lint
```

pnpm:

```sh
# Development debugging
$ pnpm dev
# Build package
$ pnpm build
# Local start
$ pnpm start
# Format code
$ pnpm lint
```

## Maintainers

[@Coke-Code](https://github.com/Coke-Code).

## Contributing

Feel free to dive in! [Open an issue](https://github.com/Coke-Code/blog/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/Coke-Code/blog/graphs/contributors"><img src="https://opencollective.com/wissbellblog/contributors.svg?width=890&button=false" /></a>

## License

[MIT](LICENSE) © Coke-Code

## Special thanks

[chronark](https://github.com/chronark/chronark.com)
