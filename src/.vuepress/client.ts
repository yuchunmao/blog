import { defineClientConfig } from 'vuepress/client';
import { defineAsyncComponent, onMounted } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));

export default defineClientConfig({
    enhance({ app }) {
        app.component('MyIcon', MyIcon);
    },
    setup() {
        onMounted(() => {
        });
    },
    rootComponents: [
        TopNavBeautify,
        HeroBG,
        HeroHitokoto,
        BlogBeautify,
        BlogBg,
        PreviewImage,
        // ...
    ],
});
