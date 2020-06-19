module.exports = {
  stories: ['../src/**/*.stories.(jsx|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs/register',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
  ],
}
