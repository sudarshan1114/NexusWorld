// svgo.config.js
module.exports = {
  plugins: [
    // 1. Load the default preset
    {
      name: 'preset-default',
      params: {
        overrides: {
          // If you see errors about other plugins not being in preset-default,
          // move them out like we did for removeViewBox below.
          removeUnknownsAndDefaults: false,
        },
      },
    },
    
    // 2. Configure removeViewBox separately (OUTSIDE the preset)
    // We set active: false because we want to KEEP the viewBox for scaling.
    {
      name: 'removeViewBox',
      active: false,
    },

    // 3. Remove inline styles to prevent conflicts with your CSS
    {
      name: 'removeAttrs',
      params: {
        attrs: '(style)',
      },
    },
  ],
};