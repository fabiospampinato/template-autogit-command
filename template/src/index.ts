
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

export default {{_ "camelCase" name}};
