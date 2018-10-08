
/* {{_ "upperCase" name}} */

const defaultOptions = {};

function {{_ "camelCase" name}} ( options? ) {

  options = Object.assign ( {}, defaultOptions, options );

  return {
    description: '{{description}}',
    plugins: []
  };

}

/* EXPORT */

export = Object.assign ( {{_ "camelCase" name}}, { default: {{_ "camelCase" name}} } );
