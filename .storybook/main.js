module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
  ],
}
