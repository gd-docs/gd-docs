import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ParamDesc from '../components/ParamDesc.vue';
import ParamInfo from '../components/ParamInfo.vue';
import ParamCond from '../components/ParamCond.vue';
import ParamInfoGroup from '../components/ParamInfoGroup.vue';
import ParamInfoFooter from '../components/ParamInfoFooter.vue';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('ParamDesc', ParamDesc);
        app.component('ParamInfo', ParamInfo);
        app.component('ParamCond', ParamCond);
        app.component('ParamInfoGroup', ParamInfoGroup);
        app.component('ParamInfoFooter', ParamInfoFooter);
    }
} satisfies Theme;
