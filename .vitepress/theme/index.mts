import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ParamDesc from '../components/ParamDesc.vue';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('ParamDesc', ParamDesc);
    }
} satisfies Theme;