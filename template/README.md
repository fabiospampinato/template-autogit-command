# {{_ "startCase" name}}

{{description}}

## Install

```sh
npm install --save {{#scoped}}@{{owner}}/{{/scoped}}{{name}}
```

## Usage

#### Options

This command uses the following options object:

```js
{}
```

#### Configuration

Add this command to your configuration:

```js
const {{_ "camelCase" name}} = require ( '{{#scoped}}@{{owner}}/{{/scoped}}{{name}}' );

module.exports = {
  commands: {
    '{{_ "kebabCase" name}}': {{_ "camelCase" name}} ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit {{_ "kebabCase" name}}
```

## License

MIT © {{author}}
