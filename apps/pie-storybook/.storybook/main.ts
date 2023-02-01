import type { StorybookConfig } from '@storybook/web-components-vite'; // your framework

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|ts)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {}
    },
    docs: {
        autodocs: true
    }
}

export default config;