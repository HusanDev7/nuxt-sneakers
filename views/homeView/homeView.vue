<script setup>
import { ref } from "vue";

const toggleArray = [{ name: 1 }, { name: 2 }, { name: 3 }];
const active = ref(toggleArray[0].name);

const toggle = (name) => {
    active.value = name;
};

const prevItem = () => {
    const currentIndex = toggleArray.findIndex((item) => item.name === active.value);
    const prevIndex = (currentIndex - 1 + toggleArray.length) % toggleArray.length;
    active.value = toggleArray[prevIndex].name;
};

const nextItem = () => {
    const currentIndex = toggleArray.findIndex((item) => item.name === active.value);
    const nextIndex = (currentIndex + 1) % toggleArray.length;
    active.value = toggleArray[nextIndex].name;
};

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.mount("#app");

AOS.init({
    duration: 1000, // По умолчанию 400
    easing: "ease-in-out", // По умолчанию 'ease'
});
</script>

<template>
    <div class="sneakers__box">
        <div class="sneakers__box-mini">
            <h3 class="sneakers__box-main__text" data-aos="fade-up" data-aos-duration="3000">SUMMER</h3>
            <span class="sneakers__box-circle"></span>
            <h1 class="sneakers__box-main__title">COLLECTIONS</h1>
            <img class="sneakers__box-sneakers" src="@/assets/img/Snickers.png" alt="" />

            <div class="sneakers__box-btns">
                <div class="sneakers__box-btns__btn"><button>Buy now</button></div>
                <div class="sneakers__box-btns__btn-2">
                    <button>Add to cart <img src="@/assets/img/btn-basket.svg" alt="" /></button>
                </div>
            </div>

            <div class="sneakers__box-swipper">
                <button class="sneakers__box-swipper-left" @click="prevItem">
                    <img src="@/assets/img/left.svg" alt="Left Arrow" />
                </button>
                <div class="sneakers__box-swipper-box">
                    <span v-for="item in toggleArray" :key="item.name" @click="toggle(item.name)" :class="{ active: active === item.name }">
                        {{ item.name }}
                    </span>
                </div>
                <button class="sneakers__box-swipper-right" @click="nextItem">
                    <img src="@/assets/img/right.svg" alt="Right Arrow" />
                </button>
            </div>
        </div>
        <div class="sneakers__box-colors">
            <span class="sneakers__box-red"></span>
            <span class="sneakers__box-blue"></span>
            <span class="sneakers__box-color"></span>
        </div>
    </div>
</template>
