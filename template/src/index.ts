
/* {{_ "upperCase" name}} */

const defaultOptions = {};

function {{_ "camelCase" name}} ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return {
    description: '{{description}}',
    plugins: []
  };

}

/* EXPORT */

export = Object.assign ( {{_ "camelCase" name}}, { default: {{_ "camelCase" name}} } );
