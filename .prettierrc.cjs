module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss')
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  trailingComma: 'none'
}
