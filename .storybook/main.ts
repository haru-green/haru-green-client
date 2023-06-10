import path from "path";

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  async webpackFinal(config) {
    if (config.module?.rules) {
      config.module.rules.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      });
    }
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      }
    }

    return config;
  },
  docs: {
    autodocs: true,
  },
};
