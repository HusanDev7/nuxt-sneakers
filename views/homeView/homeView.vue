<script setup>
import { ref, computed } from 'vue';
import SnickersBlue from '@/assets/img/Snickers-blue.png';
import SnickersRed from '@/assets/img/Snickers-red.png';
import Snickers from '@/assets/img/Snickers.png';

const toggleArray = [
  { name: 1, image: Snickers, color: 'default', background: '#fe8d07' },
  { name: 2, image: SnickersBlue, color: 'blue', background: '#0779fe' },
  { name: 3, image: SnickersRed, color: 'red', background: '#e90125' }
];

const active = ref(toggleArray[0].name);
const activeImage = ref(toggleArray[0].image);
const activeColor = ref(toggleArray[0].color);
const activeBackground = ref(toggleArray[0].background);

const toggle = (name) => {
  const item = toggleArray.find(item => item.name === name);
  if (item) {
    active.value = name;
    activeImage.value = item.image;
    activeColor.value = item.color;
    activeBackground.value = item.background;
  }
};

const prevItem = () => {
  const currentIndex = toggleArray.findIndex(item => item.name === active.value);
  const prevIndex = (currentIndex - 1 + toggleArray.length) % toggleArray.length;
  const item = toggleArray[prevIndex];
  active.value = item.name;
  activeImage.value = item.image;
  activeColor.value = item.color;
  activeBackground.value = item.background;
};

const nextItem = () => {
  const currentIndex = toggleArray.findIndex(item => item.name === active.value);
  const nextIndex = (currentIndex + 1) % toggleArray.length;
  const item = toggleArray[nextIndex];
  active.value = item.name;
  activeImage.value = item.image;
  activeColor.value = item.color;
  activeBackground.value = item.background;
};

// Computed properties for dynamic styles
const circleBackground = computed(() => {
  switch (activeColor.value) {
    case 'blue':
      return 'linear-gradient(180deg, #0779fe 0%, rgba(99, 192, 244, 0) 77.08%)';
    case 'red':
      return 'linear-gradient(180deg, #e90125 0%, rgba(244, 99, 121, 0) 56.77%)';
    default:
      return 'linear-gradient(180deg, #fe8d07 0%, rgba(254, 141, 7, 0) 68.75%)';
  }
});

const buttonColor = computed(() => {
  switch (activeColor.value) {
    case 'blue':
      return '#0779fe';
    case 'red':
      return '#e90125';
    default:
      return '#fe8d07';
  }
});

const textColor = computed(() => {
  switch (activeColor.value) {
    case 'blue':
      return '#0779fe'; 
    case 'red':
      return '#e90125'; 
    default:
      return '#fe8d07';
  }
});

const logoBackground = computed(() => {
  switch (activeColor.value) {
    case 'blue':
      return '#0779fe';
    case 'red':
      return '#e90125';
    default:
      return '#fe8d07';
  }
});


</script>

<template>
  <div class="sneakers__box">
    <div class="sneakers__box-mini">
      <h3 class="sneakers__box-main__text" 
          v-motion-slide-visible-bottom 
          :duration="1000" 
          :delay="200"
          :style="{ color: textColor }">SUMMER</h3>
      <span class="sneakers__box-circle" 
            :style="{ background: circleBackground }"></span>
      <h1 class="sneakers__box-main__title" 
          v-motion-slide-visible-bottom 
          :duration="1500" 
          :delay="100">COLLECTIONS</h1>
      <img class="sneakers__box-sneakers" 
           v-motion-roll-visible-once-top 
           :duration="1000" 
           :delay="100" 
           :src="activeImage" 
           alt="Sneakers" />

      <div class="sneakers__box-btns">
        <div class="sneakers__box-btns__btn">
          <button v-motion-fade-visible-once 
                  :duration="700" 
                  :delay="100" 
                  :style="{ background: buttonColor }">Buy now</button>
        </div>
        <div class="sneakers__box-btns__btn-2">
          <button v-motion-fade-visible-once 
                  :duration="700" 
                  :delay="100">Add to cart <img src="@/assets/img/btn-basket.svg" alt="" /></button>
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
      <span class="sneakers__box-red" :style="{ backgroundColor: activeColor === 'red' ? '#e90125' : 'transparent' }"></span>
      <span class="sneakers__box-blue" :style="{ backgroundColor: activeColor === 'blue' ? '#0779fe' : 'transparent' }"></span>
      <span class="sneakers__box-color" :style="{ backgroundColor: activeColor === 'default' ? '#fe8d07' : 'transparent' }"></span>
    </div>
  </div>
</template>