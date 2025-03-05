const config = {
  semi: false,
  singleQuote: true,
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 150,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss', '@prettier/plugin-php', 'prettier-plugin-blade'],
  tailwindFunctions: ['clsx', 'cn'],
  tabWidth: 2,
  overrides: [
    {
      files: '**/*.yml',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*.blade.php'],
      options: {
        parser: 'blade',
      },
    },
  ],
}

export default config
