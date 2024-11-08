<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import { useRouter } from "vue-router";


// 设置背景图片
const setBackgroundImage = () => {
    const maskElm = document.querySelector('.vp-blog-mask') as HTMLElement
    if (!maskElm) {
        return;
    }
    const heroTitle = document.querySelector('.vp-blog-hero-title');
    if (!heroTitle) {
        return;
    }
    const imageUrl = 'url(https://cn.bing.com/th?id=OHR.LiDong2024_ZH-CN9944723194_1920x1080.webp)'
    // 填充背景
    maskElm.style.background = '';
    maskElm.style.backgroundImage = imageUrl
    const footerElm = document.querySelector('.vp-footer-wrapper') as HTMLElement;
    if (footerElm) {
        footerElm.style.backgroundImage = imageUrl
    }
};


onMounted(() => {
    setBackgroundImage()
    const router = useRouter();
    router.afterEach((to) => {
        nextTick(() => {
            if (to.fullPath === '/') {
                setBackgroundImage()
            }
        })
    });
});
</script>

<template>
    <ClientOnly>
        <div class="none">Bing壁纸</div>
    </ClientOnly>
</template>

<style lang="scss">

.vp-blog-hero-title {
    font-size: 3.8rem;
    font-family: '华文行楷';
    cursor: pointer;
}


// 底部背景
.vp-footer-wrapper {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .vp-copyright,
    .vp-footer {
        color: #fff;
        z-index: 5;
        opacity: 0.8;
    }
}

.vp-blog-hero .slide-down-button {
    bottom: 4.75rem;
}

.vp-blog-hero.fullscreen .vp-blog-mask {
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: top;
    background-position-x: center;
    background-attachment: fixed;
}

.vp-blog-hero.fullscreen {
    z-index: 5;
    height: 100vh !important;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
}

.vp-footer-wrapper {
    border-top: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: top;
    background-position-x: center;
    background-attachment: fixed;
}

[data-theme='light'] {
    .vp-blog-hero .vp-blog-mask::after {
        background: #000;
        opacity: 0.3 !important;
    }

    .vp-footer-wrapper {
        &::before {
            background: #000;
            opacity: 0.3;
        }
    }
}

[data-theme='dark'] {
    .vp-blog-hero .vp-blog-mask::after {
        background: #000;
        opacity: 0.7 !important;
    }

    .vp-footer-wrapper {
        &::before {
            background: #000;
            opacity: 0.7;
        }
    }
}
</style>
